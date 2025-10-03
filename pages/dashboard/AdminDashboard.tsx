import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';

const AdminDashboard: React.FC = () => {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminDashboard;
