import axios from "axios";
const url = "https://code-cluster-api.onrender.com";
// const url = "http://localhost:4000";

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

const newCode = async (state) => {
    const response = await axios.post(url+"/codes",state.code,{
        headers:{
            Authorization : "bearer "+state.token
        }
    })
    return response;
}

const deleteCode = async (state) => {
    const response = await axios.delete(url+"/codes/"+state.id,{
        headers:{
            Authorization : "bearer "+state.token
        }
    })
    return response;
}

const editCodeServices = {getFullCode , updateCode , newCode , deleteCode};

export default editCodeServices;