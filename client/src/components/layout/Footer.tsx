import { Phone, Mail } from "lucide-react";

const Footer = () => {
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
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">IMPULSE RH</h3>
            <p className="text-gray-300">
              Transformando a gestão de talentos em um diferencial competitivo para sua empresa.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  onClick={() => scrollToSection('home')} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('about')} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('services')} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#556B2F]/50" />
                +55 (91) 8128-7004
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#556B2F]/50" />
                impulserch@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IMPULSE RH Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
