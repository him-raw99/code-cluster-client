import axios from "axios";
const url = "https://code-cluster-api.onrender.com";
// const url = "http://localhost:4000";

//search user
const searchUser = async (state) => {
    const response = await axios.get(url+"/user/"+state.user);
    return response;
}

const searchUserServices =  { searchUser };

export default searchUserServices;