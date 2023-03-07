import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DeleteProduct = () => {
  const [product, setProduct] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const { type, id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5005/${type}/getBy/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProduct();
  }, [type, id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5005/${type}/delete/${id}`);
    } catch (err) {
      setErrorMessage('Error deleting product');
    }
  };

  return (
    <div>
      <h1>Delete {type}</h1>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {errorMessage && <p>{errorMessage}</p>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteProduct;
