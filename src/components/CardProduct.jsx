import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CardProduct.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';




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

  return ( <>
  
    <div className="d-inline-block">
    
    <Card style={{ width: '18rem' }}>
      <Card.Img src={figure.img} alt={figure.name} height="270" width="5000" />
      <Card.Body>
        <Card.Title>{figure.name}</Card.Title>
        <Card.Text>{figure.description}</Card.Text>
        <Card.Text>Price:{figure.price}</Card.Text>
        <Link className='link' to={`/edit-manga/${type}/${figure._id}/`}>
        <button className="botone btn-pink">Edit</button>
        </Link>
        <button className="botone1 btn-pink" onClick={() => handleDelete(figure._id)}>Delete</button>
          </Card.Body>
          <button class="btn btn__tran" src="cursor:url(https://cdn.custom-cursor.com/db/4459/32/arrow2565.png) , pointer!important"></button>
    </Card>


  </div>

  </>
);

};

export default CardProduct;