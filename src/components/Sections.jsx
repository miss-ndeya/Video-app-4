import React from "react";
import Footer from "./Footer";
import Section3 from "./Section3";
import Cards from "./Cards";
import Section2 from "./section2";
import Header from "./Header";

const Sections = () => {
  return (
    <div className="col-auto px-0 col-md-10 min-vh- border-end">
      <Header />
      <Section2 />
      <Cards />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Sections;
