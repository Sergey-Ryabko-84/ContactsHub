import React from 'react';
import { GlobalStyle } from './style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthLayout from './modules/AuthLayout/AuthLayout';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthLayout>
          <AppRoutes />
        </AuthLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
