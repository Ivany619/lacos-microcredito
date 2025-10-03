import React from 'react';

const DadosPessoaisForm: React.FC = () => {
    return (
        <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-blue-dark border-b-2 border-brand-gold pb-2">Dados Pessoais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Nome Completo */}
                <div className="col-span-2">
                    <label htmlFor="nome" className="block text-base font-semibold text-gray-800 mb-1">Nome Completo</label>
                    <input type="text" id="nome" placeholder="Insira o nome completo" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>
                
                {/* Data de Nascimento */}
                <div>
                    <label htmlFor="data_nascimento" className="block text-base font-semibold text-gray-800 mb-1">Data de Nascimento</label>
                    <input type="date" id="data_nascimento" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                </div>
                
                {/* Sexo */}
                <div>
                    <label htmlFor="sexo" className="block text-base font-semibold text-gray-800 mb-1">Sexo</label>
                    <select id="sexo" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all">
                        <option value="" disabled selected>Selecione o sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
                
                {/* Nacionalidade */}
                <div>
                    <label htmlFor="nacionalidade" className="block text-base font-semibold text-gray-800 mb-1">Nacionalidade</label>
                    <select id="nacionalidade" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all">
                        <option value="Moçambicana">Moçambicana</option>
                        <option value="Estrangeira">Estrangeira</option>
                    </select>
                </div>
                
                {/* Salário */}
                <div>
                    <label htmlFor="salario" className="block text-base font-semibold text-gray-800 mb-1">Salário (MT)</label>
                    <input type="number" id="salario" min="0" step="0.01" placeholder="0.00" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all" />
                </div>

                {/* Contactos */}
                <div className="col-span-2 pt-4">
                     <h4 className="text-xl font-bold text-gray-700 border-b border-gray-300 pb-2 mb-4">Contactos</h4>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div>
                            <label htmlFor="telefone" className="block text-base font-semibold text-gray-800 mb-1">Telefone</label>
                            <input type="tel" id="telefone" placeholder="8X XXX XXXX" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-1">Email <span className="text-sm font-normal text-gray-500">(Opcional)</span></label>
                            <input type="email" id="email" placeholder="exemplo@dominio.com" className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default DadosPessoaisForm;
