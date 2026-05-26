import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { SEDES } from '../../data/services';
import { Section, Container, PageHeader } from '../../components/ui';
import toast from 'react-hot-toast';

export default function Contact() {
  const [form, setForm] = useState({ nom:'', email:'', phone:'', objet:'', message:'' });
  const [sent, setSent] = useState(false);
  const set = (k,v) => setForm(p=>({...p,[k]:v}));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nom || !form.email || !form.message) return toast.error('Veuillez remplir les champs obligatoires');
    toast.success('Message envoyé ! Nous vous répondons sous 24h.');
    setSent(true);
  };

  return (
    <>
      <PageHeader title="Contactez-nous" subtitle="Notre équipe vous répond dans les 24h. Devis gratuit, sans engagement." breadcrumb="Contact"/>
      <Section className="bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — Form */}
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="card p-8">
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500"/>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">Message envoyé !</h3>
                  <p className="text-navy-500">Nous vous répondons sous 24h ouvrées.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-navy-700 mb-1">Nom complet *</label>
                        <input value={form.nom} onChange={e=>set('nom',e.target.value)} className="input-field" placeholder="Votre nom"/>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-700 mb-1">Email *</label>
                        <input type="email" value={form.email} onChange={e=>set('email',e.target.value)} className="input-field" placeholder="email@exemple.com"/>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy-700 mb-1">Téléphone</label>
                      <input value={form.phone} onChange={e=>set('phone',e.target.value)} className="input-field" placeholder="+1 (613) 769-0296"/>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy-700 mb-1">Objet</label>
                      <select value={form.objet} onChange={e=>set('objet',e.target.value)} className="input-field">
                        <option value="">Sélectionner un objet...</option>
                        <option>Demande de devis nettoyage</option>
                        <option>Demande de devis restauration</option>
                        <option>Demande de devis construction</option>
                        <option>Information générale</option>
                        <option>Réclamation</option>
                        <option>Partenariat</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-navy-700 mb-1">Message *</label>
                      <textarea value={form.message} onChange={e=>set('message',e.target.value)} className="input-field resize-none h-32" placeholder="Décrivez votre besoin..."/>
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      <Send size={16}/> Envoyer le message
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right — Infos + Map */}
            <div className="space-y-6">
              <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="card p-6">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-5">Nos coordonnées</h3>
                <div className="space-y-4">
                  {[
                    { icon:Phone, label:'Canada (Ottawa)',  val:'+1 (613) 769-0296' },
                    { icon:Phone, label:'Congo (Kinshasa)', val:'+243 814 679 157' },
                    { icon:Phone, label:'Congo (Lubumbashi)',val:'+243 970 859 332' },
                    { icon:Mail,  label:'Email',            val:'info@canadcleaning.ca' },
                    { icon:Globe, label:'Site web',          val:'www.canadcleaning.ca' },
                    { icon:Clock, label:'Disponibilité',    val:'7j/7 — Urgences 24h/24' },
                  ].map(({icon:Icon,label,val}) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-brand-500"/>
                      </div>
                      <div>
                        <p className="text-xs text-navy-400 font-semibold uppercase tracking-wider">{label}</p>
                        <p className="text-navy-800 font-semibold text-sm">{val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Sièges */}
              <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="card p-6">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-5">Nos sièges</h3>
                <div className="grid grid-cols-2 gap-3">
                  {SEDES.map(s => (
                    <div key={s.city} className={`p-3 rounded-xl border ${s.status==='Ouverture prochaine'?'border-dashed border-gray-200 opacity-60':'border-gray-100 bg-gray-50'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span>{s.flag}</span>
                        <span className="font-bold text-navy-900 text-sm">{s.city}</span>
                      </div>
                      <p className="text-xs text-navy-500">{s.phone}</p>
                      <p className={`text-xs font-semibold mt-1 ${s.status==='Siège principal'?'text-brand-500':s.status==='Ouverture prochaine'?'text-gray-400':'text-green-600'}`}>{s.status}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
