import React, { useState } from "react";
import moça from "../../assets/image/moça.png";
import cauboi from "../../assets/image/cauboi.png";
import mercado from "../../assets/image/mercado.png";
import AppStoreImg from "../../assets/image/app_store.png";
import PlayStoreImg from "../../assets/image/play_store.png";
import Gif from "../../assets/image/mobile_bike.gif";
import generation from "../../assets/image/Generation.png";
import frete from "../../assets/image/frete.png";
import golpe from "../../assets/image/golpe.png";
import './Home.css'; // 


const ImageList = [
  { id: 1, img: moça },
  { id: 2, img: cauboi },
];

const ServicesData = [
  { id: 1, img: moça, name: "Biryani", description: "Lorem ipsum dolor sit amet." },
  { id: 2, img: cauboi, name: "Chicken kari", description: "Lorem ipsum dolor sit amet." },
  { id: 3, img: moça, name: "Cold Coffee", description: "Lorem ipsum dolor sit amet." },
  { id: 4, img: cauboi, name: "Pizza", description: "Lorem ipsum dolor sit amet." },
  { id: 5, img: moça, name: "Burger", description: "Lorem ipsum dolor sit amet." },
  { id: 6, img: cauboi, name: "Pasta", description: "Lorem ipsum dolor sit amet." },
  { id: 7, img: moça, name: "Sushi", description: "Lorem ipsum dolor sit amet." },
  { id: 8, img: moça, name: "Sushi2", description: "Lorem ipsum dolor sit amet." },
];

const Hero = () => {
  const [imageId, setImageId] = useState(moça);
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgImage = {
    backgroundImage: `url(${mercado})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const nextCards = () => {
    if (currentIndex < ServicesData.length - 5) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCards = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentCards = ServicesData.slice(currentIndex, currentIndex + 5);

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[450px] bg-orange-200 flex justify-center items-center text-gray-700 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-left">
                Welcome{" "}
                to the
                <br />
                <span className="text-orange-600">Devlivery</span>{" "}
                Zone
              </h1>
              <p className="text-sm text-justify">
              Receba tudo o que você precisa do seu mercado favorito no conforto da sua casa! Nosso serviço de delivery oferece praticidade e conveniência com uma vasta variedade de produtos frescos, itens de supermercado e muito mais. Faça seu pedido online e entregue diretamente para você, com rapidez e segurança. Tudo o que você precisa, sem sair de casa!</p>
              <div className="text-left">
                <button className="bg-black font-bold bg-gradient-to-r from-primary to-secondary hover:bg-gray-300 hover:scale-105 duration-200 py-2 px-4 rounded-full shadow-lg hover:shadow-xl text-orange-500  ">
                  Order Now
                </button>
              </div>
            </div>

            {/* Imagem da section do banner principal */}

            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="Image"
                  className="w-[300px] sm:w-[300px] sm:scale-200 mx-auto spin"
                  style={{ marginTop: imageId === cauboi ? "20px" : "0px" }} // Ajuste para descer a imagem do cauboi
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(item.id === 1 ? moça : cauboi);
                    }}
                    alt=""
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
                {/* Seção de Fotos  */}
      <section className="py-12">
        <div className="galeria grid grid-cols-3 gap-6">
          <img src="/src/assets/image/cauboi.png" alt="Again" />
          <img src="/src/assets/image/moça.png" alt="Mulher" />
          <img src="/src/assets/image/cauboi.png" alt="Disciplina" />
          <img src="/src/assets/image/moça.png" alt="Love" />
          <img src="/src/assets/image/cauboi.png" alt="Consistencia" />
          <img src="/src/assets/image/moça.png" alt="Foco" />
        </div>
      </section>

      {/* Frete */}
      <div className="mt-14 mb-14 ml-40 mr-40 rounded-lg overflow-hidden">
        <img
          src={frete}
          alt="Banner do frete"
          style={{ height: '180px', width: '1700px' }}
          className="w-full h-auto"
        />
      </div>

      {/* Carrossel de produtos Section */}
      
      <div className="container py-10 ml-32">
      <h2 color="primary" font-family="primarySemiBoldItalic" aria-label="" className="text-gray-700 ml-4 text-3xl">Destaques do dia 🔥</h2>

        <br />
        <div className="relative flex justify-center">
          <button
            onClick={prevCards}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            disabled={currentIndex === 0}
          >
            {/* Ícone SVG para seta para a esquerda */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextCards}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            disabled={currentIndex >= ServicesData.length - 5}
          >
            {/* Ícone SVG para seta para a direita */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full px-4 ">
            {currentCards.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={service.img} alt={service.name} className="w-full h-[200px] object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cartao Section */}


      {/* App Store Section */}
      <div className="bg-orange-200 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400">
                Devlivery está disponível no Android e IOS
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start ml-20">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="App store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="300">
              <img
                src={Gif}
                alt="mobile bike"
                className="w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply dark:mix-blend-difference"
              />
            </div>
          </div>
        </div>
      </div>


      {/**Golpe */}
      <div className="mt-5 mb-5 ml-40 mr-40 border border-gray-400 rounded-lg">
        <img
          src="../../src/assets/image/golpe.png"
          alt="Banner do golpe"
          style={{ height: '250px', width: '1400px' }}
          className="rounded-lg" // Isso garante que a borda siga as bordas arredondadas da imagem
        />
      </div>


    </>
  );
};

export default Hero;
