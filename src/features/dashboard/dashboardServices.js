import axios from "axios";
const url = "http://localhost:4000";
// const url = "https://code-cluster-api.onrender.com";

const getCodes = async (token) => {
    const response = await axios.get(url+"/codes",{
        headers:{
            Authorization : "bearer "+token
        }
    })
    return response;
}

const dashboardServices = {getCodes};

export default dashboardServices;