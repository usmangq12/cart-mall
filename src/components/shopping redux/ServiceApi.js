import axios from "axios";

export function ServiceApi() {
  return axios
    .get(
      `https://backendapi.turing.com/categories
        `
    )
    .then((response) => {
      console.log(response.data.rows);
      return response.data.rows;
    });
}
