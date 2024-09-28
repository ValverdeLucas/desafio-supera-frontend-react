import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastType } from './Types/Types';

interface ToastContextType {
    notify: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const notify = (message: string, type: ToastType) => {

        switch (type) {
            case 'success':
                toast.success(message, {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                });
                break;
            case 'error':
                toast.error(message, {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                });
                break;
            case 'warning':
                toast.warn(message, {
                    position: "bottom-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                });
                break
        }
    };

    return (
        <ToastContext.Provider value={{ notify }}>
            {children}
            <ToastContainer limit={3} />
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast deve ser usado dentro de um ToastProvider');
    }
    return context;
};