import { Leaf, ShoppingCart } from "lucide-react";
import Produto from "../../../models/Produto";

interface CardProdutosProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutosProps) {
  const adicionarAoCarrinho = () => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho") || "[]");

    const produtoExistente = carrinhoAtual.find(
      (item: Produto) => item.idProduto === produto.idProduto
    );

    if (produtoExistente) {
      produtoExistente.quantidade += 1;
    } else {
      carrinhoAtual.push({ ...produto, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));

    alert(`${produto.nomeProduto} foi adicionado ao carrinho!`);
  };

  return (
    <div className="border border-gray-400 flex flex-col rounded-xl overflow-hidden shadow-2xl p-6 relative">
      <div className="relative">
        {produto.saudavel ? <Leaf color="green" /> : ""}
        <div className="flex items-center justify-center">
          <img
            className="h-36 w-56 object-cover rounded-xl"
            src={produto.imagem}
            alt={`Foto do produto ${produto.nomeProduto}`}
          />
        </div>
      </div>

      <div className="flex flex-col mt-5">
        <p className="text-thin">{produto.nomeProduto}</p>
        <h3 className="text-2xl">
          R${produto.preco.toFixed(2).replace(".", ",")}
        </h3>
        <p>{produto.calorias} Kcal (100g)</p>
      </div>

      <button
        className="flex items-center gap-1 bg-red-600 text-white rounded-xl px-5 py-2 mt-10 hover:scale-105 transition-transform hover:shadow-2xl"
        onClick={adicionarAoCarrinho}
      >
        <ShoppingCart />
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default CardProduto;
