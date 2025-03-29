import { ChevronRight } from "lucide-react";

const HeroSection = () => {
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
    <section id="home" className="pt-20 bg-gradient-to-b from-[#556B2F]/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Transformando Gestão em Resultados
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Soluções estratégicas em Recursos Humanos para impulsionar o crescimento da sua empresa
            </p>
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-[#556B2F] text-white px-8 py-3 rounded-md text-lg hover:bg-[#445624] transition-colors inline-flex items-center"
            >
              Saiba Mais
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="relative">
  <div className="rounded-lg shadow-2xl bg-[#556B2F]/20 h-80 flex items-center justify-center">
    
    <img 
      src="/src/assets/logo.jpg" 
      alt="Descrição da imagem" 
      className="absolute inset-0 w-full h-full object-cover rounded-lg"
    />
    {/* <div className="text-3xl font-bold text-[#556B2F] p-8 text-center relative z-10">
      IMPULSE RH CONSULTORIA<br/>
      <span className="text-xl font-normal mt-4 block">Transformando talentos em resultados</span>
    </div> */}
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;
