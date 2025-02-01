import { useState, useRef, useEffect } from "react";
import { ShoppingCart, User } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
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
            <img src="https://i.imgur.com/fBJcXWf.png" alt="LogoDevlivery" className="w-32 ml-28" />
            <div className="flex items-center space-x-6 pr-4">
                <ShoppingCart className="w-6 h-6 text-white cursor-pointer" />

                <div className="relative" ref={menuRef}>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
                        <User size={24} />
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden animate-fade-in">
                            {user ? (
                                <>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Meu Perfil</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Meu Carrinho</a>
                                    <hr />
                                    <button onClick={() => setUser(null)} className="w-full text-left px-4 py-2 hover:bg-gray-200">Sair</button>
                                </>
                            ) : (
                                <>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Login</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Criar Conta</a>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
