import { Search } from "lucide-react";

function SearchBar() {
    return (
        <div className="flex items-center gap-2 border border-gray-300 rounded-full w-full md:w-1/3 lg:w-1/4 px-4 py-2 bg-gray-200">
            <input
                type="text"
                placeholder="Buscar..."
                aria-label="Campo de busca"
                className="bg-transparent text-black outline-none w-full"
            />
            <Search size={24} className="text-gray-600 cursor-pointer" />
        </div>
    );
}

export default SearchBar;
