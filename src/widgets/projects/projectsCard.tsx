
import { projects } from "./data/projects.data"
import "./projectsCard.scss"
function ProjectsCard(){
    console.log(projects)
    return(
        <>
        {projects.map(project=>(
        <div key={project.id} className={`projects-card__wrapper project-card__wrapper-${project.id}`}>
<div className="projects-card__left">
    <h3 className="projects-card__project-name">{project.name}</h3>
    <p className="projects-card__description">{project.description}</p>
    <ul>{project.feature.map((el, index)=>(
        <li className="projects-card__list" key={index}>{el}</li>
    ))}</ul>
    <a className="projects-card__link" href={project.link}>Перейти</a>
</div>
<div className="projects-card__right"><img className="projects-card__img" src={project.img} alt="" /></div>

        </div>
)
        )
       } 
</>
    )
}
export default ProjectsCard