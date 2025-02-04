import React from "react";
import { useDispatch } from "react-redux";
import { ImCross } from "react-icons/im";
import Produto from "../../models/Produto";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteproduto,
} from "../../redux/OrebiSlice"; // Ações corretas

interface CardProdutoProps {
  produto: Produto;
  quantidade: number; // Agora, a quantidade vem do estado
}

const CardProduto = ({ produto, quantidade }: CardProdutoProps) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full grid grid-cols-5 items-center px-6 text-primeColor border-b py-4">
      <div className="flex items-center gap-4">
        <ImCross
          className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
          onClick={() => dispatch(deleteproduto(produto.idProduto))}
        />
        <img
          className="w-20 h-20"
          src={produto.imagem}
          alt="Imagem do Produto"
        />
        <h1 className="text-sm font-titleFont font-semibold">
          {produto.nomeProduto}
        </h1>
      </div>

      <p className="text-center font-semibold">R$ {produto.preco}</p>

      <div className="flex items-center justify-center gap-4 text-lg">
        <span
          onClick={() =>
            dispatch(decreaseQuantity({ idProduto: produto.idProduto }))
          }
          className="w-6 h-6 bg-gray-100 text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border border-gray-300"
        >
          -
        </span>
        <p>{quantidade}</p>
        <span
          onClick={() =>
            dispatch(increaseQuantity({ idProduto: produto.idProduto }))
          }
          className="w-6 h-6 bg-gray-100 text-xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border border-gray-300"
        >
          +
        </span>
      </div>

      <p className="text-center font-bold">
        R$ {(quantidade * produto.preco).toFixed(2)}
      </p>
    </div>
  );
};

export default CardProduto;
