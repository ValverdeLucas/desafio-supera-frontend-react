export interface UserType {
    id: number;
    nome: string;
    email: string;
    perfil: Perfil;
    telefone: string;
    idade: number;
}

export interface UserAPI {
    users?: UserType[];
    pagination?: Pagination
}

export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export enum Perfil {
    ADMIN = 'ADMIN',
    USER = 'USER'
}