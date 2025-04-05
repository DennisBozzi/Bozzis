import { useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabaseInstance } from '@/lib/supabase';
import { dismissAllToasts, warningToast } from '@/lib/toast';

const supabase = supabaseInstance();

function useAuth() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const { data: { subscription } } =
            supabase.auth.onAuthStateChange((_event, session) => {
                setSession(session)
            })

        return () => {
            if (subscription) {
                subscription.unsubscribe()
            }
        }
    }, [])

    if (session?.user)
        if (!isAuthenticated(session))
            return null;

    return session
}

async function signOut() {
    await supabase.auth.signOut()
}

async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if (error)
        warningToast("Login failure", error.message)

    return { data, error };
}

async function signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });
    return { data, error }
}

async function signInGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
    return { data, error };
}

async function signInGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
    return { data, error };
}

function isAuthenticated(session: any) {

    var emails: string[] = [
        "dennisbozzii@gmail.com",
        "rafaelamenegardo@gmail.com"
    ];

    var email: string = session.user.email;

    if (!emails.includes(email)) {
        dismissAllToasts()
        warningToast("Failure login", "user not allowed");
        signOut()
        return false
    }

    return true
}

export { useAuth, signOut, signIn, signUp, signInGoogle, signInGitHub }