

import React, { useState } from 'react';
import { Home } from './components/Home';
import { Recreato } from './components/RecreatoView';
import { AppSection } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<AppSection>(AppSection.HOME);

  const renderSection = () => {
    switch (currentSection) {
      case AppSection.RECREATO:
        return <Recreato onBack={() => setCurrentSection(AppSection.HOME)} />;
      default:
        return <Home onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="font-sans text-white bg-black min-h-screen">
      {renderSection()}
    </div>
  );
};

export default App;

