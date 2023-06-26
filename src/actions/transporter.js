import { CREATE, FETCH, UPDATE } from '../constants/actionTypes';
import * as api from '../api'
import { toast } from 'react-toastify';

export const createOrder = (order) => async (dispatch) => {
    try {
        const { data } = await api.createOrder(order);
        dispatch({ type: CREATE, payload: data })
        return data;
    } catch (error) {
        toast.error('Please enter valid details !', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
}

export const getOrders = (transporter) => async (dispatch) => {
    try {
        const { data } = await api.fetchOrders(transporter);
        dispatch({ type: FETCH, payload: data })
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export const updateOrder = (id, order) => async (dispatch) => {
    try {
        const { data } = await api.updateOrder(id, order);
        dispatch({ type: UPDATE, payload: data })
        return data;
    } catch (error) {
        toast.error('Please enter valid price !', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }
}