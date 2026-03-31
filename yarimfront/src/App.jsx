import React from "react";
import Header from "./components/header/Header";
import Abaut from "./components/abaut/Abaut";
import Benefits from "./components/benefits/Benefits";
import Contact from "./components/contact/Contact";
import Hikes from "./components/hikes/Hikes";
import Stories from "./components/stories/Stories";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Abaut />
        <Benefits />
        <Hikes />
        <Stories />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
