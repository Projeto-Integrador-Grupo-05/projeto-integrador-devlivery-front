import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import CardProduto from "../cardprodutos/CardProduto";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaProdutos() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtosFiltrados, setProdutosFiltrados] = useState<Produto[]>([]);
  const [criterio, setCriterio] = useState<
    "preco" | "nomeProduto" | "calorias" | "idProduto"
  >("idProduto");
  const [filtrosAtivos, setFiltrosAtivos] = useState(false);
  const [filtroPrecoMax, setFiltroPrecoMax] = useState<number | null>(null);
  const [filtroPrecoMin, setFiltroPrecoMin] = useState<number | null>(null);
  const [filtroCaloriasMin, setFiltroCaloriasMin] = useState<number | null>(
    null
  );
  const [filtroCaloriasMax, setFiltroCaloriasMax] = useState<number | null>(
    null
  );
  const [filtroSaudaveis, setFiltroSaudaveis] = useState(false);

  useEffect(() => {
    const produtosFiltrados = produtos.filter((produto) => {
      const dentroDoPreco =
        (filtroPrecoMin === null || produto.preco >= (filtroPrecoMin ?? 0)) &&
        (filtroPrecoMax === null ||
          produto.preco <= (filtroPrecoMax ?? Infinity));

      const dentroDasCalorias =
        (filtroCaloriasMin === null ||
          produto.calorias >= (filtroCaloriasMin ?? 0)) &&
        (filtroCaloriasMax === null ||
          produto.calorias <= (filtroCaloriasMax ?? Infinity));

      const produtoSaudavel = filtroSaudaveis ? produto.saudavel : true;

      return dentroDoPreco && dentroDasCalorias && produtoSaudavel;
    });

    setProdutosFiltrados(produtosFiltrados);
  }, [
    filtroPrecoMin,
    filtroPrecoMax,
    filtroCaloriasMin,
    filtroCaloriasMax,
    filtroSaudaveis,
    produtos,
  ]);

  async function buscarProdutos() {
    try {
      await buscar("/produto", setProdutos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "erro");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  const handleFiltroPrecoMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value ? Number(event.target.value) : null;
    setFiltroPrecoMin(valor);
    setFiltrosAtivos(
      valor !== null ||
        filtroPrecoMax !== null ||
        filtroCaloriasMin !== null ||
        filtroSaudaveis
    );
  };

  const handleFiltroPrecoMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valor = event.target.value ? Number(event.target.value) : null;
    setFiltroPrecoMax(valor);
    setFiltrosAtivos(
      valor !== null ||
        filtroPrecoMin !== null ||
        filtroCaloriasMin !== null ||
        filtroCaloriasMax !== null ||
        filtroSaudaveis
    );
  };

  const handleCheckboxChange = () => {
    setFiltroSaudaveis(!filtroSaudaveis);
    setFiltrosAtivos(
      !filtroSaudaveis ||
        filtroPrecoMin !== null ||
        filtroPrecoMax !== null ||
        filtroCaloriasMin !== null ||
        filtroCaloriasMax !== null
    );
  };

  const handleFiltroCaloriasMin = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valor = event.target.value ? Number(event.target.value) : null;
    setFiltroCaloriasMin(valor);
    setFiltrosAtivos(
      valor !== null ||
        filtroPrecoMin !== null ||
        filtroPrecoMax !== null ||
        filtroSaudaveis
    );
  };

  const handleFiltroCaloriasMax = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const valor = event.target.value ? Number(event.target.value) : null;
    setFiltroCaloriasMax(valor);
    setFiltrosAtivos(
      valor !== null ||
        filtroPrecoMin !== null ||
        filtroPrecoMax !== null ||
        filtroSaudaveis
    );
  };

  function ordenarProdutos(a: Produto, b: Produto) {
    if (criterio === "nomeProduto") {
      return a.nomeProduto.localeCompare(b.nomeProduto);
    }
    return Number(a[criterio]) - Number(b[criterio]);
  }

  const produtosOrdenados = [...produtosFiltrados].sort(ordenarProdutos);
  const produtosNovosOrdenados = [...produtos].sort(ordenarProdutos);

  return (
    <>
      {produtos.length === 0 && (
        <DNA visible height="200" width="200" ariaLabel="dna-loading" />
      )}

      <div className="mx-10 my-10">
        <div className="flex flex-row justify-between mb-16">
          {/*Navegação breadcrumbs */}
          <div className="text-md text-gray-500">
            <Link className="text-gray-700 hover:underline" to="/">
              Home
            </Link>
            / <b>NomeCategoria</b>
          </div>

          <select
            className="rounded-xl shadow-2xl py-2 px-5 border border-gray-400"
            value={criterio}
            onChange={(e) =>
              setCriterio(
                e.target.value as
                  | "idProduto"
                  | "preco"
                  | "nomeProduto"
                  | "calorias"
              )
            }
          >
            <option value="idProduto">Classificar por</option>
            <option value="nomeProduto">Nome</option>
            <option value="preco">Preço</option>
            <option value="calorias">Calorias</option>
          </select>
        </div>

        <div className="flex flex-row items-start justify-evenly gap-10">
          {/* Filtros */}
          <div className="basis-2/12">
            <h3 className="text-xl mb-4">Filtrar por</h3>

            {/* Preco */}
            <div className="my-5">
              <p className="text-sm my-1">Valor</p>
              <div className="flex gap-1">
                <input
                  type="number"
                  placeholder="  De"
                  className="w-1/2 py-2 px-1 rounded-xl shadow-2xl border border-gray-400"
                  onChange={handleFiltroPrecoMin}
                />
                <input
                  type="number"
                  placeholder="  Até"
                  className="w-1/2 py-2 px-1 rounded-xl shadow-2xl border border-gray-400"
                  onChange={handleFiltroPrecoMax}
                />
              </div>
            </div>

            {/* Calorias */}
            <div className="my-5">
              <p className="text-sm my-1">Calorias (100g)</p>
              <div className="flex gap-1">
                <input
                  type="number"
                  placeholder="  De"
                  className="w-1/2 py-2 px-1 rounded-xl shadow-2xl border border-gray-400"
                  onChange={handleFiltroCaloriasMin}
                />
                <input
                  type="number"
                  placeholder="  Até"
                  className="w-1/2 py-2 px-1 rounded-xl shadow-2xl border border-gray-400"
                  onChange={handleFiltroCaloriasMax}
                />
              </div>
            </div>

            {/* Saudaveis */}
            <div className="my-5">
              <p className="text-sm">Produtos</p>
              <div className="flex flex-row mt-5 items-center space-x-2">
                <input
                  type="checkbox"
                  className="mr-1"
                  checked={filtroSaudaveis}
                  onChange={handleCheckboxChange}
                />
                <div className="relative">
                  <img
                    src="src/assets/icons/leaf.svg"
                    width="40px"
                    alt="Ícone de uma folha"
                    className="p-3 rounded-full bg-rose-400 invert"
                  />
                </div>
                <p>Saudáveis</p>
              </div>
            </div>

            {/* Filtros Ativos */}
            {filtrosAtivos && (
              <>
                <h3 className="text-xl mb-4">Filtros Aplicados</h3>
                <div className="flex flex-col gap-4">
                  {filtroPrecoMin !== null && (
                    <li>Min. Preço: R${filtroPrecoMin}</li>
                  )}
                  {filtroPrecoMax !== null && (
                    <li>Max. Preço: R${filtroPrecoMax}</li>
                  )}
                  {filtroCaloriasMin !== null && (
                    <li>Min. Calorias: {filtroCaloriasMin} Kcal</li>
                  )}
                  {filtroCaloriasMax !== null && (
                    <li>Max. Calorias: {filtroCaloriasMax} Kcal</li>
                  )}
                  {filtroSaudaveis && <li>Somente produtos saudáveis</li>}
                </div>
              </>
            )}
          </div>

          {/* Produtos */}
          <div className="basis-10/12">
            {/* Novos Produtos */}
            {!filtrosAtivos && (
              <div>
                <h3 className="text-2xl">Novos Produtos</h3>
                <p className="text-sm text-gray-500 mb-5">
                  Os últimos produtos adicionados à nossa loja
                </p>
                <div className="flex gap-2 flex-wrap">
                  {produtosNovosOrdenados
                    .slice(-4)
                    .reverse()
                    .map((produto) => (
                      <CardProduto key={produto.idProduto} produto={produto} />
                    ))}
                </div>
              </div>
            )}

            {/* Produtos filtrados */}
            {filtrosAtivos ? (
              <div>
                <h3 className="text-2xl">Produtos filtrados</h3>
                <p className="text-sm text-gray-500 mb-5">
                  {produtosFiltrados.length} produtos que atendem aos seus
                  filtros
                </p>
                <div className="flex gap-2 flex-wrap">
                  {produtosOrdenados.map((produto) => (
                    <CardProduto key={produto.idProduto} produto={produto} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="my-5">
                <h3 className="text-2xl">Todos os Produtos</h3>
                <p className="text-sm text-gray-500 mb-5">
                  <b>{produtosFiltrados.length}</b> produtos encontrados
                </p>

                <div className="flex gap-2 flex-wrap">
                  {produtos.map((produto) => (
                    <CardProduto key={produto.idProduto} produto={produto} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaProdutos;
