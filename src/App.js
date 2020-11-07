import React, { useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

function App() {

  //definir el state
  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)

  const [mostrarpregunta, actualizarPregunta] = useState(true)



  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          {mostrarpregunta ?
            (<Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />)
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario />
                </div>
                <div className="one-half column">

                </div>
              </div>
            )

          }





        </div>

      </header>

    </div>
  );
}

export default App;