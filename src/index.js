import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'BaseStyles/theme';
import { GlobalStyle } from 'BaseStyles/GlobalStyles';
// import './index.css';
// API KEY f516fdc3d4918369a6ad5ae834597c19;
// basename = '/goit-react-hw-05-movies/';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/goit-react-hw-05-movies/">
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
