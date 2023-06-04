import React from 'react';
import { GlobalStyle } from './style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthLayout from './modules/AuthLayout/AuthLayout';

function App() {
  return (
    <AuthLayout>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthLayout>
  );
}

export default App;
