/**
 * Lista las horas de la jornada y deshabilita las que ya estan ocupadas.
 * Si todavia no se ha escogido un dia no muestra nada, porque las horas
 * dependen del dia seleccionado.
 */
function SelectorHora ({ horas, horaSeleccionada, onSeleccionar, habilitado }) {
  if (!habilitado) {
    return <p className="aviso">Primero seleccione un dia.</p>
  }

  return (
    <div className="selector selector-horas">
      {horas.map((hora) => (
        <button
          key={hora.valor}
          type="button"
          disabled={hora.ocupada}
          className={horaSeleccionada?.valor === hora.valor ? 'opcion opcion-activa' : 'opcion'}
          onClick={() => onSeleccionar(hora)}
        >
          {hora.valor}
        </button>
      ))}
    </div>
  )
}

export default SelectorHora
