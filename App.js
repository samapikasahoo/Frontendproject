import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComponent from "./components/Navbar";
import HomePage from "./container/Home";
import FooterComponent from "./components/Footer";

function App() {

  return (
    <>
    <NavBarComponent/>
    <HomePage/>
    <FooterComponent/>
    </>
  );
}

export default App;
