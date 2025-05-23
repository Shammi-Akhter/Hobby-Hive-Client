import React from 'react';
import ImageSlider from '../Slider/ImageSlider';
import PopularHobbies from '../PopularHobbies/PopularHobbies';
import MemberTestimonials from '../MemberTestimonials/MemberTestimonials';
import FeaturesGroup from '../FeaturesGroup/FeaturesGroup';




const Home = () => {
    return (
        <div >
            
            <ImageSlider />
            <PopularHobbies/>
            <FeaturesGroup/>
            <MemberTestimonials/> 
        </div>
    );
};

export default Home;
