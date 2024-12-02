import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id, isFavorite =false, handleRemove}) => {
  const addFav = ()=> {
    const favoritos = JSON.parse (localStorage.getItem ("favorites")) || [];
    const nuevoFavorito = {name, username, id};

    if (favoritos.some ((fav) => fav.id === id)) {
      alert ("este dentista ya está en favoritos");
      return;
    }

    const actualizarFavoritos = [... favoritos, nuevoFavorito];
    localStorage.setItem ("favorites", JSON.stringify (actualizarFavoritos));
    alert (`${name} ha sido agregado a favoritos.`);
  };

  return (
    <div className="card">
      <img src={`/images/doctor.jpg`} alt={`Imagen de ${name}`} className="card-image" />
      <h3> {name}</h3>
      <p> {username}</p>
      <Link to= {`/dentist/${id}`} className= "detail/link">
        Ver detalles
      </Link>
      {isFavorite ? (
        <button onClick={() => handleRemove(id)} className="favButton delete">
          Eliminar Favorito
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          Añadir a favorito
          </button>
      )}
    </div>
  );
};

export default Card;
