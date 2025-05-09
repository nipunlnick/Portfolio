import React from 'react';
import { createTheme, ThemeProvider, CssBaseline, IconButton } from '@mui/material';
import { useState, useMemo } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function App() {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '2rem' }}>
        <IconButton onClick={() => setMode((prev) => (prev === 'light' ? 'dark' : 'light'))}>
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <h1>Hello, I'm Nipun Lakshitha</h1>
        <p>Welcome to my portfolio!</p>
      </div>
    </ThemeProvider>
  );
}

export default App;