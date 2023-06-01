import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token} ${JSON.parse(localStorage.getItem('profile')).result.name}`;
    }
    return req;
})

export const createOrder = (form) => API.post('/transport', form);
export const fetchOrders = (transporter) => {
    return API.get(`/transport/${transporter}`);
}
export const updateOrder = (id, updatedOrder) => API.patch(`/transport/${id}`, updatedOrder);

export const signIn = (formdata) => API.post('/user/signin', formdata);
export const signUp = (formdata) => API.post('/user/signup', formdata);
export const getTransporters = () => {
    return API.get('/user');
}