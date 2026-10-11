/**
 * Lista los dias disponibles para reservar y resalta el que se elija.
 */
function SelectorDia ({ dias, diaSeleccionado, onSeleccionar }) {
  return (
    <div className="selector">
      {dias.map((dia) => (
        <button
          key={dia.fecha}
          type="button"
          className={diaSeleccionado?.fecha === dia.fecha ? 'opcion opcion-activa' : 'opcion'}
          onClick={() => onSeleccionar(dia)}
        >
          <span className="dia-nombre">{dia.nombre}</span>
          <span className="dia-numero">{dia.numero}</span>
        </button>
      ))}
    </div>
  )
}

export default SelectorDia
