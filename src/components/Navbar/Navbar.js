import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import { useNavigate, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const Navbar = () => {
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    const logout = () => {
        setUser(null);
        dispatch({ type: 'LOGOUT' });
        navigate('/');
    }

    const useStyles = makeStyles(theme => ({
        appBar1: {
            background: 'white',
            boxShadow: 'none',
        },
        appBar2: {
            background: 'primary',
            boxShadow: 'primary',
        },
    }));

    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={user ? classes.appBar1 : classes.appBar2}>
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