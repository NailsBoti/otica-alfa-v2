import React from 'react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511976574077?text=Olá! Gostaria de saber mais sobre os óculos da Ótica Alfa.', '_blank');
  };

  const scrollToSchedule = () => {
    const element = document.getElementById('agendamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-16 bg-white">
      {/* Banner Principal - Largura Total */}
      <div className="w-full mb-12">
        <img 
          src="/111.png" 
          alt="Banner Ótica Alfa - Óculos Completo por R$ 89,90 e Lente Blue Light R$ 199,99" 
          className="w-full h-auto object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 hover-scale shadow-lg flex items-center space-x-3 min-w-[280px] justify-center"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
            <span>Falar via WhatsApp</span>
          </button>
          
          <button
            onClick={scrollToSchedule}
            className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 hover-scale shadow-lg flex items-center space-x-3 min-w-[280px] justify-center"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span>Agendar um Exame</span>
          </button>
        </div>

        {/* Informações de Parcelamento e Entrega */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md hover-scale">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Parcelamos em até 10x</h3>
              <p className="text-lg font-semibold text-blue-600">Consulte nossos planos</p>
              <p className="text-lg font-semibold text-blue-600">de parcelamento</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover-scale">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Consulte Preços</h3>
              <p className="text-lg font-semibold text-green-600">Condições especiais</p>
              <p className="text-gray-600">para você</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover-scale">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Entrega para todo Brasil</h3>
              <p className="text-lg font-semibold text-purple-600">Caso já tenha sua receita</p>
              <p className="text-lg font-semibold text-purple-600">receba seu óculos em sua casa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;