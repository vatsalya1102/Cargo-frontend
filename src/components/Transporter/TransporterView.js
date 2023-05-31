import { Container, Grid } from '@material-ui/core'
import TransporterCard from './TransporterCard'
import { useEffect } from 'react';

const TransporterView = ({ orders }) => {


  return (
    <Container>
      <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
        <Grid item xs={8}>
          <TransporterCard />
        </Grid>
        <Grid item xs={4}>
          there
        </Grid>
      </Grid>
    </Container>
  )
}

export default TransporterView