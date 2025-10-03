import React, { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import ClientModal from './components/ClientModal'; // Importar o ClientModal

// Mock data para simular a lista de clientes
const mockClients = [
    {
        cliente_id: 1,
        nome: 'Mariana Santos',
        email: 'mariana.santos@example.com',
        telefone: '841234567',
        data_cadastro: '2023-10-26T10:00:00Z',
    },
    {
        cliente_id: 2,
        nome: 'João Silva',
        email: 'joao.silva@example.com',
        telefone: '829876543',
        data_cadastro: '2023-10-25T14:30:00Z',
    },
];

const GestaoClientes: React.FC = () => {
    const [clients, setClients] = useState(mockClients);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddClient = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Lógica para adicionar, editar e remover clientes (a ser implementada)

    return (
        <div className="p-8 bg-gray-50 min-h-full">
            {/* Cabeçalho */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-4xl font-bold text-brand-blue-dark">Gestão de Clientes</h1>
                    <p className="text-lg text-gray-600 mt-1">Adicione, edite e remova clientes da sua base de dados.</p>
                </div>
                <button 
                    onClick={handleAddClient}
                    className="flex items-center gap-2 bg-brand-gold text-brand-blue-dark font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                    <PlusIcon className="w-6 h-6" />
                    Adicionar Cliente
                </button>
            </div>

            {/* Lista de Clientes */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <ul className="divide-y divide-gray-200">
                    {clients.map(client => (
                        <li key={client.cliente_id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <UserCircleIcon className="w-14 h-14 text-gray-300" />
                                    <div>
                                        <p className="text-xl font-semibold text-gray-800">{client.nome}</p>
                                        <p className="text-sm text-gray-500">{client.email} | {client.telefone}</p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            Cliente desde: {new Date(client.data_cadastro).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button className="p-3 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-full transition-all">
                                        <PencilIcon className="w-6 h-6" />
                                    </button>
                                    <button className="p-3 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-full transition-all">
                                        <TrashIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Modal para adicionar/editar cliente */}
            {isModalOpen && <ClientModal onClose={handleCloseModal} />}
        </div>
    );
};

export default GestaoClientes;
