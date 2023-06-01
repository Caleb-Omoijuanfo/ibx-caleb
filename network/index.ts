import axios from "axios";

const Http = axios.create({
  baseURL: "https://newsapi.org/v2",
});

export default Http;
