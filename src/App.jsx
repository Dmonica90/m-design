import React from 'react';
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';
    import PortfolioPage from '@/pages/PortfolioPage';
    import { Toaster } from '@/components/ui/toaster';
    import { LanguageProvider } from '@/contexts/LanguageContext';

    function App() {
      return (
        <LanguageProvider>
          <div className="flex flex-col min-h-screen gradient-background">
            <Header />
            <main className="flex-grow">
              <PortfolioPage />
            </main>
            <Footer />
            <Toaster />
          </div>
        </LanguageProvider>
      );
    }

    export default App;