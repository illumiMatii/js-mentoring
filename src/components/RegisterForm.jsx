import React, { useState } from 'react';
import TransparentTextField from './TransparentTextField';
import { Button, Box, Typography, Paper, Grid } from '@mui/material';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [retypePasswordError, setRetypePasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
    setEmailError("");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailPattern)) {
      setEmailError("Please enter a valid email address.");
    }

    if (password.trim() === "") {
      setPasswordError("Please enter a password.");
    } else if (password.length < 8) {
        setPasswordError("Your password needs to have at least 8 characters.")
    }

    if (password !== retypePassword) {
        setRetypePasswordError("Your passwords does not match");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh", backgroundColor: "#13171c", color: 'white' }}>
      <Grid item xs={12} sm={8} md={4}>
      <Paper elevation={3} style={{ padding: "2rem", backgroundColor: "#454A8D", color: "white" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <Box
            component="form"
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
            onSubmit={handleSubmit}
            noValidate
          >
            <TransparentTextField
              variant="outlined"
              margin="normal"
              required
              sx={{
                width: "60%"
              }}
              id="email"
              label="Email Address"
              name="email"
              type='email'
              value={email}
              error={Boolean(emailError)}
              helperText={emailError}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TransparentTextField
              variant="outlined"
              margin="normal"
              required
              sx={{
                width: "60%"
              }}
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              error={Boolean(passwordError)}
              helperText={passwordError}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TransparentTextField
              variant="outlined"
              margin="normal"
              required
              sx={{
                width: "60%"
              }}
              name="retype-password"
              label="Retype Password"
              type="password"
              id="retype-password"
              value={retypePassword}
              error={Boolean(retypePasswordError)}
              helperText={retypePasswordError}
              onChange={(e) => setRetypePassword(e.target.value)}
            />
            <Button
              type="submit"
              size="large"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegisterForm;
