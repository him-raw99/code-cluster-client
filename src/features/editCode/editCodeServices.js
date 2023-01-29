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
const updateCode = async (state) => {
    const response = await axios.put(url+"/codes/"+state.id,state.edittedCode,{
        headers:{
            Authorization : "bearer "+state.token
        }
    })
    return response;
}

const editCodeServices = {getFullCode , updateCode};

export default editCodeServices;