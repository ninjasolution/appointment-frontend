import axios from 'axios';
import { backendLink } from '../config';

const axiosInstance = axios.create({
    baseURL: backendLink
});

axiosInstance.interceptors.request.use((config) => {
    const tokenDetailsString = localStorage.getItem('lottery-user-detail');
    if(tokenDetailsString) {
        const token = JSON.parse(tokenDetailsString).token
        
        config.params = config.params || {};
        config.headers['Authorization'] = `Bearer ${token}`
    }
    

    return config;
});

export default axiosInstance;
