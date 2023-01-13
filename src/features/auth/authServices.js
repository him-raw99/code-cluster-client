import axios from "axios";
const url = "http://localhost:4000";
// const url = "https://code-cluster-api.onrender.com";

const login = async (userData) => {
    const response = await axios.post(url + "/login", userData);

    if(response.data.isLogin){
        localStorage.setItem('token', response.data.token);
    }

    return response;
};

const logout = ()=>{
    localStorage.removeItem("token");
}

const signup = async (userData) => {
    const response = await axios.post(url + "/signup", userData);
        localStorage.setItem('token', response.data.token);
    return response;
};

const authServices = {login , logout , signup};

export default authServices;