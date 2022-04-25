import axios from "axios";

export function ServiceApi() {
  return axios
    .get(
      `https://backendapi.turing.com/categories
        `
    )
    .then((response) => {
      return response.data.rows;
    });
}

export function GetProducts() {
  return axios
    .get(
      `https://backendapi.turing.com/products/inCategory/1?limit=50
        `
    )
    .then((response) => {
      return response.data.rows;
    });
}

export function GetProductsItalian() {
  return axios
    .get(
      `https://backendapi.turing.com/products/inCategory/2?limit=50

        `
    )
    .then((response) => {
      return response.data.rows;
    });
}

export function GetProductsIRISH() {
  return axios
    .get(
      `https://backendapi.turing.com/products/inCategory/3?limit=50

        `
    )
    .then((response) => {
      return response.data.rows;
    });
}

export function GetProductsAnimal() {
  return axios
    .get(
      `https://backendapi.turing.com/products/inCategory/4?limit=50

        `
    )
    .then((response) => {
      return response.data.rows;
    });
}

export function GetProductsFlower() {
  return axios
    .get(
      `https://backendapi.turing.com/products/inCategory/5?limit=50

        `
    )
    .then((response) => {
      return response.data.rows;
    });
}

export function GetProductsChristmas() {
  return axios
    .get(
      `https://backendapi.turing.com/products/inCategory/6?limit=50

        `
    )
    .then((response) => {
      return response.data.rows;
    });
}

export function GetProductsValentines() {
  return axios
    .get(
      `https://backendapi.turing.com/products/inCategory/7?limit=50

        `
    )
    .then((response) => {
      return response.data.rows;
    });
}
