import { FinalizeGoogleLogin } from '@/lib/api/fetch-utils';
import { useAppDispatch } from '@/lib/redux/redux-hooks';
import { hideLoader, showLoader } from '@/lib/redux/store/uiSlice';
import { GoogleLogin } from '@react-oauth/google';
import type { CredentialResponse } from '@react-oauth/google';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

export const GoogleSignIn = () => {
    const dispatch = useAppDispatch();

    const handleGoogleSignIn = useCallback(async (response: CredentialResponse) => {
        
    }, [dispatch]);

    const handleGoogleError = useCallback(() => {
        console.log('Google login canceled or failed');
        toast.info('Google login canceled');
        dispatch(hideLoader());
    }, [dispatch]);

    if (!process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID) {
        console.error('Google Client ID is missing');
        return <div>Google login is unavailable</div>;
    }

    return (
        <GoogleLogin
            onSuccess={handleGoogleSignIn}
            onError={handleGoogleError}
            click_listener={() => {
                dispatch(showLoader());
            }}
            useOneTap={false}
            theme="filled_blue"
            shape="pill"
            size="large"
        />
    );
};
