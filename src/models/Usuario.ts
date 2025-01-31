import Produto from "./Produto";

export default interface Usuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  tipo: string;
  endereco: string;
  produto?: Produto | null;
}
