import { useState } from 'react';
import axios from 'axios';
import FigureModel from '../models/FigureModel';

const FigureForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // Create a new instance of Figure
    const figure = new FigureModel({ name, price, description });

    try {
      // Save the figure to the database
      const res = await axios.post('/api/figures', figure);
      console.log(res.data);
      // Clear the form fields after submit
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
        <button type="submit">Add Figure</button>
      </form>
    </div>
  );
};

export default FigureForm;