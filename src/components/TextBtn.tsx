type TextBtnProps = {
    label: string;
};

export default function TextBtn({ label }: TextBtnProps) {
    return (
        <div className="max-w-contain h-10 p-[1px]">
            <div className="transition-colors duration-500 h-full rounded-[calc(3rem-20px)] flex items-center">
                <p className="text-brand text-opacity-75 dark:text-background-light font-inter font-medium">
                    {label} 
                </p>
            </div>
        </div>
    );
}
