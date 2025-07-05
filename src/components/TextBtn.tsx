type TextBtnProps = {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
};

export default function TextBtn({
    label,
    onClick,
    disabled = false,
    className = "",
    children,
}: TextBtnProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`max-w-contain h-10 p-[1px] group ${className}`}
            aria-label={label}
        >
            <div className={`
                transition-all duration-300 
                h-full rounded-[calc(3rem-20px)] 
                flex items-center justify-center
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}
            `}>{
                    label ? (<p className={`
                        text-brand text-opacity-75 
                        dark:text-background-light 
                        font-inter font-medium
                        group-hover:text-opacity-100
                        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                    `}>
                        {label}
                    </p>) : children
                }

            </div>
        </button>
    );
}