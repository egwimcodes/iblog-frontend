import { FinalizeGoogleLogin } from '@/lib/services/api/fetch-utils';
import { GoogleLogin } from '@react-oauth/google';
import type { CredentialResponse } from '@react-oauth/google';
import { useCallback } from 'react';
import { toast } from 'sonner'; // or your preferred toast library

export const GoogleSignIn = () => {
    const handleGoogleSignIn = useCallback(async (response: CredentialResponse) => {
        try {
            if (!response.credential) {
                throw new Error('No Google ID token received');
            }

            const idToken = response.credential;
            console.log('Google ID Token:', idToken);

            const userData = await FinalizeGoogleLogin({ token: idToken });
            console.log('User Data:', userData);

            toast.success('Signed in with Google');
        } catch (error) {
            console.error('Google login failed:', error);
            toast.error('Google login failed. Please try again.');
        }
    }, []);

    if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
        console.error('Google Client ID is missing');
        return <div>Google login is unavailable</div>;
    }

    return (

        <GoogleLogin
            onSuccess={handleGoogleSignIn}
            onError={() => toast.error('Google login failed')}
            useOneTap={true} // Enable One Tap
            theme="filled_blue" // Optional: "outline" or "filled_blue"
            shape="pill" // Optional: "rectangular" or "pill"
            size="large" // Optional: "small", "medium", or "large"
        />

    );
};