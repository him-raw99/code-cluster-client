import axios from "axios";
const url = "https://code-cluster-api.onrender.com";
// const url = "http://localhost:4000";

const getCodes = async (token) => {
    const response = await axios.get(url+"/codes",{
        headers:{
            Authorization : "bearer "+token
        }
    })
    return response;
}


const getProfile = async (token) => {
    const response = await axios.get(url+"/profile",{
        headers:{
            Authorization : "bearer "+token
        }
    })
    return response;
}

const dashboardServices = {getCodes , getProfile};

export default dashboardServices;