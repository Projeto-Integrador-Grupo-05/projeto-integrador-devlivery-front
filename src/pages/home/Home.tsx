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
      nome: 'Hortifrut',
      imagem: "/src/assets/image/horti.png",
      
      produtos: [
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        
        
      ]
    },
    {
      id: 2,
      nome: 'Churrasco',
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
      ]
    },
    {
      id: 3,
      nome: 'Churrasco',
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
      ]
    },
    {
      id: 4,
      nome: 'Churrasco',
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
      ]
    },
    {
      id: 5,
      nome: 'Churrasco',
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
      ]
    },
    {
      id: 6,
      nome: 'Churrasco',
      imagem: "/src/assets/image/churrasco.png",
      produtos: [
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
        { id: 1, nome: 'Maçã', preco: 'R$ 5,00', img: '../src/assets/image/leite.png' },
      ]
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
                Bem-vindo{" "}
                ao
                <br />
                <span className="text-orange-600">Devlivery</span>
              </h1>
              <p className="text-sm text-justify">
                Receba tudo o que você precisa do seu mercado favorito no
                conforto da sua casa! Nosso serviço de delivery oferece
                praticidade e conveniência com uma vasta variedade de produtos
                frescos, itens de supermercado e muito mais. Faça seu pedido
                online e entregue diretamente para você, com rapidez e
                segurança. Tudo o que você precisa, sem sair de casa!
              </p>
              <div className="text-left">
                <button className="bg-black font-bold bg-gradient-to-r from-primary to-secondary hover:bg-gray-300 hover:scale-105 duration-200 py-2 px-4 rounded-full shadow-lg hover:shadow-xl text-orange-500">
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
                  style={{
                    marginTop: imageId === cauboi ? "20px" : "30px",
                    marginLeft: "15px",
                    marginRight: "40px",
                  }}
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
      {/** Fim do banner */}

      {/** Início da categoria */} 
{/** Início da categoria */}
<section className="flex py-4 mt-5  pr-2 pl-4 pb-2">
  <div className="w-full">
    <div className="galeria flex flex-col gap-8 ml-20">
      {categorias.map((categoria) => (
        <div key={categoria.id} className="mb-8">
          {/* Flex para alinhar a categoria e os produtos na mesma linha */}
          <div className="flex items-start gap-8">
            {/* Imagem da categoria */}
            <figure className="flex-shrink-0">
              <img className="w-[100px] h-[100px] object-cover" src={categoria.imagem} alt={categoria.nome} />
            </figure>
            {/* Nome da categoria */}
            <figcaption className="text-green-800 font-bold text-xl flex-1">
              {categoria.nome}
            </figcaption>
            
            {/* Produtos ao lado da categoria */}
            <div className="produtos flex flex-wrap gap-6 w-full">
              {categoria.produtos.map((produto) => (
                <a href={`/produto/${produto.id}`} key={produto.id} className="w-1/4">
                  <div className="bg-white rounded-none shadow-md overflow-hidden">
                    <img src={produto.img} className="w-full h-[280px] object-fill rounded-none" />
                    <div className="p-4 text-center">
                      <h3 className="font-bold">{produto.nome}</h3>
                      <p>{produto.preco}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="w-1/4 ml-4 border border-gray-300 pr-4 pl-4 pb-2">
    <h2 className="text-gray-700 text-3xl text-center">Destaques do Dia 🔥</h2>
    <br />
    <div className="grid grid-cols-2 gap-6 w-full">
      {ServicesData.map((service) => (
        <a href="/produto" key={service.id}>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={service.img} className="w-full h-[280px] object-fill rounded-lg" />
          </div>
        </a>
      ))}
    </div>
  </div>
  
</section>


  
  <section>
    {/** Seção de Destaques do Dia */}  
  
</section>
{/** Fim da categoria */}



      {/** Início do app */}
      <div className="bg-orange-200 dark:bg-gray-800 py-10">
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
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
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
      {/** Fim do app */}

      {/** Início do banner */}
      <div className="mt-14 mb-14 ml-32 mr-48 rounded-lg overflow-hidden">
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
      {/** Fim do banner */}
    </>
  );
};

export default Hero;
