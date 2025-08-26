// components/GlobalLoader.tsx
import React from 'react';
import styles from '../../styles/BallsLoader.module.css';

interface GlobalLoaderProps {
    show: boolean;
    color?: string;
}

const GlobalLoader: React.FC<GlobalLoaderProps> = ({ show, color }) => {
    if (!show) return null; // don't render if hidden

    return (
        <div className={styles.overlay}>
            <div className={styles.balls}>
                <div style={{ backgroundColor: color }}></div>
                <div style={{ backgroundColor: color }}></div>
                <div style={{ backgroundColor: color }}></div>
            </div>
        </div>
    );
};

export default GlobalLoader;
