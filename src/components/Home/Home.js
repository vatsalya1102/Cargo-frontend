import { Container } from '@mui/material';
import ManufacturerView from '../Manufacturer/ManufacturerView';
import TransporterView from '../Transporter/TransporterView';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { gettransporters } from '../../actions/auth';

const Home = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
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

    return (
        <Container sx={{ marginTop: 4 }}>
            {user?.result?.role === 'Manufacturer' ? <ManufacturerView transporters={transportersList} /> : <TransporterView />}
        </Container>
    )
}

export default Home;