import { useState, useEffect } from 'react'

import CampoTexto from './CampoTexto.jsx'
import Boton from './Boton.jsx'

// Estado inicial de un cliente vacio, usado al registrar uno nuevo
const CLIENTE_VACIO = {
  idCliente: null,
  nombreCompleto: '',
  telefonoContacto: '',
  emailUsuario: ''
}

/**
 * Formulario que sirve tanto para registrar como para editar un cliente.
 * Cuando recibe un cliente en sus props carga sus datos; cuando no,
 * presenta los campos vacios.
 */
function FormularioCliente ({ cliente, errores, onGuardar, onCancelar }) {
  const [datos, setDatos] = useState(CLIENTE_VACIO)

  // Cada vez que cambia el cliente recibido se recargan los campos
  useEffect(() => {
    setDatos(cliente ?? CLIENTE_VACIO)
  }, [cliente])

  const edicion = Boolean(datos.idCliente)

  /**
   * Mantiene el estado del formulario al dia mientras el usuario escribe.
   */
  function actualizarCampo (evento) {
    const { name, value } = evento.target
    setDatos({ ...datos, [name]: value })
  }

  /**
   * Evita que la pagina se recargue y entrega los datos al componente padre.
   */
  function enviar (evento) {
    evento.preventDefault()
    onGuardar(datos)
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <h3>{edicion ? 'Editar cliente' : 'Registrar cliente'}</h3>

      <CampoTexto
        id="nombreCompleto"
        etiqueta="Nombre completo"
        valor={datos.nombreCompleto}
        onChange={actualizarCampo}
        error={errores.nombreCompleto}
      />

      <CampoTexto
        id="telefonoContacto"
        etiqueta="Telefono de contacto"
        valor={datos.telefonoContacto}
        onChange={actualizarCampo}
        error={errores.telefonoContacto}
      />

      <CampoTexto
        id="emailUsuario"
        etiqueta="Correo electronico"
        valor={datos.emailUsuario}
        onChange={actualizarCampo}
        error={errores.emailUsuario}
      />

      <div className="acciones-formulario">
        <Boton texto={edicion ? 'Guardar cambios' : 'Registrar'} tipo="submit" />
        <Boton texto="Cancelar" variante="secundario" onClick={onCancelar} />
      </div>
    </form>
  )
}

export default FormularioCliente
