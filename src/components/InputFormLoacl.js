import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://parme.online/">
        PqrM3
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const SignIn = ({ localPeerName, setLocalPeerName }) => {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(false);
  const label = 'あなたの名前';
  const theme = createTheme();

  useEffect(() => {
    const disabled = name === '';
    setDisabled(disabled);
  }, [name]);

  const initializeLocalPeerName = useCallback(
    (e) => {
      e.preventDefault();
      setLocalPeerName(name);
    },
    [name, setLocalPeerName]
  );

  if (localPeerName !== '') return null;

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            {label}を入力してください
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              initializeLocalPeerName(e);
            }}
            noValidate
            sx={{ mt: 2, width: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              label={label}
              name="name"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2, py: 2 }}
              disabled={disabled}
            >
              決定
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
