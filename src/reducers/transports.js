/* eslint-disable import/no-anonymous-default-export */
import { CREATE, FETCH, FETCHFORMANU, UPDATE } from '../constants/actionTypes';

export default (orders = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...orders, action.payload]
        case FETCH:
            return orders.filter((order) => order.transporter === action.payload);
        case FETCHFORMANU:
            return orders.filter((order) => order.manufacturer === action.payload);
        case UPDATE:
            return orders.map((order) => (order._id === action.payload._id) ? action.payload : order);
        default:
            return orders;
    }
}