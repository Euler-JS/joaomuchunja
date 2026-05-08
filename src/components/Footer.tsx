import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">João Muchunja</h3>
            <p className="text-gray-400">
              Full Stack Developer apaixonado por criar soluções inovadoras que fazem a diferença.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Conecte-se</h3>
            <div className="flex space-x-4">
              <a
                href="https://https://github.com/Euler-JS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-muchunja-99b678116/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:joaoalbertojose96@gmail.com"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://wa.me/258846151124"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} João Muchunja. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
