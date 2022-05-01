import React from 'react';
import error from '../../Images/error.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-50 mx-auto mt-5 rounded-2xl shadow' src={error} alt="" />
        </div>
    );
};

export default NotFound;