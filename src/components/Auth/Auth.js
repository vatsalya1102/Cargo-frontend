import { Avatar, Button, TextField, Grid, Box, Typography, Container, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../actions/auth';

const defaultTheme = createTheme();

const initialState = { firstName: '', lastName: '', email: '', password: '', address: '' }

const Auth = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            dispatch((signup(formData, navigate)))
        } else {
            dispatch((signin(formData, navigate)))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {isSignup ? 'Sign Up' : 'Sign-in'}
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            {
                                isSignup && (
                                    <>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                name="firstName"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="address"
                                                label="Address"
                                                name="address"
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                    </>
                                )
                            }

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {isSignup ? 'Sign Up' : 'Sign-in'}
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignup ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export { Auth };