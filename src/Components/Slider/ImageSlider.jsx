import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
    };

    const images = [
        "https://i.postimg.cc/bNshBkhs/slide-1.jpg",
        "https://i.postimg.cc/qBnWkRH9/slider-2.webp",
        "https://i.postimg.cc/9QXktYwh/slider-3.jpg",
        "https://i.postimg.cc/gjqyNxJX/slide-4.webp",
        "https://i.postimg.cc/QdMgJxrC/slide-5.webp.jpg"
    ];

    return (
        <div className=''>
            <div className="w-full relative container mx-auto md:pt-10">

            <Slider {...settings}>
                {images.map((url, idx) => (
                    <div key={idx}>
                        <img src={url} alt={`Slide ${idx}`} className="w-full h-[800px] object-cover" />
                    </div>
                ))}
            </Slider>


            <div className="absolute w-full top-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center">
                <h1
                    className="text-2xl md:text-5xl font-bold"
                    style={{ textShadow: '4px 4px 20px rgba(255, 255, 0, 0.9)' }}
                >
                   “Explore Your Passion - One Hobby at a Time”
                </h1>
                <p
                    className="text-sm md:text-xl font-bold md:p-5"
                    style={{ textShadow: '3px 3px 15px rgba(255, 255, 0, 0.8)' }}
                >
                   “From art and music to tech and outdoor adventures, discover events and experiences that fuel your creativity and bring your hobbies to life. Dive into a world where every passion finds its community.”
                </p>
            </div>

        </div>
        </div>
    );
};

export default ImageSlider;
