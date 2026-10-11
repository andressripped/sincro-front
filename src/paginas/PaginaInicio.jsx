import { Link } from 'react-router-dom'

/**
 * Pantalla de bienvenida del sistema.
 */
function PaginaInicio () {
  return (
    <section className="inicio">
      <h2>Reserve su cita en linea</h2>

      <p>
        Sincro permite a los clientes de barberias, salones, consultorios y
        talleres apartar una cita con el profesional que prefieran, en el dia
        y la hora que mejor les convenga, sin llamadas ni esperas.
      </p>

      <Link className="boton" to="/reservar">Reservar una cita</Link>
    </section>
  )
}

export default PaginaInicio
