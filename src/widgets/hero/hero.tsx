import "./hero.scss";
function Hero() {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1 className="hero__title">Frontend developer</h1>
        <p className="hero__description">
          Начинающий фронтенд-разработчик. Активно изучаю React и TypeScript,
          закрепляя теорию на реальных пет-проектах. Учусь писать чистый,
          структурированный код, использовать стейт-менеджеры (Zustand) и
          верстать по методологии BEM/SCSS. Стремлюсь к тому, чтобы каждый мой
          интерфейс был аккуратным, отзывчивым и удобным для пользователя.
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
