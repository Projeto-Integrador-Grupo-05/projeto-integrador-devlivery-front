import Produto from "./Produto";

export default interface Categoria {
  id: number;
  nomeCategoria: string;
  descricao: string;
  produto?: Produto | null;
}
