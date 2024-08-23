import { Genres } from "./typing";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

async function GenreDropdown() {
    // const apiKey = '859c536f8fbfb8342f248000984cbaf3';
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en-US`;
    const options: RequestInit = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
    };

    const response = await fetch(url, options);
    const data = await response.json() as Genres;
    // console.log(data.genres);

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className="text-white flex justify-center items-center">
                    Genre<ChevronDown className="ml-1" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    {data.genres.map((genre) => (
                        <DropdownMenuItem className="cursor-pointer" key={genre.id}>
                            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                                {genre.name}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export default GenreDropdown;
