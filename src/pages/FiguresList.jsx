import React, {useEffect, useState} from 'react'
import axios from 'axios';
import CardProduct from '../components/CardProduct';
import {Link} from 'react-router-dom'


function FiguresList() {
    const [mangas, setManga] = useState([]);

  useEffect(() => {
    
    const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
    axios.get(`${baseURL}/products/products`).then(res => {
      setManga(res.data);
      console.log(res.data)
    });
}, [])

  return (
    
    <div>
        {mangas.map(manga => (
          <CardProduct key={manga._id} figure={manga} type={"figures"}/>
        ))}
          
          <Link to = "/create-manga">
          <button className='buton1'> Create Product</button></Link>

    </div>
  )
}

export default FiguresList;