import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-gradient min-h-[90vh] md:min-h-screen flex items-center justify-center relative overflow-hidden"
      role="banner"
      aria-label="Seção principal - Mentoria Blindagem Mental"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 pt-24 md:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center max-w-7xl mx-auto">
          {/* Texto à esquerda */}
          <motion.div
            className="text-white order-1 lg:order-1"
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
              <span 
                className="block mt-3"
                style={{
                  color: '#FFE066',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                A culpa não é sua. É da mente que você nunca aprendeu a controlar.
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/95 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Enquanto você decora conteúdo, sua mente mina sua confiança.{" "}
              <span 
                className="font-semibold"
                style={{
                  color: '#FFF4A3',
                  textShadow: '0 2px 6px rgba(0,0,0,0.25)',
                }}
              >
                Aprenda a treinar o que realmente aprova: seu emocional.
              </span>
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 cta-pulse w-full md:w-auto"
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

          {/* Imagem à direita */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-full max-w-sm lg:max-w-md mx-auto">
              {/* Blur decorativo de fundo - apenas em telas maiores */}
              <div 
                className="hidden lg:block absolute -inset-8 bg-cover bg-center rounded-3xl blur-2xl opacity-40"
                style={{
                  backgroundImage: 'url(/images/hero-img.webp)',
                }}
              />
              <div 
                className="lg:hidden absolute -inset-4 bg-cover bg-center rounded-2xl blur-xl opacity-30"
                style={{
                  backgroundImage: 'url(/images/hero-img.webp)',
                }}
              />
              
              {/* Imagem principal com estilo minimalista */}
              <div className="relative">
                <img
                  src="/images/hero-img.webp"
                  alt="Mentoria psicológica para concursos - Evolua"
                  className="w-full h-auto object-contain rounded-2xl lg:rounded-3xl shadow-2xl"
                  style={{
                    filter: 'brightness(1.05) contrast(1.05)',
                  }}
                />
                {/* Overlay sutil para profundidade */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl lg:rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
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
