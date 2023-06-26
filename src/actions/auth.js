import { AUTH } from '../constants/actionTypes';
import * as api from '../api'
import { toast } from 'react-toastify';

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data })
        navigate('/home');
    } catch (error) {
        toast.error('Please enter valid credentials !', {
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

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data })
        console.log(JSON.parse(localStorage.getItem('profile')));
        navigate('/home');
    } catch (error) {
        toast.error('Please enter valid credentials !', {
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

export const gettransporters = () => async () => {
    try {
        const transporters = await api.getTransporters();
        // console.log(transporters.data);
        return transporters.data;
    } catch (error) {
        console.log(error);
    }
}