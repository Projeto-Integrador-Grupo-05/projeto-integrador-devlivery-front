import Produto from "./Produto";

export default interface Usuario {
  id?: number;
  foto: string;
  nome: string;
  email: string;
  senha: string;
  tipo: string;
  endereco: string;
  produto?: Produto | null;
}
