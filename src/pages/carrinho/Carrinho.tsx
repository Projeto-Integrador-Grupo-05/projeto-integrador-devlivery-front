import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import CardProduto from "./CardProduto";

const Carrinho = () => {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [totalAmt, setTotalAmt] = useState(0);
  const [shippingCharge, setShippingCharge] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho") || "[]");
    setProdutos(carrinhoSalvo);
  }, []);

  useEffect(() => {
    const preco = produtos.reduce(
      (acc, produto) => acc + produto.preco * produto.quantidade,
      0
    );
    setTotalAmt(preco);
  }, [produtos]);

  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  const atualizarCarrinho = (novoCarrinho: any[]) => {
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    setProdutos(novoCarrinho);
  };

  const aumentarQuantidade = (idProduto: number) => {
    const novoCarrinho = produtos.map((produto) =>
      produto.idProduto === idProduto
        ? { ...produto, quantidade: produto.quantidade + 1 }
        : produto
    );
    atualizarCarrinho(novoCarrinho);
  };

  const diminuirQuantidade = (idProduto: number) => {
    const novoCarrinho = produtos
      .map((produto) =>
        produto.idProduto === idProduto
          ? { ...produto, quantidade: produto.quantidade - 1 }
          : produto
      )
      .filter((produto) => produto.quantidade > 0);
    atualizarCarrinho(novoCarrinho);
  };

  const limparCarrinho = () => {
    localStorage.removeItem("carrinho");
    setProdutos([]);
    toast.success("Carrinho limpo com sucesso!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
        <h1 className="text-3xl md:text-5xl text-primeColor font-titleFont font-bold">
          Carrinho
        </h1>
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
              <div
                key={produto.idProduto}
                className="grid grid-cols-2 md:grid-cols-5 items-center px-6 py-4 border-b"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-20 h-20"
                    src={produto.imagem}
                    alt={produto.nomeProduto}
                  />
                  <h1 className="text-sm font-titleFont font-semibold">
                    {produto.nomeProduto}
                  </h1>
                </div>
                <p className="text-center hidden md:block">
                  R$ {produto.preco.toFixed(2)}
                </p>
                <div className="flex items-center justify-center gap-4 text-lg">
                  <button
                    className="w-6 h-6 bg-gray-200 text-xl flex items-center justify-center hover:bg-gray-300 duration-300 border border-gray-300"
                    onClick={() => diminuirQuantidade(produto.idProduto)}
                  >
                    -
                  </button>
                  <p>{produto.quantidade}</p>
                  <button
                    className="w-6 h-6 bg-gray-200 text-xl flex items-center justify-center hover:bg-gray-300 duration-300 border border-gray-300"
                    onClick={() => aumentarQuantidade(produto.idProduto)}
                  >
                    +
                  </button>
                </div>
                <p className="text-center hidden md:block font-bold">
                  R$ {(produto.quantidade * produto.preco).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="">
            <button
              onClick={limparCarrinho}
              className="py-2 px-10 bg-red-500 text-white font-bold uppercase mb-4 hover:bg-red-700 duration-300 mr-4"
            >
              Limpar carrinho
            </button>
            <button
              onClick={() => navigate("/produtos")}
              className="py-2 px-10 bg-blue-500 text-white font-bold uppercase mb-4 hover:bg-blue-600 duration-300"
            >
              + Produtos
            </button>
          </div>

          <div className="max-w-7xl gap-4 flex justify-center mt-4">
            <div className="w-full md:w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">
                Resumo do pedido
              </h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide font-titleFont">
                    R$ {totalAmt.toFixed(2)}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Frete
                  <span className="font-semibold tracking-wide font-titleFont">
                    R$ {shippingCharge.toFixed(2)}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    R$ {(totalAmt + shippingCharge).toFixed(2)}
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
            <Link to="/produtos">
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
