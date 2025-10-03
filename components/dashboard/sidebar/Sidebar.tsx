import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HomeIcon, UsersIcon, CurrencyDollarIcon, BellIcon } from '@heroicons/react/24/solid';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
      `flex items-center px-4 py-3 text-lg font-semibold rounded-lg transition-colors duration-200 ${ 
        isActive
          ? 'bg-brand-gold text-brand-blue-dark'
          : 'text-gray-300 hover:bg-brand-blue-light hover:text-white'
      }`;

    const handleLogout = () => {
        sessionStorage.removeItem('isAdmin');
        navigate('/admin/login');
    };

    return (
        <aside className="w-64 h-screen bg-brand-blue-dark text-white p-6 flex flex-col justify-between">
            <div>
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-white text-center">Laços</h1>
                    <h2 className="text-md font-light text-gray-300 text-center">Microcrédito</h2>
                </div>
                <nav className="space-y-4">
                    <NavLink to="/admin/dashboard/clientes" className={navLinkClasses}>
                        <UsersIcon className="w-6 h-6 mr-3" />
                        Gestão de Clientes
                    </NavLink>
                    <NavLink to="/admin/dashboard/emprestimos" className={navLinkClasses}>
                        <CurrencyDollarIcon className="w-6 h-6 mr-3" />
                        Gestão de Empréstimos
                    </NavLink>
                    <NavLink to="/admin/dashboard/pagamentos" className={navLinkClasses}>
                        <CurrencyDollarIcon className="w-6 h-6 mr-3" />
                        Gestão de Pagamentos
                    </NavLink>
                    <NavLink to="/admin/dashboard/notificacoes" className={navLinkClasses}>
                        <BellIcon className="w-6 h-6 mr-3" />
                        Notificações
                    </NavLink>
                </nav>
            </div>
            <button
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
            >
                Terminar Sessão
            </button>
        </aside>
    );
};

export default Sidebar;
