import axios from "axios";

const API = axios.create({
    baseURL: "https://code-cluster-api.onrender.com"
});

export default API;