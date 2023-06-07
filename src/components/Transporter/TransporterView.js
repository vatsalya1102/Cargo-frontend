import { Container, Grid, Typography } from '@material-ui/core'
import TransporterCards from './TransporterCards'
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getOrders } from '../../actions/transporter';
import TransporterForm from './TransporterForm';

const TransporterView = () => {

  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const orders = useRef('');

  const [ordersList, setOrdersList] = useState('');
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    async function gettingOrders() {
      orders.current = await dispatch(getOrders(user?.result?.name));
      setOrdersList(orders.current);
    }
    gettingOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Container>
      <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
        <Grid item xs={12} md={7}>
        <Typography position='relative' left={10} variant='h6'>Orders with You:</Typography>
          <TransporterCards orders={ordersList} currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={12} md={5}>
          <TransporterForm setOrdersList={setOrdersList} setCurrentId={setCurrentId} currentId={currentId} orderList={ordersList} /> 
        </Grid>
      </Grid>
    </Container>
  )
}

export default TransporterView