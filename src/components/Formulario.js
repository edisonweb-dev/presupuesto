import React, { useState } from 'react';
import Error from './Error'

const Formulario = () => {

  const [nombre, guardarNombre] = useState('')
  const [cantidad, guardarCantidad] = useState(0)
  const [error, guardarError] = useState(false)

  const guardarSuNombre = e => {
    guardarNombre(e.target.value)
  }

  const guardarSuCantidad = e => {
    guardarCantidad(parseInt(e.target.value))
  }

  const agregarGasto = e => {
    e.preventDefault();

    //validar

    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);

    //construir el gasto

    //pasar el gasto al componente principal

    //resetear el fomulario
  }

  return (
    <form
      onSubmit={agregarGasto}
    >
      <h2>Agrega tus gastos aquí</h2>

      { error ? <Error mensaje="Ambos campos son obligatorios" /> : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. transporte"
          value={nombre}
          //onChange={ e => guardarNombre(e.target.value)}
          onChange={guardarSuNombre}

        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={guardarSuCantidad}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>


  );
}

export default Formulario;