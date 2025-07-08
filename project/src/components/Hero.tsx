import React from 'react';

const Hero = () => {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/5511976574077?text=Olá! Gostaria de saber mais sobre os óculos da Ótica Alfa.',
      '_blank'
    );
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
      <div className="w-full">
        <img
          src="/garoto-oculos.png"
          alt="Garoto com óculos"
          className="w-full h-auto object-cover object-center mb-6"
        />
      </div>

      {/* Botões */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center shadow-lg"
          >
            <img
              src="/imagem - botão - whatsapp.png"
              alt="WhatsApp"
              className="w-6 h-6 mr-2"
            />
            Falar via WhatsApp
          </button>

          <button
            onClick={scrollToSchedule}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold flex items-center shadow-lg"
          >
            <img
              src="/imagem - botão - agendamento.png"
              alt="Agendar"
              className="w-6 h-6 mr-2"
            />
            Agendar um Exame
          </button>
        </div>

        {/* Caixas informativas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">💳 Parcelamos em até 10x</h3>
            <p className="text-sm text-blue-600">Consulte nossos planos de parcelamento</p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">💰 Consulte Preços</h3>
            <p className="text-sm text-green-600">Condições especiais para você</p>
          </div>
          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">🚚 Entrega para todo Brasil</h3>
            <p className="text-sm text-purple-600">Se já tiver sua receita, receba seu óculos em casa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;