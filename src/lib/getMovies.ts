
import { SearchResults } from "@/components/typing";


async function fetchFromTMDB(url: URL, catchTime?: number) {
    url.searchParams.set("include_adult", "false");
    url.searchParams.set("include_video", "false");
    url.searchParams.set("sort_by", "popularity.desc");
    url.searchParams.set("languge", "en_US");
    url.searchParams.set("page", "1");

    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
        next: {
            revalidate: catchTime || 60 * 60 * 24
        },

    };

    const response = await fetch(url.toString(), options);
    const data = (await response.json()) as SearchResults;
    console.log(data);
    return data
}

export async function getUpcomingMovies() {
   
    const url = new URL(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=hi-US&page=1`);
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getTopRatedMovies() {
    const url = new URL(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=hi-US&page=1`);
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getPopularMovies() {
    const url = new URL(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=hi-US&page=1`);
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
    const url = new URL(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=hi-US&page=1`);
    keywords && url.searchParams.set("with_keywords", keywords);
    id && url.searchParams.set("with_genres", id);
    const data = await fetchFromTMDB(url);
    return data.results;
}

export async function getSearchedMovies(term: string) {
    const url = new URL(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`);
    url.searchParams.set("query", term);
    const data = await fetchFromTMDB(url);
    return data.results;
}




