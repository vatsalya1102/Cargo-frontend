import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Typography } from '@material-ui/core'
import ManufacturerCards from './ManufacturerCards'
import { ManuForm } from './ManuForm'
import { getOrdersForManu } from '../../actions/order'

const ManufacturerView = ({ transporters }) => {
  const [currentId, setCurrentId] = useState(null);
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();

  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    gettingOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function gettingOrders() {
    const orders = await dispatch(getOrdersForManu(user?.result?.name.split(" ")[0]));
    setOrdersList(orders)
  }

  return (
    <Container>
      <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
        <Grid item xs={12} md={6} sx={{ paddingLeft: 6 }}>
          <Typography variant='h5'>Your Orders:</Typography>
          <ManufacturerCards ordersList={ordersList} />
        </Grid>
        <Grid item xs={12} md={5}>
          <ManuForm ordersList={ordersList} transporters={transporters} currentId={currentId} setCurrentId={setCurrentId} setOrdersList={setOrdersList}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ManufacturerView