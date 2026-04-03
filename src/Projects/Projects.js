import { Route, Routes } from "react-router-dom"
import ProjectsList from "./ProjectsList"
import Chess from "./Chess"

const Projects = (() => {
    return (
        <main className="Projects">
            <Routes>
                <Route
                    index
                    element={<ProjectsList
                    />}
                />
                <Route
                    path="chess"
                    element={<Chess
                    />}
                />
            </Routes>
        </main>
    )
})

export default Projects