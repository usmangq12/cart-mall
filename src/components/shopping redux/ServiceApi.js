import axios from "axios";

export function GetDefaultProducts() {
  return axios
    .get(`https://backendapi.turing.com/products?page=1&limit=100`)
    .then((res) => {
      return res.data.rows;
    });
}

export function GetProducts(id) {
  return axios
    .get(
      `https://backendapi.turing.com/products/inCategory/${id}?limit=50
        `
    )
    .then((response) => {
      return response.data.rows;
    });
}
