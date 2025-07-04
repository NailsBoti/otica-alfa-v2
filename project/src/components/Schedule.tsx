import React, { useState } from 'react';

const Schedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    datetime: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de agendar um exame:
    
Nome: ${formData.name}
Telefone: ${formData.phone}
Melhor horário: ${formData.datetime}
Mensagem: ${formData.message}`;
    
    window.open(`https://wa.me/5511976574077?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="agendamento" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Agendar Exame</h2>
          <p className="text-xl text-gray-600 mb-8">
            Aqui você realiza seu exame de vista gratuitamente ao adquirir seus óculos com a gente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-custom">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">💡 Como funciona?</h3>
              <ul className="space-y-6 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Exame de vista gratuito</h4>
                    <p className="text-lg">Realizamos seu exame sem custo ao adquirir seus óculos conosco</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Já tem receita?</h4>
                    <p className="text-lg">Fazemos seus óculos e enviamos para qualquer lugar do país</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Lentes a preço de fábrica</h4>
                    <p className="text-lg">Com parcelas acessíveis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Atendimento personalizado</h4>
                    <p className="text-lg">Ajudamos você a escolher a armação ideal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Qualidade garantida</h4>
                    <p className="text-lg">Produtos de qualidade com garantia e suporte completo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Facilidade de pagamento</h4>
                    <p className="text-lg">Parcelamos em até 10x sem juros para facilitar sua compra</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-custom">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Agendar Exame</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Melhor dia e horário
                </label>
                <input
                  type="text"
                  value={formData.datetime}
                  onChange={(e) => setFormData({...formData, datetime: e.target.value})}
                  placeholder="Ex: Segunda-feira pela manhã"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                📅 Agendar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;