import { useState } from 'react';
import axios from 'axios';
import './CreateMangas.css';

const FigureForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');


  const handleSubmitForm = async (e) => {
    e.preventDefault();

    
    const newFigure = ( name, price, description );

    try {
      const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
      const res = await axios.post(`${baseURL}/figures/create`, newFigure);
      console.log(res.data);
      
      setName('');
      setPrice(0);
      setDescription('');
      
     
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
    <h1>Add Figure</h1>
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
      <button type="submit">Add Product</button>
     
    </form>
  </div>
  );
};

export default FigureForm;