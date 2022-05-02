import React from 'react';
import fb from '../../Images/fb.png';
import git from '../../Images/git.png';
import insta from '../../Images/insta.png';


const Footer = () => {
    return (
        <div className='bg-dark p-5 mt-5 text-center text-light'>
            <p>All copyright ©️ reserved to D-valley</p>
            <h5>Connect With us</h5>
            <div className='d-flex justify-center mt-2 gap-3'>
                <a href="https://www.facebook.com/assrafnur/">
                    <img src={fb} alt="" />
                </a>
                <a href="https://www.instagram.com/tesla_nur/?hl=en">
                   <img src={insta} alt="" />
                </a>
                <a href="https://github.com/assraf-nur">
                   <img src={git} alt="" />
                </a>
            </div>
        </div>
    );
};

export default Footer;