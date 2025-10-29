import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-8 text-center">
              Termos de <span className="text-gradient">Uso</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-6">
                Estes Termos de Uso regem o uso dos serviços oferecidos pela Evolua – Mentoria psicológica para concursos.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">1. Aceitação dos Termos</h2>
              <p className="mb-6">
                Ao utilizar nossos serviços, você concorda em cumprir estes termos e condições. 
                Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">2. Descrição dos Serviços</h2>
              <p className="mb-4">
                A Evolua oferece serviços de mentoria psicológica para concursos públicos, incluindo:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Mentoria individual com 5 encontros de 80 minutos cada</li>
                <li>Mentoria em grupo com 4 encontros de 80 minutos cada</li>
                <li>Suporte psicológico para desenvolvimento de foco e controle emocional</li>
                <li>Estratégias para melhoria da performance em provas</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">3. Pagamento e Reembolso</h2>
              <p className="mb-4">
                Os valores dos serviços são:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Mentoria Individual: R$ 997,00 (parcelável em até 12x)</li>
                <li>Mentoria em Grupo: R$ 697,00 (parcelável em até 12x)</li>
              </ul>
              <p className="mb-6">
                Oferecemos garantia de 7 dias para reembolso total, caso você não esteja satisfeito com o serviço.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">4. Responsabilidades do Cliente</h2>
              <p className="mb-4">
                O cliente se compromete a:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Comparecer pontualmente às sessões agendadas</li>
                <li>Participar ativamente das atividades propostas</li>
                <li>Respeitar o profissional e outros participantes</li>
                <li>Manter confidencialidade sobre informações compartilhadas</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">5. Limitações</h2>
              <p className="mb-6">
                Nossos serviços são de natureza educacional e de apoio psicológico. Não garantimos 
                aprovação em concursos, mas oferecemos ferramentas e estratégias para melhorar 
                sua performance e bem-estar durante o processo de estudo.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">6. Modificações</h2>
              <p className="mb-6">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                As alterações entrarão em vigor imediatamente após a publicação.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">7. Contato</h2>
              <p className="mb-6">
                Para dúvidas sobre estes Termos de Uso, entre em contato conosco através do 
                WhatsApp: <a href="https://wa.me/+5587981294783" className="text-primary hover:underline">+55 87 98129-4783</a>
              </p>
              
              <p className="text-sm text-muted-foreground mt-8">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermosUso;
