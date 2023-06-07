import { Paper, Grid, InputLabel, Typography, TextField, FormControl, Button, MenuItem, Select } from '@mui/material'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../actions/transporter'

export const ManuForm = ({ transporters, ordersList, setOrdersList }) => {

    const [age, setAge] = useState("");
    const user = JSON.parse(localStorage.getItem('profile'));
    const initialState = { toCity: '', fromCity: '', address: user.result.address, quantity: '', transporter: '', manufacturer: '', price: '' };
    const [form, setForm] = useState(initialState);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setAge(e.target.value);
        setForm({ ...form, transporter: e.target.value });
    };

    const clear = () => {
        setForm(initialState);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newOrder = await dispatch(createOrder({ form }));
        setOrdersList(prev =>
            [...prev, { ...newOrder }]
        );
        clear();
    }

    return (
        <Paper elevation={3} sx={{ padding: 5, marginY: 10 }}>

            <Typography variant="h6" align='center' gutterBottom sx={{ paddingBottom: 5 }}>
                Order with Transporter
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        name="fromCity"
                        label="Starting location"
                        fullWidth
                        value={form.fromCity}
                        onChange={(e) => setForm({ ...form, fromCity: e.target.value })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        name="toCity"
                        label="Ending location"
                        fullWidth
                        value={form.toCity}
                        onChange={(e) => setForm({ ...form, toCity: e.target.value })}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label="Quantity (Kg)"
                        type="number"
                        fullWidth
                        size='small'
                        value={form.quantity}
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth size="small">
                        <InputLabel id="demo-simple-select-label">Transporter</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            value={age}
                            label="Transporter"
                            onChange={handleChange}
                        >
                            {transporters.map((item) => (
                                <MenuItem key={item._id} value={item.name}>{item.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid container justifyContent='center'>
                    <Button onClick={handleSubmit} variant="contained" sx={{ color: "#fff", marginTop: '15px' }}>
                        Send Order
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}
