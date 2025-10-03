import React from 'react';

const OutrosGanhosForm: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-blue-dark border-b-2 border-brand-gold pb-2">Outros Ganhos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">

                {/* Descrição */}
                <div className="lg:col-span-2">
                    <label htmlFor="ganho_descricao" className="block text-base font-semibold text-gray-800 mb-1">Descrição</label>
                    <textarea id="ganho_descricao" placeholder="Ex: Venda de produtos agrícolas" rows={3} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"></textarea>
                </div>

                {/* Valor */}
                <div>
                    <label htmlFor="ganho_valor" className="block text-base font-semibold text-gray-800 mb-1">Valor</label>
                    <input type="number" id="ganho_valor" placeholder="Ex: 1500" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>

            </div>
        </div>
    );
};

export default OutrosGanhosForm;
