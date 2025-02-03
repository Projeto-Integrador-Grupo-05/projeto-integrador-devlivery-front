import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { resetCart, addToCart } from "../../redux/OrebiSlice";
import CardProduto from "./CardProduto";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Carrinho = () => {
  const dispatch = useDispatch();
  const produtos = useSelector((state) => state.orebiReducer.produtos);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");

  // Função para adicionar produto de teste
  useEffect(() => {
    const produtosTeste = [
      {
        idProduto: 1,
        nomeProduto: "Maçã Verde",
        calorias: "200",
        saudavel: true,
        preco: 5.00,
        quantidade: 0,
        categoria: { idCategoria: 1, nomeCategoria: "Frutas" },
        usuario: { idUsuario: 1, nomeUsuario: "Vinicius Aquino", email: "vinicius@example.com" },
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvgv37Nt_d-lkF24UYHoXZcpuqDUFzXrWVQ&s",
      },
      {
        idProduto: 2,
        nomeProduto: "Suco de Laranja",
        calorias: "150",
        saudavel: true,
        preco: 12.00,
        quantidade: 0,
        categoria: { idCategoria: 1, nomeCategoria: "Bebidas" },
        usuario: { idUsuario: 1, nomeUsuario: "Vinicius Aquino", email: "vinicius@example.com" },
        imagem: "https://i0.wp.com/braganca.com.br/wp-content/uploads/2023/06/suco-laranja-100-3l.jpg?fit=1000%2C1000&ssl=1",
      },
      {
        idProduto: 3,
        nomeProduto: "Mandioca",
        calorias: "250",
        saudavel: true,
        preco: 8.00,
        quantidade: 0,
        categoria: { idCategoria: 2, nomeCategoria: "Lanches" },
        usuario: { idUsuario: 1, nomeUsuario: "Vinicius Aquino", email: "vinicius@example.com" },
        imagem: "https://i.imgur.com/atuDo65.png",
      }
    ];
  
    produtosTeste.forEach((produto) => dispatch(addToCart(produto)));
  }, [dispatch]);
  

  useEffect(() => {
    let preco = 0;
    produtos.map((produto) => {
      preco += produto.preco * produto.quantidade;
      return preco;
    });
    setTotalAmt(preco);
  }, [produtos]);

  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  return (
    <div className="max-w-7xl mx-auto px-4">
  <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
    <h1 className="text-3xl md:text-5xl text-primeColor font-titleFont font-bold">Carrinho</h1>
    <p className="text-sm font-normal text-lightText capitalize flex items-center">
      {/* Texto adicional pode ser adicionado aqui */}
    </p>
  </div>

  {produtos.length > 0 ? (
    <div className="pb-20 items-center pl-4 md:pl-20 ml-0 md:ml-20">
      <div className="h-20 text-primeColor grid grid-cols-2 md:grid-cols-5 items-center px-6 text-lg font-titleFont font-semibold border-b">
        <h2 className="text-left pl-4">Produto</h2>
        <h2 className="text-center hidden md:block">Preço</h2>
        <h2 className="text-center">Quantidade</h2>
        <h2 className="text-center hidden md:block">Sub Total</h2>
      </div>

      <div className="mt-2">
        {produtos.map((produto) => (
          <CardProduto key={produto.idProduto} produto={produto} />
        ))}
      </div>

      <button
        onClick={() => dispatch(resetCart())}
        className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
      >
        Limpar carrinho
      </button>

      <div className="max-w-7xl gap-4 flex justify-center mt-4">
        <div className="w-full md:w-96 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold text-right">Resumo do pedido</h1>
          <div>
            <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
              Subtotal
              <span className="font-semibold tracking-wide font-titleFont">
                R${totalAmt}
              </span>
            </p>
            <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
              Frete
              <span className="font-semibold tracking-wide font-titleFont">
                R${shippingCharge}
              </span>
            </p>
            <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
              Total
              <span className="font-bold tracking-wide text-lg font-titleFont">
                R${totalAmt + shippingCharge}
              </span>
            </p>
          </div>
          <div className="flex justify-end">
            <button
              className="w-full md:w-52 h-10 bg-green-800 text-white hover:bg-black duration-300"
              onClick={() => toast.success("Pedido realizado com sucesso!")}
            >
              Confirmar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
    >
      <div>
        <img
          className="w-80 rounded-lg p-4 mx-auto"
          src="https://i.imgur.com/0YWNinr.png"
          alt="emptyCart"
        />
      </div>
      <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
        <h1 className="font-titleFont text-xl font-bold uppercase">
          Seu carrinho está vazio!
        </h1>
        <p className="text-sm text-center px-10 -mt-2">
          Seu carrinho de compras está vazio! Adicione produtos.
        </p>
        <Link to="/listaprodutos">
          <button className="bg-black rounded-md cursor-pointer hover:bg-white active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-black duration-300">
            Continuar Comprando
          </button>
        </Link>
      </div>
    </motion.div>
  )}
</div>
  );
};

export default Carrinho;
