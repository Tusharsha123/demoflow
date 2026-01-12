
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import RecorderView from './views/RecorderView';
import EditorView from './views/EditorView';
import DashboardView from './views/DashboardView';
import ShareView from './views/ShareView';
import { VideoCameraIcon, FilmIcon, ChartBarIcon, ShareIcon, SparklesIcon } from '@heroicons/react/24/outline';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col md:flex-row bg-slate-950 text-slate-50">
        {/* Sidebar Navigation */}
        <nav className="w-full md:w-64 glass-panel border-r border-slate-800 p-4 flex flex-col gap-4 sticky top-0 h-screen z-50">
          <div className="flex items-center gap-3 px-2 mb-8">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">DemoFlow<span className="text-indigo-400">AI</span></h1>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <NavLink to="/" icon={<VideoCameraIcon className="w-5 h-5" />} label="Record" />
            <NavLink to="/editor" icon={<FilmIcon className="w-5 h-5" />} label="Studio Editor" />
            <NavLink to="/dashboard" icon={<ChartBarIcon className="w-5 h-5" />} label="Analytics" />
          </div>

          <div className="mt-auto pt-4 border-t border-slate-800">
            <div className="p-3 bg-indigo-600/10 rounded-lg border border-indigo-500/20">
              <p className="text-xs font-medium text-indigo-400 uppercase tracking-wider mb-1">MVP Version</p>
              <p className="text-sm text-slate-400">Free Tier Active</p>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Routes>
            <Route path="/" element={<RecorderView />} />
            <Route path="/editor" element={<EditorView />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/share/:id" element={<ShareView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const NavLink: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        isActive 
          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
          : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default App;
