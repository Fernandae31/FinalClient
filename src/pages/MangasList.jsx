import React, {useEffect, useState, useContext } from 'react'
import axios from 'axios';
import CardProduct from '../components/CardProduct';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import './MangasList.css';

function MangasList() {
    const [mangas, setManga] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {    
        const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
        axios.get(`${baseURL}/products/products`).then(res => {
            setManga(res.data);
            console.log(res.data)
        });
    }, []);

    const handleDelete = async (id) => {
        console.log('Eliminar',id);
    
        try {
            const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
            const res = await axios.delete(`${baseURL}/products/delete/${id}`);
            console.log(res.data);
            navigate('/list/products');
        } catch (err) {
            console.error(err);
        }
    };
    const { user } = useContext(AuthContext)
  console.log(user)
  
  let admin = "user"
  if (user && user.type) {
    admin = "admin"
  } 

    return (
        <div>
            {mangas.map(manga => (
                <CardProduct key={manga._id} figure={manga} type={"products"} handleDelete={handleDelete} />
            ))}
           {admin === 'admin' && (
            <Link to="/create-manga">
                <button className='buton1'>Create Product</button>
            </Link>
              )}
        </div>
    )
}

export default MangasList;