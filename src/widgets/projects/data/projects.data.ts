interface Project {
  name: string;
  description: string;
  link: string;
  feature: string[];
  img: string;
}

export const projects: Project[] = [
  {
    name: "Clothing Store",
    description: "Многостраничный интернет-магазин одежды. ",
    link: "",
    feature: [
      "Система фильтрации и сортировки товаров",
      "Корзина покупок с сохранением состояния между сессиями",
      "Адаптивная верстка",
      "Строгая типизация"
    ],
    img: "",
  },
  {
    name: "Weather App",
    description:
      "Минималистичный трекер погоды с интеграцией стороннего Api. Создан с целью практики с асинхронными запросами, строгой типизацией и управления глобальным состоянием.",
    link: "",
    feature: [
      "Переключение темы день/ночь",
      "Адаптивная верстка",
      "Сохранение состояние Zustand",
      "Прогноз каждый 3 часа"
    ],
    img: "",
  },
  {
    name: "ToDo list",
    description: "",
    link: "",
    feature: [
      "Чистый JavaScript",
      "Сохранение через localStorage",
      "Переключение темы"
    ],
    img: "",
  },
];
