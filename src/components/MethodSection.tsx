import React from 'react';

const pillars = [
  {
    title: "Personalização",
    description: "Identificação de pontos fracos e construção de um físico harmônico, adaptado às suas necessidades específicas.",
    icon: "/lovable-uploads/user.png",
  },
  {
    title: "Mentalidade",
    description: "Desenvolvimento de disciplina e consistência, transformando o treinamento em um hábito prazeroso e produtivo.",
    icon: "/lovable-uploads/Settings.png",
  },
  {
    title: "Evolução Constante",
    description: "Protocolos periodizados com progressão científica para garantir resultados contínuos e sustentáveis.",
    icon: "/lovable-uploads/TrendingUp.png",
  },
];

const benefits = [
  {
    title: "Acesso exclusivo ao meu app de treinos",
    description: "Vídeos gravados por mim ou meus alunos com execução perfeita dos exercícios. Nada terceirizado. Nada copiado.",
    icon: "/lovable-uploads/Smartphone.png"
  },
  {
    title: "AS NOVIDADES NÃO PARAM",
    description: (
      <>
        A evolução da sua consultoria: um sistema tudo em um — protocolo de <strong>treinamento, dietético e médico</strong>,
        totalmente integrados e personalizados direto no App.
        <br /><br />
        <strong className="text-xl block mt-2">Uma experiência ainda mais completa!</strong>
      </>
    ),
    icon: "/lovable-uploads/rocket.png",
    highlight: true,
    isRocket: true
  },
  {
    title: "Suporte direto comigo",
    description: "Atendimento pessoal pelo app de treinos e também via WhatsApp, sem intermediários.",
    icon: "/lovable-uploads/MessageCircle.png"
  },
  {
    title: "Análise física completa",
    description: "Avaliação do seu físico para identificar pontos fracos e montar um plano de evolução harmônica.",
    icon: "/lovable-uploads/user2.png"
  },
  {
    title: "Correção postural e reequilíbrio corporal",
    description: "Análise postural focada em corrigir desvios e aliviar dores causadas por má postura.",
    icon: "/lovable-uploads/activity.png"
  },
  {
    title: "Treino 100% personalizado",
    description: "Protocolos adaptados à sua rotina semanal e ao seu objetivo específico, criados do zero.",
    icon: "/lovable-uploads/brain.png"
  },
  {
    title: "Acompanhamento de evolução",
    description: "Feedbacks e comparações constantes para ajustar o plano e manter sua evolução constante.",
    icon: "/lovable-uploads/TrendingUp3.png"
  },
  {
    title: "Estratégias baseadas em ciência e prática",
    description: "Técnicas modernas do fisiculturismo, aplicadas com lógica, estudo e adaptação individual.",
    icon: "/lovable-uploads/flask.png"
  },
  {
    title: "Protocolos adaptados de campeões",
    description: "Modelos e práticas usados por atletas adaptados para pessoas comuns que querem resultados reais.",
    icon: "/lovable-uploads/medal.png"
  }
];

const MethodSection: React.FC = () => {
  return (
    <section id="metodo" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-black opacity-80"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23232323' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '12px 12px',
        }}
      ></div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-vf-orange/20 to-transparent"></div>
      <div className="absolute -bottom-1/2 right-0 w-[500px] h-[500px] bg-vf-orange opacity-10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDuration: '600ms', animationFillMode: 'forwards' }}>
          <h2 className="section-title mx-auto">
            Protocolo de Treinamento <span className="text-vf-orange">Exclusivo</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Não é sobre treinar mais. É sobre treinar <span className="text-vf-orange font-bold">certo</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:shadow-lg border border-vf-orange/20 shadow-lg shadow-vf-orange/5 opacity-0 transform translate-y-8 animate-fade-in"
              style={{
                animationDelay: `${200 + index * 150}ms`,
                animationDuration: '600ms',
                animationFillMode: 'forwards'
              }}
            >
              <div className="text-vf-orange mb-6 text-4xl flex justify-center items-center h-16">
                <img src={pillar.icon} alt={pillar.title} className="h-12 w-12 object-contain opacity-90" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{pillar.title}</h3>
              <p className="text-gray-300 text-center">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <h3 className="text-3xl font-bold mb-8">Tudo o que você recebe com minha consultoria</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative opacity-0 translate-y-8 transition-all duration-700 ease-out rounded-2xl p-6 border ${
                benefit.highlight
                  ? 'bg-gradient-to-br from-vf-orange to-yellow-500 text-black shadow-[0_0_40px_rgba(255,92,0,0.5)] border-vf-orange'
                  : 'backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:shadow-lg hover:shadow-vf-orange/20 border-vf-orange/20 text-gray-300'
              } hover:scale-[1.02]`}
              style={{
                animation: 'fade-in 0.5s forwards',
                animationDelay: `${index * 150}ms`
              }}
            >
          {benefit.highlight && (
  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
    <span className="bg-black text-vf-orange text-sm md:text-base font-extrabold px-4 py-2 rounded-full animate-pulse shadow-md shadow-black text-center block">
      EM BREVE
    </span>
  </div>
)}

              <div className="flex items-start gap-6">
                <div className={`${benefit.highlight ? 'animate-bounce' : ''} flex-shrink-0`}>
                  {typeof benefit.icon === 'string' ? (
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className={`object-contain opacity-90 ${benefit.isRocket ? 'h-16 w-16' : 'h-10 w-10'}`}
                    />
                  ) : (
                    <benefit.icon size={64} className="text-vf-orange opacity-90" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <div className={`${benefit.highlight ? 'text-black' : 'text-gray-300'} leading-relaxed`}>
                    {typeof benefit.description === 'string' ? <p>{benefit.description}</p> : benefit.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center opacity-0 animate-fade-in" style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}>
          <blockquote className="text-2xl font-light italic text-gray-300">"Na dúvida, faça mais força!"</blockquote>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
