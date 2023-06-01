import { Grid } from '@mui/material'
import TransporterCard from './TransporterCard'

const TransporterCards = ({ orders, currentId, setCurrentId }) => {
    const rev = orders;

    return (
        <>
            {rev && rev.map((order) => {
                return (
                    <Grid item key={order._id}>
                        <TransporterCard orderList={orders} order={order} currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                )
            })}
        </>
    )
}

export default TransporterCards