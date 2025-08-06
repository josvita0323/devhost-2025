'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    signUp: (email: string, password: string, displayName?: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }: { children: ReactNode; }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signUp = async (email: string, password: string, displayName?: string) => {
        const { signUp: firebaseSignUp } = await import('@/firebase/auth');
        await firebaseSignUp(email, password, displayName);
    };

    const signIn = async (email: string, password: string) => {
        const { signIn: firebaseSignIn } = await import('@/firebase/auth');
        await firebaseSignIn(email, password);
    };

    const signInWithGoogle = async () => {
        const { signInWithGoogle: firebaseSignInWithGoogle } = await import('@/firebase/auth');
        await firebaseSignInWithGoogle();
    };

    const signOut = async () => {
        const { signOut: firebaseSignOut } = await import('@/firebase/auth');
        await firebaseSignOut();
    };

    const value: AuthContextType = {
        user,
        loading,
        signUp,
        signIn,
        signInWithGoogle,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
