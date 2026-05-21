import "./homePage.scss"
import Header from "../widgets/header/header"
import Hero from "../widgets/hero/hero"
import Projects from "../widgets/projects/projects"
function HomePage(){
    return(
        
        <div className="container">
<Header/>
<main>
<Hero/>

<Projects/>
</main>
</div>
        
    )
}
export default HomePage