import axios from "axios";

const instance = axios.create({
    baseURL:"https://www.apiero.in:8443/api/v1/",
    withCredentials:true
})

export default instance;