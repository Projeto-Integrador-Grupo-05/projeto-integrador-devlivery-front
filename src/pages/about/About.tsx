import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Importação do QRCode
import Slider from "react-slick"; // Certifique-se de importar o Slider
import "./About.css"; // Se estiver no mesmo diretório, ou ajuste o caminho conforme necessário

// Definindo o tipo para o colaborador
interface Colaborador {
  nome: string;
  foto: string;
  cargo: string;
  bio: string;
  qrcodeData: string;
}

// Configuração do carrossel
const settings = {
  dots: true, // Exibe os pontos de navegação
  infinite: true, // Permite rolagem infinita
  speed: 500,
  slidesToShow: 3, // Número de itens visíveis
  slidesToScroll: 1, // Número de itens para rolar
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function Sobre() {
  const [selectedColaborador, setSelectedColaborador] =
    useState<Colaborador | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // Estado para armazenar a pergunta aberta

  // Dados dos colaboradores
  const colaboradores: Colaborador[] = [
    {
      nome: "Andre Lins",
      foto: "/src/image/Andre.png",
      cargo: "Developer",
      bio: "Apaixonado por JavaScript, Andre é um desenvolvedor experiente na DEVFIT desde 2018. Ele adora criar soluções inovadoras e melhorar a experiência dos usuários. Seu foco é sempre em código limpo e eficiente, buscando constantemente o aprendizado e a evolução como profissional.",
      qrcodeData:
        "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front",
    },
    {
      nome: "Emerson Marques",
      foto: "/src/image/Emerson.png",
      cargo: "Developer",
      bio: "Emerson é um desenvolvedor dedicado com um olhar atento às melhores práticas de programação. Com uma sólida experiência em JavaScript, ele contribui ativamente para o crescimento da DEVFIT, sempre buscando soluções que unam funcionalidade e performance para o usuário final.",
      qrcodeData:
        "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front",
    },
    {
      nome: "Naiara Costa",
      foto: "/src/image/Naiara.png",
      cargo: "Developer",
      bio: "Com uma paixão por programação, Naiara traz sua expertise em JavaScript para a DEVFIT desde 2018. Ela está sempre em busca de novos desafios e adora trabalhar em equipe para entregar soluções criativas que atendam às necessidades dos usuários de forma eficaz e inteligente.",
      qrcodeData:
        "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front",
    },
    {
      nome: "Nayara Paula",
      foto: "/src/image/Nayara.png",
      cargo: "Developer",
      bio: "Nayara é uma desenvolvedora inovadora que adora resolver problemas complexos. Ela se dedica ao desenvolvimento de soluções tecnológicas que impactam positivamente os usuários, sempre se atualizando nas últimas tendências de programação e aprimorando suas habilidades na DEVFIT.",
      qrcodeData:
        "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front",
    },
    {
      nome: "Rafael Aparecido",
      foto: "/src/image/Rafael.png",
      cargo: "Developer",
      bio: "Rafael é um desenvolvedor comprometido com a entrega de soluções robustas e escaláveis. Com foco em performance e eficiência, ele utiliza suas habilidades em programação para otimizar processos e criar sistemas que oferecem uma excelente experiência para os usuários da DEVFIT.",
      qrcodeData:
        "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front",
    },
    {
      nome: "Thayná Simões",
      foto: "/src/image/Thayna.png",
      cargo: "Product Owner",
      bio: "Thayna é a responsável pela visão de produto da DEVFIT. Ela trabalha para garantir que os objetivos de negócio sejam alinhados com as necessidades dos usuários. Sua habilidade em coordenar equipes e priorizar tarefas é fundamental para o sucesso dos projetos da empresa.",
      qrcodeData:
        "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front",
    },
    {
      nome: "Vinicius Aquino",
      foto: "/src/image/Vinicius.png",
      cargo: "Tester",
      bio: "Vinicius é o guardião da qualidade na DEVFIT. Como tester, ele dedica seu tempo a garantir que todos os sistemas e funcionalidades atendam aos mais altos padrões de qualidade. Sua atenção aos detalhes e habilidade para identificar problemas fazem dele um membro essencial da equipe.",
      qrcodeData:
        "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front",
    },
  ];

  // Função de clique para selecionar o colaborador
  const handleCardClick = (colaborador: Colaborador) => {
    setSelectedColaborador(colaborador);
  };

  // Função para alternar a visibilidade das respostas da FAQ
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div id="forca">
      {/* Seção do banner com a imagem "força" */}
      <section className="força">
        <img src="/src/image/força.png" alt="Força" className="força-img" />
      </section>

      {/* Seção de Missão */}
      <section className="missao">
        <h1 className="titulo1 ">
          Nossa missão é melhorar a saúde de nossos colaboradores
        </h1>
      </section>

      {/* Seção de Fotos da Academia */}
      <section className="py-12">
        <div className="academia grid grid-cols-3 gap-6">
          <img src="/src/image/again.png" alt="Again" />
          <img src="/src/image/mulher.png" alt="Mulher" />
          <img src="/src/image/disciplina.png" alt="Disciplina" />
          <img src="/src/image/love.png" alt="Love" />
          <img src="/src/image/consistencia.png" alt="Consistencia" />
          <img src="/src/image/foco.png" alt="Foco" />
        </div>
      </section>
      <br />
      <br />

      {/* Seção Sobre Nós */}
      <div className="mr-60 ml-60 text-justify">
        <section className="sobre">
          <h2 className="sobredev">Sobre a DEVfit</h2>
          <p className="">
            A DEVFIT nasceu com a ideia de incentivar desenvolvedores a buscar
            um ambiente confortável e saudável, longe das longas horas sentadas
            em frente aos computadores. Sabemos que a vida de um desenvolvedor
            envolve desafios constantes, como o sedentarismo, dores nas costas e
            o cansaço mental, causados pelas longas jornadas de trabalho. Por
            isso, nosso objetivo é criar um espaço que promova o bem-estar
            físico e psicológico, equilibrando as demandas do desenvolvimento de
            software com o cuidado com a saúde. Acreditamos que um corpo
            saudável é essencial para manter a mente produtiva e criativa. Nossa
            missão é incentivar hábitos saudáveis, como a prática regular de
            exercícios físicos e o descanso mental, proporcionando uma rotina
            que valoriza tanto o aprendizado técnico quanto o autocuidado.
            Queremos ser um exemplo para outras empresas, mostrando que investir
            no bem-estar dos colaboradores é essencial para um ambiente de
            trabalho mais equilibrado e eficiente. Na DEVFIT, buscamos criar uma
            cultura de saúde integrada com a tecnologia, promovendo o bem-estar
            e o crescimento profissional de todos.
          </p>
          <br />
          <hr />
        </section>

        {/* Seção de Perguntas Frequentes */}
        <section className="faq py-12">
          <h2 className="w-full text-left text-xl font-semibold text-indigo-600 focus:outline-none">
            Perguntas Frequentes
          </h2>
          <br />
          <div className="space-y-4">
            {/* Pergunta 1 */}
            <div className="border-b border-gray-300 pb-4">
              <button
                className="w-full text-left text-xl font-semibold text-indigo-600 focus:outline-none"
                onClick={() => toggleFAQ(1)} // Alternar visibilidade da resposta
              >
                Onde fica as unidades da Devfit?
              </button>
              {openFAQ === 1 && (
                <div className="text-gray-700 mt-2">
                  A Devfit possui unidades em várias cidades. Você pode
                  encontrar todas as informações sobre nossas unidades no nosso
                  site ou entrar em contato com nossa equipe de suporte.
                </div>
              )}
            </div>

            {/* Pergunta 2 */}
            <div className="border-b border-gray-300 pb-4">
              <button
                className="w-full text-left text-xl font-semibold text-indigo-600 focus:outline-none"
                onClick={() => toggleFAQ(2)} // Alternar visibilidade da resposta
              >
                Quais são os planos disponíveis?
              </button>
              {openFAQ === 2 && (
                <div className="text-gray-700 mt-2">
                  Oferecemos planos mensais, trimestrais e anuais com diferentes
                  benefícios. Para mais informações, consulte a seção de planos
                  no nosso site.
                </div>
              )}
            </div>

            {/* Pergunta 3 */}
            <div className="border-b border-gray-300 pb-4">
              <button
                className="w-full text-left text-xl font-semibold text-indigo-600 focus:outline-none"
                onClick={() => toggleFAQ(3)} // Alternar visibilidade da resposta
              >
                Como posso me inscrever na Devfit?
              </button>
              {openFAQ === 3 && (
                <div className="text-gray-700 mt-2">
                  Você pode se inscrever diretamente no nosso site ou entrar em
                  contato com a nossa equipe para mais detalhes sobre como se
                  tornar um membro.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Seção dos Colaboradores */}
        <section className=" text-left">
          <h1 className="w-full text-left text-xl font-semibold focus:outline-none">
            Nossos Colaboradores
          </h1>
          <br />
          <p className="">
            Somos uma equipe de desenvolvedores apaixonados por criar soluções
            que promovem saúde e bem-estar. Acreditamos que um ambiente de
            trabalho saudável é fundamental para aumentar a produtividade e a
            satisfação, contribuindo para o equilíbrio físico e mental.
          </p>

          {/* Carrossel dos colaboradores */}
          <Slider {...settings}>
            {colaboradores.map((colaborador) => (
              <div
                key={colaborador.nome}
                className="flex justify-center items-center space-x-6 py-6"
              >
                {/* Card do colaborador */}
                <div
                  className="here-card relative"
                  onClick={() => handleCardClick(colaborador)} // Evento de clique
                  style={{
                    border: "2px solid #e2a343",
                    padding: "16px",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    marginRight: "16px",
                    marginBottom: "16px",
                    position: "relative",
                  }}
                >
                  <div className="img">
                    <img
                      src={colaborador.foto}
                      alt={`Foto de ${colaborador.nome}`}
                      className="w-32 h-32 rounded-full object-cover shadow-md"
                      style={{ borderRadius: "20%" }}
                    />
                  </div>
                  <br />
                  <div className="text">
                    <h3>
                      {colaborador.nome} - {colaborador.cargo}
                    </h3>

                    <p>{colaborador.bio}</p>
                  </div>

                  {/* Exibição do QR Code quando o colaborador for selecionado */}
                  {selectedColaborador &&
                    selectedColaborador.nome === colaborador.nome && (
                      <div className="qrcode-overlay absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 rounded-lg">
                        <QRCodeCanvas
                          value={colaborador.qrcodeData}
                          size={128}
                        />
                      </div>
                    )}
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </div>
  );
}

export default Sobre;
