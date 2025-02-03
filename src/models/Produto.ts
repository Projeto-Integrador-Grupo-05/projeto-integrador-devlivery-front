import Categoria from "./Categoria";
import Usuario from "./Usuario";

export default interface Produto {
  idProduto: number;
  nomeProduto: string;
  calorias: number;
  saudavel: boolean;
  preco: number;
  imagem: string;
  categoria: Categoria | null;
  usuario: Usuario | null;
}
