import axios from "axios";
const url = "https://code-cluster-api.onrender.com";
// const url = "http://localhost:4000";


const getFullCode = async (states) => {
    const response = await axios.get(url + "/codes/" + states.id,{
        headers:{
            Authorization : "bearer "+states.token
        }
    });
    return response;
};


const editCodeServices = {getFullCode};

export default editCodeServices;