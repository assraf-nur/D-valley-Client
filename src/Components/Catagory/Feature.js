import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import one from '../../Images/one.png'
import two from '../../Images/two.png'
import three from '../../Images/three.png'

const Feature = () => {

    useEffect(()=>{
        Aos.init({
          duration: 1000
        });
    
      },[])

    return (
        <div className='bg-primary p-5 mt-5'>
            <div data-aos="fade-down" className='text-center mt-3 text-white'>
                <h2>Featured Category</h2>
                <p>Get desired Product for store from our sister company!</p>
            </div>
            <div data-aos="fade-up-right" className='text-center d-flex justify-content-center gap-5 mx-auto'>
            <div data-aos="fade-down" className='border p-3 bg-white rounded shadow'>
                <a className='text-decoration-none text-dark' href="https://www.startech.com.bd/component/graphics-card" target={'_blank'}>
                <h3>Graphics Card</h3>
                <img src={one} alt="" />
                </a>
            </div>
                
            <div data-aos="fade-up" className='border p-3 bg-white rounded shadow'>
                <a className='text-decoration-none text-dark' href="https://www.startech.com.bd/special-pc" target={'_blank'}>
                 <h3>Computer Package</h3>
                 <img src={two} alt="" />
                </a>
            </div>

            <div data-aos="fade-down" className='border p-3 bg-white rounded shadow'>
                <a className='text-decoration-none text-dark' href="https://www.startech.com.bd/laptop-notebook/laptop" target={'_blank'}>
                 <h3>All Laptop</h3>
                 <img src={three} alt="" />
                </a>
            </div>
            </div>
        </div>
    );
};

export default Feature;