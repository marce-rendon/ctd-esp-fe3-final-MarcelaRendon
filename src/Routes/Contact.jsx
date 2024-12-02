import React, { useContext } from 'react'; 
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal); 
  return (
    <div className = {`contact-page ${state.theme}`}>
      <h2>Quiéres saber más?</h2>
      <p>Envíanos tus preguntas y te contactaremos pronto</p>
      <Form/>
    </div>
  )
}

export default Contact