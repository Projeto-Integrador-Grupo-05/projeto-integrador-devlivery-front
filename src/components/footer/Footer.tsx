import { Link } from "react-router-dom";
import { FacebookLogo, InstagramLogo, YoutubeLogo, XLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-[#002914] text-[#fff6cc] py-8 mt-auto">
      <div className="container mx-auto flex flex-col items-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-6 w-full max-w-6xl text-center md:text-left">
          
          <div>
            <h3 className="text-[#ff3c00] font-semibold mb-3">Institucional</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ff3c00]">Quem somos</a></li>
              <li><a href="#" className="hover:text-[#ff3c00]">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#ff3c00] font-semibold mb-3">Categorias</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ff3c00]">Alimentos</a></li>
              <li><a href="#" className="hover:text-[#ff3c00]">Bebidas</a></li>
              <li><a href="#" className="hover:text-[#ff3c00]">Cuidados Pessoais</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#ff3c00] font-semibold mb-3">Central de Atendimento</h3>
            <ul className="space-y-2">
              <li><a href="tel:08007796761" className="hover:text-[#ff3c00]">9999 999 9999</a></li>
              <li><a href="#" className="hover:text-[#ff3c00]">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-[#ff3c00] font-semibold mb-3">Nossas Redes Sociais</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="group">
                <FacebookLogo size={32} className="text-[#fff6cc] transition duration-300 ease-in-out group-hover:text-blue-700" />
              </a>
              <a href="#" className="group">
                <InstagramLogo size={32} className="text-[#fff6cc] transition duration-300 ease-in-out group-hover:text-orange-600" />
              </a>
              <a href="#" className="group">
                <YoutubeLogo size={32} className="text-[#fff6cc] transition duration-300 ease-in-out group-hover:text-red-600" />
              </a>
              <a href="#" className="group">
                <XLogo size={32} className="text-[#fff6cc] transition duration-300 ease-in-out group-hover:text-gray-700" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="text-center text-sm border-t border-[#fff6cc] mt-6 pt-4">
        2025 © Todos os Direitos Reservados | Política de Privacidade
      </div>
    </footer>
  );
}

export default Footer;
