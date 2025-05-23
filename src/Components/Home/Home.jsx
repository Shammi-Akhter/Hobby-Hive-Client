import React from 'react';
import ImageSlider from '../Slider/ImageSlider';
import PopularHobbies from '../PopularHobbies/PopularHobbies';
import MemberTestimonials from '../MemberTestimonials/MemberTestimonials';
import FeaturesGroup from '../FeaturesGroup/FeaturesGroup';
import { Helmet } from 'react-helmet-async';




const Home = () => {
    return (
        <div >
            <Helmet>
                <title>Home| HobbyHive</title>
            </Helmet>
            <ImageSlider />
            <PopularHobbies />
            <FeaturesGroup />
            <MemberTestimonials />
        </div>
    );
};

export default Home;
