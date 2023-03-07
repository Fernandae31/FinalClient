import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CardProduct.css';
import axios from 'axios';
const CardProduct = ({ figure, type }) => {

const navigate = useNavigate()



  const handleDelete = async (id) => {
    console.log('Eliminar',id);
    try {
      
     
      const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
      const res = await axios.delete(`${baseURL}/${type}/delete/${id}`);
      console.log(res.data);
      navigate (`/list/${type}`)
} catch (err) {
  console.error(err);
}
};

  return (
    <div className="card">
      <img src={figure.img} alt={figure.name} height="150" width="150" />
      <div className="card-body">
        <h5 className="card-title">{figure.name}</h5>
        <p className="card-text">{figure.description}</p>
        <p className="card-price">{figure.price}</p>
        <p>{figure._id}</p>
        <Link to={`/edit-manga/${type}/${figure._id}/`}>
          <button className='boton1'>Edit Manga</button>
        </Link>
        <button className='boton2'onClick= {() => handleDelete(figure._id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CardProduct;