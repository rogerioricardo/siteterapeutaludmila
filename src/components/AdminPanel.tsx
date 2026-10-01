import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';

export const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [config, setConfig] = useState(JSON.parse(JSON.stringify(siteConfig)));

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'ludmila@123') {
      setIsAuthenticated(true);
    } else {
      alert('Credenciais incorretas!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-primary-dark">Login Administrativo</h2>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-2 border rounded mb-4" placeholder="Usuário" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded mb-6" placeholder="Senha" required />
          <button type="submit" className="w-full bg-primary text-white p-2 rounded font-bold">Entrar</button>
        </form>
      </div>
    );
  }

  const handleInputChange = (path: string, value: any) => {
    const keys = path.split('.');
    const newConfig = JSON.parse(JSON.stringify(config));
    let current = newConfig;
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    setConfig(newConfig);
  };

  const handleArrayChange = (path: string, index: number, field: string, value: string) => {
    const newConfig = JSON.parse(JSON.stringify(config));
    const keys = path.split('.');
    let current = newConfig;
    for (const key of keys) current = current[key];
    current[index][field] = value;
    setConfig(newConfig);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    alert("Configuração copiada! Cole no arquivo src/data/siteConfig.ts");
  };

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-xl font-semibold mb-4 text-primary-dark">{title}</h2>
      {children}
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary-dark">Painel Administrativo</h1>
        <button onClick={() => setIsAuthenticated(false)} className="bg-red-500 text-white px-4 py-2 rounded">
          Sair do Admin
        </button>
      </div>
      
      <Section title="Informações Gerais">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" value={config.name} onChange={(e) => handleInputChange('name', e.target.value)} className="p-2 border rounded" placeholder="Nome" />
          <input type="text" value={config.profession} onChange={(e) => handleInputChange('profession', e.target.value)} className="p-2 border rounded" placeholder="Profissão" />
        </div>
      </Section>

      <Section title="Contato">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" value={config.contact.whatsapp} onChange={(e) => handleInputChange('contact.whatsapp', e.target.value)} className="p-2 border rounded" placeholder="WhatsApp" />
          <input type="text" value={config.contact.email} onChange={(e) => handleInputChange('contact.email', e.target.value)} className="p-2 border rounded" placeholder="Email" />
          <input type="text" value={config.contact.instagram} onChange={(e) => handleInputChange('contact.instagram', e.target.value)} className="p-2 border rounded" placeholder="Instagram" />
        </div>
      </Section>
      
      <Section title="Início (Hero)">
        <input type="text" value={config.hero.title} onChange={(e) => handleInputChange('hero.title', e.target.value)} className="w-full p-2 border rounded mb-2" placeholder="Título" />
        <textarea value={config.hero.description} onChange={(e) => handleInputChange('hero.description', e.target.value)} className="w-full p-2 border rounded" placeholder="Descrição" />
      </Section>

      <Section title="Sobre Mim">
        <input type="text" value={config.about.title} onChange={(e) => handleInputChange('about.title', e.target.value)} className="w-full p-2 border rounded mb-4" placeholder="Título" />
        <textarea value={config.about.content.join('\n')} onChange={(e) => handleInputChange('about.content', e.target.value.split('\n'))} className="w-full h-40 p-2 border rounded" placeholder="Conteúdo (uma linha por parágrafo)" />
      </Section>

      <Section title="Como Posso Ajudar (Serviços)">
        <input type="text" value={config.services.title} onChange={(e) => handleInputChange('services.title', e.target.value)} className="w-full p-2 border rounded mb-2" />
        {config.services.items.map((item: any, index: number) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <input type="text" value={item.title} onChange={(e) => handleArrayChange('services.items', index, 'title', e.target.value)} className="w-full p-2 border rounded mb-2" />
            <textarea value={item.description} onChange={(e) => handleArrayChange('services.items', index, 'description', e.target.value)} className="w-full p-2 border rounded" />
          </div>
        ))}
      </Section>

      <Section title="Atendimentos (Como Funciona)">
        <input type="text" value={config.howItWorks.title} onChange={(e) => handleInputChange('howItWorks.title', e.target.value)} className="w-full p-2 border rounded mb-2" />
        {config.howItWorks.steps.map((item: any, index: number) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <input type="text" value={item.title} onChange={(e) => handleArrayChange('howItWorks.steps', index, 'title', e.target.value)} className="w-full p-2 border rounded mb-2" />
            <textarea value={item.description} onChange={(e) => handleArrayChange('howItWorks.steps', index, 'description', e.target.value)} className="w-full p-2 border rounded" />
          </div>
        ))}
      </Section>

      <Section title="Depoimentos">
        {config.testimonials.items.map((item: any, index: number) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <textarea value={item.content} onChange={(e) => handleArrayChange('testimonials.items', index, 'content', e.target.value)} className="w-full p-2 border rounded mb-2" />
            <input type="text" value={item.author} onChange={(e) => handleArrayChange('testimonials.items', index, 'author', e.target.value)} className="w-full p-2 border rounded" />
          </div>
        ))}
      </Section>

      <Section title="Dúvidas Frequentes (FAQ)">
        {config.faq.items.map((item: any, index: number) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <input type="text" value={item.question} onChange={(e) => handleArrayChange('faq.items', index, 'question', e.target.value)} className="w-full p-2 border rounded mb-2" />
            <textarea value={item.answer} onChange={(e) => handleArrayChange('faq.items', index, 'answer', e.target.value)} className="w-full p-2 border rounded" />
          </div>
        ))}
      </Section>

      <button onClick={handleCopy} className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg sticky bottom-4">
        Gerar e Copiar JSON Final
      </button>
    </div>
  );
};
