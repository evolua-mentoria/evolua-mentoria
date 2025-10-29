import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden"
      role="banner"
      aria-label="Seção principal - Mentoria Blindagem Mental"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            role="heading"
            aria-level="1"
          >
            Você estuda. Você sabe. Mas na hora H… trava.{" "}
            <span className="text-accent">A culpa não é sua. É da mente que você nunca aprendeu a controlar.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Enquanto você decora conteúdo, sua mente mina sua confiança.{" "}
            <span className="text-accent font-semibold">Aprenda a treinar o que realmente aprova: seu emocional.</span>
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-foreground font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 cta-pulse"
              onClick={() => {
                const checkoutSection = document.getElementById('investment');
                if (checkoutSection) {
                  checkoutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Quero garantir minha vaga com desconto
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
