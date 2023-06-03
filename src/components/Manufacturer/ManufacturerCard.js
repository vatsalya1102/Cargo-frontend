import { Typography, CardContent, Paper } from '@material-ui/core'

const ManufacturerCard = ({ order, ordersList }) => {

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
        <Typography sx={{ mb: 1.5 }}>
          {`From ${order.fromCity} to ${order.toCity}`}
        </Typography>
        <Typography variant="body1">
          Quantity: {order.quantity}
        </Typography>
        <Typography>
          Price($): {!order.price?'Not reviewed':order.price}
        </Typography>
      </Paper>
    </CardContent>
  )
}

export default ManufacturerCard