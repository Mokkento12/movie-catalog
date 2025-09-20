import { mockMovies } from "@/lib/movies";
import Image from "next/image";

export const revalidate = 30; // ISR: обновление каждые 30 секунд

export default async function MoviesPage() {
  // Имитация fetch (чтобы было похоже на реальное API)
  const movies = mockMovies;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎬 Каталог фильмов</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <li key={movie.id} className="text-center">
            <Image
              width={1383}
              height={2048}
              src={movie.poster}
              alt={movie.title}
              className="rounded shadow"
            />
            <p className="mt-2 font-semibold">{movie.title}</p>
            <p className="text-gray-500 text-sm">{movie.year}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
