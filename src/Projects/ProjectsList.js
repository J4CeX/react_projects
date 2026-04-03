import { Link } from 'react-router-dom'

const ProjectsList = (() => {
    return (
        <main className="ProjectsList">
            <ul>
                <li><Link to='chess'>Chess</Link></li>
            </ul>
        </main>
    )
})

export default ProjectsList