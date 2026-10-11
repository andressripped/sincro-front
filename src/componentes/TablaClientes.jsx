/**
 * Tabla con los clientes registrados y sus acciones.
 * Solo se encarga de mostrar: quien consulta los datos es la pagina,
 * y quien decide que hacer al editar o eliminar tambien.
 */
function TablaClientes ({ clientes, onEditar, onEliminar }) {
  if (clientes.length === 0) {
    return <p className="aviso">Todavia no hay clientes registrados.</p>
  }

  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre completo</th>
          <th>Telefono</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.idCliente}>
            <td>{cliente.idCliente}</td>
            <td>{cliente.nombreCompleto}</td>
            <td>{cliente.telefonoContacto}</td>
            <td>{cliente.emailUsuario}</td>
            <td className="acciones">
              <button type="button" className="enlace" onClick={() => onEditar(cliente)}>
                Editar
              </button>
              <button type="button" className="enlace-rojo" onClick={() => onEliminar(cliente)}>
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaClientes
