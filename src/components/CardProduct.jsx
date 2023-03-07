import React from 'react';
import { Link } from 'react-router-dom';
import './CardProduct.css';




const CardProduct = ({ figure, type }) => {
  const handleDelete = () => {
    console.log('Eliminar');
  }
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
        <button className='boton2'onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default CardProduct;