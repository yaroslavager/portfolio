import "./hero.scss";
function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__title">Frontend developer</h1>
        <p className="hero__description">
          Создаю веб-приложения на React и TypeScript: от адаптивной вёрстки до
          работы с API и управления состоянием. <br />
           Код в данных проектах
          написан самостоятельно. ИИ использовался для объяснения концепций,
          поиска информации и разбора ошибок.
        </p>
        <button className="hero__button">Проекты</button>
      </div>
      <div className="hero__right">
        <img className="hero__img" src="./imgs/hero/yara2.png" alt="" />
      </div>
    </section>
  );
}

export default Hero;
