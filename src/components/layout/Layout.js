import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <main style={{ flex: 1, paddingBottom: '80px' /* Height of the nav bar */ }}>
        {/* The Outlet renders the current route's component */}
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
