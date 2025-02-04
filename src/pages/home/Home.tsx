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
import { FaCog, FaBox, FaList } from "react-icons/fa";

import "./Home.css";

const ImageList = [
  { id: 1, img: moça },
  { id: 2, img: cauboi },
];

const ServicesData = [
  { id: 1, img: carne },
  { id: 2, img: confort },
  { id: 3, img: mucilon },
  { id: 4, img: neve },
  { id: 5, img: protetor },
  { id: 6, img: leite },
  { id: 7, img: protetor },
  { id: 8, img: leite },
  { id: 9, img: protetor },
  { id: 10, img: leite },
];

const Hero = () => {
  const [imageId, setImageId] = useState(moça);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [frete, banner1, banner2];

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

  const categorias = [
    {
      id: 1,
      nome: "Hortifrut",
      imagem: "/src/assets/image/horti.png",

      produtos: [
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
      ],
    },
    {
      id: 2,
      nome: "Churrasco",
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
      ],
    },
    {
      id: 3,
      nome: "Churrasco",
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
      ],
    },
    {
      id: 4,
      nome: "Churrasco",
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
      ],
    },
    {
      id: 5,
      nome: "Churrasco",
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
      ],
    },
    {
      id: 6,
      nome: "Churrasco",
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
        {
          id: 1,
          nome: "Maçã",
          preco: "R$ 5,00",
          img: "../src/assets/image/leite.png",
        },
      ],
    },
    // Adicione outras categorias conforme necessário
  ];

  return (
    <>
      {/** Inicio do banner */}
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
                Bem-vindo ao
                <br />
                <span className="text-orange-600">Devlivery</span>
              </h1>
              <p className="text-2xl text-justify">
                Receba tudo do seu mercado favorito em casa, com rapidez,
                segurança e praticidade!
              </p>
              <div className="text-left">
                <button className="button-style bg-black font-bold bg-gradient-to-r from-primary to-secondary hover:bg-gray-300 hover:scale-105 duration-200 py-2 px-4 rounded-full shadow-lg hover:shadow-xl text-orange-500">
                  <a href="/produtos">Comprar agora</a>
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
                  className="w-[300px] sm:w-[300px] sm:scale-200 mx-auto"
                  style={{
                    marginTop: imageId === cauboi ? "20px" : "30px",
                    marginLeft: "15px",
                    marginRight: "40px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Fim do banner */}

      {/** Categoria e produto */}
      <div className="flex items-center justify-center bg-gray-900 text-white p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <FaList className="mr-2" />
            <span>
              <a href="categoria" target="_self" rel="noopener noreferrer">
                Categorias
              </a>
            </span>
          </div>
          <span>|</span>
          <div className="flex items-center">
            <FaBox className="mr-2" />
            <span>
              <a href="/produtos" target="_self" rel="noopener noreferrer">
                Produtos
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-700">
            Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="../src/assets/image/picanha.png"
                alt="Picanha"
                className="w-full h-48 object-contain rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">Picanha Maturatta</h3>
              <p className="mt-2 text-gray-600">R$ 50,00</p>
              <button className="button-style mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Adicionar ao Carrinho
              </button>
            </div>
            {/* Product 2 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="../src/assets/image/nutella.png"
                alt="nutella"
                className="w-full h-48 object-contain rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">Nutella</h3>
              <p className="mt-2 text-gray-600">R$ 30,00</p>
              <button className="button-style mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Adicionar ao Carrinho
              </button>
            </div>
            {/* Product 3 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="../src/assets/image/chalise.png"
                alt="vinho"
                className="w-full h-48 object-contain rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">Vinho Chalise</h3>
              <p className="mt-2 text-gray-600">R$ 75,00</p>
              <button className="button-style mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Adicionar ao Carrinho
              </button>
            </div>
            {/* Product 4 */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="../src/assets/image/geleia.png"
                alt="geleia"
                className="w-full h-48 object-contain rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold">
                Geleia Queensberry{" "}
              </h3>
              <p className="mt-2 text-gray-600">R$ 20,00</p>
              <button className=" button-style mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </section>

      {/** Início do banner */}
      <div className="mt-14 mb-14 ml-32 mr-48 rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={banners[currentBanner]}
            alt="Banner do frete"
            style={{ height: "180px", width: "1700px" }}
            className="w-full h-auto"
          />
          <button
            onClick={prevBanner}
            className="button-style absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
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
            className=" button-style absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
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
      {/** Fim do banner */}

      {/* Artigo sobre Azeite */}
      <section className="bg-white py-">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-700">
            Azeite de Oliva Extra Virgem
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
              <img
                src="../src/assets/image/azeite.png"
                alt="Azeite de Oliva"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <p className="text-lg text-gray-700 mb-4 mt-0">
                O azeite de oliva extra virgem é uma das opções mais saudáveis
                para o preparo dos seus pratos. Com um sabor único e
                propriedades nutricionais ricas, ele se tornou um ingrediente
                essencial em muitas cozinhas ao redor do mundo.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Nosso azeite é extraído de azeitonas frescas, garantindo um
                produto de alta qualidade e sabor incomparável. Ideal para
                saladas, molhos e até para dar aquele toque especial ao seu
                prato favorito.
              </p>
              <button className="button-style mt-4 px-6 py-3 bg-blue-600 text-orange-500 rounded-md hover:bg-blue-700 ">
                Comprar Azeite
              </button>
            </div>
          </div>
        </div>
      </section>

      {/** Início do app */}
      <div className="bg-white dark:bg-gray-800 py-">
        <div className="container ">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-20 ml-14">
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
                    className="max-w-[120px] sm:max-w-[100px] md:max-w-[150px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="App store"
                    className="max-w-[120px] sm:max-w-[100px] md:max-w-[150px]"
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
      {/** Fim do app */}
    </>
  );
};

export default Hero;
