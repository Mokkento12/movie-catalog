import { mockMovies } from "@/lib/movies";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default async function MoviePage({ params }: Props) {
  const movie = mockMovies.find((m) => m.id === Number(params.id));

  if (!movie) {
    notFound();
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
      <p className="text-gray-500 mb-4">Год выпуска: {movie.year}</p>
      <div className="relative w-[300px] h-[450px]">
        <Image
          src={movie.poster}
          alt={movie.title}
          fill
          className="rounded shadow object-cover"
        />
      </div>
      <p>{movie.description}</p>
    </main>
  );
}
