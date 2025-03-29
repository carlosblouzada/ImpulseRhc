import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-[#556B2F]">IMPULSE RH</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-[#556B2F] cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#556B2F] cursor-pointer"
            >
              Sobre
            </a>
            <a 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#556B2F] cursor-pointer"
            >
              Serviços
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#556B2F] cursor-pointer"
            >
              Contato
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#556B2F] text-white px-4 py-2 rounded-md hover:bg-[#445624] transition-colors"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              onClick={() => scrollToSection('home')} 
              className="block px-3 py-2 text-gray-700 hover:text-[#556B2F] cursor-pointer"
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-gray-700 hover:text-[#556B2F] cursor-pointer"
            >
              Sobre
            </a>
            <a 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-gray-700 hover:text-[#556B2F] cursor-pointer"
            >
              Serviços
            </a>
            <a 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-gray-700 hover:text-[#556B2F] cursor-pointer"
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
