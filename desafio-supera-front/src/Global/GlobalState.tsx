// src/Global/GlobalState.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../Services/Api';
import { BASE_URL } from '../Constants/BASE_URL';
import { UserType, Perfil } from './Types/Types';

interface GlobalState {
    userData: UserType[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    changePage: (newPage: number) => void;
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
    });

    useEffect(() => {
        fetchUsers(state.currentPage);
    }, []);

    const fetchUsers = async (pageNumber: number) => {
        setState(prevState => ({ ...prevState, loading: true }));
        try {
            const { data } = await api.get<any>(`${BASE_URL}/users/page=${pageNumber}`);

            console.log(data)

            const convertedData = (data.users || []).map((user: UserType) => ({
                ...user,
                perfil: getPerfilDisplay(user.perfil)
            }));

            console.log(convertedData)

            setState(prevState => ({
                ...prevState,
                userData: convertedData,
                loading: false,
                currentPage: pageNumber,
                totalPages: data.pagination?.totalPages ?? 0,
            }));
        } catch (err: any) {
            setState(prevState => ({ ...prevState, error: err.message, loading: false }));
        }
    };

    const changePage = (newPage: number) => {
        if (newPage >= 1 && newPage <= state.totalPages) {
            fetchUsers(newPage);
        }
    };


    return (
        <GlobalContext.Provider value={{
            ...state,
            userData: state.userData,
            changePage: (newPage: number) => changePage(newPage),
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