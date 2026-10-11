import { useState, useEffect } from 'react'

import TablaClientes from '../componentes/TablaClientes.jsx'
import FormularioCliente from '../componentes/FormularioCliente.jsx'
import Mensaje from '../componentes/Mensaje.jsx'
import Boton from '../componentes/Boton.jsx'

import { listarClientes, guardarCliente, eliminarCliente } from '../servicios/api.js'

/**
 * Pantalla del modulo de clientes.
 * Es la encargada de hablar con el servicio REST del back-end; los
 * componentes que dibuja solo reciben los datos ya resueltos.
 */
function PaginaClientes () {
  const [clientes, setClientes] = useState([])
  const [clienteEnEdicion, setClienteEnEdicion] = useState(null)
  const [formularioVisible, setFormularioVisible] = useState(false)
  const [errores, setErrores] = useState({})
  const [mensaje, setMensaje] = useState('')
  const [tipoMensaje, setTipoMensaje] = useState('exito')

  // Consulta el listado la primera vez que se muestra la pantalla
  useEffect(() => {
    cargarClientes()
  }, [])

  async function cargarClientes () {
    try {
      setClientes(await listarClientes())
    } catch (error) {
      mostrarMensaje(error.message, 'error')
    }
  }

  function mostrarMensaje (texto, tipo = 'exito') {
    setMensaje(texto)
    setTipoMensaje(tipo)
  }

  function abrirFormularioNuevo () {
    setClienteEnEdicion(null)
    setErrores({})
    setFormularioVisible(true)
  }

  function abrirFormularioEdicion (cliente) {
    setClienteEnEdicion(cliente)
    setErrores({})
    setFormularioVisible(true)
  }

  function cerrarFormulario () {
    setFormularioVisible(false)
    setErrores({})
  }

  /**
   * Envia el cliente al back-end. Si el back-end responde con errores
   * de validacion se muestran bajo cada campo y el formulario sigue abierto.
   */
  async function guardar (cliente) {
    try {
      const resultado = await guardarCliente(cliente)

      if (resultado.errores) {
        setErrores(resultado.errores)
        return
      }

      mostrarMensaje(
        cliente.idCliente ? 'Cliente actualizado correctamente' : 'Cliente registrado correctamente'
      )
      cerrarFormulario()
      cargarClientes()

    } catch (error) {
      mostrarMensaje(error.message, 'error')
    }
  }

  async function eliminar (cliente) {
    try {
      await eliminarCliente(cliente.idCliente)
      mostrarMensaje('Cliente eliminado correctamente')
      cargarClientes()

    } catch (error) {
      mostrarMensaje(error.message, 'error')
    }
  }

  return (
    <section className="clientes">
      <Mensaje texto={mensaje} tipo={tipoMensaje} />

      <div className="barra">
        <h2>Clientes registrados</h2>
        <Boton texto="Registrar cliente" onClick={abrirFormularioNuevo} />
      </div>

      {formularioVisible && (
        <FormularioCliente
          cliente={clienteEnEdicion}
          errores={errores}
          onGuardar={guardar}
          onCancelar={cerrarFormulario}
        />
      )}

      <TablaClientes
        clientes={clientes}
        onEditar={abrirFormularioEdicion}
        onEliminar={eliminar}
      />

      {clientes.length > 0 && (
        <p className="total">Total: {clientes.length} clientes</p>
      )}
    </section>
  )
}

export default PaginaClientes
