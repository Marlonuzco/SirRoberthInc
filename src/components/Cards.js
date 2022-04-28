import React from "react";
import "../assets/css/CardsComp.css";
import "bootstrap/dist/css/bootstrap.css";
import ImgCard1 from "../assets/img/Marketing.jpg";
import ImgCard2 from "../assets/img/diseño grafico.jpg";
import ImgCard3 from "../assets/img/crecimiento.jpg";
import ImgCard4 from "../assets/img/Servicioworld.jpg";
import { Card, Row, Col, CardDeck } from "react-bootstrap";

function CardsComp() {
  return (
    <>
      <div className="container-fluid" id="homepagesection">
        <div id="titulocards">
          <h1>¿Qué Ofrecemos?</h1>
        </div>
        
        
        <Card className="mb-3" id="CardOne">
          <Row className="g-0">
            <Col className="md-4">
              <img src={ImgCard1} className="img-fluid rounded-start"/>
            </Col>
            <Col className="md-8">
              <Card.Body>
                <Card.Title>
                  Servicios de Marketing Digital
                </Card.Title>
              </Card.Body>
            </Col>
          </Row>
        </Card>


      </div>
    </>
  );
}

export default CardsComp;
