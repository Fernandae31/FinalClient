import { useState, useEffect } from 'react';
import axios from 'axios';

const EditProduct = ({ type, id }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch product data from database
        const res = await axios.get(`/api/${type}/${id}`);
        const { name, price, description } = res.data;
        setName(name);
        setPrice(price);
        setDescription(description);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [type, id]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // Create a new product object with updated values
    const updatedProduct = {
      name,
      price,
      description,
    };

    try {
      // Send updated product data to the database
      const res = await axios.put(`/api/${type}/${id}`, updatedProduct);
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProduct;