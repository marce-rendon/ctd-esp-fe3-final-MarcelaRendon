import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const favoritosGuardados =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoritos(favoritosGuardados);
  }, []);

  const handleRemove = (id) => {
    const nuevosFavoritos = favoritos.filter ((fav) => fav.id !== id);
    setFavoritos (nuevosFavoritos);
    localStorage.setItem ("favorites", JSON.stringify (nuevosFavoritos));
    alert ("El dentista ha sido eliminado de favoritos.");
  };

  return (
    <main className={state.theme}>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favoritos.length > 0 ? (
          favoritos.map((dentistas) => (
            <Card
              key={dentistas.id}
              name={dentistas.name}
              username={dentistas.username}
              id={dentistas.id}
              isFavorite={true} 
              handleRemove={handleRemove}
            />
          ))
        ) : (
          <p> No tienes favoritos aún </p>
        )}
      </div>
    </main>
  );
};

export default Favs;
