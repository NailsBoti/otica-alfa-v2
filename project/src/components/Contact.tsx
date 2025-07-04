import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Contato pelo site:
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`;
    
    window.open(`https://wa.me/5511976574077?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Entre em Contato</h2>
          <p className="text-xl text-gray-600">Estamos aqui para cuidar da sua visão</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col h-full">
            <div className="bg-white p-8 rounded-lg shadow-custom flex-grow flex flex-col">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">📍 Nossa Localização</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-xl">📍</span>
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-600">Rua Francisco Calado 65 - Vila Nova Cachoeirinha</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">📱</span>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-600">(11) 97657-4077</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-xl">📞</span>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-600">(11) 2400-6773</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-purple-500 text-xl">✉️</span>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-600">atendimento@oticaalfa.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-orange-500 text-xl">🕒</span>
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-gray-600">Segunda a Sábado - 9h às 18h</p>
                  </div>
                </div>
              </div>

              {/* Nossas Redes Sociais */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">📱 Nossas Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100066571098123" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors p-2 bg-blue-50 rounded-full hover:bg-blue-100"
                    title="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/otica_alfaa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-colors p-2 bg-pink-50 rounded-full hover:bg-pink-100"
                    title="Instagram"
                  >
                    <img 
                      src="/image copy.png" 
                      alt="Instagram" 
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                  <a 
                    href="https://www.tiktok.com/@oticas.alfa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-black transition-colors p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                    title="TikTok"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@%C3%93ticasAlfa/shorts" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 transition-colors p-2 bg-red-50 rounded-full hover:bg-red-100"
                    title="YouTube"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Botão WhatsApp alinhado */}
              <button
                onClick={() => window.open('https://wa.me/5511976574077?text=Olá! Gostaria de mais informações.', '_blank')}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                💬 Falar no WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col h-full">
            <div className="bg-white p-8 rounded-lg shadow-custom flex-grow flex flex-col">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Envie sua Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome *
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
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="flex-grow flex flex-col">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow resize-none"
                  />
                </div>

                {/* Botão de envio alinhado */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors mt-auto"
                >
                  📧 Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;