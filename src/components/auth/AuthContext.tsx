'use client';

import React from 'react';
import { useRouter } from "next/navigation";
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';

import { firebaseApp } from '@/modules/firebase/config';
import LoadingPage from '../loading/LoadingPage';

type AuthContextProviderProps = {
    children: React.ReactNode;
};

type AuthContextProps = {
    user: User | null;
}

const auth = getAuth(firebaseApp);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);

    const router = useRouter()

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });


        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <LoadingPage /> : children}
        </AuthContext.Provider>
    );
};

export const AuthContext = React.createContext<AuthContextProps>({user: null});

export const useAuthContext = () => React.useContext(AuthContext);

