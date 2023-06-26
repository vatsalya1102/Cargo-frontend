import { Typography, CardContent, Paper } from '@material-ui/core'

const ManufacturerCard = ({ order }) => {

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
          <div className='card-fields'>Quantity: </div> {`${order.quantity} Kg`}
        </Typography>
        <Typography component='h2' sx={{ my: '10px' }} variant="body1">
          <div className='card-fields'>Price($):</div> {!order.price ? 'Not reviewed' : order.price}
        </Typography>
      </Paper>
    </CardContent>
  )
}

export default ManufacturerCard