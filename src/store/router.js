import { createRouter } from "@storeon/router"

export default createRouter([
    ["/", () => ({ page: "home" })],
    ["/projects/*", 
    (id) => ({ page: "projects", props: { id } }),
    ], // ruta para detalles del proyecto
])
