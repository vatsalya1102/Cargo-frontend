import { Typography, CardContent, Paper } from '@material-ui/core'
import { Button } from '@mui/material'

const TransporterCard = ({ order, currentId, setCurrentId, orderList }) => {
    const handleClick = () => {
        setCurrentId(order._id);
    }

    return (
        <CardContent>
            <Paper elevation={3} style={{
                padding: 8,
                backgroundColor: 'e3f2fd',
                border: "1px solid black"
            }}>
                <Typography variant='body1' gutterBottom>
                    OrderID: {order._id}
                </Typography>
                <Typography sx={{ mb: 1.5 }} gutterBottom>
                    {`From ${order.fromCity} to ${order.toCity}`}
                </Typography>
                <Typography gutterBottom variant="body1">
                        Address: {order.address}
                    </Typography>
                <Typography variant="body1">
                    Quantity: {order.quantity}
                </Typography>
                <Typography variant="body1">
                    Manufacturer: {order.manufacturer}
                </Typography>
                <Typography variant="body1">
                    Price: {!order.price?'Not reviewed':order.price}
                </Typography>
                <Button onClick={handleClick}>Click to review</Button>
            </Paper>
        </CardContent>
    )
}

export default TransporterCard