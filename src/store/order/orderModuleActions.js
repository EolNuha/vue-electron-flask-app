/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import axios from "axios";

const baseURL = "http://localhost:5000";

export default {
  createOrder({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      axios({
        url: `/api/orders`,
        baseURL,
        method: "POST",
        data,
      })
        .then(async (response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getOrders({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseURL}/api/orders`, { params: data })
        .then(async (response) => {
          commit("SET_ORDERS", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getOrderDetails({ commit }, orderId) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${baseURL}/api/orders/${orderId}`)
        .then(async (response) => {
          commit("SET_ORDER", response.data);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
