import axios from 'axios';
import { BACKEND_LINK } from '../config';

const axiosInstance = axios.create({
    baseURL: BACKEND_LINK
});

axiosInstance.interceptors.request.use((config) => {
    const tokenDetailsString = localStorage.getItem('freshauser-detail');
    if(tokenDetailsString) {
        const token = JSON.parse(tokenDetailsString).token
        
        config.params = config.params || {};
        config.headers['x-access-token'] = `${token}`
    }
    console.log(tokenDetailsString)
    

    return config;
});

export default axiosInstance;
