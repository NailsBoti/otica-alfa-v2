import React from 'react';

const Tips = () => {
  const tips = [
    {
      title: "Como saber se você precisa usar óculos?",
      content: "Quando sua vista começa a embaçar para longe ou para perto, dores de cabeça, perda de foco — é um sinal de que sua saúde visual necessita de óculos para auxílio.",
      icon: "🤔"
    },
    {
      title: "Benefícios das lentes blue light",
      content: "Impedem a progressão do grau, diminuem dores de cabeça e oferecem conforto para o uso de televisores e celulares.",
      icon: "🔵"
    },
    {
      title: "Por que fazer exame de vista regularmente?",
      content: "É fundamental realizar exames de vista anualmente, mesmo que não haja sintomas, pois muitas doenças oculares são silenciosas, como glaucoma, catarata e degeneração macular.",
      icon: "👁️"
    },
    {
      title: "Cuidados essenciais com seus óculos",
      content: "A higienização das lentes deve ser feita com água corrente e detergente neutro, secando com lenço de papel. Não usar álcool e evitar vapor quente para não danificar as lentes.",
      icon: "🧼"
    }
  ];

  return (
    <section id="dicas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Dicas para sua Visão</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprenda como cuidar da sua visão, proteger seus olhos da luz azul e identificar sinais de problemas visuais. 
            Dicas práticas direto dos especialistas da Ótica Alfa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-custom hover-scale">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{tip.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">💡 Dica Importante</h3>
            <p className="text-lg mb-6">
              Ver bem custa pouco. Confira nossas promoções e cuide da sua visão com qualidade e preço justo!
            </p>
            <button
              onClick={() => window.open('https://wa.me/5511976574077?text=Olá! Gostaria de saber mais sobre cuidados com a visão.', '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              💬 Fale com nossos especialistas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;