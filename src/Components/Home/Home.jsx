import React from 'react';
import ImageSlider from '../Slider/ImageSlider';
import PopularHobbies from '../PopularHobbies/PopularHobbies';
import MemberTestimonials from '../MemberTestimonials/MemberTestimonials';

import FeaturedGroup from '../FeaturedGroup/Featuredgroup';


const Home = () => {
    return (
        <div >
            
            <ImageSlider />
            <PopularHobbies/>
            <FeaturedGroup/>
            <MemberTestimonials/>
        </div>
    );
};

export default Home;
