import { FC } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;