import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProduct from "../components/CardProduct";
import {useNavigate } from "react-router-dom";

function FiguresList() {
  const [figures, setFigures] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
    axios.get(`${baseURL}/figures/figures`).then((res) => {
      setFigures(res.data);
      console.log(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    console.log("Eliminar", id);

    try {
      const baseURL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005";
      const res = await axios.delete(`${baseURL}/figures/delete/${id}`);
      console.log(res.data);
      navigate("/list/figures");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {figures.map((figure) => (
        <CardProduct
          key={figure._id}
          figure={figure}
          type={"figures"}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default FiguresList;