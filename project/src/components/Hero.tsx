import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-10 px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Óculos de Grau com Estilo e Economia!
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Aproveite nossas promoções exclusivas e cuide da sua visão com qualidade.
      </p>

      {/* Botões lado a lado no mobile e desktop */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <a
          href="https://wa.me/SEUNUMERO"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center"
        >
          💬 Falar via WhatsApp
        </a>
        <a
          href="https://wa.me/SEUNUMERO?text=Quero%20agendar%20um%20exame"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center"
        >
          📅 Agendar um Exame
        </a>
      </div>

      {/* Três blocos informativos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-4 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2">🧾 Receita na Hora</h3>
          <p className="text-gray-600">Exame completo com resultado imediato.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2">💰 O Menor e Melhor Preço</h3>
          <p className="text-green-700">Cobrimos qualquer oferta.</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2">👓 Óculos Completos</h3>
          <p className="text-gray-600">A partir de R$ 89,90 com lente e armação.</p>
        </div>
      </div>
    </section>
  );
}