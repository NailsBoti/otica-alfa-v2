import React from 'react';

const Products = () => {
  const openWhatsApp = (product: string) => {
    const message = `Olá! Gostaria de saber mais sobre: ${product}`;
    window.open(`https://wa.me/5511976574077?text=${encodeURIComponent(message)}`, '_blank');
  };

  const products = [
    {
      title: "Multi Focal",
      description: "Lentes multifocais de qualidade",
      price: "A partir de R$149,90",
      icon: "🔍",
      hasLogo: false
    },
    {
      title: "Óculos de Sol",
      description: "Proteção e estilo para seus olhos",
      price: "A partir de R$99,90",
      icon: "🕶️",
      hasLogo: false
    },
    {
      title: "Linha Hang Loose",
      description: "Para seu óculos de grau",
      price: "A partir de R$280,00",
      icon: "🏄‍♂️",
      hasLogo: true
    },
    {
      title: "Hang Loose Solar",
      description: "Óculos de sol estilosos",
      price: "A partir de R$320,00",
      icon: "🌊",
      hasLogo: true
    }
  ];

  const specialPromotions = [
    {
      title: "Óculos Completos",
      subtitle: "com receita",
      price: "R$89,90",
      originalPrice: "R$149,90",
      discount: "40% OFF",
      icon: "👓",
      color: "from-blue-500 to-blue-700",
      popular: false
    },
    {
      title: "Exame + Óculos",
      subtitle: "exame gratuito",
      price: "R$149,90",
      originalPrice: "R$199,90",
      discount: "25% OFF",
      icon: "🔍",
      color: "from-green-500 to-green-700",
      popular: true
    },
    {
      title: "Blue Light",
      subtitle: "com armação",
      price: "R$199,00",
      originalPrice: "R$299,00",
      discount: "33% OFF",
      icon: "🔵",
      color: "from-purple-500 to-purple-700",
      popular: false
    }
  ];

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-gradient">Produtos e Promoções</h2>
          <p className="text-xl text-gray-600">Promoções que cabem no seu bolso</p>
        </div>

        {/* Products Grid - Layout Uniforme */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-custom hover-scale flex flex-col h-full">
              {/* Área das Imagens - Altura Fixa */}
              <div className="h-20 flex items-center justify-center p-4">
                {product.hasLogo ? (
                  <img 
                    src="/image.png" 
                    alt="Hang Loose Logo" 
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-4xl">{product.icon}</span>
                )}
              </div>
              
              {/* Área dos Títulos e Descrições - SEM ESPAÇO ENTRE ELES */}
              <div className="px-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 leading-tight mb-1">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-tight">{product.description}</p>
              </div>
              
              {/* Área dos Preços - Altura Fixa */}
              <div className="h-8 flex items-center justify-center px-4 mt-3 mb-4">
                <p className="text-lg font-bold text-blue-600 text-center">{product.price}</p>
              </div>
              
              {/* Área dos Botões - Altura Fixa */}
              <div className="h-12 px-4 pb-4 mt-auto">
                <button
                  onClick={() => openWhatsApp(product.title)}
                  className="w-full h-full bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium text-sm flex items-center justify-center"
                >
                  Consultar no WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Promotions - Layout Uniforme */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3 text-gradient">🎉 Promoções Especiais</h3>
            <p className="text-lg text-gray-600">Ofertas imperdíveis por tempo limitado!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {specialPromotions.map((promo, index) => (
              <div 
                key={index} 
                className={`relative bg-gradient-to-br ${promo.color} rounded-2xl text-white shadow-2xl hover-scale transform transition-all duration-300 hover:shadow-3xl ${promo.popular ? 'scale-105 ring-4 ring-yellow-400' : ''} flex flex-col h-full`}
              >
                {/* Popular Badge */}
                {promo.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-gray-800 px-3 py-1.5 rounded-full text-xs font-bold animate-pulse">
                      ⭐ MAIS POPULAR
                    </div>
                  </div>
                )}

                {/* Discount Badge */}
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2.5 py-1 rounded-full text-xs font-bold animate-bounce">
                  {promo.discount}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  {/* Área dos Ícones - Altura Fixa */}
                  <div className="h-16 flex items-center justify-center mb-4">
                    <span className="text-5xl animate-float">{promo.icon}</span>
                  </div>

                  {/* Área dos Títulos e Subtítulos - SEM ESPAÇO ENTRE ELES */}
                  <div className="text-center mb-4">
                    <h4 className="text-xl font-bold leading-tight mb-1">{promo.title}</h4>
                    <p className="text-base opacity-90 leading-tight">{promo.subtitle}</p>
                  </div>
                  
                  {/* Área dos Preços - Altura Fixa */}
                  <div className="h-20 flex flex-col items-center justify-center mb-4">
                    <div className="text-xs opacity-75 line-through mb-1">
                      De {promo.originalPrice}
                    </div>
                    <div className="text-3xl font-bold mb-1 leading-tight">
                      {promo.price}
                    </div>
                    <div className="text-xs opacity-90">
                      ou até 6x sem juros
                    </div>
                  </div>

                  {/* Área dos Botões - Altura Fixa */}
                  <div className="h-12 mt-auto">
                    <button
                      onClick={() => openWhatsApp(`Promoção: ${promo.title}`)}
                      className="w-full h-full bg-white text-gray-800 rounded-xl font-bold text-base hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                      💬 Quero Esta Oferta!
                    </button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-3 left-3 w-6 h-6 bg-white/20 rounded-full animate-ping"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <button
              onClick={() => openWhatsApp('Quero saber sobre todas as promoções')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-full text-lg font-bold transition-all duration-300 hover-scale shadow-lg"
            >
              💬 Fale conosco no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;