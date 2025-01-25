// components/Carousel.js
import { useState } from 'react';

const Carousel = () => {
    // Array of image paths
    const images = [
        '/assets/1.jpg',
        '/assets/2.jpg',
        '/assets/3.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Handle previous image
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    // Handle next image
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative lg:col-span-2 p-4 min-h-40 md:min-h-72 lg:min-h-96 rounded-xl">
            {/* Background Image */}
            <div
                className="w-full h-full bg-cover bg-no-repeat rounded-xl"
                style={{
                    backgroundImage: `url(${images[currentIndex]})`,
                }}
            >
                {/* Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-4"
                >
                    Previous
                </button>
                <button
                    onClick={nextImage}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-4"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel;
