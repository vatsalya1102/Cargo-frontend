import { Typography, CardContent, Paper } from '@material-ui/core'
import { Button } from '@mui/material'

const TransporterCard = ({ order, currentId, setCurrentId, orderList }) => {
    const handleClick = () => {
        setCurrentId(order._id);
        console.log(orderList);
    }

    return (
        <CardContent>
            <Paper elevation={3} style={{
                padding: 8,
                backgroundColor: 'e3f2fd',
                border: "1px solid black"
            }}>
                <Typography variant='h6' gutterBottom>
                    {order._id}
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    {`From ${order.fromCity} to ${order.toCity}`}
                </Typography>
                {/* <Typography gutterBottom variant="body1">
                        Set no. 11, Type-5, Kasumpati, Shimla
                    </Typography> */}
                <Typography variant="body1">
                    Quantity: {order.quantity}
                </Typography>
                <Button onClick={handleClick}>Click to review</Button>
            </Paper>
        </CardContent>
    )
}

export default TransporterCard