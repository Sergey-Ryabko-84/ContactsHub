import React from 'react';
import { GlobalStyle } from './style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
