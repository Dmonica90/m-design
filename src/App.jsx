import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioPage from '@/pages/PortfolioPage';
import PlaygroundPage from '@/pages/PlaygroundPage'; // <--- Tu nueva página
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen gradient-background">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Ruta principal (Home) */}
              <Route path="/" element={<PortfolioPage />} />
              {/* Ruta del Playground */}
              <Route path="/playground" element={<PlaygroundPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;