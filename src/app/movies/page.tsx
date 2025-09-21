import { mockMovies } from "@/lib/movies";
import Image from "next/image";
import Link from "next/link";

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
            <Link
              href={`/movies/${movie.id}`}
              className="block hover:opacity-80"
            >
              <div className="relative w-[300px] h-[450px]">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="rounded shadow object-cover"
                />
              </div>

              <p className="mt-2 font-semibold">{movie.title}</p>
              <p className="text-gray-500 text-sm">{movie.year}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
