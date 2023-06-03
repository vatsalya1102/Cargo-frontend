import { Grid } from '@mui/material'
import ManufacturerCard from './ManufacturerCard'

const ManufacturerCards = ({ ordersList }) => {
    const rev = ordersList;

    return (
        <>
            {rev && rev.map((order) => {
                return (
                    <Grid item key={order._id}>
                        <ManufacturerCard orderList={ordersList} order={order} />
                    </Grid>
                )
            })}
        </>
    )
}

export default ManufacturerCards