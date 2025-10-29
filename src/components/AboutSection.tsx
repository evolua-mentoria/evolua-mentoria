import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      id="about" 
      className="py-20 mentor-gradient" 
      ref={ref}
      role="region"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Quem conduz sua{" "}
            <span className="text-gradient">transformação</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-accent/30 shadow-2xl overflow-hidden">
              <img
                src="/images/mentor-photo.webp"
                alt="Alexandre Vieira Ferreira - Psicanalista clínico, hipnoterapeuta e professor especializado em preparação mental para concursos públicos"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
                width="600"
                height="600"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-foreground p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold">6+</p>
              <p className="text-sm font-medium">Anos de experiência</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold font-poppins mb-4">
              Alexandre Vieira Ferreira
            </h3>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Psicanalista clínico, hipnoterapeuta e mentor em performance mental.{" "}
              <span className="text-primary font-semibold">Treinado por referências como Dr. Ítalo Marsili, com mais de 6 anos ajudando alunos a calar o sabotador interno e finalmente aprovar.</span>
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Formação sólida</h4>
                  <p className="text-muted-foreground">
                    em psicanálise e hipnoterapia aplicada a alta performance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Expertise de professor e terapeuta</h4>
                  <p className="text-muted-foreground">
                    Combina conhecimento acadêmico com experiência clínica para resultados únicos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Atendimento personalizado</h4>
                  <p className="text-muted-foreground">
                    cada encontro é focado em você
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
              onClick={() => {
                const checkoutSection = document.getElementById('investment');
                if (checkoutSection) {
                  checkoutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Quero transformar meu psicológico agora
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
