import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutWrapper>
  );
};

export default Layout;
