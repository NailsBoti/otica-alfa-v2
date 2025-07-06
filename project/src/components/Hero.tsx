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
      {/* Banner Principal */}
      <div className="w-full mb-12">
        <img 
          src="/111.png" 
          alt="Banner Ótica Alfa" 
          className="w-full h-auto object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 space-y-10">
        {/* Botões lado a lado */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-lg flex items-center space-x-3 justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c..."/>
            </svg>
            <span>Falar via WhatsApp</span>
          </button>

          <button
            onClick={scrollToSchedule}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-lg flex items-center space-x-3 justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3h-1V1h-2v2H8V1H6v2..."/>
            </svg>
            <span>Agendar um Exame</span>
          </button>
        </div>

        {/* Caixas de informação lado a lado */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Parcelamos em até 10x</h3>
            <p className="text-sm text-blue-600">Consulte nossos planos de parcelamento</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Consulte Preços</h3>
            <p className="text-sm text-green-600">Condições especiais para você</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Entrega para todo Brasil</h3>
            <p className="text-sm text-purple-600">Receba seu óculos em casa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;