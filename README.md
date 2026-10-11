# Sincro - Front-end con React

Componente front-end del proyecto Sincro construido con React y Vite,
consumiendo el servicio REST del back-end hecho en Spring Boot.

Evidencia GA7-220501096-AA4-EV03
Julian Andres Albarracin Martinez - Ficha 3336228

## Estructura

```
src/
├── main.jsx                      punto de entrada
├── App.jsx                       componente raiz y rutas
├── estilos.css                   hoja de estilos del proyecto
├── paginas/
│   ├── PaginaInicio.jsx          pantalla de bienvenida
│   ├── PaginaReserva.jsx         flujo de reserva de citas
│   └── PaginaClientes.jsx        modulo de clientes
├── componentes/
│   ├── Encabezado.jsx            barra superior y navegacion
│   ├── PiePagina.jsx             pie de pagina
│   ├── Boton.jsx                 boton principal y secundario
│   ├── Mensaje.jsx               aviso de confirmacion o error
│   ├── CampoTexto.jsx            campo de formulario con su error
│   ├── TarjetaServicio.jsx       tarjeta de un servicio del comercio
│   ├── SelectorDia.jsx           dias disponibles
│   ├── SelectorHora.jsx          horas libres del dia elegido
│   ├── ResumenReserva.jsx        resumen y confirmacion de la cita
│   ├── TablaClientes.jsx         listado de clientes
│   └── FormularioCliente.jsx     registro y edicion de clientes
└── servicios/
    └── api.js                    llamadas al servicio REST
```

Los trece componentes corresponden a los definidos y justificados en la
evidencia GA7-220501096-AA4-EV02.

## Requisitos

- Node.js 18 o superior
- El back-end `sincro-spring` en ejecucion en el puerto 8080
- MySQL con la base de datos `sincro`

## Ejecucion

```
npm install
npm run dev
```

Luego abrir `http://localhost:5173` en el navegador.

El back-end autoriza las peticiones desde ese puerto mediante la anotacion
`@CrossOrigin` del controlador `ClienteRestControlador`.

## Servicio REST que consume

| Metodo | Direccion | Que hace |
|---|---|---|
| GET | `/api/clientes` | lista los clientes |
| GET | `/api/clientes/{id}` | consulta un cliente |
| POST | `/api/clientes` | registra un cliente |
| PUT | `/api/clientes/{id}` | actualiza un cliente |
| DELETE | `/api/clientes/{id}` | elimina un cliente |

Las validaciones se resuelven en el back-end y regresan en formato JSON con
el nombre del campo y su mensaje, de modo que React las muestra bajo el
campo correspondiente sin duplicar las reglas.

## Estandares de codificacion aplicados

- Componentes en PascalCase: `TarjetaServicio`, `FormularioCliente`
- Funciones y variables en camelCase: `cargarClientes`, `clienteEnEdicion`
- Constantes en mayuscula: `SERVICIOS`, `DIAS`, `URL_BASE`
- Un componente por archivo, con el mismo nombre del componente
- Eventos en camelCase segun la convencion de React: `onClick`, `onChange`, `onSubmit`
- Todos los componentes y funciones documentados con comentarios
