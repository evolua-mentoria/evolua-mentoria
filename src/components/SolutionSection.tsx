import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, AlertTriangle, Calendar, MessageCircle } from "lucide-react";

const solutions = [
  {
    icon: Flame,
    title: "Foco real",
    description: "Aprenda a calar o barulho mental que te distrai",
  },
  {
    icon: AlertTriangle,
    title: "Controle emocional",
    description: "Transforme ansiedade em concentração",
  },
  {
    icon: Calendar,
    title: "Disciplina sem sofrimento",
    description: "Crie rotinas que você cumpre com naturalidade",
  },
  {
    icon: MessageCircle,
    title: "Confiança prática",
    description: "Chegue na prova com segurança inabalável",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      id="solution" 
      className="py-20 solution-gradient relative overflow-hidden" 
      ref={ref}
      role="region"
      aria-labelledby="solution-heading"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Texto à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 id="solution-heading" className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
              <span className="text-gradient">Blindagem Mental:</span> a mentoria que transforma sua mente na sua maior aliada.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Conteúdo você já tem. Agora é hora de blindar seu emocional.
            </p>
          </motion.div>

          {/* Imagem à direita */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative w-full max-w-md">
              {/* Blur decorativo de fundo */}
              <div 
                className="absolute -inset-8 bg-cover bg-center rounded-3xl blur-2xl opacity-40"
                style={{
                  backgroundImage: 'url(/images/mentoria.webp)',
                }}
              />
              
              {/* Imagem principal com estilo minimalista */}
              <div className="relative">
                <img
                  src="/images/mentoria.webp"
                  alt="Mentoria psicológica - Transformação mental"
                  className="w-full h-auto object-contain rounded-3xl shadow-2xl"
                  style={{
                    filter: 'brightness(1.05) contrast(1.05)',
                  }}
                />
                {/* Overlay sutil para profundidade */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Como funciona:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-4 rounded-xl border border-border">
                <h4 className="text-lg font-semibold text-primary mb-2">Mentoria Individual</h4>
                <p className="text-sm text-muted-foreground mb-3">5 encontros de 80 minutos cada</p>
                <p className="text-sm text-muted-foreground">Acompanhamento personalizado para reconstruir seu psicológico e parar de se sabotar.</p>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border">
                <h4 className="text-lg font-semibold text-primary mb-2">Mentoria em Grupo</h4>
                <p className="text-sm text-muted-foreground mb-3">4 encontros de 80 minutos cada</p>
                <p className="text-sm text-muted-foreground">Experiência compartilhada com outros estudantes, mantendo o foco na sua jornada pessoal.</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://wa.me/+5587981294783?text=Ol%C3%A1,%20Alexandre.%20Quero%20informa%C3%A7%C3%B5es%20sobre%20pr%C3%B3ximas%20turmas%20do%20projeto%20Evolua%20%E2%80%93%20Mentoria%20psicol%C3%B3gica%20para%20concursos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Perguntar sobre próxima turma
              </a>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Você vai desenvolver:</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-8 rounded-2xl shadow-xl hover-lift border border-border group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-3">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
