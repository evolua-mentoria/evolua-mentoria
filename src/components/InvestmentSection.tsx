import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Shield, Zap } from "lucide-react";

const individualFeatures = [
  {
    icon: Clock,
    text: "5 encontros individuais de 80 minutos",
  },
  {
    icon: Shield,
    text: "Suporte via WhatsApp por 3 meses",
  },
  {
    icon: Zap,
    text: "Gravações disponíveis por 6 meses",
  },
  {
    icon: Check,
    text: "TODOS os bônus inclusos",
  },
];

const groupFeatures = [
  {
    icon: Clock,
    text: "4 encontros em grupo de 80 minutos",
  },
  {
    icon: Shield,
    text: "Suporte via WhatsApp por 3 meses",
  },
  {
    icon: Zap,
    text: "Gravações disponíveis por 6 meses",
  },
  {
    icon: Check,
    text: "TODOS os bônus inclusos",
  },
];

const InvestmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="investment"
      className="py-20 investment-gradient relative overflow-hidden"
      ref={ref}
      role="region"
      aria-labelledby="investment-heading"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="investment-heading" className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            <span className="text-gradient">Evolua:</span> seu novo preparo psicológico começa aqui.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta à sua rotina.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card Individual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20 rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Badge de Desconto */}
              <div className="absolute top-0 right-0 bg-accent text-foreground text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg">
                💰 Mais Popular
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
                  Mentoria Individual
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  5 encontros individuais de 80 minutos
                </p>

                {/* Preços */}
                <div className="text-center mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    R$ 997
                  </div>
                  <p className="text-lg text-muted-foreground">
                    ou 12x no cartão
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {individualFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center"
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 cta-pulse w-full"
                  onClick={() => {
                    const message = encodeURIComponent("Olá, Alexandre! Quero garantir minha vaga na MENTORIA INDIVIDUAL (R$ 997) do projeto Evolua – Mentoria psicológica para concursos. Tenho interesse nos 5 encontros individuais de 80 minutos.");
                    window.open(`https://wa.me/+5587981294783?text=${message}`, '_blank');
                  }}
                >
                  Quero garantir minha vaga
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </motion.div>

            {/* Card Grupo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 border-2 border-accent/20 rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Badge de Economia */}
              <div className="absolute top-0 right-0 bg-accent text-foreground text-xs font-bold px-4 py-2 rounded-bl-xl shadow-lg">
                💰 Economia
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4">
                  Mentoria em Grupo
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  4 encontros em grupo de 80 minutos
                </p>

                {/* Preços */}
                <div className="text-center mb-6">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    R$ 697
                  </div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">
                    por pessoa
                  </p>
                  <p className="text-lg text-muted-foreground">
                    ou 12x no cartão
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {groupFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-accent/20 p-2 rounded-lg">
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-center"
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-foreground font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 cta-pulse w-full"
                  onClick={() => {
                    const message = encodeURIComponent("Olá, Alexandre! Quero garantir minha vaga na MENTORIA EM GRUPO (R$ 697) do projeto Evolua – Mentoria psicológica para concursos. Tenho interesse nos 4 encontros em grupo de 80 minutos.");
                    window.open(`https://wa.me/+5587981294783?text=${message}`, '_blank');
                  }}
                >
                  Quero garantir minha vaga
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Garantia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-8"
          >
            <div className="bg-muted/50 border border-border rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold">✅ GARANTIA INCONDICIONAL DE 7 DIAS</h4>
              </div>
              <p className="text-muted-foreground">
                Se após a primeira sessão você não sentir que essa mentoria é transformadora,{" "}
                <span className="font-bold">devolvemos 100% do seu investimento. Sem perguntas. Sem burocracia.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
