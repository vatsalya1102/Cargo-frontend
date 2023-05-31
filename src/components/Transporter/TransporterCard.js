import React from 'react'
import { Typography, CardContent, Box } from '@material-ui/core'

const TransporterCard = ({ orders }) => {

    
    return (
        <Box>
            <CardContent>
                <Typography variant='h6' gutterBottom>
                    OrderID
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                    From: Shimla to Delhi
                </Typography>
                <Typography gutterBottom variant="body1">
                    Set no. 11, Type-5, Kasumpati, Shimla
                </Typography>
                <Typography variant="body1">
                    Quantity: 2
                </Typography>
            </CardContent>
        </Box>
    )
}

export default TransporterCard