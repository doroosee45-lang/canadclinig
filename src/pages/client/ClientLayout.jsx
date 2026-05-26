import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LayoutDashboard, FileText, FolderOpen, History, MessageSquare, User, LogOut, Menu, X, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const CLIENT_NAV = [
  { to:'/client/dashboard',  Icon:LayoutDashboard, label:'Dashboard' },
  { to:'/client/devis',      Icon:FileText,        label:'Mes devis' },
  { to:'/client/projets',    Icon:FolderOpen,      label:'Mes projets' },
  { to:'/client/historique', Icon:History,         label:'Historique' },
  { to:'/client/messagerie', Icon:MessageSquare,   label:'Messagerie' },
  { to:'/client/profil',     Icon:User,            label:'Mon profil' },
];

export default function ClientLayout() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen w-64 bg-navy-900 text-white flex flex-col z-40 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center gap-3 px-5 py-5 border-b border-white/10">
          <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-display font-bold">CC</span>
          </div>
          <div>
            <p className="font-display text-sm font-bold tracking-wider">CANADCLEANING</p>
            <p className="text-brand-400 text-[10px] tracking-widest">ESPACE CLIENT</p>
          </div>
        </div>
        <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
          {CLIENT_NAV.map(({ to, Icon, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive ? 'bg-brand-500 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}>
              <Icon size={17}/>{label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-3 px-3 py-3 mb-2">
            <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">JM</div>
            <div className="min-w-0"><p className="text-sm font-semibold text-white truncate">Jean Moukoko</p><p className="text-xs text-gray-400">Client</p></div>
          </div>
          <button onClick={() => navigate('/login')} className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
            <LogOut size={15}/> Déconnexion
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-64 flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-5 sticky top-0 z-30">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
          <div className="flex-1"/>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-xl">
              <Bell size={18}/>
              <span className="absolute top-1 right-1 w-2 h-2 bg-brand-500 rounded-full"/>
            </button>
            <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-bold">JM</div>
          </div>
        </header>
        <main className="flex-1 p-6">
          <Outlet/>
        </main>
      </div>

      {/* Overlay mobile */}
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileOpen(false)}/>}
    </div>
  );
}
