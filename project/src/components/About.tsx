import React from 'react';

const About = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511976574077?text=Olá! Gostaria de saber mais sobre a Ótica Alfa.', '_blank');
  };

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Sobre a Ótica Alfa</h2>
          <p className="text-xl text-gray-600">Cuidando da sua visão com qualidade e preço justo</p>
        </div>

        {/* Nossa História - Largura Total */}
        <div className="bg-white p-10 rounded-lg shadow-custom mb-12">
          <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Nossa História</h3>
          <div className="grid lg:grid-cols-2 gap-8 text-gray-600 text-lg leading-relaxed">
            <div className="space-y-6">
              <p>
                A história da Ótica Alfa começou com um sonho simples, mas transformador: tornar a saúde visual 
                acessível para todas as famílias brasileiras. Fundada no coração da Vila Nova Cachoeirinha, 
                nossa ótica nasceu da percepção de que muitas pessoas deixavam de cuidar da visão por falta 
                de opções com preços justos e atendimento humanizado.
              </p>
              
              <p>
                Desde o primeiro dia, estabelecemos um compromisso firme: oferecer óculos de qualidade 
                sem comprometer o orçamento familiar. Acreditamos que ver bem é um direito, não um privilégio. 
                Por isso, desenvolvemos parcerias estratégicas com fornecedores de confiança e criamos 
                um modelo de negócio que prioriza a acessibilidade sem abrir mão da excelência.
              </p>

              <p>
                Ao longo dos anos, nos tornamos mais do que uma simples ótica - somos um ponto de encontro 
                da comunidade, onde cada cliente é recebido como família. Nossa equipe se dedica a entender 
                as necessidades individuais de cada pessoa, oferecendo não apenas produtos, mas soluções 
                personalizadas para cada estilo de vida.
              </p>
            </div>
            
            <div className="space-y-6">
              <p>
                O que nos diferencia é nossa paixão genuína por transformar vidas através da visão. 
                Cada óculos entregue representa uma nova perspectiva, uma oportunidade de ver o mundo 
                com mais clareza e confiança. Nossos clientes não são apenas números - são histórias 
                de superação, conquistas e momentos especiais que temos o privilégio de fazer parte.
              </p>
              
              <p>
                Hoje, a Ótica Alfa é reconhecida na região como sinônimo de confiança, qualidade e 
                preços honestos. Continuamos crescendo, mas sempre mantendo nossos valores fundamentais: 
                transparência nas relações, compromisso com a qualidade e dedicação incansável ao 
                bem-estar visual de nossos clientes.
              </p>

              <p>
                Nossa jornada é marcada por milhares de sorrisos satisfeitos, famílias que encontraram 
                em nós a solução ideal para suas necessidades visuais. Cada dia é uma nova oportunidade 
                de fazer a diferença na vida de alguém, e é isso que nos motiva a continuar evoluindo 
                e oferecendo sempre o melhor para você.
              </p>
            </div>
          </div>
        </div>

        {/* Missão, Visão e Valores - Largura Total */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-custom text-center hover-scale">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Nossa Missão</h4>
            <p className="text-gray-600">
              Proporcionar uma visão mais clara e acessível para todos, oferecendo produtos de qualidade 
              com preços justos e atendimento humanizado que transforma vidas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-custom text-center hover-scale">
            <div className="text-4xl mb-4">👀</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Nossa Visão</h4>
            <p className="text-gray-600">
              Ser a ótica de referência nacional, reconhecida pela democratização do acesso à saúde visual 
              e pela excelência no relacionamento com nossos clientes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-custom text-center hover-scale">
            <div className="text-4xl mb-4">💎</div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Nossos Valores</h4>
            <p className="text-gray-600">
              Transparência, qualidade, acessibilidade, inovação e compromisso genuíno com a saúde visual 
              e bem-estar de cada pessoa que confia em nosso trabalho.
            </p>
          </div>
        </div>

        {/* Diferenciais da Ótica Alfa - Nova Seção */}
        <div className="bg-white p-10 rounded-lg shadow-custom mb-12">
          <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">Por que escolher a Ótica Alfa?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Exame Gratuito</h4>
              <p className="text-gray-600">
                Exame de vista gratuito ao adquirir seus óculos conosco. Cuidamos da sua visão do início ao fim.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Preços Justos</h4>
              <p className="text-gray-600">
                Óculos completos a partir de R$ 89,90. Qualidade premium sem comprometer seu orçamento.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Entrega Nacional</h4>
              <p className="text-gray-600">
                Já tem receita? Fazemos seus óculos e entregamos em qualquer lugar do Brasil com segurança.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">💳</div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Facilidade no Pagamento</h4>
              <p className="text-gray-600">
                Parcelamos em até 10x sem juros. Condições especiais para você cuidar da sua visão.
              </p>
            </div>
          </div>
        </div>

        {/* Depoimentos - Nova Seção */}
        <div className="bg-white p-10 rounded-lg shadow-custom mb-12">
          <h3 className="text-3xl font-semibold mb-8 text-gray-800 text-center">O que nossos clientes dizem</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 italic mb-4">
                "Atendimento excepcional e preços que cabem no bolso. Recomendo para toda família!"
              </p>
              <p className="font-semibold text-gray-800">- Maria Silva</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 italic mb-4">
                "Qualidade incrível e entrega rápida. Meus óculos chegaram perfeitos em casa!"
              </p>
              <p className="font-semibold text-gray-800">- João Santos</p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-4">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 italic mb-4">
                "Exame gratuito e óculos de qualidade. Melhor custo-benefício da região!"
              </p>
              <p className="font-semibold text-gray-800">- Ana Costa</p>
            </div>
          </div>
        </div>

        {/* Call to Action - Largura Total */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-10 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Venha fazer parte da nossa história!</h3>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Estamos prontos para cuidar da sua visão com carinho, profissionalismo e a dedicação 
            que você merece. Sua satisfação é nossa maior conquista.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-colors text-lg"
            >
              💬 Converse conosco no WhatsApp
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('agendamento');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-4 rounded-full font-semibold transition-colors text-lg"
            >
              📅 Agendar Exame Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;