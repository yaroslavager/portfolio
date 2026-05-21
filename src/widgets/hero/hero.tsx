import "./hero.scss"
function Hero(){
    return(
        <section className="hero">
            <div className="hero__left">
            <h1 className="hero__title">Frontend developer</h1>
            <p>Text</p>
            </div>
            <div className="hero__right"><img className="hero__img" src="./imgs/hero/yara1.png" alt="" /></div>
        </section>
    )
}

export default Hero