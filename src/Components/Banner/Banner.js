import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const banner1 = `https://i.ibb.co/p0jysG6/carl-raw-m3hn2-Kn5-Bns-unsplash.jpg`;
  const banner2 = `https://i.ibb.co/JdJR7qj/florian-olivo-Mf23-RF8x-Ar-Y-unsplash.jpg`;
  const banner3 = `https://i.ibb.co/hyZWFY2/rafael-pol-6b5uql-Wab-B0-unsplash.jpg`;
  return (
    <div className="container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Gaming Environment</h3>
            <p>We have the best collection to setup your gaming environment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Professional Setup</h3>
            <p>If you are a content creator you can connect with us</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Best Graphics Cards</h3>
            <p>
              We have the best graphics cards stock. Buy from us
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
