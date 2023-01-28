import axios from "axios";
const url = "https://code-cluster-api.onrender.com";

const getFullCode = async (state) => {
    const response = await axios.get(url+"/codes/"+state.id,{
        headers:{
            Authorization : "bearer "+state.token
        }
    })
    return response;
}

const editCodeServices = {getFullCode};

export default editCodeServices;