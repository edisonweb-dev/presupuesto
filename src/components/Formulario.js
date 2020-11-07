import React, { useState } from 'react';
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './Error'

const Formulario = ({guardarGasto,guardarCrearGasto}) => {

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

    if (cantidad < 1 || nombre.trim() === '') {
      guardarError(true);
      return;
    }
    guardarError(false);

    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    //pasar el gasto al componente principal
    guardarGasto(gasto)
    guardarCrearGasto(true)

    //resetear el fomulario
    guardarNombre('')
    guardarCantidad(0)
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

Formulario.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;