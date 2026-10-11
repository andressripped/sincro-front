import { NavLink } from 'react-router-dom'

/**
 * Barra superior con el nombre del sistema y la navegacion principal.
 * Se muestra en todas las pantallas, por eso vive fuera de las rutas.
 */
function Encabezado () {
  return (
    <header className="encabezado">
      <div>
        <h1>Sincro</h1>
        <p>Gestion de reservas para comercios de servicios</p>
      </div>

      <nav>
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/reservar">Reservar</NavLink>
        <NavLink to="/clientes">Clientes</NavLink>
      </nav>
    </header>
  )
}

export default Encabezado
