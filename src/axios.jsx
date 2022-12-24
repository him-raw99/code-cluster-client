import axios from "axios";
const URL = import.meta.env.VITE_API;
const API = axios.create({
    baseURL: URL
});

export default API;