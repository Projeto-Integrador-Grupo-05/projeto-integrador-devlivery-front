import { SearchIcon } from "lucide-react";

function Search() {
    return (
        <div className="flex items-center gap-2 border rounded-full w-full md:w-1/3 lg:w-1/4 px-4 py-2 bg-gray-200">
            <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent text-black outline-none w-full"
            />
            <SearchIcon size={24} className="text-gray-600" />
        </div>
    )
}
