import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Brain, Clock, Target } from "lucide-react";

const problems = [
  {
    icon: Brain,
    text: "Estuda horas, mas esquece tudo quando mais precisa",
  },
  {
    icon: AlertCircle,
    text: "Sabe o conteúdo, mas o branco vem na hora da prova",
  },
  {
    icon: Clock,
    text: "Sua ansiedade e nervosismo te travam — sempre no momento decisivo",
  },
  {
    icon: Target,
    text: "Falta constância: começa empolgado e para no meio do caminho",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      id="problem" 
      className="py-20 problem-gradient relative overflow-hidden" 
      ref={ref}
      role="region"
      aria-labelledby="problem-heading"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="problem-heading" className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Você estuda, mas sente que{" "}
            <span className="text-gradient">não rende?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-lg hover-lift border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="bg-destructive/10 p-3 rounded-xl">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-lg font-medium">{problem.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusão após os problemas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Se você se identificou com pelo menos um desses pontos, o problema não é
            conteúdo. É <span className="text-primary font-bold">psicológico</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
