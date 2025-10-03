import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

// Importar os formulários das secções
import DadosPessoaisForm from './DadosPessoaisForm';
import LocalizacaoForm from './LocalizacaoForm';
import OcupacaoForm from './OcupacaoForm';
import DocumentosForm from './DocumentosForm';
import OutrosGanhosForm from './OutrosGanhosForm';

interface ClientModalProps {
    onClose: () => void;
}

const STEPS = [
    { id: 1, title: 'Dados Pessoais' },
    { id: 2, title: 'Localização' },
    { id: 3, title: 'Ocupação' },
    { id: 4, title: 'Documentos' },
    { id: 5, title: 'Outros Ganhos' },
];

const ClientModal: React.FC<ClientModalProps> = ({ onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length));
    const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in-fast">
            <div className="bg-gray-100 rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden">
                {/* Cabeçalho do Modal */}
                <div className="flex justify-between items-center p-6 bg-white border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-brand-blue-dark">Adicionar Novo Cliente</h2>
                    <button onClick={onClose} className="p-2 text-gray-500 hover:bg-gray-200 rounded-full transition-colors">
                        <XMarkIcon className="w-8 h-8" />
                    </button>
                </div>

                {/* Stepper */}
                <div className="p-6 border-b border-gray-200 bg-white">
                    <div className="flex items-center justify-between">
                        {STEPS.map((step, index) => (
                            <React.Fragment key={step.id}>
                                <div className="flex flex-col items-center text-center">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-300 ${
                                            currentStep > step.id ? 'bg-green-500 text-white' :
                                            currentStep === step.id ? 'bg-brand-gold text-brand-blue-dark scale-110' : 'bg-gray-300 text-gray-600'
                                        }`}>
                                        {currentStep > step.id ? '✓' : step.id}
                                    </div>
                                    <p className={`mt-2 font-semibold ${currentStep >= step.id ? 'text-brand-blue-dark' : 'text-gray-500'}`}>{step.title}</p>
                                </div>
                                {index < STEPS.length - 1 && <div className={`flex-1 h-1 mx-4 rounded ${currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Conteúdo do Formulário */}
                <div className="flex-grow p-8 overflow-y-auto">
                    {currentStep === 1 && <DadosPessoaisForm />}
                    {currentStep === 2 && <LocalizacaoForm />}
                    {currentStep === 3 && <OcupacaoForm />}
                    {currentStep === 4 && <DocumentosForm />}
                    {currentStep === 5 && <OutrosGanhosForm />}
                </div>

                {/* Rodapé e Navegação */}
                <div className="p-6 bg-white border-t border-gray-200 flex justify-between items-center">
                    <button
                        onClick={handleBack}
                        disabled={currentStep === 1}
                        className="bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg shadow-sm hover:bg-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Anterior
                    </button>

                    {currentStep < STEPS.length ? (
                        <button
                            onClick={handleNext}
                            className="bg-brand-blue-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105"
                        >
                            Próximo
                        </button>
                    ) : (
                        <button
                            onClick={() => { alert('Cliente salvo!'); onClose(); }}
                            className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-all transform hover:scale-105"
                        >
                            Guardar Cliente
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientModal;
