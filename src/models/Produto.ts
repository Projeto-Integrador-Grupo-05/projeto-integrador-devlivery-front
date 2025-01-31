import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  idProduto: number;
  nomeProduto: string;
  calorias: string;
  saudavel: boolean;
  preco: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
