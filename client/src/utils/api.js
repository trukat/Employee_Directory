import axios from "axios";

function userData() {
    return axios.get("https://randomuser.me/api/?results=50")
}

export default userData;