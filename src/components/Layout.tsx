import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Repair Management</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">Dashboard</Link>
            </li>
            <li>
              <Link to="/repair-requests" className="hover:text-gray-300">Repair Requests</Link>
            </li>
            <li>
              <Link to="/new-request" className="hover:text-gray-300">New Request</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 Repair Management System
      </footer>
    </div>
  );
};

export default Layout;
