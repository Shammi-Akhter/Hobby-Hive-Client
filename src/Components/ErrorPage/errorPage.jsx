import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div >
            <Helmet>
                <title>Error Page | HobbyHive</title>
            </Helmet>
            <div className='  bg-white text-center p-10 rounded-xl md:h-[450px]'>
                <h1 className='text-9xl '>404</h1>
                <h1 className='text-40px font-semibold p-2 '>No Group Found!!!!!</h1>
                <p className='text-sm text-gray-400 p-2'>Please select "Home" to see ongoing groups!!!!!!!</p>

            </div>

        </div>
    );
};

export default ErrorPage;