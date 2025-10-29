import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12" role="contentinfo" aria-label="Rodapé do site">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={`/images/logo.webp?v=${Date.now()}`} 
                alt="Evolua – Mentoria psicológica para concursos" 
                className="h-10 w-auto"
                onError={(e) => {
                  // Fallback para texto se a imagem não carregar
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <h3 className="text-foreground font-bold text-xl">
                EVOLUA<span className="text-accent">–</span> Mentoria psicológica para concursos
              </h3>
            </div>
            <p className="text-primary-foreground/80">
              Transformando mentes, construindo aprovações.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/politica-privacidade" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos-uso" className="hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/evoluabc/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/+5587981294783"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Evolua – Mentoria psicológica para concursos. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 text-sm">
            Desenvolvido com 💙 para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
