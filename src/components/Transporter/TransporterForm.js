import { Paper, Grid, Typography, TextField, Button } from '@mui/material'
import { useState, useRef } from 'react';
import { updateOrder } from '../../actions/transporter';
import { useDispatch } from 'react-redux';

const TransporterForm = ({ currentId, orderList, setCurrentId, setOrdersList }) => {
    const [form, setForm] = useState(
        { _id: '', toCity: '', fromCity: '', address: '', quantity: '', transporter: '', manufacturer: '', price: '' }
    );

    const selected = useRef('');
    const dispatch = useDispatch();

    const [priceState, setPriceState] = useState('');

    const process = () => {
        const selectedOrder = currentId && orderList && orderList.filter((ordersel) => {
            return ordersel._id === currentId;
        })
        if (currentId && selectedOrder) {
            selected.current = selectedOrder[0];
            setForm(selected.current);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(updateOrder(currentId, { ...form, price: priceState }))
        let array2 = orderList.map(a => {
            var returnValue = {...a};
          
            if (a._id === currentId) {
              returnValue.price = priceState;
            }
          
            return returnValue
          })
        setOrdersList(array2);
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setForm(
            { _id: '', toCity: '', fromCity: '', address: '', quantity: '', transporter: '', manufacturer: '', price: '' }
        )
    }

    const priceSet = (e) => {
        e.preventDefault();
        setPriceState(e.target.value)
        process();
    }

    return (
        <>
            {currentId && (
                <Paper elevation={3} sx={{ padding: 5, marginY: 10 }}>

                    <Typography variant="h6" align='center' gutterBottom sx={{ paddingBottom: 5 }}>
                        Send Price to manufacturer
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="id"
                                name="_id"
                                label={`OrderID: ${currentId}`}
                                type='text'
                                fullWidth
                                disabled
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="outlined-number"
                                label="Price ($)"
                                type="number"
                                fullWidth
                                size='small'
                                onChange={priceSet}
                            />
                        </Grid>

                        <Grid container justifyContent='center'>
                            <Button onClick={handleSubmit} variant="contained" sx={{ color: "#fff", marginTop: '15px' }}>
                                Send approval
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            )}
        </>
    )
}

export default TransporterForm