const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#556B2F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
            <p className="text-gray-600 mb-4">
              A IMPULSE RH CONSULTORIA é especializada em transformar a gestão de talentos em um diferencial competitivo para sua empresa.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Missão</h3>
                <p className="text-gray-600">Transformar a gestão de talentos em um diferencial competitivo.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Visão</h3>
                <p className="text-gray-600">Ser referência em soluções de Recursos Humanos que promovam organizações mais saudáveis e produtivas.</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Valores</h3>
                <p className="text-gray-600">Excelência, Ética, Inovação e Foco em Resultados.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[600px]">
            <div className="rounded-lg shadow-xl bg-[#556B2F]/10 w-full h-full flex items-center justify-center p-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#556B2F]">Nossa Equipe</h3>
                <p className="text-gray-700 mb-4">
                  Contamos com profissionais experientes e qualificados em diversas áreas de Recursos Humanos, prontos para oferecer soluções personalizadas para sua empresa.
                </p>
                <p className="text-gray-700">
                  Nossa equipe multidisciplinar trabalha de forma integrada para garantir resultados efetivos e sustentáveis para nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
