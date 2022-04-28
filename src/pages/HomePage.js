import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import HeaderSection from "../components/HeaderSection";
import CardsComp from "../components/Cards";
import NavbarComp from '../components/NavbarComp';
import SectionOne from "../components/SectionOne";

function HomePage() {
  return (
    <>
      <NavbarComp />
      <HeaderSection />
      <SectionOne/>


    </>
  );
}

export default HomePage;
