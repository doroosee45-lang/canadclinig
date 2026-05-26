import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LayoutDashboard, Users, TrendingUp, FolderKanban, FileText, Calendar, HardHat, Package, BookOpen, Settings, LogOut, Menu, X, Bell, Shield } from 'lucide-react';

const ADMIN_NAV = [
  { to:'/admin/dashboard', Icon:LayoutDashboard, label:'Dashboard' },
  { to:'/admin/clients',   Icon:Users,           label:'Clients & rôles' },
  { to:'/admin/crm',       Icon:TrendingUp,       label:'CRM Pipeline' },
  { to:'/admin/projets',   Icon:FolderKanban,    label:'Projets & tickets' },
  { to:'/admin/devis',     Icon:FileText,        label:'Gestion devis' },
  { to:'/admin/planning',  Icon:Calendar,        label:'Planning' },
  { to:'/admin/chantiers', Icon:HardHat,         label:'Chantiers' },
  { to:'/admin/catalogue', Icon:Package,         label:'Catalogue' },
  { to:'/admin/blog',      Icon:BookOpen,        label:'Blog & SEO' },
  { to:'/admin/config',    Icon:Settings,        label:'Configuration' },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen w-60 bg-navy-950 text-white flex flex-col z-40 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield size={14} className="text-white"/>
          </div>
          <div>
            <p className="font-display text-sm font-bold">ADMIN PANEL</p>
            <p className="text-brand-400 text-[10px] tracking-wider">CANADCLEANING</p>
          </div>
        </div>
        <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
          {ADMIN_NAV.map(({ to, Icon, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${isActive ? 'bg-brand-500 text-white' : 'text-gray-400 hover:bg-white/8 hover:text-white'}`}>
              <Icon size={15}/>{label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-2 px-2 py-2 mb-1">
            <div className="w-7 h-7 bg-brand-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">JB</div>
            <div className="min-w-0"><p className="text-xs font-semibold text-white truncate">Jean-Baptiste M.</p><p className="text-[10px] text-gray-500">Super Admin</p></div>
          </div>
          <button onClick={() => navigate('/login')} className="flex items-center gap-2 w-full px-2 py-1.5 text-xs text-gray-500 hover:text-red-400 rounded-lg transition-colors">
            <LogOut size={13}/> Déconnexion
          </button>
        </div>
      </aside>

      <div className="lg:ml-60 flex-1 flex flex-col min-w-0">
        <header className="h-12 bg-white border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 z-30">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg">
            {mobileOpen ? <X size={18}/> : <Menu size={18}/>}
          </button>
          <div className="flex-1"/>
          <div className="flex items-center gap-2">
            <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
              <Bell size={16}/>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"/>
            </button>
            <div className="w-7 h-7 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs font-bold">JB</div>
          </div>
        </header>
        <main className="flex-1 p-5 overflow-auto">
          <Outlet/>
        </main>
      </div>

      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileOpen(false)}/>}
    </div>
  );
}
