import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Card } from "react-bootstrap";
import expert1 from '../../Images/expert1.png'
import expert2 from '../../Images/expert2.png'

const Experts = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="row gap-5 mx-auto">
      <h2 data-aos="fade-up" className="fw-bold text-center mt-5">
        Our Experts are here for YOU !
      </h2>
      <div className="row justify-content-center gap-5">
      <Card data-aos="fade-down-right" className="p-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={expert1} />
        <Card.Body>
          <Card.Title>Anonyno Zaman</Card.Title>
          <Card.Text>
            CO founder of pc builders bangladesh. 10 Years of experience in international field.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card data-aos="fade-down-left" className="p-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" className="w-100" src={expert2} />
        <Card.Body>
          <Card.Title>Nur Tesla</Card.Title>
          <Card.Text>
            CEO of logismico tech. Have the international PC assembly experience.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
};

export default Experts;
