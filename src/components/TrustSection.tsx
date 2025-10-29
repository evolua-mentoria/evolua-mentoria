import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Award, Users, Target } from "lucide-react";

const trustSignals = [
  {
    icon: CheckCircle,
    text: "Mais de 6 anos de experiência clínica em performance mental",
  },
  {
    icon: Award,
    text: "Formação com nomes como Dr. Ítalo Marsili",
  },
  {
    icon: Users,
    text: "Expertise de professor e terapeuta combinadas",
  },
  {
    icon: Target,
    text: "Mentoria individual ou em grupo — foco 100% em você",
  },
];

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      id="trust" 
      className="py-16 bg-muted/30"
      ref={ref}
      role="region"
      aria-labelledby="trust-heading"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 id="trust-heading" className="text-3xl font-bold mb-6">
            Por que confiar nessa mentoria?
          </h3>
          
          <ul className="space-y-4 text-muted-foreground text-lg">
            {trustSignals.map((signal, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3 bg-card p-4 rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <signal.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span>{signal.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;




