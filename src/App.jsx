import React from "react";
import Navbar from "./components/Navbar/Navbar"
import 'boxicons';



function App() {
  return (
    <div className="App">
       <img src={"../public./images/logo.png"} alt="logo" />
      <h1 className="Titulo texto-centrado">カフェタイム</h1>

      <Navbar/>
      
      

    </div>
  );
}

export default App;
