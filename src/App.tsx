import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Download, MapPin, Video } from 'lucide-react';

const App = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      const res = await fetch('/static/erik-cv.pdf');
      if (!res.ok) throw new Error('Download falhou');
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Erik_Medeiros_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      // fallback simples: abrir em nova aba
      window.open('/static/erik-cv.pdf', '_blank', 'noopener');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-slate-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-100">Erik Medeiros</h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-blue-400 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-blue-400 transition-colors">Projetos</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-blue-400 transition-colors">Contato</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-100 mb-6">
                Erik Medeiros
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                Desenvolvedor Full-Stack, Java, Spring, TypeScript, Angular.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600/90 text-white px-8 py-3 rounded-lg hover:bg-blue-500/95 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Entre em Contato
                </button>
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="border-2 border-slate-700 text-slate-200 px-8 py-3 rounded-lg hover:border-blue-500 hover:text-blue-300 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  <Download size={20} className={isDownloading ? 'animate-spin' : ''} />
                  {isDownloading ? 'Baixando...' : 'Download CV'}
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-800 to-green-800 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 w-80 h-80 bg-slate-800 rounded-full shadow-2xl flex items-center justify-center">
                  <img
                    src="/static/erik.jpg"
                    alt="Foto de Erik Medeiros"
                    className="w-78 h-78 rounded-full object-cover border-4 border-gray-700 shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Sobre Mim</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 mb-6">
                Sou um desenvolvedor full-stack que gosta de transformar ideias em projetos reais.
                Já desenvolvi projetos acadêmicos e pessoais usando Java e Spring Boot para o back-end e TypeScript, Angular e React no front-end, sempre buscando criar algo bem estruturado e que melhore a experiência do usuário.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Estou à procura da minha primeira experiência em um ambiente colaborativo, onde possa aplicar o que venho aprendendo e, ao mesmo tempo, continuar evoluindo.
                Para mim, cada desafio é uma chance de aprender algo novo e isso vale muito mais do que qualquer retorno imediato.
              </p>
              <div className="flex items-center gap-2 text-slate-300 mb-4">
                <MapPin size={20} className="text-blue-400" />
                <span>Natal, Brasil</span>
              </div>
            </div>

            {/* Coluna direita: avatar simples */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-800 to-green-800 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 w-80 h-80 bg-slate-800 rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-8xl">👨🏻‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Projetos</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <div className="bg-slate-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
              <div className="h-48 bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center">
                <div className="text-white text-6xl">🔗</div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Encurtador de URLs</h3>
                <p className="text-slate-300 mb-4">Sistema básico de encurtador de URLs.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-green-200 text-sm rounded-full">Thymeleaf</span>
                  <span className="px-3 py-1 bg-slate-700 text-green-200 text-sm rounded-full">Spring</span>
                  <span className="px-3 py-1 bg-slate-700 text-purple-200 text-sm rounded-full">PostgreSQL</span>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href="https://github.com/eriksmedeiros/url-shortener"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-200"
                  >
                    <Github size={16} />
                    Código
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="bg-slate-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
              <div className="h-48 bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">
                <div className="text-white text-6xl">📱</div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Gerenciador de Tarefas</h3>
                <p className="text-slate-300 mb-4">Aplicativo de gerenciamento de tarefas.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-green-200 text-sm rounded-full">Spring</span>
                  <span className="px-3 py-1 bg-slate-700 text-red-200 text-sm rounded-full">Angular</span>
                  <span className="px-3 py-1 bg-slate-700 text-purple-200 text-sm rounded-full">Bootstrap</span>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href="https://github.com/eriksmedeiros/api-todo.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-200"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <button className="flex items-center gap-2 text-blue-300 hover:text-blue-200">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="bg-slate-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
              <div className="h-48 bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center">
                <div className="text-white text-6xl">👾</div>
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Earth Defender: Void Assault</h3>
                <p className="text-slate-300 mb-4">Você é um piloto em um mapa 2D, lutando para proteger sua base de alienígenas invasores.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-blue-200 text-sm rounded-full">C++</span>
                  <span className="px-3 py-1 bg-slate-700 text-red-200 text-sm rounded-full">SFML</span>
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href="https://github.com/romuloAMR/Base-Defense.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-300 hover:text-blue-200"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <button className="flex items-center gap-2 text-blue-300 hover:text-blue-200">
                    <Video size={16} />
                    <a href="https://youtu.be/Rx17_US34RQ?si=NHyBGwBicL9Cb0UB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-300 hover:text-blue-200"
                    >Vídeo</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            {/* evita que os itens quebrem em md+ */}
            <div className="flex-1 flex flex-col md:flex-row md:flex-nowrap justify-center items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-800 p-3 rounded-full">
                  <Mail className="text-blue-300" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Email</p>
                  <p className="text-slate-300">eriksilvademedeiros@email.com</p>
                </div>
              </div>
              {/* telefone inline sem quebra */}
              <div className="flex items-center gap-4 whitespace-nowrap">
                <div className="bg-green-800 p-3 rounded-full">
                  <Phone className="text-green-300" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-slate-100">Telefone</p>
                  <p className="text-slate-300">+55 (84) 99958-1538</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/eriksmedeiros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-3 rounded-full hover:bg-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="text-slate-300" size={24} />
                </a>
                <div>
                  <p className="font-semibold text-slate-100">GitHub</p>
                  <a
                    href="https://github.com/eriksmedeiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    github.com/eriksmedeiros
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/eriksmedeiros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 p-3 rounded-full hover:bg-blue-800 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-blue-300" size={24} />
                </a>
                <div>
                  <p className="font-semibold text-slate-100">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/eriksmedeiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/eriksmedeiros
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Erik Medeiros. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;