import React from 'react';
import ImageSlider from '../Slider/ImageSlider';
import PopularHobbies from '../PopularHobbies/PopularHobbies';
import MemberTestimonials from '../MemberTestimonials/MemberTestimonials';

import FeaturedGroup from '../FeaturedGroup/Featuredgroup';
import ThemeToggle from '../ThemeToggle';

const Home = () => {
    return (
        <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
            
            <ImageSlider />
            <PopularHobbies/>
            <FeaturedGroup/>
            <MemberTestimonials/>
        </div>
    );
};

export default Home;
