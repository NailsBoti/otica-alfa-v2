import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-otica-alfa.png" 
              alt="Ótica Alfa" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-gray-800">Ótica Alfa</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('produtos')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Produtos
            </button>
            <button onClick={() => scrollToSection('agendamento')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Agendar Exame
            </button>
            <button onClick={() => scrollToSection('dicas')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Dicas
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-800 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button onClick={() => scrollToSection('inicio')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Sobre
              </button>
              <button onClick={() => scrollToSection('produtos')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Produtos
              </button>
              <button onClick={() => scrollToSection('agendamento')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Agendar Exame
              </button>
              <button onClick={() => scrollToSection('dicas')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Dicas
              </button>
              <button onClick={() => scrollToSection('contato')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;