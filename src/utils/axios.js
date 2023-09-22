import axios, { AxiosError } from 'axios';
import { BASE_URL } from '../config';



const axiosInstance = axios.create({baseURL:BASE_URL});

axiosInstance.interceptors.response.use((response)=>response,(error)=>Promise.reject((error.response?.data) || {message:"Something Went Wrong!!",status:"error"}));



export default axiosInstance;

