import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
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
              Política de <span className="text-gradient">Privacidade</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-6">
                Esta Política de Privacidade descreve como a Evolua – Mentoria psicológica para concursos 
                coleta, usa e protege suas informações pessoais.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">1. Informações que Coletamos</h2>
              <p className="mb-4">
                Coletamos informações que você nos fornece diretamente, como:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Informações sobre seus objetivos de estudo</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">2. Como Usamos suas Informações</h2>
              <p className="mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Fornecer nossos serviços de mentoria</li>
                <li>Comunicar sobre sessões e materiais</li>
                <li>Melhorar nossos serviços</li>
                <li>Enviar informações relevantes sobre concursos</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">3. Compartilhamento de Informações</h2>
              <p className="mb-6">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">4. Segurança</h2>
              <p className="mb-6">
                Implementamos medidas de segurança adequadas para proteger suas informações 
                contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">5. Seus Direitos</h2>
              <p className="mb-4">
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Retirar seu consentimento a qualquer momento</li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">6. Contato</h2>
              <p className="mb-6">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco 
                através do WhatsApp: <a href="https://wa.me/+5587981294783" className="text-primary hover:underline">+55 87 98129-4783</a>
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

export default PoliticaPrivacidade;
