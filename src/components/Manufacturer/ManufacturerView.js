import { useState, useEffect } from 'react'
import { Container, Grid } from '@material-ui/core'
import ManufacturerCard from './ManufacturerCard'
import { ManuForm } from './ManuForm'
// import { useDispatch } from 'react-redux'

const ManufacturerView = ({ transporters }) => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <Container>
      <Grid container justifyContent='space-between' alignItems='stretch' spacing={4}>
        <Grid item xs={12} md={6}>
          <ManufacturerCard />
        </Grid>
        <Grid item xs={12} md={5}>
          <ManuForm transporters={transporters} currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ManufacturerView