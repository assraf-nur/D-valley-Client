import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Catagory/Feature';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <Feature></Feature>
        </div>
    );
};

export default Home;