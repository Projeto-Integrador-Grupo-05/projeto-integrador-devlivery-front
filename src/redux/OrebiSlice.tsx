import { createSlice } from "@reduxjs/toolkit";
import Produto from "../models/Produto";

interface State {
  produtos: {
    produto: Produto;
    quantidade: number;
  }[];
}

const initialState = {
  produtos: [],
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const produtoExistente = state.produtos.find(
        (item) => item.idProduto.idProduto === action.payload.idProduto
      );
      if (produtoExistente) {
        produtoExistente.quantidade += action.payload.quantidade;
      } else {
        state.produtos.push({
          produto: { ...action.payload },
          quantidade: action.payload.quantidade || 1,
        });
      }
    },
    increaseQuantity: (state, action) => {
      const produto = state.produtos.find(
        (item) => item.idProduto === action.payload.idProduto
      );
      if (produto) {
        produto.quantidade++;
      }
    },
    decreaseQuantity: (state, action) => {
      const produto = state.produtos.find(
        (produto) => produto.idProduto === action.payload.idProduto
      );
      if (produto && produto.quantidade > 1) {
        produto.quantidade--;
      }
    },
    deleteproduto: (state, action) => {
      state.produtos = state.produtos.filter(
        (produto) => produto.idProduto !== action.payload
      );
    },
    resetCart: (state) => {
      state.produtos = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteproduto,
  resetCart,
} = orebiSlice.actions;
export default orebiSlice.reducer;
