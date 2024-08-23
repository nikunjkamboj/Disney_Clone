import { notFound } from "next/navigation";
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies';
import MovieCarousel from "@/components/MovieCaroseul";
type Props = {
  params: {
    term: string;
  }
}

async function searchPage({ params: { term } }: Props) {
  if (!term) {
    notFound();
  }
  const termtouse = decodeURI(term)
  const movies = await getSearchedMovies(termtouse)
  const popularMovies = await getPopularMovies();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4 mt-32 xl:mt-32">
          <h1 className="text-6xl font-bold px-10">
            Result for {termtouse}
          </h1>
          <MovieCarousel title="movies" movies={movies} isvertical />
          <MovieCarousel title="you may also like" movies={popularMovies} />
        </div>
      </div>
    </>
  )
}

export default searchPage