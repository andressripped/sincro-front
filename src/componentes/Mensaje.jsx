/**
 * Aviso de confirmacion o de error que aparece despues de una operacion.
 * Si no hay texto que mostrar el componente no dibuja nada.
 */
function Mensaje ({ texto, tipo = 'exito' }) {
  if (!texto) {
    return null
  }

  return (
    <p className={tipo === 'error' ? 'mensaje mensaje-error' : 'mensaje'}>
      {texto}
    </p>
  )
}

export default Mensaje
