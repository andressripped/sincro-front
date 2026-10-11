import { useState } from 'react'

import TarjetaServicio from '../componentes/TarjetaServicio.jsx'
import SelectorDia from '../componentes/SelectorDia.jsx'
import SelectorHora from '../componentes/SelectorHora.jsx'
import ResumenReserva from '../componentes/ResumenReserva.jsx'
import Mensaje from '../componentes/Mensaje.jsx'

// Datos del catalogo del comercio, tomados del prototipo del proyecto
const SERVICIOS = [
  { id: 1, nombre: 'Corte de cabello', duracion: 45, precio: '$25.000' },
  { id: 2, nombre: 'Coloracion', duracion: 120, precio: '$80.000' },
  { id: 3, nombre: 'Manicure', duracion: 60, precio: '$35.000' }
]

const DIAS = [
  { fecha: '2026-10-13', nombre: 'Lun', numero: 13 },
  { fecha: '2026-10-14', nombre: 'Mar', numero: 14 },
  { fecha: '2026-10-15', nombre: 'Mie', numero: 15 },
  { fecha: '2026-10-16', nombre: 'Jue', numero: 16 },
  { fecha: '2026-10-17', nombre: 'Vie', numero: 17 }
]

const HORAS = [
  { valor: '08:00', ocupada: false },
  { valor: '08:45', ocupada: true },
  { valor: '09:30', ocupada: false },
  { valor: '10:15', ocupada: false },
  { valor: '11:00', ocupada: true },
  { valor: '14:00', ocupada: false },
  { valor: '14:45', ocupada: false },
  { valor: '15:30', ocupada: false }
]

/**
 * Pantalla del flujo de reserva.
 * Mantiene el estado de la reserva en construccion porque es el componente
 * mas bajo que necesita conocer el servicio, el dia y la hora al mismo tiempo.
 */
function PaginaReserva () {
  const [servicio, setServicio] = useState(null)
  const [dia, setDia] = useState(null)
  const [hora, setHora] = useState(null)
  const [mensaje, setMensaje] = useState('')

  /**
   * Al cambiar de dia se borra la hora, porque la disponibilidad
   * de cada dia es distinta.
   */
  function seleccionarDia (diaElegido) {
    setDia(diaElegido)
    setHora(null)
  }

  function confirmar () {
    setMensaje(
      `Reserva confirmada: ${servicio.nombre} el ${dia.nombre} ${dia.numero} a las ${hora.valor}.`
    )
  }

  return (
    <section className="reserva">
      <h2>Reservar una cita</h2>

      <Mensaje texto={mensaje} />

      <div className="columnas">
        <div>
          <h3>1. Escoja el servicio</h3>
          <div className="servicios">
            {SERVICIOS.map((item) => (
              <TarjetaServicio
                key={item.id}
                servicio={item}
                seleccionado={servicio?.id === item.id}
                onSeleccionar={setServicio}
              />
            ))}
          </div>

          <h3>2. Escoja el dia</h3>
          <SelectorDia
            dias={DIAS}
            diaSeleccionado={dia}
            onSeleccionar={seleccionarDia}
          />

          <h3>3. Escoja la hora</h3>
          <SelectorHora
            horas={HORAS}
            horaSeleccionada={hora}
            onSeleccionar={setHora}
            habilitado={Boolean(dia)}
          />
        </div>

        <ResumenReserva
          servicio={servicio}
          dia={dia}
          hora={hora}
          onConfirmar={confirmar}
        />
      </div>
    </section>
  )
}

export default PaginaReserva
