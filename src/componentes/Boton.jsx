/**
 * Boton reutilizable del sistema.
 * La propiedad variante decide si se dibuja como accion principal o secundaria,
 * de modo que los colores quedan definidos en un solo lugar.
 */
function Boton ({ texto, onClick, tipo = 'button', variante = 'principal', deshabilitado = false }) {
  return (
    <button
      type={tipo}
      className={variante === 'principal' ? 'boton' : 'boton-secundario'}
      onClick={onClick}
      disabled={deshabilitado}
    >
      {texto}
    </button>
  )
}

export default Boton
