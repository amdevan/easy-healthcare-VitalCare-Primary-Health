import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import AppointmentForm from './components/AppointmentForm';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <main>
        <Hero />
        <Services />
        <About />
        <AppointmentForm />
      </main>
      <AIAssistant />
    </div>
  );
};

export default App;