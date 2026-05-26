import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, FolderOpen, Bell, Calendar, ChevronRight, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const STATS = [
  { label:'Devis en cours', value:2, icon:FileText,   color:'bg-blue-50 text-blue-600',   border:'border-blue-200' },
  { label:'Projets actifs', value:1, icon:FolderOpen, color:'bg-green-50 text-green-600', border:'border-green-200' },
  { label:'Notifications',  value:3, icon:Bell,       color:'bg-orange-50 text-orange-600',border:'border-orange-200' },
  { label:'Interventions',  value:12,icon:Calendar,   color:'bg-purple-50 text-purple-600',border:'border-purple-200' },
];

const DEVIS = [
  { ref:'DEV-240891', service:'Nettoyage commercial', status:'En traitement', date:'12/06/2026', color:'bg-blue-50 text-blue-700 border-blue-200' },
  { ref:'DEV-238456', service:'Cuisine professionnelle HACCP', status:'Accepté', date:'05/06/2026', color:'bg-green-50 text-green-700 border-green-200' },
];

const INTERVENTIONS = [
  { date:'18/06/2026', service:'Nettoyage bureaux', heure:'09:00 – 11:30', agent:'Patrick K.', status:'Planifié' },
  { date:'20/06/2026', service:'Nettoyage cuisine pro', heure:'22:00 – 00:30', agent:'Marie-Paule I.', status:'Planifié' },
];

export default function ClientDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-900">Bonjour, Jean 👋</h1>
        <p className="text-navy-500 text-sm">Voici un résumé de votre activité.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map((s,i) => (
          <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.07}}
            className={`bg-white rounded-xl border ${s.border} p-4`}>
            <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
              <s.icon size={18}/>
            </div>
            <div className="text-2xl font-display font-bold text-navy-900">{s.value}</div>
            <div className="text-sm text-navy-500">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Devis */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-navy-900">Mes derniers devis</h2>
            <Link to="/client/devis" className="text-xs text-brand-500 font-bold flex items-center gap-1">Voir tout <ChevronRight size={13}/></Link>
          </div>
          <div className="space-y-3">
            {DEVIS.map(d => (
              <div key={d.ref} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-bold text-navy-900 text-sm">{d.ref}</p>
                  <p className="text-xs text-navy-500">{d.service}</p>
                </div>
                <div className="text-right">
                  <span className={`badge ${d.color} border`}>{d.status}</span>
                  <p className="text-xs text-navy-400 mt-1">{d.date}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/devis" className="mt-4 flex items-center gap-2 text-sm text-brand-500 font-bold hover:gap-3 transition-all">
            + Nouveau devis
          </Link>
        </div>

        {/* Prochaines interventions */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-navy-900">Prochaines interventions</h2>
            <Link to="/client/historique" className="text-xs text-brand-500 font-bold flex items-center gap-1">Voir tout <ChevronRight size={13}/></Link>
          </div>
          <div className="space-y-3">
            {INTERVENTIONS.map((inv, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-9 h-9 bg-brand-50 border border-brand-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={15} className="text-brand-500"/>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-navy-900 text-sm truncate">{inv.service}</p>
                  <p className="text-xs text-navy-500">{inv.date} · {inv.heure}</p>
                  <p className="text-xs text-navy-400">Agent : {inv.agent}</p>
                </div>
                <span className="badge bg-blue-50 text-blue-700 border border-blue-200 flex-shrink-0">{inv.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification */}
      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-5 flex items-start gap-4">
        <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <Bell size={18} className="text-white"/>
        </div>
        <div className="flex-1">
          <p className="font-bold text-navy-900 mb-0.5">Rappel intervention</p>
          <p className="text-sm text-navy-600">Votre nettoyage de cuisine professionnelle est prévu le 20/06 à 22h00. Agent : Marie-Paule I.</p>
        </div>
        <button className="text-brand-600 text-xs font-bold">OK</button>
      </div>
    </div>
  );
}
