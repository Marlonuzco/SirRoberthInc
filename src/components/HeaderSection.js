import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/css/HeaderSection.css";
import { Button, Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';


function HeaderSection() {
  return (
    <>
      <div className="headercontainer">
        <h1>Sir Roberth Inc</h1>
        <h3>¿Que esperas para usar nuestros servicios?</h3>
        <h3>Registrate</h3>        
        <div className="headerbtns">
          <Button variant="dark" size="lg" id="btns">
              <Link to='/Login' className="text-decoration-none" style={{color: '#fff'}}>Registrarme </Link>           
          </Button>
          <Button variant="outline-light" size="lg" id="btns" >
              Iniciar Sesión
          </Button>
        </div>
        <p>¡Si ya estás registrado inicia sesión!</p>
      </div>
    </>
  );
}

export default HeaderSection;
