export default {
  getOrdersList: (state) => state.orders.data,
  getOrdersPagination: (state) => state.orders.pagination,
  getOrderDetails: (state) => state.order,
};
