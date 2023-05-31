import { AUTH } from '../constants/actionTypes';
import * as api from '../api'

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data })
        console.log(JSON.parse(localStorage.getItem('profile')));
        navigate('/home');
    } catch (error) {
        console.log(error);
    }
}

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data })
        console.log(JSON.parse(localStorage.getItem('profile')));
        navigate('/home');
    } catch (error) {
        console.log(error);
    }
}

export const gettransporters = () => async () => {
    try {
        const transporters = await api.getTransporters();
        // console.log(transporters.data);
        return transporters.data;
    } catch (error) {
        console.log(error);
    }
}