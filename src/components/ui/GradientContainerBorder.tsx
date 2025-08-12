export default function GradientContainerBorder() {
    return (
        <div className="p-[1.5px] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
            <div className="bg-white dark:bg-black p-6 rounded-[calc(0.75rem-2px)] z-10">
                <p className="text-black dark:text-white">Gradient border fixed!</p>
                <li className=""> Hello </li>
            </div>
        </div>
    );
}