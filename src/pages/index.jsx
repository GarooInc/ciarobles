import { useStoreon } from "storeon/react"
import { routerKey } from "@storeon/router"
import Home from "./Home/Home"
import ProjectDetails from "./ProjectDetails/ProjectDetails"

function Page() {
    const { [routerKey]: route } = useStoreon(routerKey)

    let Component = null
    switch (route.match.page) {
        case "home":
            Component = <Home />
            break
        case "projects":
            Component = <ProjectDetails id={route.match.props.id} />;
            break
        default:
            Component = <h1>404</h1>
            break
    }

    return <main>{Component}</main>
}

export default Page
