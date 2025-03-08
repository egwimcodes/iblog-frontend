import React from 'react';

interface CategoryBTNProps {
    title: string;
    onClick?: () => void;
    className?: string;
}

const CategoryBTN = ({ title, onClick, className }: CategoryBTNProps) => {
    return (
        <button
            className={`rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition ${className || ''}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default CategoryBTN;
