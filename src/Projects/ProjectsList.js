import { Link } from 'react-router-dom'

const ProjectsList = (() => {
    return (
        <main className="ProjectsList">
            <ul>
                <li><Link to='chess'>Chess</Link></li>
            </ul>
            <ul>
                <li>test1</li>
            </ul>
            <ul>
                <li>test2</li>
            </ul>
            <ul>
                <li>test3</li>
            </ul>
            <ul>
                <li>test4</li>
            </ul>
        </main>
    )
})

export default ProjectsList