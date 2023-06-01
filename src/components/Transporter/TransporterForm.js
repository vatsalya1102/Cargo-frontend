import { Paper, Grid, Typography, TextField, Button } from '@mui/material'
import { useState, useEffect, useRef } from 'react';
import { updateOrder } from '../../actions/transporter';
import { useDispatch } from 'react-redux';

const TransporterForm = ({ currentId, orderList, setCurrentId }) => {
    const [form, setForm] = useState(
        { _id: '', toCity: '', fromCity: '', address: '', quantity: '', transporter: '', manufacturer: '', price: '' }
    );

    const selected = useRef('');
    const dispatch = useDispatch();

    useEffect(() => {
        const selectedOrder = currentId && orderList && orderList.filter((ordersel) => {
            return ordersel._id === currentId;
        })
        if (currentId && selectedOrder) {
            console.log(selectedOrder[0]._id);
            selected.current = selectedOrder[0];
            setForm(selected.current);
        }
    }, [currentId])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        await dispatch(updateOrder(currentId, { ...form }))
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setForm(
            { _id: '', toCity: '', fromCity: '', address: '', quantity: '', transporter: '', manufacturer: '', price: '' }
        )
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
                                label="Order Id"
                                type='text'
                                fullWidth
                                value={form._id}
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
                                value={form.price}
                                onChange={(e) => setForm({ ...form, price: e.target.value })
                                }
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