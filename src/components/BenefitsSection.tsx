import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Heart, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Clareza mental total",
    description: "Você finalmente estuda com foco profundo",
  },
  {
    icon: Heart,
    title: "Controle sob pressão",
    description: "Domina as emoções até nos dias mais tensos",
  },
  {
    icon: Zap,
    title: "Progresso constante",
    description: "Nada mais de altos e baixos nos estudos",
  },
  {
    icon: Shield,
    title: "Confiança blindada",
    description: "Entra na sala de prova com força mental de aprovado",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      id="benefits" 
      className="py-20 benefits-gradient relative overflow-hidden" 
      ref={ref}
      role="region"
      aria-labelledby="benefits-heading"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="benefits-heading" className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Por que quem faz,{" "}
            <span className="text-gradient">nunca volta ao mesmo ponto?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-lg hover-lift text-center border border-border"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-poppins mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
