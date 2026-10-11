// Direccion del servicio REST publicado por el back-end en Spring Boot.
const URL_BASE = 'http://localhost:8080/api/clientes'

/**
 * Consulta todos los clientes registrados.
 */
export async function listarClientes () {
  const respuesta = await fetch(URL_BASE)

  if (!respuesta.ok) {
    throw new Error('No se pudo consultar el listado de clientes')
  }

  return respuesta.json()
}

/**
 * Consulta un cliente por su identificador.
 */
export async function buscarCliente (id) {
  const respuesta = await fetch(`${URL_BASE}/${id}`)

  if (!respuesta.ok) {
    throw new Error('No se encontro el cliente solicitado')
  }

  return respuesta.json()
}

/**
 * Registra un cliente nuevo o actualiza uno existente.
 * Devuelve los errores de validacion cuando el back-end los reporta.
 */
export async function guardarCliente (cliente) {
  const esEdicion = Boolean(cliente.idCliente)

  const respuesta = await fetch(
    esEdicion ? `${URL_BASE}/${cliente.idCliente}` : URL_BASE,
    {
      method: esEdicion ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cliente)
    }
  )

  if (respuesta.status === 400 || respuesta.status === 409) {
    return { errores: await respuesta.json() }
  }

  if (!respuesta.ok) {
    throw new Error('No se pudo guardar el cliente')
  }

  return { cliente: await respuesta.json() }
}

/**
 * Elimina el cliente indicado.
 */
export async function eliminarCliente (id) {
  const respuesta = await fetch(`${URL_BASE}/${id}`, { method: 'DELETE' })

  if (!respuesta.ok) {
    throw new Error('No se pudo eliminar el cliente')
  }
}
