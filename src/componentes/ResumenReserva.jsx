import Boton from './Boton.jsx'

/**
 * Muestra lo que el usuario lleva seleccionado y permite confirmar la cita.
 * El boton solo se habilita cuando estan los tres datos completos.
 */
function ResumenReserva ({ servicio, dia, hora, onConfirmar }) {
  const completo = Boolean(servicio && dia && hora)

  return (
    <aside className="resumen">
      <h3>Resumen de la reserva</h3>

      <dl>
        <dt>Servicio</dt>
        <dd>{servicio ? servicio.nombre : 'Sin seleccionar'}</dd>

        <dt>Dia</dt>
        <dd>{dia ? `${dia.nombre} ${dia.numero}` : 'Sin seleccionar'}</dd>

        <dt>Hora</dt>
        <dd>{hora ? hora.valor : 'Sin seleccionar'}</dd>
      </dl>

      <Boton
        texto="Confirmar reserva"
        onClick={onConfirmar}
        deshabilitado={!completo}
      />
    </aside>
  )
}

export default ResumenReserva
