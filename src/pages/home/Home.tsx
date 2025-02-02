import React, { useState } from "react";
import leite from "../../assets/image/leite.png";
import whisky from "../../assets/image/whisky.png";
import chocolate from "../../assets/image/chocolate.png";
import biscoito from "../../assets/image/biscoito.png";
import nescau from "../../assets/image/nescau.png";
import moça from "../../assets/image/moça.png";
import neve from "../../assets/image/neve.png";
import mucilon from "../../assets/image/mucilon.png";
import confort from "../../assets/image/confort.png";
import carne from "../../assets/image/carne.png";
import protetor from "../../assets/image/protetor.png";
import cauboi from "../../assets/image/cauboi.png";
import mercado from "../../assets/image/mercado.png";
import AppStoreImg from "../../assets/image/app_store.png";
import PlayStoreImg from "../../assets/image/play_store.png";
import Gif from "../../assets/image/mobile_bike.gif";
import generation from "../../assets/image/Generation.png";
import frete from "../../assets/image/frete.png";
import golpe from "../../assets/image/golpe.png";
import banner1 from "../../assets/image/banner1.png"; // Novo banner 1
import banner2 from "../../assets/image/banner2.png"; // Novo banner 2
import './Home.css';

const ImageList = [
  { id: 1, img: moça },
  { id: 2, img: cauboi },
];

const ServicesData = [
  { id: 1, img: carne,  },
  { id: 2, img: confort,   },
  { id: 3, img: mucilon,   },
  { id: 4, img: neve,   },
  { id: 5, img: protetor,  },
  { id: 6, img: leite,  },
  { id: 7, img: nescau,   },
  { id: 8, img: chocolate,   },
  { id: 7, img: biscoito,   },
  { id: 8, img: whisky, },
];

const Hero = () => {
  const [imageId, setImageId] = useState(moça);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Para os banners de frete
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [frete, banner1, banner2]; // Lista de banners

  const bgImage = {
    backgroundImage: `url(${mercado})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[450px] bg-orange-200 flex justify-center items-center text-gray-700 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-left">
                Bem-vindo{" "}
                ao 
                <br />
                <span className="text-orange-600">Devlivery</span>{" "}
                
              </h1>
              <p className="text-sm text-justify">
                Receba tudo o que você precisa do seu mercado favorito no conforto da sua casa! Nosso serviço de delivery oferece praticidade e conveniência com uma vasta variedade de produtos frescos, itens de supermercado e muito mais. Faça seu pedido online e entregue diretamente para você, com rapidez e segurança. Tudo o que você precisa, sem sair de casa!
              </p>
              <div className="text-left">
                <button className="bg-black font-bold bg-gradient-to-r from-primary to-secondary hover:bg-gray-300 hover:scale-105 duration-200 py-2 px-4 rounded-full shadow-lg hover:shadow-xl text-orange-500  ">
                  <a href="/produto">Comprar agora</a>
                </button>
              </div>
            </div>

            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  data-aos-once="true"
                  src={imageId}
                  alt="Image"
                  className="w-[300px] sm:w-[300px] sm:scale-200 mx-auto spin"
                  style={{ marginTop: imageId === cauboi ? "20px" : "0px" }}
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

      <section className="py-4">
        <a href="/produto" target="_blank" rel="noopener noreferrer">
          <div className="galeria grid grid-cols-3 gap-6 text-center pb-0">
            <figure>
              <img className="w-full h-auto" src="/src/assets/image/horti.png" alt="Horti" />
              <figcaption><span className="text-green-800 font-bold ">Hortifrut</span></figcaption>
            </figure>
            <figure>
              <img className="w-full h-auto" src="/src/assets/image/churrasco.png" alt="Horti" />
              <figcaption><span className="text-green-800 font-bold ">Churrasco</span></figcaption>
            </figure>
            <figure>
              <img className="w-full h-auto" src="/src/assets/image/cerveja.png" alt="Horti" />
              <figcaption><span className="text-green-800 font-bold ">Cerveja</span></figcaption>
            </figure>
            <figure>
              <img className="w-full h-auto" src="/src/assets/image/bolacha.png" alt="Horti" />
              <figcaption><span className="text-green-800 font-bold ">Bolacha</span></figcaption>
            </figure>
            <figure>
              <img className="w-full h-auto" src="/src/assets/image/café.png" alt="Horti" />
              <figcaption><span className="text-green-800 font-bold ">Café</span></figcaption>
            </figure>
            <figure>
              <img className="w-full h-auto" src="/src/assets/image/limpeza.png" alt="Horti" />
              <figcaption><span className="text-green-800 font-bold ">Limpeza</span></figcaption>
            </figure>
          </div>
        </a>
      </section>

      <div className="mt-14 mb-14 ml-40 mr-40 rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={banners[currentBanner]}
            alt="Banner do frete"
            style={{ height: '180px', width: '1700px' }}
            className="w-full h-auto"
          />
          <button
            onClick={prevBanner}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          >
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
            onClick={nextBanner}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          >
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
        </div>
      </div>

      <div className="container py-10 ml-32 pt-0">
        <h2 color="primary" font-family="primarySemiBoldItalic" aria-label="" className="text-gray-700 ml-4 text-3xl">Destaques do dia 🔥</h2>
        
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full px-4 ">
          {/* Exibe todas as imagens de produtos de uma vez */}
          {ServicesData.map((service) => (
            <a href="/produto">
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={service.img}  className="w-full h-[280px] object-contain rounded-lg" />
              <div className="p-4">
                
                
              </div>
            </div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-orange-200 dark:bg-gray-800 py-14">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400 ml-36">
                Devlivery está disponível no Android e IOS
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start ml-36">
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

      <div className="mt-5 mb-5 ml-40 mr-40 border border-gray-400 rounded-lg">
        <img
          src="../../src/assets/image/golpe.png"
          alt="Banner do golpe"
          style={{ height: '250px', width: '1400px' }}
          className="rounded-lg"
        />
      </div>
    </>
  );
};

export default Hero;
