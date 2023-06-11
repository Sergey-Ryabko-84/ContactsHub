import React from 'react';
import { GlobalStyle } from './style/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthLayout from './modules/AuthLayout/AuthLayout';
import Notifications from './modules/Notifications/Notifications';

function App() {
  return (
    <>
      <GlobalStyle />
      <Notifications />
      <BrowserRouter>
        <AuthLayout>
          <AppRoutes />
        </AuthLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
