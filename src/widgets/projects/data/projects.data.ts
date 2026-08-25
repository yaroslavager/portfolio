
interface Project {
    id: string,
  name: string;
  description: string;
  link: string;
  feature: string[];
  img: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Clothing Store",
    description: "Многостраничный интернет-магазин одежды. ",
    link: "https://clothing-store-ecru-two.vercel.app",
    feature: [
      "Система фильтрации и сортировки товаров",
      "Корзина покупок с сохранением состояния между сессиями",
      "Адаптивная верстка",
      "Строгая типизация"
    ],
    img: "./imgs/projects/clothingstore.jpg",
  },
  {
     id: "2",
    name: "Weather App",
    description:
      "Минималистичный трекер погоды.",
    link: "https://yaroslavager-weather-app.vercel.app/",
    feature: [
      "Переключение темы день/ночь",
      "Адаптивная верстка",
      "Сохранение состояние Zustand",
      "Прогноз каждый 3 часа"
    ],
    img: "./imgs/projects/weatherapp.jpg",
  },
  {
     id: "3",
    name: "ToDo List",
    description: "",
    link: "",
    feature: [
      "Чистый JavaScript",
      "Сохранение через localStorage",
      "Переключение темы"
    ],
    img: "./imgs/projects/todo.jpg",
  },
];
