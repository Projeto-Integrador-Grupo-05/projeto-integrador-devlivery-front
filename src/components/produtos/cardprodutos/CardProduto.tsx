  import Produto from "../../../models/Produto";

  interface CardProdutosProps {
    produto: Produto;
  }

  function CardProduto({ produto }: CardProdutosProps) {
    return (
      <div className="border border-gray-400 flex flex-col rounded-xl overflow-hidden shadow-2xl p-6 relative">
          <div className="relative">
          {produto.saudavel ?
          <img
            src="src\assets\icons\leaf.svg"
            width="50px"
            alt="Ícone de uma folha"
            className="p-3 rounded-full bg-rose-400 absolute top-2 right-2 invert"
          />
          : ""}
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
          <h3 className="text-2xl">R${produto.preco.toFixed(2).replace('.', ',')}</h3>
          <p>{produto.calorias} Kcal (100g)</p>
        </div>

        <button className="flex items-center gap-1 bg-red-600 text-white rounded-xl px-5 py-2 mt-10 hover:scale-105 transition-transform hover:shadow-2xl">
          <img
            src="src\assets\icons\shopping-cart.svg"
            width="20px"
            className="invert"
            alt="Ícone de um carrinho"
          />
          Adicionar ao carrinho
        </button>
      </div>
    );
  }

  export default CardProduto;
