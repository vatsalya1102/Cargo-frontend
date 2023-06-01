import { CREATE, FETCH, UPDATE } from '../constants/actionTypes';
import * as api from '../api'

export const createOrder = (order) => async (dispatch) => {
    try {
        const { data } = await api.createOrder(order);
        console.log(data);
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message);
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
        console.log(data);
        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}