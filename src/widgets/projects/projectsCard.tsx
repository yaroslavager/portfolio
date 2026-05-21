
import { projects } from "./data/projects.data"
function ProjectsCard(){
    console.log(projects)
    return(
        <>
        {projects.map(project=>(
        <div key={project.name} className="projects-card__wrapper">
<div className="projects-card__left">
    <h3 className="projects-card__project-name">{project.name}</h3>
    <p>{project.description}</p>
    <a className="project-card__link" href={project.link}>Перейти</a>
</div>
<div className="projects-card__right"><img src={project.img} alt="" /></div>

        </div>
)
        )
       } 
</>
    )
}
export default ProjectsCard