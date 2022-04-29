import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/SectionOne.css";
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';

function SectionOne() {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []
  );

  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/Nosotros')
  }

  return (
    <>
      <div className="container-fluid" id="ContenidoOne" data-aos="zoom-in">
        <h1>¿Quienes somos?</h1>
        <p>
          Sir Roberth Inc es una agencia de estrategía digital, con el mejor
          equipo de trabajo traemos para ti todo lo que necesitas para el
          crecimiento de tu empresa, proyecto o emprendimiento
        </p>

        <div className="button section">
          <Button variant="outline-dark" size='lg' onClick={handleClick}>
            Más de nosotros
          </Button>

        </div>

      </div>
    </>
  );
}

export default SectionOne;
