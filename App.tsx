import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
      <div className="bg-brand-gray min-h-screen flex flex-col font-sans text-gray-800">
        <Header />
        <main className="flex-grow">
          <Home />
        </main>
        <Footer />
      </div>
  );
};

export default App;
