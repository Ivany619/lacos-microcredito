import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BaobabIcon } from '../components/icons/BaobabIcon';

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin/login');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
            <div className="w-full max-w-4xl p-8 space-y-8 bg-white rounded-lg shadow-lg text-center">
                
                {/* Ícone e Título */}
                <div className="flex justify-center mb-4">
                    <BaobabIcon width={100} height={100} />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">Painel do Administrador</h1>
                <p className="text-gray-600">Bem-vindo à área de acesso restrito.</p>

                {/* Conteúdo do Dashboard */}
                <div className="mt-8 p-6 border-t border-gray-200 text-left">
                    <h2 className="text-2xl font-semibold text-gray-800">Recursos Disponíveis</h2>
                    <p className="mt-2 text-gray-600">
                        Aqui você pode gerenciar o conteúdo do site, visualizar relatórios e muito mais.
                    </p>
                    {/* Adicione aqui os componentes do seu dashboard */}
                </div>

                {/* Botão de Logout */}
                <div className="mt-8">
                    <button
                        onClick={handleLogout}
                        className="w-auto px-6 py-3 font-semibold text-white bg-red-600 rounded-md shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
