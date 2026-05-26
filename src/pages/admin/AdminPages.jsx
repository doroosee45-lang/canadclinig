import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit2, Trash2, Eye, Download, Check, X, UserCheck, UserX } from 'lucide-react';

// ─── Clients & Rôles ──────────────────────────────────────────────────────────
const CLIENTS_DATA = [
  { nom:'Jean Moukoko',    email:'j.moukoko@email.com', role:'Client', ville:'Kinshasa', actif:true, devis:3 },
  { nom:'Hôtel Savana',   email:'contact@savana.cg',    role:'Client', ville:'Brazzaville', actif:true, devis:8 },
  { nom:'UNIKIN',          email:'admin@unikin.cd',      role:'Client', ville:'Kinshasa', actif:true, devis:2 },
  { nom:'Clinique Ste-Marie',email:'info@clinique.cd',  role:'Client', ville:'Lubumbashi', actif:false, devis:5 },
];

export function AdminClients() {
  const [search, setSearch] = useState('');
  const filtered = CLIENTS_DATA.filter(c => !search || c.nom.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy-900">Clients & Rôles</h1>
        <button className="btn-primary text-sm py-2"><Plus size={14}/> Nouveau client</button>
      </div>
      <div className="relative max-w-sm">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
        <input value={search} onChange={e=>setSearch(e.target.value)} className="input-field pl-9 text-sm" placeholder="Rechercher..."/>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>{['Client','Email','Rôle','Ville','Devis','Statut','Actions'].map(h=>(
              <th key={h} className="px-4 py-3 text-left text-xs font-bold text-navy-400 uppercase tracking-wider">{h}</th>
            ))}</tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filtered.map((c,i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-bold text-sm text-navy-900">{c.nom}</td>
                <td className="px-4 py-3 text-sm text-navy-500">{c.email}</td>
                <td className="px-4 py-3"><span className="badge bg-navy-50 text-navy-600 border border-navy-100">{c.role}</span></td>
                <td className="px-4 py-3 text-sm text-navy-500">{c.ville}</td>
                <td className="px-4 py-3 font-bold text-brand-500 text-sm">{c.devis}</td>
                <td className="px-4 py-3">
                  <span className={`badge border ${c.actif?'bg-green-50 text-green-700 border-green-200':'bg-gray-50 text-gray-500 border-gray-200'}`}>{c.actif?'Actif':'Inactif'}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button className="p-1.5 hover:bg-blue-50 text-navy-400 hover:text-blue-500 rounded-lg transition-colors"><Eye size={13}/></button>
                    <button className="p-1.5 hover:bg-brand-50 text-navy-400 hover:text-brand-500 rounded-lg transition-colors"><Edit2 size={13}/></button>
                    <button className={`p-1.5 rounded-lg transition-colors ${c.actif?'hover:bg-red-50 hover:text-red-500':'hover:bg-green-50 hover:text-green-500'} text-navy-400`}>
                      {c.actif ? <UserX size={13}/> : <UserCheck size={13}/>}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── CRM Pipeline ─────────────────────────────────────────────────────────────
const KANBAN_COLS = [
  { id:'lead',     label:'Lead',              color:'bg-gray-100', items:['Restaurant Le Paradis - Brazzaville','Immeuble R+2 - Kolwezi'] },
  { id:'contact',  label:'Contact établi',    color:'bg-blue-50',  items:['Clinique Centre - Kinshasa'] },
  { id:'proposal', label:'Proposition',       color:'bg-purple-50',items:['Hôtel Palais - Malabo','École Primaire - Lubumbashi'] },
  { id:'nego',     label:'Négociation',       color:'bg-yellow-50',items:['BM Congo HQ'] },
  { id:'signed',   label:'Signé ✓',           color:'bg-green-50', items:['UNIKIN - Contrat annuel','Savana Group'] },
];

export function AdminCRM() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy-900">CRM — Pipeline Commercial</h1>
        <button className="btn-primary text-sm py-2"><Plus size={14}/> Nouveau lead</button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {KANBAN_COLS.map(col => (
          <div key={col.id} className={`${col.color} rounded-xl p-4 min-w-[200px] flex-shrink-0`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-navy-900 text-sm">{col.label}</h3>
              <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-xs font-bold text-navy-600">{col.items.length}</span>
            </div>
            <div className="space-y-2">
              {col.items.map((item, i) => (
                <motion.div key={i} whileHover={{scale:1.02}} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 cursor-grab text-xs font-semibold text-navy-800">
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Gestion Devis Admin ──────────────────────────────────────────────────────
const ADMIN_DEVIS = [
  { ref:'DEV-240891', client:'Jean Moukoko', service:'Nettoyage bureaux', date:'12/06/2026', statut:'En traitement', montant:'Sur devis' },
  { ref:'DEV-238456', client:'Hôtel Savana', service:'Cuisine HACCP', date:'05/06/2026', statut:'Accepté', montant:'149€/j' },
  { ref:'DEV-241203', client:'Clinique Ste-Marie', service:'Désinfection médicale', date:'14/06/2026', statut:'En attente', montant:'Sur devis' },
];

const ST_COL = { 'En traitement':'bg-blue-50 text-blue-700 border-blue-200', 'Accepté':'bg-green-50 text-green-700 border-green-200', 'En attente':'bg-yellow-50 text-yellow-700 border-yellow-200' };

export function AdminDevis() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy-900">Gestion des devis</h1>
        <button className="btn-primary text-sm py-2"><Plus size={14}/> Créer un devis</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>{['Référence','Client','Service','Date','Statut','Montant','Actions'].map(h=>(
              <th key={h} className="px-4 py-3 text-left text-xs font-bold text-navy-400 uppercase tracking-wider">{h}</th>
            ))}</tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {ADMIN_DEVIS.map((d,i) => (
              <tr key={d.ref} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-bold text-sm text-navy-900">{d.ref}</td>
                <td className="px-4 py-3 text-sm text-navy-700">{d.client}</td>
                <td className="px-4 py-3 text-sm text-navy-500">{d.service}</td>
                <td className="px-4 py-3 text-xs text-navy-400">{d.date}</td>
                <td className="px-4 py-3"><span className={`badge border ${ST_COL[d.statut]}`}>{d.statut}</span></td>
                <td className="px-4 py-3 font-bold text-brand-500 text-sm">{d.montant}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button className="p-1.5 hover:bg-green-50 text-navy-400 hover:text-green-500 rounded-lg transition-colors"><Check size={13}/></button>
                    <button className="p-1.5 hover:bg-brand-50 text-navy-400 hover:text-brand-500 rounded-lg transition-colors"><Edit2 size={13}/></button>
                    <button className="p-1.5 hover:bg-gray-100 text-navy-400 rounded-lg transition-colors"><Download size={13}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Planning ─────────────────────────────────────────────────────────────────
export function AdminPlanning() {
  const days = ['Lun 16','Mar 17','Mer 18','Jeu 19','Ven 20','Sam 21','Dim 22'];
  const events = [
    { day:0, time:'09:00', service:'Nettoyage bureaux BM Congo', agent:'Patrick K.', cat:'nettoyage' },
    { day:0, time:'14:00', service:'Cuisine HACCP', agent:'Marie-Paule I.', cat:'restauration' },
    { day:1, time:'08:00', service:'Vitres façade immeuble', agent:'René M.', cat:'nettoyage' },
    { day:4, time:'22:00', service:'Cuisine HACCP Savana', agent:'Marie-Paule I.', cat:'restauration' },
    { day:5, time:'09:00', service:'Nettoyage université', agent:'Patrick K.', cat:'nettoyage' },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy-900">Planning des tournées</h1>
        <button className="btn-primary text-sm py-2"><Plus size={14}/> Nouvelle intervention</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-x-auto">
        <div className="grid grid-cols-8 min-w-[700px]">
          <div className="p-3 bg-gray-50 border-b border-r border-gray-100 text-xs font-bold text-navy-400 uppercase">Horaire</div>
          {days.map(d => (
            <div key={d} className="p-3 bg-gray-50 border-b border-r border-gray-100 text-center text-xs font-bold text-navy-900">{d}</div>
          ))}
          {['08:00','09:00','10:00','14:00','22:00'].map(time => (
            <>
              <div key={time} className="p-2 border-b border-r border-gray-50 text-xs text-navy-400 font-semibold">{time}</div>
              {days.map((_,di) => {
                const ev = events.find(e => e.day === di && e.time === time);
                return (
                  <div key={`${time}-${di}`} className="p-1 border-b border-r border-gray-50 min-h-[52px]">
                    {ev && (
                      <div className={`p-1.5 rounded-lg text-xs font-semibold ${ev.cat==='restauration'?'bg-orange-100 text-orange-800':'bg-blue-100 text-blue-800'}`}>
                        <div className="truncate">{ev.service}</div>
                        <div className="opacity-70">{ev.agent}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Chantiers ────────────────────────────────────────────────────────────────
export function AdminChantiers() {
  const chantiers = [
    { nom:'Immeuble R+3 Gombe',        ville:'Kinshasa', progress:75, responsable:'Carlos N.', statut:'En cours', budget:'1.2M €' },
    { nom:'Route N-241 Kolwezi',       ville:'Kolwezi',  progress:100,responsable:'Carlos N.', statut:'Terminé', budget:'450k €' },
    { nom:'Résidence Les Palmiers',    ville:'Malabo',   progress:40, responsable:'Isabelle N.',statut:'En cours', budget:'680k €' },
    { nom:'Cuisine pro Restaurant XO', ville:'Brazzaville', progress:90, responsable:'Carlos N.', statut:'Finition', budget:'85k €' },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy-900">Gestion des chantiers</h1>
        <button className="btn-primary text-sm py-2"><Plus size={14}/> Nouveau chantier</button>
      </div>
      <div className="space-y-4">
        {chantiers.map((c,i) => (
          <motion.div key={i} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:i*0.08}}
            className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display font-bold text-navy-900">{c.nom}</h3>
                <p className="text-sm text-navy-500">📍 {c.ville} · Resp. {c.responsable} · Budget : {c.budget}</p>
              </div>
              <span className={`badge border ${c.statut==='Terminé'?'bg-green-50 text-green-700 border-green-200':c.statut==='Finition'?'bg-purple-50 text-purple-700 border-purple-200':'bg-blue-50 text-blue-700 border-blue-200'}`}>{c.statut}</span>
            </div>
            <div>
              <div className="flex justify-between text-xs mb-1"><span className="text-navy-500 font-semibold">Avancement</span><span className="font-bold text-navy-900">{c.progress}%</span></div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div initial={{width:0}} animate={{width:`${c.progress}%`}} transition={{delay:0.4+i*0.1,duration:0.8}}
                  className={`h-full rounded-full ${c.progress===100?'bg-green-500':'bg-gradient-to-r from-brand-500 to-brand-400'}`}/>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Catalogue ────────────────────────────────────────────────────────────────
import { SERVICES } from '../../data/services';
export function AdminCatalogue() {
  const [search, setSearch] = useState('');
  const filtered = SERVICES.filter(s => !search || s.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy-900">Catalogue des services</h1>
        <button className="btn-primary text-sm py-2"><Plus size={14}/> Nouveau service</button>
      </div>
      <div className="relative max-w-sm">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"/>
        <input value={search} onChange={e=>setSearch(e.target.value)} className="input-field pl-9 text-sm" placeholder="Rechercher un service..."/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(s => (
          <div key={s.id} className="bg-white rounded-xl border border-gray-100 shadow-card p-4 flex items-center gap-3">
            <span className="text-2xl flex-shrink-0">{s.icon}</span>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-navy-900 text-sm truncate">{s.title}</h4>
              <p className="text-xs text-brand-500 font-bold">{s.price}</p>
              <p className="text-xs text-navy-400 capitalize">{s.cat}</p>
            </div>
            <div className="flex gap-1">
              <button className="p-1.5 hover:bg-brand-50 text-navy-400 hover:text-brand-500 rounded-lg transition-colors"><Edit2 size={13}/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Blog Admin ───────────────────────────────────────────────────────────────
export function AdminBlog() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-bold text-navy-900">Blog & SEO</h1>
        <button className="btn-primary text-sm py-2"><Plus size={14}/> Nouvel article</button>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-card p-6">
        <p className="text-navy-500 text-sm mb-4">Éditeur d'articles avec gestion des méta-titres, descriptions et slugs SEO.</p>
        <div className="space-y-4">
          <input className="input-field" placeholder="Titre de l'article *"/>
          <input className="input-field" placeholder="Slug (URL) : ex: comment-passer-controle-haccp"/>
          <input className="input-field" placeholder="Meta description (160 caractères max)"/>
          <div className="h-48 border border-gray-200 rounded-xl p-4 text-sm text-navy-400 bg-gray-50">
            Éditeur de contenu riche (WYSIWYG)...
          </div>
          <div className="flex gap-3">
            <button className="btn-primary text-sm py-2">Publier</button>
            <button className="btn-secondary text-sm py-2">Brouillon</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Configuration ────────────────────────────────────────────────────────────
export function AdminConfig() {
  const [config, setConfig] = useState({
    nomEntreprise:'CANADCLEANING', email:'info@canadcleaning.ca', phone:'+1 (613) 769-0296',
    facebook:'', instagram:'', linkedin:'', smtp:'smtp.brevo.com', smtpPort:'587',
  });
  const set = (k,v) => setConfig(p=>({...p,[k]:v}));
  return (
    <div className="space-y-5 max-w-2xl">
      <h1 className="font-display text-2xl font-bold text-navy-900">Configuration générale</h1>
      <div className="bg-white rounded-xl border border-gray-100 shadow-card p-6 space-y-5">
        <div>
          <h3 className="font-bold text-navy-900 mb-3 text-sm uppercase tracking-wider">Informations de l'entreprise</h3>
          <div className="grid grid-cols-2 gap-4">
            {[['Nom','nomEntreprise'],['Email','email'],['Téléphone','phone']].map(([label,key]) => (
              <div key={key}>
                <label className="block text-xs font-bold text-navy-500 mb-1 uppercase tracking-wider">{label}</label>
                <input value={config[key]} onChange={e=>set(key,e.target.value)} className="input-field text-sm"/>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-100 pt-5">
          <h3 className="font-bold text-navy-900 mb-3 text-sm uppercase tracking-wider">Réseaux sociaux</h3>
          <div className="space-y-3">
            {[['Facebook','facebook'],['Instagram','instagram'],['LinkedIn','linkedin']].map(([label,key]) => (
              <div key={key}>
                <label className="block text-xs font-bold text-navy-500 mb-1">{label}</label>
                <input value={config[key]} onChange={e=>set(key,e.target.value)} className="input-field text-sm" placeholder={`https://www.${key.toLowerCase()}.com/canadcleaning`}/>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-100 pt-5">
          <h3 className="font-bold text-navy-900 mb-3 text-sm uppercase tracking-wider">SMTP (emails)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-xs font-bold text-navy-500 mb-1">Serveur SMTP</label><input value={config.smtp} onChange={e=>set('smtp',e.target.value)} className="input-field text-sm"/></div>
            <div><label className="block text-xs font-bold text-navy-500 mb-1">Port</label><input value={config.smtpPort} onChange={e=>set('smtpPort',e.target.value)} className="input-field text-sm"/></div>
          </div>
        </div>
        <button className="btn-primary w-full justify-center">Enregistrer la configuration</button>
      </div>
    </div>
  );
}

// ─── Projets & Tickets ────────────────────────────────────────────────────────
export function AdminProjets() {
  const tickets = [
    { id:'TKT-001', client:'Jean Moukoko', sujet:'Demande de changement d\'horaire', prio:'Normale', statut:'Ouvert', date:'13/06' },
    { id:'TKT-002', client:'Hôtel Savana', sujet:'Urgence : contrôle sanitaire demain', prio:'Urgente', statut:'En cours', date:'14/06' },
    { id:'TKT-003', client:'UNIKIN',       sujet:'Rapport intervention manquant', prio:'Haute', statut:'En attente', date:'12/06' },
  ];
  const PRIO_COL = { 'Normale':'bg-gray-50 text-gray-600 border-gray-200', 'Haute':'bg-orange-50 text-orange-700 border-orange-200', 'Urgente':'bg-red-50 text-red-700 border-red-200' };
  const STAT_COL = { 'Ouvert':'bg-blue-50 text-blue-700 border-blue-200', 'En cours':'bg-purple-50 text-purple-700 border-purple-200', 'En attente':'bg-yellow-50 text-yellow-700 border-yellow-200' };
  return (
    <div className="space-y-5">
      <h1 className="font-display text-2xl font-bold text-navy-900">Projets & Tickets Support</h1>
      <div className="bg-white rounded-xl border border-gray-100 shadow-card overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>{['Ticket','Client','Sujet','Priorité','Statut','Date','Actions'].map(h=>(
              <th key={h} className="px-4 py-3 text-left text-xs font-bold text-navy-400 uppercase tracking-wider">{h}</th>
            ))}</tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {tickets.map((t,i) => (
              <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-bold text-navy-900 text-sm">{t.id}</td>
                <td className="px-4 py-3 text-sm text-navy-700">{t.client}</td>
                <td className="px-4 py-3 text-sm text-navy-500 max-w-xs truncate">{t.sujet}</td>
                <td className="px-4 py-3"><span className={`badge border ${PRIO_COL[t.prio]}`}>{t.prio}</span></td>
                <td className="px-4 py-3"><span className={`badge border ${STAT_COL[t.statut]}`}>{t.statut}</span></td>
                <td className="px-4 py-3 text-xs text-navy-400">{t.date}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <button className="p-1.5 hover:bg-blue-50 text-navy-400 hover:text-blue-500 rounded-lg transition-colors"><Eye size={13}/></button>
                    <button className="p-1.5 hover:bg-green-50 text-navy-400 hover:text-green-500 rounded-lg transition-colors"><Check size={13}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
