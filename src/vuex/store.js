import { createStore } from "vuex";
import axios from "axios";
let store = new createStore({
  state: {
    products: [],
    card: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CARD: (state, product) => {
      state.card.push(product);
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios(" http://localhost:3000/products ", {
        method: "GET",
      })
        .then((products) => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CARD({ commit }, product) {
      commit("SET_CARD", product);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CARD(state) {
      return state.card;
    },
  },
});


export default store;
