/* eslint-disable import/no-anonymous-default-export */
import { CREATE, FETCH } from '../constants/actionTypes';

export default (orders = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...orders, action.payload]
        case FETCH:
            return orders.filter((order) => order.transporter === action.payload);
        default:
            return orders;
    }
}