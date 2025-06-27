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
                            <img src={url} alt={`Slide ${idx}`} className="w-full h-[500px] object-cover" />
                        </div>
                    ))}
                </Slider>


               

            </div>
        </div>
    );
};

export default ImageSlider;
