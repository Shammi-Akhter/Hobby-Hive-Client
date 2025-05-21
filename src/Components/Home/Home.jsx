import React from 'react';
import ImageSlider from '../Slider/ImageSlider';
import PopularHobbies from '../PopularHobbies/PopularHobbies';
import FeaturedGroup from '../FeaturedGroup/Featuredgroup';
import MemberTestimonials from '../MemberTestimonials/MemberTestimonials';


const Home = () => {
    return (
        <div>
            <ImageSlider />
            <PopularHobbies/>
            <FeaturedGroup/>
            <MemberTestimonials/>
        </div>
    );
};

export default Home;
