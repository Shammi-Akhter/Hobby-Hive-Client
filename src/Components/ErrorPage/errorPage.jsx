import React from 'react';

import { Link } from 'react-router';
import Navbar from '../Navbar/Navbar';

const ErrorPage = () => {
    return (
        <div >
            
            <div className='  bg-white text-center p-10 rounded-xl md:h-[450px]'>
                <h1 className='text-9xl '>404</h1>
                <h1 className='text-40px font-semibold p-2 '>No Group Found!!!!!</h1>
                <p className='text-sm text-gray-400 p-2'>Please select "Home" to see ongoing groups!!!!!!!</p>
                
            </div>

        </div>
    );
};

export default ErrorPage;