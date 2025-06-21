import React from "react";
import Header from "./component/header/header";
import Body from "./component/body/body_part_one";
import BodyPartTwo from "./component/body/body_part_two";
import FineArtSection from "./component/body/FineArtSection";
import Footer from "./component/body/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <BodyPartTwo />
      <FineArtSection />
      <Footer />
    </div>
  );
}

export default App;
