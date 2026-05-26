// ─── Mes Devis ───────────────────────────────────────────────────────────────
import { useState } from 'react';
import { Download, Eye, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const DEVIS_DATA = [
  { ref:'DEV-240891', service:'Nettoyage commercial bureaux 200m²', cat:'Nettoyage', date:'12/06/2026', statut:'En traitement', montant:'Sur devis' },
  { ref:'DEV-238456', service:'Cuisine professionnelle HACCP quotidien', cat:'Restauration', date:'05/06/2026', statut:'Accepté', montant:'149€/jour' },
  { ref:'DEV-235012', service:'Nettoyage fin de bail appartement 80m²', cat:'Nettoyage', date:'20/05/2026', statut:'Archivé', montant:'249€' },
  { ref:'DEV-231874', service:'Grand ménage de fond salle de restaurant', cat:'Restauration', date:'15/04/2026', statut:'Refusé', montant:'—' },
];

const STATUT_COLORS = {
  'En traitement':'bg-blue-50 text-blue-700 border-blue-200',
  'Accepté':'bg-green-50 text-green-700 border-green-200',
  'Archivé':'bg-gray-50 text-gray-600 border-gray-200',
  'Refusé':'bg-red-50 text-red-700 border-red-200',
};

export function ClientDevis() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="font-display text-2xl font-bold text-navy-900">Mes devis</h1><p className="text-navy-500 text-sm">{DEVIS_DATA.length} demandes</p></div>
        <Link to="/devis" className="btn-primary text-sm py-2"><Plus size={15}/> Nouveau devis</Link>
      </div>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>{['Référence','Service','Catégorie','Date','Statut','Montant','Actions'].map(h=>(
              <th key={h} className="px-4 py-3 text-left text-xs font-bold text-navy-500 uppercase tracking-wider">{h}</th>
            ))}</tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {DEVIS_DATA.map((d,i) => (
              <motion.tr key={d.ref} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:i*0.05}} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-bold text-navy-900 text-sm">{d.ref}</td>
                <td className="px-4 py-3 text-sm text-navy-700 max-w-xs truncate">{d.service}</td>
                <td className="px-4 py-3"><span className="text-xs font-semibold text-navy-500 bg-navy-50 px-2 py-1 rounded-lg">{d.cat}</span></td>
                <td className="px-4 py-3 text-xs text-navy-400">{d.date}</td>
                <td className="px-4 py-3"><span className={`badge border ${STATUT_COLORS[d.statut]}`}>{d.statut}</span></td>
                <td className="px-4 py-3 font-bold text-brand-500 text-sm">{d.montant}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="p-1.5 text-navy-400 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-colors"><Eye size={14}/></button>
                    <button className="p-1.5 text-navy-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors"><Download size={14}/></button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Mes Projets ─────────────────────────────────────────────────────────────
export function ClientProjets() {
  const projets = [
    { nom:'Nettoyage quotidien cuisine HACCP', cat:'Restauration', progress:75, debut:'01/05/2026', fin:'31/07/2026', agent:'Marie-Paule I.', status:'En cours' },
    { nom:'Nettoyage hebdomadaire bureaux', cat:'Nettoyage', progress:100, debut:'01/01/2026', fin:'31/12/2026', agent:'Patrick K.', status:'Actif' },
  ];
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-navy-900">Mes projets</h1>
      <div className="space-y-4">
        {projets.map((p,i) => (
          <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.1}} className="bg-white rounded-2xl border border-gray-100 shadow-card p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="badge badge-clean mb-2">{p.cat}</span>
                <h3 className="font-display font-bold text-navy-900 text-lg">{p.nom}</h3>
                <p className="text-sm text-navy-500">Agent : {p.agent} · {p.debut} → {p.fin}</p>
              </div>
              <span className={`badge ${p.status==='En cours'?'bg-blue-50 text-blue-700 border-blue-200':'bg-green-50 text-green-700 border-green-200'} border`}>{p.status}</span>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1"><span className="text-navy-500 font-semibold">Progression</span><span className="font-bold text-navy-900">{p.progress}%</span></div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{width:0}} animate={{width:`${p.progress}%`}} transition={{delay:0.3,duration:0.8}} className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full"/>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Historique ───────────────────────────────────────────────────────────────
export function ClientHistorique() {
  const interventions = [
    { date:'12/06/2026', service:'Nettoyage bureaux 200m²', agent:'Patrick K.', heure:'09:00–11:30', note:5, rapport:true },
    { date:'10/06/2026', service:'Cuisine pro HACCP',        agent:'Marie-Paule I.', heure:'22:00–00:30', note:5, rapport:true },
    { date:'05/06/2026', service:'Nettoyage vitres façade',  agent:'René M.', heure:'08:00–10:00', note:4, rapport:true },
    { date:'01/06/2026', service:'Nettoyage bureaux 200m²',  agent:'Patrick K.', heure:'09:00–11:30', note:5, rapport:true },
    { date:'28/05/2026', service:'Cuisine pro HACCP',        agent:'Marie-Paule I.', heure:'22:00–00:30', note:5, rapport:true },
  ];
  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl font-bold text-navy-900">Historique des interventions</h1>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>{['Date','Service','Agent','Horaire','Note','Rapport'].map(h=>(
              <th key={h} className="px-4 py-3 text-left text-xs font-bold text-navy-500 uppercase tracking-wider">{h}</th>
            ))}</tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {interventions.map((inv,i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-semibold text-navy-900">{inv.date}</td>
                <td className="px-4 py-3 text-sm text-navy-700">{inv.service}</td>
                <td className="px-4 py-3 text-sm text-navy-500">{inv.agent}</td>
                <td className="px-4 py-3 text-xs text-navy-400">{inv.heure}</td>
                <td className="px-4 py-3 text-sm">{'⭐'.repeat(inv.note)}</td>
                <td className="px-4 py-3">
                  <button className="flex items-center gap-1 text-xs text-brand-500 font-bold hover:underline">
                    <Download size={12}/> PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Messagerie ───────────────────────────────────────────────────────────────
export function ClientMessagerie() {
  const [msg, setMsg] = useState('');
  const messages = [
    { from:'Support', text:'Bonjour Jean ! Votre devis DEV-238456 a été accepté. Nous planifions votre première intervention la semaine prochaine.', time:'10:32', moi:false },
    { from:'Moi', text:'Bonjour, merci ! Est-ce que le 20 juin à 22h vous conviendrait ?', time:'10:45', moi:true },
    { from:'Support', text:'Parfait ! Intervention confirmée le 20/06 à 22h00. L\'agent Marie-Paule Itoua sera assignée. Vous recevrez un rappel 24h avant.', time:'11:00', moi:false },
  ];
  return (
    <div className="space-y-4">
      <h1 className="font-display text-2xl font-bold text-navy-900">Messagerie</h1>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card h-[500px] flex flex-col">
        <div className="p-4 border-b border-gray-100 bg-gray-50 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center text-white text-sm font-bold">CC</div>
            <div><p className="font-bold text-navy-900 text-sm">Support CANADCLEANING</p><div className="flex items-center gap-1 text-xs text-green-500"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"/> En ligne</div></div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((m,i) => (
            <div key={i} className={`flex ${m.moi?'justify-end':''}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl text-sm ${m.moi?'bg-brand-500 text-white rounded-br-sm':'bg-gray-100 text-navy-800 rounded-bl-sm'}`}>
                <p>{m.text}</p>
                <p className={`text-xs mt-1 ${m.moi?'text-orange-100':'text-navy-400'}`}>{m.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-100">
          <div className="flex gap-3">
            <input value={msg} onChange={e=>setMsg(e.target.value)} className="input-field text-sm" placeholder="Écrivez votre message..."/>
            <button onClick={()=>setMsg('')} className="btn-primary px-4 py-2 text-sm">Envoyer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Mon Profil ───────────────────────────────────────────────────────────────
export function ClientProfil() {
  const [form, setForm] = useState({ nom:'Jean Moukoko', email:'j.moukoko@email.com', phone:'+243 123 456 789', ville:'Kinshasa', notif_email:true, notif_sms:false });
  const set = (k,v) => setForm(p=>({...p,[k]:v}));
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="font-display text-2xl font-bold text-navy-900">Mon profil</h1>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-6 space-y-5">
        <div className="flex items-center gap-4 pb-5 border-b border-gray-100">
          <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center text-white font-display text-2xl font-bold">JM</div>
          <div><h2 className="font-display text-xl font-bold text-navy-900">{form.nom}</h2><p className="text-navy-500 text-sm">Client CANADCLEANING depuis 2025</p></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[['Nom complet','nom'],['Email','email'],['Téléphone','phone'],['Ville','ville']].map(([label,key]) => (
            <div key={key}>
              <label className="block text-xs font-bold text-navy-500 uppercase tracking-wider mb-1.5">{label}</label>
              <input value={form[key]} onChange={e=>set(key,e.target.value)} className="input-field text-sm"/>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-gray-100">
          <h3 className="font-bold text-navy-900 mb-3">Préférences de notification</h3>
          {[['notif_email','Notifications par email'],['notif_sms','Notifications par SMS']].map(([key,label]) => (
            <label key={key} className="flex items-center gap-3 cursor-pointer mb-2">
              <input type="checkbox" checked={form[key]} onChange={e=>set(key,e.target.checked)} className="w-4 h-4 accent-brand-500 rounded"/>
              <span className="text-sm text-navy-700 font-semibold">{label}</span>
            </label>
          ))}
        </div>
        <button className="btn-primary w-full justify-center">Enregistrer les modifications</button>
      </div>
    </div>
  );
}
