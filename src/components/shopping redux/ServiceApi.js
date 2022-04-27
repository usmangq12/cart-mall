import axios from "axios";

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
