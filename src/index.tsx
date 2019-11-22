import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

import App from 'containers/App';
import GlobalStyle from './global-styles';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <App />
      <GlobalStyle />
    </>
  </ThemeProvider>,
  rootElement
);
