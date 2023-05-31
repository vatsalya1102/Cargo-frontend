import { Container } from '@mui/material';
import ManufacturerView from '../Manufacturer/ManufacturerView';
import TransporterView from '../Transporter/TransporterView';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { gettransporters } from '../../actions/auth';

const Home = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const users = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const transporters = useRef('');

    const [transportersList, setTransportersList] = useState([]);

    useEffect(() => {
        async function gettingTransporters() {
            transporters.current = await dispatch(gettransporters());
            setTransportersList(transporters.current);
        }
        gettingTransporters();
    }, [dispatch]);

    console.log(transportersList);

    return (
        <Container>
            {user?.result?.role === 'Manufacturer' ? <ManufacturerView transporters={transportersList} /> : <TransporterView />}
        </Container>
    )
}

export default Home;