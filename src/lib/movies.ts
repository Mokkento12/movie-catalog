export type Movie = {
  id: number;
  title: string;
  year: number;
  poster: string;
  description: string;
};

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    poster: "/posters/inception.jpg",
    description: "Фильм про сны и слои реальности.",
  },
  {
    id: 2,
    title: "The Matrix",
    year: 1999,
    poster: "/posters/matrix.jpg",
    description: "Мир — это симуляция, созданная машинами.",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    poster: "/posters/interstellar.jpg",
    description: "Путешествие через червоточину для спасения человечества.",
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    poster: "/posters/dark-knight.jpg",
    description: "Бэтмен против Джокера в Готэм-сити.",
  },
];
