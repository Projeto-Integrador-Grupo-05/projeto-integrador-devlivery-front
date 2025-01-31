import { useState, useRef, useEffect } from "react";
import { Menu, Search, User } from "lucide-react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav className="flex justify-between items-center bg-gray-900 text-white p-4">
            {/*Corrigir o link para home pela logo*/}
            <img src="https://i.imgur.com/fBJcXWf.png" alt="LogoDevlivery" className="w-32"></img>

            <div className="flex items-center gap-2 border rounded-full w-full md:w-1/3 lg:w-1/4 px-4 py-2 bg-gray-200">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-transparent text-black outline-none w-full"
                />
                <Search size={24} className="text-gray-600" />
            </div>


            <div className="relative" ref={menuRef}>
                <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                    <User size={24} />
                </button>

                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden animate-fade-in">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">Meu Perfil</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">Meu Carrinho</a>
                        <hr />
                        <button className="w-full text-left px-4 py-2 hover:bg-gray-200">Sair</button>
                    </div>
                )}
            </div>
        </nav>
    );
}
