import React, { useState, useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";


const Form = () => {
  const { state } = useContext(ContextGlobal); 
  const [formData, setFormData] = useState ({
  nombre: "",
  email: "",
});
const [error, setError] = useState ("");
const [successMessage, setSuccessMessage] = useState ("");

const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData ({...formData, [name]: value});
};

const handleSubmit = (e) => {
  e.preventDefault ();
  setError ("");
  setSuccessMessage ("");

  if (formData.nombre.length <= 5) {
    setError ("El nombre completo debe tener más de 5 caracteres");
  return;
}


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailRegex.test (formData.email)) {
  setError("Por favor ingrese un email válido.");
  return;
}
console.log("Datos enviados:", formData);
    setSuccessMessage(`Gracias ${formData.nombre}, te contactaremos cuando antes vía mail.`);
    setFormData({ nombre: "", email: "" }); 
  };

  return (
    <div className={`form-container ${state.theme}`}>
    <form onSubmit={handleSubmit} className = {`contact-form ${state.theme}`}>
    <div className="form-group">
    <label htmlFor="nombre">Nombre Completo:</label>
    <input 
    type= "text"
    id= "nombre"
    name= "nombre"
    value= {formData.nombre}
    onChange= {handleChange}
    placeholder="Escribe tu nombre completo"
    />
    </div>
    <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Escribe tu email"
        />
    </div>

    <button type="submit">Enviar</button>
    {error && <p className="error-message">{error}</p>}
    {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
    </div>
  );
};

export default Form;
