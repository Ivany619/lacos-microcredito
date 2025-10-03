import React from 'react';

const LocalizacaoForm: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-blue-dark border-b-2 border-brand-gold pb-2">Localização</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Província */}
                <div>
                    <label htmlFor="provincia" className="block text-base font-semibold text-gray-800 mb-1">Província</label>
                    <input type="text" id="provincia" placeholder="Ex: Maputo" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>

                {/* Distrito */}
                <div>
                    <label htmlFor="distrito" className="block text-base font-semibold text-gray-800 mb-1">Distrito</label>
                    <input type="text" id="distrito" placeholder="Ex: KaMpfumo" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>

                {/* Cidade */}
                <div>
                    <label htmlFor="cidade" className="block text-base font-semibold text-gray-800 mb-1">Cidade</label>
                    <input type="text" id="cidade" placeholder="Ex: Maputo" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>

                {/* Bairro */}
                <div>
                    <label htmlFor="bairro" className="block text-base font-semibold text-gray-800 mb-1">Bairro</label>
                    <input type="text" id="bairro" placeholder="Ex: Polana Cimento" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>

                {/* Quarteirão */}
                <div>
                    <label htmlFor="quarteirao" className="block text-base font-semibold text-gray-800 mb-1">Quarteirão</label>
                    <input type="text" id="quarteirao" placeholder="Ex: 23" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>

                {/* Número da Casa */}
                <div>
                    <label htmlFor="numero_da_casa" className="block text-base font-semibold text-gray-800 mb-1">Nº da Casa</label>
                    <input type="text" id="numero_da_casa" placeholder="Ex: 123" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>
            </div>
        </div>
    );
};

export default LocalizacaoForm;
