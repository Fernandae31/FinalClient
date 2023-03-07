import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import './EditProduct.css';

const EditProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');

  const {type, id} = useParams ()
 
  const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";

  useEffect(() => {
    
    const fetchData = async () => {
      try {
      
       
        const res = await axios.get(`${baseURL}/${type}/getBy/${id}`);
        const { name, img, price, description } = res.data;
        setName(name);
        setPrice(price);
        setDescription(description);
        setImg(img);

      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [type, id]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    
    const updatedProduct = {
      name,
      price,
      description,
      img,
    };

    try {
      
      
      const res = await axios.put(`${baseURL}/${type}/edit/${id}`, updatedProduct);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Edit {type}</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="img">Image:</label>
          <input
            type="text"
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button>Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;