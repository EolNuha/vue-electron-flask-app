/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { createStore } from "vuex";
import axios from "axios";

const baseURL = "http://localhost:5000";

export default createStore({
  state: { testVar: 3, products: [] },
  getters: {},
  mutations: {
    INCREMENT_COUNT(state, payload) {
      state.testVar += payload;
    },
    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    getProducts({ commit }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${baseURL}/api/products`)
          .then(async (response) => {
            commit("SET_PRODUCTS", response.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    createProduct({ commit, state }, data) {
      return new Promise((resolve, reject) => {
        axios({
          url: `/api/products`,
          baseURL,
          method: "POST",
          data,
        })
          .then(async (response) => {
            // commit("SET_PRODUCTS", response.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  modules: {},
});
