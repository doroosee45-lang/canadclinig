import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense, lazy } from 'react';

// Layout public
import Layout from './components/layout/Layout';

// Pages publiques
import Home         from './pages/public/Home';
import Services     from './pages/public/Services';
import Solutions    from './pages/public/Solutions';
import Realisations from './pages/public/Realisations';
import Tarifs       from './pages/public/Tarifs';
import APropos      from './pages/public/APropos';
import Blog         from './pages/public/Blog';
import Experts      from './pages/public/Experts';
import Contact      from './pages/public/Contact';
import Audit        from './pages/public/Audit';
import Devis        from './pages/public/Devis';
import Deplient     from './pages/public/Deplient';

// Auth
import Login    from './pages/auth/Login';
import Register from './pages/auth/Register';

// Client
import ClientLayout from './pages/client/ClientLayout';
import ClientDashboard from './pages/client/Dashboard';
import { ClientDevis, ClientProjets, ClientHistorique, ClientMessagerie, ClientProfil } from './pages/client/ClientPages';

// Admin
import AdminLayout    from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import { AdminClients, AdminCRM, AdminProjets, AdminDevis, AdminPlanning, AdminChantiers, AdminCatalogue, AdminBlog, AdminConfig } from './pages/admin/AdminPages';

function Loader() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"/>
        <p className="text-navy-500 text-sm font-semibold">Chargement...</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          {/* ─── Site public ─── */}
          <Route element={<Layout/>}>
            <Route path="/"            element={<Home/>}/>
            <Route path="/services"    element={<Services/>}/>
            <Route path="/solutions"   element={<Solutions/>}/>
            <Route path="/realisations"element={<Realisations/>}/>
            <Route path="/tarifs"      element={<Tarifs/>}/>
            <Route path="/a-propos"    element={<APropos/>}/>
            <Route path="/blog"        element={<Blog/>}/>
            <Route path="/experts"     element={<Experts/>}/>
            <Route path="/contact"     element={<Contact/>}/>
              <Route path="/deplient" element={<Deplient/>}/>
          </Route>

          {/* Audit & Devis (avec layout public) */}
          <Route element={<Layout/>}>
            <Route path="/audit" element={<Audit/>}/>
            <Route path="/devis" element={<Devis/>}/>
          
          </Route>

          {/* ─── Auth ─── */}
          <Route path="/login"    element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          {/* ─── Espace Client ─── */}
          <Route path="/client" element={<ClientLayout/>}>
            <Route index element={<Navigate to="/client/dashboard" replace/>}/>
            <Route path="dashboard"  element={<ClientDashboard/>}/>
            <Route path="devis"      element={<ClientDevis/>}/>
            <Route path="projets"    element={<ClientProjets/>}/>
            <Route path="historique" element={<ClientHistorique/>}/>
            <Route path="messagerie" element={<ClientMessagerie/>}/>
            <Route path="profil"     element={<ClientProfil/>}/>
          </Route>

          {/* ─── Back-office Admin ─── */}
          <Route path="/admin" element={<AdminLayout/>}>
            <Route index element={<Navigate to="/admin/dashboard" replace/>}/>
            <Route path="dashboard" element={<AdminDashboard/>}/>
            <Route path="clients"   element={<AdminClients/>}/>
            <Route path="crm"       element={<AdminCRM/>}/>
            <Route path="projets"   element={<AdminProjets/>}/>
            <Route path="devis"     element={<AdminDevis/>}/>
            <Route path="planning"  element={<AdminPlanning/>}/>
            <Route path="chantiers" element={<AdminChantiers/>}/>
            <Route path="catalogue" element={<AdminCatalogue/>}/>
            <Route path="blog"      element={<AdminBlog/>}/>
            <Route path="config"    element={<AdminConfig/>}/>
          </Route>

          {/* 404 */}
          <Route path="*" element={
            <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center text-white gap-4">
              <div className="font-display text-8xl font-bold text-brand-500">404</div>
              <p className="text-xl font-display">Page introuvable</p>
              <a href="/" className="btn-primary mt-4">Retour à l'accueil</a>
            </div>
          }/>
        </Routes>
      </Suspense>

      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { fontFamily:'Nunito, sans-serif', fontSize:'14px', fontWeight:600 },
          success: { iconTheme:{ primary:'#f97316', secondary:'#fff' } },
          error:   { iconTheme:{ primary:'#dc2626', secondary:'#fff' } },
        }}
      />
    </BrowserRouter>
  );
}
