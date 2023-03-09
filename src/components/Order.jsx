import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Order.css";


const Order = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const newManga = { name, number, description, address };

    try {
      const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
      const res = await axios.post(`${baseURL}/products/orders`, newManga);
      console.log(res.data);
     
      setName('');
      setDescription('');
      setNumber('');
      setAddress('');

      navigate(`/`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <><div><img src="./images/OrdersBanner.png" alt="banner de orders" width="100%" height="175"/></div>
    
    <div className="Order">
      
      <form className="order-form"  onSubmit={handleSubmitForm}>
        
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label htmlFor="number">Phone Number:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        
        <div style={{ textAlign: "center" }}>
  <button type="submit">Add Product</button>
</div>
      </form>
    </div>
    </>
  );
};

export default Order;