import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CardProduct.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




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
    <div className="d-inline-block">
    <Card style={{ width: '18rem' }}>
      <Card.Img src={figure.img} alt={figure.name} height="270" width="120" />
      <Card.Body>
        <Card.Title>{figure.name}</Card.Title>
        <Card.Text>{figure.description}</Card.Text>
        <Card.Text>Price:{figure.price}</Card.Text>
        
          <Link to={`/edit-manga/${type}/${figure._id}/`}>
            <Button className="botone">Edit</Button>
          </Link>
          <Button className="botone1" onClick={() => handleDelete(figure._id)}>Delete</Button>
        
      </Card.Body>
    </Card>
  </div>
);

};

export default CardProduct;