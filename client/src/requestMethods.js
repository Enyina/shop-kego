import axios from "axios";


const BASE_URL = "https://shop-kego.herokuapp.com/api/v1";
// const BASE_URL = "http://localhost:5000/api/v1";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.Token;
// console.log(JSON.parse(localStorage.getItem(user)));
// console.log(user);
// console.log(currentUser);
// console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
