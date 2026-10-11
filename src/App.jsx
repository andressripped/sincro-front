import { Routes, Route } from 'react-router-dom'

import Encabezado from './componentes/Encabezado.jsx'
import PiePagina from './componentes/PiePagina.jsx'
import PaginaInicio from './paginas/PaginaInicio.jsx'
import PaginaReserva from './paginas/PaginaReserva.jsx'
import PaginaClientes from './paginas/PaginaClientes.jsx'

/**
 * Componente raiz de la aplicacion.
 * Define el marco comun (encabezado y pie) y las rutas de cada pantalla.
 */
function App () {
  return (
    <>
      <Encabezado />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/reservar" element={<PaginaReserva />} />
          <Route path="/clientes" element={<PaginaClientes />} />
        </Routes>
      </main>

      <PiePagina />
    </>
  )
}

export default App
