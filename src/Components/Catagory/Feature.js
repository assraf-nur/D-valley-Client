import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Feature = () => {

    useEffect(()=>{
        Aos.init({
          duration: 2000
        });
    
      },[])

    return (
        <div>
            <div data-aos="fade-down" className='text-center mt-3'>
                <h2>Featured Category</h2>
                <p>Get Your Desired Product from Featured Category!</p>
            </div>
        </div>
    );
};

export default Feature;