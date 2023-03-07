import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardProduct from '../CardProduct';

function Figures() {
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    
   
    axios.get('http://localhost:5005/figures/figures').then(res => {
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
    </div>
  );
}


export default Figures;