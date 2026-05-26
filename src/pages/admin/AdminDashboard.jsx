import { motion } from 'framer-motion';
import { Users, FileText, TrendingUp, Euro, ArrowUp, ArrowDown, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const KPI = [
  { label:'CA ce mois',      value:'48 750 €', change:'+12%', up:true,  icon:Euro,      color:'bg-green-50 text-green-600' },
  { label:'Devis en attente',value:'14',       change:'+3',   up:true,  icon:FileText,  color:'bg-blue-50 text-blue-600' },
  { label:'Clients actifs',  value:'87',       change:'+5',   up:true,  icon:Users,     color:'bg-purple-50 text-purple-600' },
  { label:'Taux conversion', value:'68%',      change:'-2%',  up:false, icon:TrendingUp,color:'bg-orange-50 text-orange-600' },
];

const CA_DATA = [
  {mois:'Jan', ca:32000}, {mois:'Fév', ca:28000}, {mois:'Mar', ca:38000},
  {mois:'Avr', ca:42000}, {mois:'Mai', ca:35000}, {mois:'Juin',ca:48750},
];

const CAT_DATA = [
  { name:'Nettoyage',    value:45, color:'#3b82f6' },
  { name:'Restauration', value:32, color:'#f97316' },
  { name:'Construction', value:23, color:'#eab308' },
];

const ALERTS = [
  { type:'warning', text:'3 devis sans réponse depuis + 48h', icon:AlertTriangle, color:'text-yellow-600 bg-yellow-50 border-yellow-200' },
  { type:'success', text:'Chantier immeuble Gombe : phase 2 validée', icon:CheckCircle, color:'text-green-600 bg-green-50 border-green-200' },
  { type:'info',    text:'Intervention HACCP Restaurant Tropicana ce soir 22h', icon:Clock, color:'text-blue-600 bg-blue-50 border-blue-200' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="font-display text-2xl font-bold text-navy-900">Dashboard Admin</h1>
        <p className="text-navy-500 text-sm">Vue d'ensemble — {new Date().toLocaleDateString('fr-FR', {weekday:'long',day:'numeric',month:'long',year:'numeric'})}</p>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI.map((k,i) => (
          <motion.div key={i} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:i*0.07}}
            className="bg-white rounded-xl border border-gray-100 p-4 shadow-card">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 rounded-lg ${k.color} flex items-center justify-center`}><k.icon size={16}/></div>
              <span className={`flex items-center gap-0.5 text-xs font-bold ${k.up?'text-green-500':'text-red-500'}`}>
                {k.up ? <ArrowUp size={10}/> : <ArrowDown size={10}/>}{k.change}
              </span>
            </div>
            <div className="font-display text-2xl font-bold text-navy-900">{k.value}</div>
            <div className="text-xs text-navy-400 mt-0.5">{k.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* CA */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-card p-5">
          <h2 className="font-display font-bold text-navy-900 mb-4">Chiffre d'affaires mensuel</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={CA_DATA}>
              <defs>
                <linearGradient id="caGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.15}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>
              <XAxis dataKey="mois" tick={{fontSize:11,fill:'#94a3b8'}} axisLine={false} tickLine={false}/>
              <YAxis tick={{fontSize:10,fill:'#94a3b8'}} axisLine={false} tickLine={false} tickFormatter={v=>`${v/1000}k€`}/>
              <Tooltip formatter={v=>[`${v.toLocaleString()} €`,'CA']}/>
              <Area type="monotone" dataKey="ca" stroke="#f97316" strokeWidth={2} fill="url(#caGrad)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
          <h2 className="font-display font-bold text-navy-900 mb-4">Répartition CA</h2>
          <ResponsiveContainer width="100%" height={140}>
            <PieChart>
              <Pie data={CAT_DATA} cx="50%" cy="50%" innerRadius={45} outerRadius={65} paddingAngle={3} dataKey="value">
                {CAT_DATA.map((e,i) => <Cell key={i} fill={e.color}/>)}
              </Pie>
              <Tooltip formatter={v=>[`${v}%`]}/>
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {CAT_DATA.map(c => (
              <div key={c.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full" style={{background:c.color}}/><span className="text-navy-600">{c.name}</span></div>
                <span className="font-bold text-navy-900">{c.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alertes */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-card p-5">
        <h2 className="font-display font-bold text-navy-900 mb-4">Alertes prioritaires</h2>
        <div className="space-y-2">
          {ALERTS.map((a,i) => (
            <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${a.color} text-sm font-semibold`}>
              <a.icon size={16}/>{a.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
