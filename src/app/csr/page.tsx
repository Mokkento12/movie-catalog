"use client"; // клиентский компонент

import { useState, useEffect } from "react";
import { mockMovies, Movie } from "@/lib/movies";
import Image from "next/image";

export default function MoviesClientPage() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // имитация fetch
    setTimeout(() => {
      setMovies(mockMovies);
    }, 1000);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎬 Каталог фильмов (CSR)</h1>
      {movies.length === 0 ? (
        <p>Загрузка...</p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <li key={movie.id} className="text-center">
              <div className="relative w-[300px] h-[450px]">
                <Image
                  src={movie.poster}
                  alt={movie.title}
                  fill
                  className="rounded shadow object-cover"
                />
              </div>
              <p className="mt-2 font-semibold">{movie.title}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
