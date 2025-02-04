import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useRef } from "react"; 

const faqItems = [
  {
    question: "Como funciona o site DevLivery?",
    answer:
      "Nosso site permite que você faça pedidos online de forma rápida e segura.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartões de crédito, débito e pagamento via Pix.",
  },
  {
    question: "Como posso realizar meu pedido?",
    answer:
      "Basta navegar pelas categorias, selecionar os produtos desejados e adicionar ao carrinho. Em seguida, você poderá finalizar sua compra com as opções de pagamento disponíveis.",
  },
  {
    question: "O site faz entregas em todo o Brasil?",
    answer:
      "Sim, fazemos entregas para todo o território nacional, com prazos variados dependendo da sua localização.",
  },
  {
    question: "E se o produto estiver com defeito ou não for o que eu pedi?",
    answer:
      "Caso receba um produto com defeito ou incorreto, entre em contato com o nosso suporte para iniciar o processo de troca ou devolução, de acordo com nossa política de devoluções.",
  },
  {
    question: "Há algum custo de frete?",
    answer:
      "O custo do frete depende do seu local de entrega e do valor total da sua compra. Oferecemos promoções e frete grátis em compras acima de determinado valor.",
  },
];

interface Card {
  title: string;
  image: string;
  photo: string;
  name: string;
  description: string;
  github: string;
  linkedin: string;
  qrcode: string;
}

const cards = [
  {
    title: "André Lins",
    image: "https://i.imgur.com/VSN5Rq6.jpeg",
    photo: "https://i.imgur.com/VSN5Rq6.jpeg",
    name: "André Lins",
    description: "Eu sou uma pessoa analítica e muito focada, tenho objetivos bem definidos e trabalho diariamente neles. Possuo conhecimento sólido em Java e estou mergulhando no aprendizado do Framework Spring. Adquiri diversas certificações pela Alura em Java, APIs REST com Spring Boot, e MySQL. Já atuei como estagiário no Itaú Unibanco, onde pude desenvolver fortes habilidades comportamentais e habilidades técnicas, criando automações em VBA, Automation Anywhere e JavaScript, poupando 200 horas mensais na operação.",
    github: "https://github.com/andrelins07",
    linkedin: "https://www.linkedin.com/in/andrelins07/",
    qrcode: "https://qr.io/qr-svg/FEYrPH.svg?1738595845202",
  },
  {
    title: "Emerson Marques",
    image: "https://i.imgur.com/CA4t1Rq.jpeg",
    photo: "https://i.imgur.com/CA4t1Rq.jpeg",
    name: "Emerson Marques",
    description: "Desenvolvedor front-end com dois anos de experiência, atualmente aprimorando habilidades em Java Full Stack pelo bootcamp da Generation. Tenho conhecimentos em JavaScript, React, Java e foco em soluções práticas e colaborativas.",
    github: "https://github.com/ninguemzin",
    linkedin: "https://www.linkedin.com/in/emersonalm/",
    qrcode: "https://qr.io/qr-svg/i5PS4F.svg?1738596329496",
  },
  {
    title: "Naiara Costa",
    image: "https://i.imgur.com/zaWKrGm.png",
    photo: "https://i.imgur.com/zaWKrGm.png",
    name: "Naiara Costa",
    description: "Sou estudante de Análise e Desenvolvimento de Sistemas pelo Senac e participante do bootcamp da Generation, onde desenvolvo habilidades em desenvolvimento full-stack, metodologias ágeis e soft skills voltadas ao mercado de tecnologia. Minha experiência anterior como Agente de Organização Escolar fortaleceu minha capacidade de organização, responsabilidade e trabalho em equipe, competências que aplico no dia a dia.",
    github: "https://github.com/devnaiara",
    linkedin: "https://www.linkedin.com/in/naiara-paula-costa/",
    qrcode: "https://qr.io/qr-svg/SGEtMV.svg?1738596453133",
  },
  {
    title: "Nayara Renata",
    image: "https://i.imgur.com/wiNbtZi.jpeg",
    photo: "https://i.imgur.com/wiNbtZi.jpeg",
    name: "Nayara Renata",
    description: "Desenvolvedor Full Stack, com experiência em Java, Spring, MySQL, HTML, CSS, JavaScript, TypeScript e React. Iniciei minha carreira em tecnologia como Analista Técnica na área financeira de uma Big Four, onde trabalhei por 3 anos e meio, desenvolvendo uma sólida base analítica e técnica. Em seguida, migrei para o desenvolvimento e participei do bootcamp da Generation, que me preparou para atuar como Full Stack Java. ",
    github: "https://github.com/NayRenata",
    linkedin: "https://www.linkedin.com/in/nayara-renata-costa-882949125/",
    qrcode: "https://qr.io/qr-svg/2Rgcjt.svg?1738594929818",
  },
  {
    title: "Rafael Aparecido",
    image: "https://i.imgur.com/mKCWpWo.jpeg",
    photo: "https://i.imgur.com/mKCWpWo.jpeg",
    name: "Rafael Aparecido",
    description: "Sou um profissional dedicado e em constante evolução, com experiência em atendimento ao cliente. Atuei como Operador de Telemarketing no Grupo AKRK, onde desenvolvi competências em comunicação, negociação e resolução de problemas ao oferecer soluções financeiras personalizadas, como empréstimos consignados. Atualmente, estou aprofundando meus estudos no bootcamp de Desenvolvimento Java pela Generation Brazil, onde aprendo a criar soluções tecnológicas completas utilizando HTML, CSS, Java e o framework Spring.",
    github: "https://github.com/Rafassz",
    linkedin: "https://www.linkedin.com/in/rafael-aparecido-macedo/",
    qrcode: "https://qr.io/qr-svg/UFZouN.svg?1738596144296",
  },
  {
    title: "Thayná Santos",
    image: "https://i.imgur.com/Sac5egN.jpeg",
    photo: "https://i.imgur.com/Sac5egN.jpeg",
    name: "Thayná Santos",
    description: "Desenvolvedora Full Stack | Estudante da 78ª turma da Generation Brasil e atualmente cursando o 1º semestre do curso técnico em Desenvolvimento de Sistemas na Etec Juscelino Kubitschek de Oliveira. Apaixonada por tecnologia e inovação, com experiência em Java, Spring, MySQL, JavaScript e React, integrando backend e frontend para desenvolver aplicações completas e funcionais. Sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir com projetos que gerem impacto positivo.",
    github: "https://github.com/thaynasimoes",
    linkedin: "https://www.linkedin.com/in/thaynapsimoes/",
    qrcode: "https://qr.io/qr-svg/COgK91.svg?1738595594250",
  },
  {
    title: "Vinicius Aquino",
    image: "https://i.imgur.com/JbaFqSf.jpeg",
    photo: "https://i.imgur.com/JbaFqSf.jpeg",
    name: "Vinicius Aquino",
    description: "Conhecimentos técnicos: Java, Spring, HTML + CSS + JS, Angular, React, SQL Server e MySQL. Atualmente, minha rotina divide-se em aprimorar minhas habilidades nas stacks Front-End e Back-End, buscando aprofundar meus conhecimentos em conceitos fundamentais da área. Além disso, estou dedicando tempo para explorar aplicações práticas desses conhecimentos através de projetos pessoais e colaborativos, visando não apenas fortalecer minha base teórica, mas também desenvolver minha capacidade de resolver problemas de forma eficiente e criativa.",
    github: "https://github.com/viniaquino",
    linkedin: "https://www.linkedin.com/in/vini-aquino/",
    qrcode: "https://qr.io/qr-svg/Q2Xj71.svg?1738595479376",
  },
];

export default function About() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const missaoRef = useRef(null);
  const visaoRef = useRef(null); 
  const valoresRef = useRef(null);
  const faqRef = useRef(null);
  const integrantesRef = useRef(null);

  const missaoInView = useInView(missaoRef, { once: true });
  const visaoInView = useInView(visaoRef, { once: true });
  const valoresInView = useInView(valoresRef, { once: true });
  const faqInView = useInView(faqRef, { once: true });
  const integrantesInView = useInView(integrantesRef, { once: true });

  return (
    <div className="flex justify-center px-4 md:px-6 min-h-screen bg-slate-50">
      <div className="space-y-10 max-w-screen-lg w-full py-10">

        <motion.div
          ref={missaoRef}
          initial={{ opacity: 0, y: 50 }}
          animate={missaoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Sobre{" "}
            </h2>
            <div className="text-center">
              <img
                src="https://i.imgur.com/MRujAXg.jpeg"
                alt="Logo DevLivery"
                className="mx-auto w-full max-w-[200px] h-auto mb-4 rounded-lg"
              />
            </div>
            <p className="text-lg text-justify">
              O DevLivery é a plataforma ideal para quem busca praticidade,
              rapidez e segurança na hora de fazer compras online. Com uma
              interface moderna e intuitiva, oferecemos uma experiência única,
              conectando você aos melhores produtos e serviços com apenas alguns
              cliques. Seja para adquirir um item essencial ou aproveitar uma
              oferta imperdível, o DevLivery é a sua melhor escolha para compras
              online!
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={faqRef}
          initial={{ opacity: 0, y: 50 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <section className="bg-gray-900 p-8 rounded-lg shadow-md text-white">
            <h2 className="text-3xl font-bold text-white-400 mb-6 text-center">
              Perguntas Frequentes
            </h2>
            {faqItems.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full flex justify-between items-center bg-red-600 text-white p-4 rounded-lg hover:bg-red-500 transition duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg">{faq.question}</span>
                  {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === index && (
                  <p className="p-4 bg-gray-800 text-gray-200 rounded-lg mt-2 text-lg">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </section>
        </motion.div>

        <motion.div
          ref={integrantesRef}
          initial={{ opacity: 0, y: 50 }}
          animate={integrantesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-3xl text-center font-bold text-gray-900 mb-6">
            Equipe DevLivery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg bg-gray-900 transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:brightness-50"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-[#FF0300]/70">
                    <motion.button
                      className="border border-white text-white font-semibold py-2 px-4 rounded"
                      onClick={() => setSelectedCard(card)}
                    >
                      Ver Mais
                    </motion.button>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-white text-xl font-bold">{card.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal de Integrantes */}
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg text-center w-full max-w-2xl"
            >
              <img
                src={selectedCard.photo}
                alt="Foto"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-white">
                {selectedCard.name}
              </h2>
              <p className="mb-4 text-justify text-gray-300">
                {selectedCard.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={selectedCard.github}
                  target="_blank"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  GitHub
                </a>
                <a
                  href={selectedCard.linkedin}
                  target="_blank"
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-500"
                >
                  LinkedIn
                </a>
              </div>
              <img
                src={selectedCard.qrcode}
                alt="QR Code"
                className="w-20 h-20 mt-4 mx-auto"
              />
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
                onClick={() => setSelectedCard(null)}
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
