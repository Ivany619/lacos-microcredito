import React, { useState } from 'react';
import { DocumentPlusIcon, XCircleIcon, PaperClipIcon } from '@heroicons/react/24/solid';

interface Documento {
    id: number;
    tipo: string;
    numero: string;
    arquivo?: File;
}

const DocumentosForm: React.FC = () => {
    const [documentos, setDocumentos] = useState<Documento[]>([]);
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [arquivo, setArquivo] = useState<File | undefined>();

    const handleAddDocumento = () => {
        if (!tipoDocumento || !numeroDocumento) {
            alert('Por favor, preencha o tipo e o número do documento.');
            return;
        }
        const newDocumento: Documento = {
            id: Date.now(), // ID único temporário
            tipo: tipoDocumento,
            numero: numeroDocumento,
            arquivo: arquivo,
        };
        setDocumentos([...documentos, newDocumento]);
        // Limpar campos
        setTipoDocumento('');
        setNumeroDocumento('');
        setArquivo(undefined);
        // Resetar o input de ficheiro
        const fileInput = document.getElementById('arquivo') as HTMLInputElement;
        if(fileInput) fileInput.value = '';
    };

    const handleRemoveDocumento = (id: number) => {
        setDocumentos(documentos.filter(doc => doc.id !== id));
    };

    return (
        <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-brand-blue-dark border-b-2 border-brand-gold pb-2">Documentos</h3>
            
            {/* Formulário para adicionar documentos */}
            <div className="p-6 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Tipo de Documento */}
                    <div>
                        <label htmlFor="tipo_documento" className="block text-base font-semibold text-gray-800 mb-1">Tipo de Documento</label>
                        <select id="tipo_documento" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)} className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all">
                            <option value="" disabled>Selecione o tipo</option>
                            <option value="BI">BI</option>
                            <option value="Passaporte">Passaporte</option>
                            <option value="Carta de Conducao">Carta de Condução</option>
                            <option value="NUIT">NUIT</option>
                            <option value="Contrato Microcredito">Contrato Microcrédito</option>
                            <option value="Livrete">Livrete</option>
                            <option value="DIRE">DIRE</option>
                            <option value="Certidao de Nascimento">Certidão de Nascimento</option>
                            <option value="Certificado de Habilitacoes">Certificado de Habilitações</option>
                            <option value="Comprovativo de Residencia">Comprovativo de Residência</option>
                            <option value="Talao de Deposito">Talão de Depósito</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    {/* Número do Documento */}
                    <div className="lg:col-span-1">
                        <label htmlFor="numero_documento" className="block text-base font-semibold text-gray-800 mb-1">Nº do Documento</label>
                        <input type="text" id="numero_documento" value={numeroDocumento} onChange={(e) => setNumeroDocumento(e.target.value)} placeholder="Insira o número" className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-all"/>
                    </div>
                    
                    {/* Upload de Arquivo */}
                    <div className="lg:col-span-1 flex items-end">
                        <label htmlFor="arquivo" className="w-full cursor-pointer bg-white border-2 border-gray-200 rounded-lg shadow-sm px-4 py-3 text-center text-gray-600 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-brand-gold transition-all">
                            <PaperClipIcon className="w-5 h-5 inline mr-2"/>
                            <span>{arquivo ? arquivo.name : 'Anexar Ficheiro'}</span>
                            <input type="file" id="arquivo" className="sr-only" onChange={(e) => setArquivo(e.target.files ? e.target.files[0] : undefined)} />
                        </label>
                    </div>
                </div>
                <div className="mt-6 text-right">
                    <button onClick={handleAddDocumento} className="inline-flex items-center gap-2 bg-brand-gold text-brand-blue-dark font-bold py-2 px-5 rounded-lg shadow-md hover:bg-yellow-400 transition-all transform hover:scale-105">
                        <DocumentPlusIcon className="w-6 h-6" />
                        Adicionar Documento
                    </button>
                </div>
            </div>

            {/* Lista de Documentos Adicionados */}
            <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-700">Documentos Anexados</h4>
                {documentos.length === 0 ? (
                    <p className="text-gray-500 italic">Nenhum documento adicionado.</p>
                ) : (
                    <ul className="divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        {documentos.map(doc => (
                            <li key={doc.id} className="flex items-center justify-between p-4 bg-white hover:bg-gray-50">
                                <div>
                                    <p className="font-bold text-gray-800">{doc.tipo}</p>
                                    <p className="text-sm text-gray-600">{doc.numero}</p>
                                    {doc.arquivo && <p className="text-xs text-blue-500 mt-1 truncate"><PaperClipIcon className="w-4 h-4 inline mr-1"/>{doc.arquivo.name}</p>}
                                </div>
                                <button onClick={() => handleRemoveDocumento(doc.id)} className="p-2 text-red-500 hover:bg-red-100 rounded-full transition-colors">
                                    <XCircleIcon className="w-7 h-7" />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DocumentosForm;
