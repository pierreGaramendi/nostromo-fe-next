import Link from 'next/link'

export const Logo = () => {
    return (
        <div className="flex items-center cursor-pointer">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Nostromo Logo" />
            <Link href='/' className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white no-underline" aria-current="page">Nostromo</Link>
        </div>
    );
}