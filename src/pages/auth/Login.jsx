import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email:'', password:'' });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k,v) => setForm(p=>({...p,[k]:v}));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return toast.error('Veuillez remplir tous les champs');
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success('Connexion réussie !');
    navigate('/client/dashboard');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-20"/>
      <div className="absolute top-20 right-20 w-64 h-64 bg-brand-500/15 rounded-full blur-3xl animate-pulse-slow"/>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay:'1.5s'}}/>

      <div className="relative z-10 w-full max-w-md">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-500 rounded-2xl flex items-center justify-center shadow-brand">
              <span className="text-white font-display font-bold text-xl">CC</span>
            </div>
            <div className="text-left">
              <p className="font-display text-white text-xl font-bold tracking-wider">CANADCLEANING</p>
              <p className="text-brand-400 text-xs tracking-widest">ESPACE CLIENT</p>
            </div>
          </Link>
          <h1 className="font-display text-3xl font-bold text-white mb-1">Connexion</h1>
          <p className="text-gray-400 text-sm">Accédez à votre espace personnel</p>
        </motion.div>

        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}}
          className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-8 shadow-navy">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Adresse email</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type="email" value={form.email} onChange={e=>set('email',e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all"
                  placeholder="votre@email.com"/>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Mot de passe</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
                <input type={showPwd?'text':'password'} value={form.password} onChange={e=>set('password',e.target.value)}
                  className="w-full pl-11 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20 transition-all"
                  placeholder="••••••••"/>
                <button type="button" onClick={()=>setShowPwd(!showPwd)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors">
                  {showPwd ? <EyeOff size={16}/> : <Eye size={16}/>}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                <input type="checkbox" className="accent-brand-500 rounded"/> Se souvenir
              </label>
              <Link to="#" className="text-sm text-brand-400 hover:text-brand-300 transition-colors font-semibold">Mot de passe oublié ?</Link>
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-brand">
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"/> : <><span>Se connecter</span><ArrowRight size={16}/></>}
            </button>
          </form>
          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">Pas encore de compte ?{' '}
              <Link to="/register" className="text-brand-400 hover:text-brand-300 font-bold transition-colors">Créer un compte</Link>
            </p>
          </div>
          {/* Demo buttons */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button onClick={()=>{set('email','client@test.com');set('password','demo1234');}} className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-gray-300 font-semibold transition-colors">👤 Demo Client</button>
            <button onClick={()=>{set('email','admin@test.com');set('password','admin1234');navigate('/admin/dashboard');}} className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-gray-300 font-semibold transition-colors">🛡️ Demo Admin</button>
          </div>
        </motion.div>
        <p className="text-center text-gray-600 text-xs mt-6">© {new Date().getFullYear()} CANADCLEANING — Tous droits réservés</p>
      </div>
    </div>
  );
}
