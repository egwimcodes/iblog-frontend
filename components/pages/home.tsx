import { useState } from 'react';

function Home() {
    // State to track the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of image URLs
    const images = [
        '/assets/1.jpg',
        '/assets/2.jpg',
        '/assets/3.jpg'
    ];

    // Handle previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Handle next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <main className='w-11/12 md:w-11/12 lg:w-10/12 mx-auto'>
            <div className="hidden md:grid lg:grid-cols-3 md:grid-rows-2 gap-2 ">
                <div
                    className="lg:col-span-2 p-4 min-h-40 md:min-h-72 lg:min-h-96 rounded-xl"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"
                    }}
                >
                    Spans 2 columns
                </div>
                <div className="grid md:grid-cols-2 lg:grid-rows-2 gap-2">
                    <div
                        className="bg-orange-500 lg:col-span-2 rounded-xl"
                        style={{
                            backgroundImage: `url(${images[(currentIndex + 1) % images.length]})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover"
                        }}
                    ></div>
                    <div
                        className="bg-orange-500 lg:col-span-2 rounded-xl"
                        style={{
                            backgroundImage: `url(${images[(currentIndex + 2) % images.length]})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover"
                        }}
                    ></div>
                </div>
            </div>

            {/* Mobile version */}
            <div className="md:hidden grid grid-rows-3 gap-2 ">
                <div
                    className="bg-red-500 p-4 min-h-40 md:min-h-56 lg:min-h-96 rounded-xl"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"
                    }}
                >
                    Spans 2 columns
                </div>
                <div
                    className="bg-red-500 p-4 min-h-40 md:min-h-56 lg:min-h-96 rounded-xl"
                    style={{
                        backgroundImage: `url(${images[(currentIndex + 1) % images.length]})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"
                    }}
                >
                    Spans 2 columns
                </div>
                <div
                    className="bg-red-500 p-4 min-h-40 md:min-h-56 lg:min-h-96 rounded-xl"
                    style={{
                        backgroundImage: `url(${images[(currentIndex + 2) % images.length]})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: "cover"
                    }}
                >
                    Spans 2 columns
                </div>
            </div>

            {/* Carousel Buttons */}
            <div className="flex justify-center mt-4">
                <button
                    onClick={prevImage}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md mr-2"
                >
                    Previous
                </button>
                <button
                    onClick={nextImage}
                    className="bg-gray-800 text-white px-4 py-2 rounded-md"
                >
                    Next
                </button>
            </div>
        </main>
    );
}

export default Home;
