import React from 'react';
import "./Header.css";


export default function Header() {
  return (
<div className='logo text-center' style={{display: "flex", justifyContent: "center", alignItems: "center", height: "22vh"}}>
      <img src="images/logo.png" alt="logo" width="350" height="350" />
      <img src="images/bienvenido.png" alt="logo" width="350" height="350" />
      
    </div>
  )
}
