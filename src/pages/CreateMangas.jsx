import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateMangas.css';


const CreateMangas = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate()

  const handleSubmitForm = async (e) => {
    e.preventDefault();

   


    const newManga = { name,img, price, description };

    try {
     
      const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
      const res = await axios.post(`${baseURL}/${category}/create`, newManga);
      console.log(res.data);
     
      setName('');
      setPrice(0);
      setDescription('');
      setImg('');
      navigate (`/list/${category}`)

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
  <h1>Create Product</h1>
  <form onSubmit={handleSubmitForm}>
    <fieldset>
      <legend>Name:</legend>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </fieldset>
    <fieldset>
      <legend>Image:</legend>
      <input
        type="text"
        id="img"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
    </fieldset>
    <fieldset>
      <legend>Price:</legend>
      <input
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </fieldset>
    <fieldset>
      <legend>Description:</legend>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </fieldset>
    <fieldset>
      <legend>Category:</legend>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select</option>
        <option value="products">Manga</option>
        <option value="figures">Figures</option>
      </select>
    </fieldset>
    <div>
      <button type="submit">Add Product</button>
    </div>
  </form>
</div>
  );
};

export default CreateMangas;