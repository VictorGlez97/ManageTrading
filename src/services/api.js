import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-admin-pi.vercel.app/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// api.interceptors.request.use(
//     (config) => {
//         const token = JSON.parse(sessionStorage.getItem('user'))
//         if ( token ) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// )

export default api;