// src/components/Layout.js

import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './src/components/Sidebar'; // Adjust the path as needed

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Outlet /> {/* This renders the child route components */}
      </main>
    </div>
  );
};

export default Layout;
