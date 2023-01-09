import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Content1 from "./components/Content1";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import styles from "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Content1 />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
