import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    // const classes = useStyles();

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])

    const logout = () => {
        setUser(null);
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        The Cargo App
                    </Typography>
                    {user ? (
                        <Paper>
                            <Button onClick={logout} variant='outlined'>Logout</Button>
                        </Paper>
                    ) : ''}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export { Navbar };