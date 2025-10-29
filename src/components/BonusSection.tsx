import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Headphones, MessageSquare, Video, Sparkles } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "Guia de Metas Estratégicas",
    description: "Estruture e alcance seus objetivos com clareza e ação real.",
    originalPrice: "R$ 197",
    bonus: true,
  },
  {
    icon: Headphones,
    title: "Áudios de Reprogramação Mental",
    description: "Fortaleça sua mente e elimine sabotagens com sessões guiadas.",
    originalPrice: "R$ 297",
    bonus: true,
  },
  {
    icon: MessageSquare,
    title: "Suporte direto no WhatsApp",
    description: "Tire dúvidas e receba direcionamento durante toda a mentoria.",
    originalPrice: "R$ 197",
    bonus: true,
  },
  {
    icon: Video,
    title: "Gravação das sessões por 6 meses",
    description: "Revise cada encontro no seu ritmo, quantas vezes quiser.",
    originalPrice: "R$ 397",
    bonus: true,
  },
];

const BonusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="bonus"
      className="py-20 relative overflow-hidden"
      style={{
        background: "var(--gradient-bonus)",
      }}
      ref={ref}
      role="region"
      aria-labelledby="bonus-heading"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="bonus-heading" className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-white">
            Bônus Exclusivos (GRÁTIS NA MENTORIA)
          </h2>
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 max-w-3xl mx-auto mb-8">
            <p className="text-white font-bold text-lg mb-2">
              Separadamente, esses bônus custariam R$ 1.088.
            </p>
            <p className="text-white/90 text-sm">
              Na mentoria, você recebe tudo isso sem pagar nada a mais:
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl shadow-xl hover-lift"
            >
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <bonus.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold font-poppins mb-2 text-white">
                {bonus.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-3">{bonus.description}</p>
              
              {/* Preço Original */}
              <div className="bg-white/20 rounded-lg p-3">
                <p className="text-white/70 text-xs mb-1">Valor separado:</p>
                <p className="text-white font-bold text-lg line-through">
                  {bonus.originalPrice}
                </p>
                <p className="text-accent font-bold text-sm">
                  GRÁTIS na mentoria!
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
