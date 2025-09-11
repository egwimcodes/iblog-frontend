// components/GlobalLoader.tsx
import React from 'react';
import styles from '../../styles/BallsLoader.module.css';
import { useLoaderState } from '@/lib/contexts/LoadingContext';

interface GlobalLoaderProps {
    color?: string;
}

const GlobalLoader: React.FC<GlobalLoaderProps> = () => {
    const showLoader = useLoaderState();
    
    if (!showLoader) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.balls}>
                <div style={{ backgroundColor: "#FA12D3FF" }}></div>
                <div style={{ backgroundColor: "#FA12D3FF" }}></div>
                <div style={{ backgroundColor: "#FA12D3FF" }}></div>
            </div>
        </div>
    );
};

export default GlobalLoader;
