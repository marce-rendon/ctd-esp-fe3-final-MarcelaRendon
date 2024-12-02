import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id }= useParams ();
  const { state }= useContext (ContextGlobal);
  const [dentista, setDentista] = useState (null);
  const [error, setError] = useState (null);

  useEffect (() => {
    const fetchDentist = async () => {
      try {
        const response = await axios.get (`https://jsonplaceholder.typicode.com/users/${id}`);
        setDentista (response.data);
      } catch (err) {
        console.error ("error al caergar los detalles del dentista", err);
        setError ("No se pudieron cargar los datos del dentista");
      }
    };
    fetchDentist ();
  }, [id]);
  if (error) {
    return <p>{error}</p>;
  }

  if (!dentista) {
    return <p> Cargando detalles del dentista...</p> 
  }
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <main className= {state.theme}>
      <h1>Detalles del Dentista</h1>
      <div className= "dentist-detail">
        <p><strong> Nombre:</strong>{dentista.name}</p>
        <p><strong> Email:</strong>{dentista.email}</p>
        <p><strong> Teléfono:</strong>{dentista.phone}</p>
        <p><strong> Sitio Web:</strong>{dentista.website}</p>
      </div>
      </main>
  );
};

export default Detail