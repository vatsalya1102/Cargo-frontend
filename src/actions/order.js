import { FETCHFORMANU } from '../constants/actionTypes';
import * as api from '../api'

export const getOrdersForManu = (manufacturer) => async (dispatch) => {
    try {
        const { data } = await api.fetchOrdersForManu(manufacturer);
        dispatch({ type: FETCHFORMANU, payload: data })
        return data;
    } catch (error) {
        console.log(error.message);
    }
}