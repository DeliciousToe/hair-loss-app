import React, { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Assessment from './components/Assessment';
import Schedule from './components/Schedule';
import TreatmentInfo from './components/TreatmentInfo';
import { determineProtocol } from './utils/protocols';

function App() {
  const [view, setView] = useState('landing'); // landing, assessment, result, info
  const [protocol, setProtocol] = useState(null);

  const startAssessment = () => setView('assessment');

  const handleAssessmentComplete = (answers) => {
    const p = determineProtocol(answers);
    setProtocol(p);
    setView('result');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="border-b border-zinc-900/50 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setView('landing')}>
            <ShieldCheck className="w-6 h-6 text-blue-600 transition-transform group-hover:scale-110" />
            <span className="font-bold text-lg tracking-tight">Follicle<span className="text-blue-600">Guard</span></span>
          </div>
          <nav className="flex gap-6 text-sm font-medium text-zinc-400">
            <button onClick={() => setView('info')} className="hover:text-white transition-colors">Treatments</button>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {view === 'landing' && (
          <div className="text-center py-16 md:py-24 animate-in fade-in zoom-in-95 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-8 hover:border-zinc-700 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Science-backed Protocols
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">Stop Hair Loss.</span><br />
              <span className="text-blue-600">Start Regrowth.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Get a personalized, science-based protocol to tackle hair loss.
              Answer a few questions about your hairline and density to generate your optimal daily routine.
            </p>
            <button
              onClick={startAssessment}
              className="group bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] flex items-center gap-2 mx-auto"
            >
              Start Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-60">
              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="font-bold text-white mb-1">Tailored Routine</div>
                <div className="text-sm text-zinc-400">Based on your recession scale</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="font-bold text-white mb-1">Pro Tools</div>
                <div className="text-sm text-zinc-400">Minoxidil & Dermarolling guides</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                <div className="font-bold text-white mb-1">Weekly Schedule</div>
                <div className="text-sm text-zinc-400">Easy to follow calendar</div>
              </div>
            </div>
          </div>
        )}

        {view === 'assessment' && (
          <Assessment onComplete={handleAssessmentComplete} />
        )}

        {view === 'result' && protocol && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="mb-16">
              <Schedule protocol={protocol} />
            </div>

            <div className="border-t border-zinc-900 pt-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-white">Understanding Your Treatments</h2>
                <p className="text-zinc-400">Detailed usage instructions and safety warnings.</p>
              </div>
              <TreatmentInfo />
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={() => setView('landing')}
                className="text-zinc-500 hover:text-white transition-colors text-sm underline underline-offset-4"
              >
                Start Over with New Assessment
              </button>
            </div>
          </div>
        )}

        {view === 'info' && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Treatment Database</h2>
              <button onClick={() => setView('landing')} className="text-blue-500 hover:text-blue-400 font-medium">Back Home</button>
            </div>
            <TreatmentInfo />
          </div>
        )}
      </main>

    </div>
  );
}

export default App;
