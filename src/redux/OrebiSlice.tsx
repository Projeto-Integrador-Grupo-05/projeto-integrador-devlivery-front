import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    produtos: [
      {
        id: "",
        nome: "",
        preco: 0,
        quantidade: 0,
      },
    ],
  };
  

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const produto = state.produtos.find(
        (produto) => produto.idProduto === action.payload.idProduto
      );
      if (produto) {
        produto.quantidade += action.payload.quantidade;
      } else {
        state.produtos.push({ ...action.payload, quantidade: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const produto = state.produtos.find(
        (produto) => produto.idProduto === action.payload.idProduto
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
