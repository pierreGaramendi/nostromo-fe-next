import { Logo } from "../logo/logo";

export const Topbar = () => {
    return (
        <header className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap items-center justify-between p-4 lg:mx-20">
                <Logo></Logo>
                <div id="mega-menu-full" className="text-lg	items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-2">
                    Menu
                </div>
                <div className="w-full max-w-xs order-3">
                    Autocomplete
                </div>
                <div className="flex items-center md:order-4">
                    Config
                </div>
            </div>
        </header>
    );
}