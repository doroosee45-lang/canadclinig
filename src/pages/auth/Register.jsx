import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nom:'', email:'', phone:'', password:'', confirm:'' });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k,v) => setForm(p=>({...p,[k]:v}));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.nom || !form.email || !form.password) return toast.error('Veuillez remplir les champs obligatoires');
    if (form.password !== form.confirm) return toast.error('Les mots de passe ne correspondent pas');
    if (form.password.length < 8) return toast.error('Mot de passe trop court (min 8 caractères)');
    setLoading(true);
    await new Promise(r => setTimeout(r, 1200));
    setDone(true);
    setLoading(false);
  };

  if (done) return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4">
      <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} className="bg-white rounded-2xl max-w-md w-full p-10 text-center">
        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle size={32} className="text-green-500"/>
        </div>
        <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">Compte créé !</h2>
        <p className="text-navy-500 mb-2">Un email de confirmation a été envoyé à <strong>{form.email}</strong>.</p>
        <p className="text-navy-400 text-sm mb-8">Cliquez sur le lien dans l'email pour activer votre compte.</p>
        <Link to="/login" className="btn-primary w-full justify-center">Se connecter</Link>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-20"/>
      <div className="absolute top-20 right-20 w-64 h-64 bg-brand-500/15 rounded-full blur-3xl animate-pulse-slow"/>

      <div className="relative z-10 w-full max-w-md">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold">CC</span>
            </div>
            <span className="font-display text-white text-lg font-bold tracking-wider">CANADCLEANING</span>
          </Link>
          <h1 className="font-display text-3xl font-bold text-white mb-1">Créer un compte</h1>
          <p className="text-gray-400 text-sm">Accédez à votre espace client</p>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
          className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-8">
          <form onSubmit={onSubmit} className="space-y-4">
            {[
              { key:'nom',     label:'Nom complet *',   Icon:User,  type:'text',     placeholder:'Jean Dupont' },
              { key:'email',   label:'Email *',          Icon:Mail,  type:'email',    placeholder:'votre@email.com' },
              { key:'phone',   label:'Téléphone',       Icon:Phone, type:'tel',      placeholder:'+243 ...' },
            ].map(({key,label,Icon,type,placeholder}) => (
              <div key={key}>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">{label}</label>
                <div className="relative">
                  <Icon size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                  <input type={type} value={form[key]} onChange={e=>set(key,e.target.value)} placeholder={placeholder}
                    className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all text-sm"/>
                </div>
              </div>
            ))}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1.5">Mot de passe * (min 8 caractères)</label>
              <div className="relative">
                <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type={showPwd?'text':'password'} value={form.password} onChange={e=>set('password',e.target.value)} placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all text-sm"/>
                <button type="button" onClick={()=>setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                  {showPwd ? <EyeOff size={15}/> : <Eye size={15}/>}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-1.5">Confirmer le mot de passe *</label>
              <div className="relative">
                <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type="password" value={form.confirm} onChange={e=>set('confirm',e.target.value)} placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all text-sm"/>
              </div>
            </div>
            <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer">
              <input type="checkbox" className="accent-brand-500 mt-0.5 flex-shrink-0"/> J'accepte les conditions d'utilisation et la politique de confidentialité de CANADCLEANING.
            </label>
            <button type="submit" disabled={loading}
              className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-brand">
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/> : <><span>Créer mon compte</span><ArrowRight size={16}/></>}
            </button>
          </form>
          <div className="mt-5 pt-4 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">Déjà un compte ?{' '}
              <Link to="/login" className="text-brand-400 hover:text-brand-300 font-bold transition-colors">Se connecter</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
