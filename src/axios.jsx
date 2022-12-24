import axios from "axios";
const URL = "https://code-cluster-api.onrender.com/%22";
const API = axios.create({
    baseURL: URL
});

export default API;