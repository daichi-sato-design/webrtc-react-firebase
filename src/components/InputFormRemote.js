import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
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
}

export default function SignIn({
  localPeerName,
  remotePeerName,
  setRemotePeerName,
}) {
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(false);
  const label = '相手の名前';
  const theme = createTheme();

  useEffect(() => {
    const disabled = name === '';
    setDisabled(disabled);
  }, [name]);

  const initializeRemotePeerName = useCallback(
    (e) => {
      e.preventDefault();
      setRemotePeerName(name);
    },
    [name, setRemotePeerName]
  );

  if (localPeerName === '') return null;
  if (remotePeerName !== '') return null;

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
              initializeRemotePeerName(e);
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
}
