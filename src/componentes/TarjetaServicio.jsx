/**
 * Tarjeta que presenta un servicio del comercio.
 * No decide nada por su cuenta: avisa al componente padre cual fue
 * seleccionado por medio de la funcion onSeleccionar.
 */
function TarjetaServicio ({ servicio, seleccionado, onSeleccionar }) {
  return (
    <article
      className={seleccionado ? 'tarjeta tarjeta-activa' : 'tarjeta'}
      onClick={() => onSeleccionar(servicio)}
    >
      <h3>{servicio.nombre}</h3>
      <p className="duracion">{servicio.duracion} minutos</p>
      <p className="precio">{servicio.precio}</p>
    </article>
  )
}

export default TarjetaServicio
