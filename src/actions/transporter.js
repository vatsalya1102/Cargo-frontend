import { CREATE, FETCH } from '../constants/actionTypes';
import * as api from '../api'

export const createOrder = (order) => async (dispatch) => {
    try {
        const { data } = await api.createOrder(order);
        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const getOrders = (transporter) => async (dispatch) => {
    try {
        const { data } = await api.fetchOrders(transporter);
        dispatch({ type: FETCH, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}