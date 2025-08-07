'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/config';

interface AuthContextType {
    user: User | null;
    loading: boolean;
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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signInWithGoogle = async () => {
        const { signInWithGoogle: firebaseSignInWithGoogle } = await import('@/firebase/auth');
        const cred = await firebaseSignInWithGoogle();
        const user = cred.user;
        const idToken = await user.getIdToken(); //to verify the authentcity of the user

        try {
            // Call secure API route to create user in Firestore (server-side)
            await fetch('/api/create-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${idToken}` },
            });
        } catch (error) {
            console.error('Failed to create user in Firestore:', error);
        }
    };

    const signOut = async () => {
        const { signOut: firebaseSignOut } = await import('@/firebase/auth');
        await firebaseSignOut();
    };

    const value: AuthContextType = {
        user,
        loading,
        signInWithGoogle,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
