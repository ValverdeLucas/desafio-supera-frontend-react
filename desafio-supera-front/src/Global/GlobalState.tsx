// src/Global/GlobalState.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../Services/Api';
import { BASE_URL } from '../Constants/BASE_URL';
import { UserType, Perfil } from './Types/Types';
import { useToast } from './ToastContext';

interface GlobalState {
    userData: UserType[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    changePage: (newPage: number) => void;
    updateUsers: () => void;
    deleteUser: (userId: number) => void;
    filterUsers: (filterType: string, filterValue: string) => void;
    clearSearch: () => void;
}

const perfilMap = {
    [Perfil.ADMIN]: 'Administrador',
    [Perfil.USER]: 'Usuário'
} as const;

function getPerfilDisplay(perfil: Perfil): string {
    return perfilMap[perfil] || 'Perfil desconhecido';
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<GlobalState>({
        userData: [],
        loading: false,
        error: null,
        currentPage: 1,
        totalPages: 1,
        changePage: () => { },
        updateUsers: (): void => { },
        deleteUser: (userId: number) => { },
        filterUsers: (filterType: string, filterValue: string): void => { },
        clearSearch: (): void => { }
    });

    const { notify } = useToast();

    useEffect(() => {
        fetchUsers(state.currentPage);
    }, []);

    const fetchUsers = async (pageNumber: number) => {
        setState(prevState => ({ ...prevState, loading: true }));
        try {

            if (state.currentPage > state.totalPages) {
                const { data } = await api.get<any>(`${BASE_URL}/users/page=${pageNumber}`);
                const convertedData = (data.users || []).map((user: UserType) => ({
                    ...user,
                    perfil: getPerfilDisplay(user.perfil)
                }));

                setState(prevState => ({
                    ...prevState,
                    userData: convertedData,
                    loading: false,
                    currentPage: pageNumber,
                    totalPages: data.pagination?.totalPages ?? 0,
                }));

            } else {

                const { data } = await api.get<any>(`${BASE_URL}/users/page=${pageNumber}`);
                console.log(data)
                const convertedData = (data.users || []).map((user: UserType) => ({
                    ...user,
                    perfil: getPerfilDisplay(user.perfil)
                }));

                setState(prevState => ({
                    ...prevState,
                    userData: convertedData,
                    loading: false,
                    currentPage: pageNumber,
                    totalPages: data.pagination?.totalPages ?? 0,
                }));
            }

        } catch (err: any) {
            setState(prevState => ({ ...prevState, error: err.message, loading: false }));

            if (err.response && err.response.status === 404) {
                if (state.currentPage > 1) {
                    changePage(state.currentPage - 1);
                } else {
                    setState(prevState => ({ ...prevState, userData: [] }));
                }
            }
        }
    };

    const filterUsers = async (filterType: string, filterValue: string) => {
        setState(prevState => ({ ...prevState, loading: true }));
        try {
            const params = new URLSearchParams();
            params.append('filterType', filterType);
            params.append('filterValue', filterValue);
            params.append('page', '1');

            const response = await api.get(`${BASE_URL}/users/search`, { params });

            console.log(response.data)

            const convertedData = (response.data.users || []).map((user: UserType) => ({
                ...user,
                perfil: getPerfilDisplay(user.perfil)
            }));

            setState(prevState => ({
                ...prevState,
                userData: convertedData,
                loading: false,
                currentPage: response.data.pagination.currentPage,
                totalPages: response.data.pagination.totalPages,
            }));
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            setState(prevState => ({ ...prevState, error: 'Erro ao buscar usuários', loading: false }));
        }
    };

    const clearSearch = () => {
        fetchUsers(1);
    };

    const deleteUser = async (userId: number) => {
        try {
            await api.delete(`${BASE_URL}/users/${userId}`);
            updateUsers();
            if (state.currentPage > state.totalPages) {
                changePage(state.currentPage - 1);
            }
        } catch (error) {
            notify('Erro ao deletar usuário!', 'error');
            console.error('Erro ao deletar usuário:', error);
            setState(prevState => ({ ...prevState, error: 'Erro ao deletar usuário' }));
        }
    };

    const changePage = (newPage: number) => {
        if (newPage >= 1 && newPage <= state.totalPages) {
            fetchUsers(newPage);
        } else if (newPage < 1) {
            fetchUsers(1);
        } else if (newPage > state.totalPages) {
            fetchUsers(state.totalPages);
        }
    };

    const updateUsers = async () => {
        const { data } = await api.get<any>(`${BASE_URL}/users/page=1`);
        if (state.currentPage > data.pagination.totalPages) {
            await fetchUsers(data.pagination.totalPages);
        } else {
            await fetchUsers(state.currentPage);
        }
    };

    return (
        <GlobalContext.Provider value={{
            ...state,
            userData: state.userData,
            changePage: (newPage: number) => changePage(newPage), updateUsers: () => updateUsers(),
            deleteUser: (userId: number) => deleteUser(userId),
            filterUsers: (filterType: string, filterValue: string) => filterUsers(filterType, filterValue),
            clearSearch: () => clearSearch(),
        }}>
            {children}
        </GlobalContext.Provider>
    );
};


export const useGlobalState = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalState precisa ser usado dentro de um GlobalProvider');
    }
    return context;
};