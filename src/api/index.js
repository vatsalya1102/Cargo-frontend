import axios from 'axios'

// const API = axios.create({ baseURL: 'http://localhost:5000' })

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
//     return req;
// })

// export const signIn = (formData) => API.post('/user/signin', formData);
// export const signUp = (formData) => API.post('/user/signup', formData);

const url1 = 'http://localhost:5000/user/signin';
const url2 = 'http://localhost:5000/user/signup';

export const signIn = (formdata) => axios.post(url1, formdata);
export const signUp = (formdata) => axios.post(url2, formdata);