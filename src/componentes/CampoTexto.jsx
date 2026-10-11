/**
 * Campo de formulario con su etiqueta y su mensaje de error.
 * Se usa en todos los formularios del proyecto para que la validacion
 * se vea igual en cualquier pantalla.
 */
function CampoTexto ({ id, etiqueta, valor, onChange, error, tipo = 'text' }) {
  return (
    <div className="campo">
      <label htmlFor={id}>{etiqueta}</label>

      <input
        id={id}
        name={id}
        type={tipo}
        value={valor}
        onChange={onChange}
        className={error ? 'con-error' : ''}
      />

      {error && <span className="error">{error}</span>}
    </div>
  )
}

export default CampoTexto
