import "./projects.scss"
import ProjectsCard from "./projectsCard"

function Projects(){
    return(
        <section id="projects" className="projects">
        <h2 className="projects__title">Проекты</h2>
        <ProjectsCard/>
        </section>
    )
}
export default Projects