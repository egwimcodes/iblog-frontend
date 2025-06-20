import GradientImageBorder from "./GradientImageBorder";

export default function Bin() {
    return (<div className="article-card h-64 bg-red-500 flex flex-col justify-end relative">
        <div className="author-card absolute top-0">
            <div className="p-[1.5px] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                <div className="bg-white dark:bg-black p-6 rounded-[calc(0.75rem-2px)] z-10">
                    <p className="text-black dark:text-white">Gradient border fixed!</p>
                </div>
            </div>
        </div>
        <div className="content-card absolute top-0">
            <div className="p-[1.5px] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                <div className="bg-white dark:bg-black p-6 rounded-[calc(0.75rem-2px)] z-10">
                    <p className="text-black dark:text-white">Gradient border fixed!</p>
                </div>
            </div>
        </div>
        <div className="p-[1.5px] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
            <div className="bg-white dark:bg-black p-6 rounded-[calc(0.75rem-2px)] z-10">
                <p className="text-black dark:text-white">Gradient border fixed!</p>
                <li className=""> Hello </li>
            </div>
        </div>

 <div className="p-[1px] h-[80%] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                    <div className="bg-white dark:bg-black p-6 rounded-[calc(0.75rem-1px)] h-full">
                        <div className="time-posted-menu"></div>
                        <div className="article-content-container">
                            <h2 className="title text-base font-inter font-bold mb-2">
                                2050’s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                            </h2>

                            <div className="mini-content w-full flex flex-row flex-nowrap items-start gap-4 relative">
                                <p className="flex-[3] text-sm leading-relaxed line-clamp-4 overflow-hidden text-gray-500 dark:text-gray-400">
                                    It’s frustrating to spend days on a draft, finally get ready to hit that publish button, only to then spend extra time hunting for the perfect picture to illustrate your story. It’s frustrating to spend days on a draft, finally get ready for the perfect picture to illustrate your story. It’s days on a draft, finally get ready to hit.
                                </p>


                                <div className="featured-whitespapce flex-[1] min-w-[100px] max-w-[200px] mt--10">
                                </div>
                                <div className="featured-image min-w-[100px] max-w-[200px] absolute top-[-28px] right-0">
                                    <GradientImageBorder />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
    </div>
    );
}