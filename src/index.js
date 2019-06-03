import React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

render(
  <>
    <BrowserRouter>
      <Home />
      <CssBaseline />
    </BrowserRouter>
  </>,
  document.querySelector('#root'),
);
