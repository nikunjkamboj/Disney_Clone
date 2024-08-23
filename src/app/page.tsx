import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MovieCaroseul from "@/components/MovieCaroseul";
import { getUpcomingMovies, getTopRatedMovies, getPopularMovies } from '@/lib/getMovies';

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main>
      <div>
        <CarouselBannerWrapper />
      </div>
      <div className="flex flex-col space-y-2">
        <MovieCaroseul movies={upcomingMovies} title="Upcoming" />
        <MovieCaroseul movies={topRatedMovies} title="Top Rated" />
        <MovieCaroseul movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}


