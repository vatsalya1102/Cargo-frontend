import { Typography, CardContent, Paper } from '@material-ui/core'
import { Button } from '@mui/material'
import './TransporterCard.css'

const TransporterCard = ({ order, currentId, setCurrentId, orderList }) => {
    const handleClick = () => {
        setCurrentId(order._id);
    }

    return (
        <CardContent>
            <Paper elevation={4} style={{
                padding: 8,
                backgroundColor: 'e3f2fd',
                border: "1px solid black"
            }}>
                <Typography component='h2' sx={{ my: '10px' }} variant='body1' gutterBottom>
                    <div className='id-field'>OrderID:</div>  {order._id}
                </Typography>
                <Typography component='h2' sx={{ my: '10px' }} variant='body1'>
                    <div className='card-fields'>From: </div>{order.fromCity}
                </Typography>
                <Typography component='h2' sx={{ my: '10px' }} variant='body1'>
                    <div className='card-fields'>To: </div>{order.toCity}
                </Typography>
                <Typography component='h2' sx={{ my: '10px' }} variant="body1">
                    <div className='card-fields'>Address:</div> {order.address}
                </Typography>
                <Typography component='h2' sx={{ my: '10px' }} variant="body1">
                    <div className='card-fields'>Quantity: </div> {`${order.quantity} Kg`}
                </Typography>
                <Typography component='h2' sx={{ my: '10px' }} variant="body1">
                    <div className='card-fields'>Manufacturer:</div> {order.manufacturer}
                </Typography>
                <Typography component='h2' sx={{ my: '10px' }} variant="body1">
                    <div className='card-fields'>Price($):</div> {!order.price ? 'Not reviewed' : order.price}
                </Typography>
                <Button variant='outlined' sx={{ color: '#f50057', my: '10px' }} onClick={handleClick}>Click to review</Button>
            </Paper>
        </CardContent>
    )
}

export default TransporterCard