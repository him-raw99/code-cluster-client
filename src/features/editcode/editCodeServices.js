import axios from "axios";
const url = "https://code-cluster-api.onrender.com";
// const url = "http://localhost:4000";


const getFullCode = async (states) => {
    const response = await axios.get(url + "/codes/" + states.editCode.id,{
        headers:{
            Authorization : "bearer "+states.auth.token
        }
    });
    return response;
};


const editCode = async (states) => {
    const response = await axios.put(url + "/codes/" + states.editCode.id,{
        title:states.editCode.title,
        code:states.editCode.code,
        isPublic:states.editCode.isPublic,
    },{
        headers:{
            Authorization : "bearer "+states.auth.token
        }
    });
    console.log(response);
    return response;
};


const editCodeServices = {getFullCode , editCode};

export default editCodeServices;