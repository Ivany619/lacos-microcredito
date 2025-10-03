import React from 'react';

const OcupacaoForm: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-blue-dark border-b-2 border-brand-gold pb-2">Ocupação Profissional</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                
                {/* Nome da Ocupação */}
                <div className="lg:col-span-2">
                    <label htmlFor="ocupacao_nome" className="block text-base font-semibold text-gray-800 mb-1">Nome da Ocupação</label>
                    <input type="text" id="ocupacao_nome" placeholder="Ex: Engenheiro de Software" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>

                {/* Código */}
                <div>
                    <label htmlFor="ocupacao_codigo" className="block text-base font-semibold text-gray-800 mb-1">Código</label>
                    <input type="text" id="ocupacao_codigo" placeholder="Ex: C-123" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>

                {/* Descrição */}
                <div className="col-span-full">
                    <label htmlFor="ocupacao_descricao" className="block text-base font-semibold text-gray-800 mb-1">Descrição <span className="text-sm font-normal text-gray-500">(Opcional)</span></label>
                    <textarea id="ocupacao_descricao" placeholder="Descreva brevemente a ocupação" rows={3} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"></textarea>
                </div>

                {/* Setor Económico */}
                <div>
                    <label htmlFor="setor_economico" className="block text-base font-semibold text-gray-800 mb-1">Setor Económico</label>
                    <select id="setor_economico" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all">
                        <option value="" disabled selected>Selecione...</option>
                        <option value="Primario">Primário</option>
                        <option value="Secundario">Secundário</option>
                        <option value="Terciario">Terciário</option>
                        <option value="Quaternario">Quaternário</option>
                    </select>
                </div>

                {/* Estabilidade de Emprego */}
                <div>
                    <label htmlFor="estabilidade_emprego" className="block text-base font-semibold text-gray-800 mb-1">Estabilidade de Emprego</label>
                    <select id="estabilidade_emprego" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all">
                        <option value="" disabled selected>Selecione...</option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Média</option>
                        <option value="Baixa">Baixa</option>
                        <option value="Sazonal">Sazonal</option>
                    </select>
                </div>

                {/* Categoria de Risco */}
                <div>
                    <label htmlFor="categoria_risco" className="block text-base font-semibold text-gray-800 mb-1">Categoria de Risco</label>
                    <select id="categoria_risco" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all">
                        <option value="" disabled selected>Selecione...</option>
                        <option value="Muito Baixo">Muito Baixo</option>
                        <option value="Baixo">Baixo</option>
                        <option value="Medio">Médio</option>
                        <option value="Alto">Alto</option>
                        <option value="Muito Alto">Muito Alto</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default OcupacaoForm;
