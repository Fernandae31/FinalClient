import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProduct from '../CardProduct';
import { Link } from 'react-router-dom';

function Figures() {
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    
    const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
    axios.get(`${baseURL}/figures/create`).then(res => {
      setFigures(res.data);
      console.log(res.data)
    });
}, [])
  return (
    <div>
      <h1>Figures</h1>
      <ul>
        {figures.map(figure => (
          <CardProduct key={figure._id} figure={figure} type={"figures"}/>
        ))}
      </ul>
      <Link to = "/create-manga">
          <button>Create Product</button></Link>
    </div>
  );
}


export default Figures;