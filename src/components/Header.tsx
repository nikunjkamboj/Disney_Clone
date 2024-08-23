import Link from "next/link";
import Image from 'next/image';
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";


function Header() {
    return (
        <>
            <header className="fixed w-full z-20 top-0  flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
                <Link href='/'>
                    <Image className="cursor-pointer invert-0 dark:invert" src='/disney_logo.png' alt="logo" height={100} width={120} />
                </Link>
                <div className="flex space-x-2">
                    <GenreDropdown/>
                    <SearchInput/>
                    <ThemeToggler />
                </div>
            </header>
        </>
    )
}

export default Header