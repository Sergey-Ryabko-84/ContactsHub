import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './modules/Routes/RestrictedRoute ';
import PrivateRoute from './modules/Routes/PrivateRoute';
import Layout from './modules/Layout/Layout';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<RestrictedRoute redirectTo="/app/contacts" />}>
            <Route path="auth/register" element={<RegisterPage />} />
            <Route path="auth/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute redirectTo="/auth/login" />}>
            <Route path="app/contacts" element={<ContactsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
