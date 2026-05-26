import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Upload, Send } from 'lucide-react';
import { SERVICES } from '../../data/services';
import { Section, Container, PageHeader } from '../../components/ui';
import toast from 'react-hot-toast';

const STEPS = [
  { id:1, label:'Service principal' },
  { id:2, label:'Sous-catégorie' },
  { id:3, label:'Détails' },
  { id:4, label:'Budget & localisation' },
  { id:5, label:'Récapitulatif' },
];

const VILLES = ['Ottawa (Canada)','Kinshasa (RDC)','Lubumbashi (RDC)','Kolwezi (RDC)','Brazzaville (Congo)','Pointe-Noire (Congo)','Malabo (Guinée Éq.)','Autre'];

export default function Devis() {
  const [step, setStep]   = useState(1);
  const [form, setForm]   = useState({
    category:'', service:'', description:'', superficie:'', frequence:'', budget:'', ville:'', nom:'', email:'', phone:'', files:[]
  });
  const [sent, setSent]   = useState(false);

  const categories = [
    { id:'nettoyage',    label:'🧹 Nettoyage',    desc:'Résidentiel, commercial, médical...' },
    { id:'restauration', label:'🍽️ Restauration', desc:'Cuisine pro, HACCP, hottes...' },
    { id:'construction', label:'🏗️ Construction', desc:'Immeuble, appartement, route...' },
  ];

  const filteredServices = SERVICES.filter(s => s.cat === form.category);

  const set = (key, val) => setForm(p => ({ ...p, [key]: val }));

  const handleSubmit = () => {
    const ref = `DEV-${Date.now().toString().slice(-6)}`;
    toast.success(`✅ Devis ${ref} envoyé ! Réponse sous 48h.`);
    setSent(true);
  };

  if (sent) return (
    <>
      <PageHeader title="Devis envoyé !" breadcrumb="Demande de devis"/>
      <Section>
        <Container>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-lg mx-auto text-center card p-12"
          >
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={36} className="text-green-500"/>
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-3">Votre demande est enregistrée !</h2>
            <p className="text-navy-600 mb-6">Notre équipe vous contacte sous 48h avec une proposition personnalisée.</p>
            <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 mb-8">
              <p className="text-brand-700 font-bold">Référence : DEV-{Date.now().toString().slice(-6)}</p>
            </div>
            <a href="/" className="btn-primary justify-center">Retour à l'accueil</a>
          </motion.div>
        </Container>
      </Section>
    </>
  );

  return (
    <>
      <PageHeader title="Demander un devis" subtitle="Formulaire en 5 étapes — Devis gratuit et sans engagement." breadcrumb="Devis"/>
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Progress */}
            <div className="flex items-center justify-between mb-10">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center flex-1">
                  <div className={`flex flex-col items-center ${i < STEPS.length - 1 ? 'flex-1' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                      step > s.id ? 'bg-brand-500 border-brand-500 text-white'
                      : step === s.id ? 'bg-white border-brand-500 text-brand-500'
                      : 'bg-white border-gray-200 text-gray-400'
                    }`}>
                      {step > s.id ? <Check size={16}/> : s.id}
                    </div>
                    <span className={`text-xs mt-1 font-semibold hidden sm:block ${step >= s.id ? 'text-navy-700' : 'text-gray-400'}`}>{s.label}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 transition-all ${step > s.id ? 'bg-brand-500' : 'bg-gray-200'}`}/>
                  )}
                </div>
              ))}
            </div>

            {/* Step content */}
            <div className="card p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Step 1 — Catégorie */}
                  {step === 1 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">Quel type de service ?</h2>
                      <p className="text-navy-500 mb-6">Sélectionnez la catégorie principale de votre besoin.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {categories.map(c => (
                          <button key={c.id} onClick={() => set('category', c.id)}
                            className={`p-5 rounded-xl border-2 text-left transition-all ${
                              form.category === c.id ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-brand-300'
                            }`}>
                            <div className="text-2xl mb-2">{c.label.split(' ')[0]}</div>
                            <p className="font-bold text-navy-900">{c.label.split(' ').slice(1).join(' ')}</p>
                            <p className="text-sm text-navy-500 mt-1">{c.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2 — Sous-catégorie */}
                  {step === 2 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">Choisissez le service</h2>
                      <p className="text-navy-500 mb-6">Sélectionnez le service qui correspond à votre besoin.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-2">
                        {filteredServices.map(s => (
                          <button key={s.id} onClick={() => set('service', s.id.toString())}
                            className={`p-4 rounded-xl border-2 text-left flex items-center gap-3 transition-all ${
                              form.service === s.id.toString() ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-brand-300'
                            }`}>
                            <span className="text-2xl">{s.icon}</span>
                            <div>
                              <p className="font-semibold text-navy-900 text-sm">{s.title}</p>
                              <p className="text-xs text-brand-500 font-bold">{s.price}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3 — Détails */}
                  {step === 3 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Décrivez votre besoin</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Description détaillée *</label>
                          <textarea value={form.description} onChange={e => set('description', e.target.value)}
                            className="input-field resize-none h-32" placeholder="Décrivez votre besoin : type de locaux, état actuel, contraintes particulières..."/>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-bold text-navy-700 mb-1">Superficie (m²)</label>
                            <input value={form.superficie} onChange={e => set('superficie', e.target.value)} className="input-field" placeholder="ex: 150 m²"/>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-navy-700 mb-1">Fréquence souhaitée</label>
                            <select value={form.frequence} onChange={e => set('frequence', e.target.value)} className="input-field">
                              <option value="">Sélectionner...</option>
                              <option>Quotidien</option><option>Hebdomadaire</option>
                              <option>Bihebdomadaire</option><option>Mensuel</option><option>Ponctuel</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Fichiers joints (plans, photos) — max 5 fichiers</label>
                          <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-brand-400 transition-colors cursor-pointer">
                            <Upload size={24} className="mx-auto text-gray-400 mb-2"/>
                            <p className="text-sm text-gray-500">Glissez vos fichiers ici ou <span className="text-brand-500 font-semibold">parcourir</span></p>
                            <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG — max 10 Mo chacun</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4 — Budget & localisation */}
                  {step === 4 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Budget & coordonnées</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Budget indicatif</label>
                          <select value={form.budget} onChange={e => set('budget', e.target.value)} className="input-field">
                            <option value="">Sélectionner...</option>
                            <option>Moins de 100€</option><option>100€ – 500€</option>
                            <option>500€ – 2000€</option><option>2000€ – 10 000€</option><option>Plus de 10 000€</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Ville d'intervention *</label>
                          <select value={form.ville} onChange={e => set('ville', e.target.value)} className="input-field">
                            <option value="">Sélectionner une ville...</option>
                            {VILLES.map(v => <option key={v}>{v}</option>)}
                          </select>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div className="sm:col-span-1">
                            <label className="block text-sm font-bold text-navy-700 mb-1">Nom complet *</label>
                            <input value={form.nom} onChange={e => set('nom', e.target.value)} className="input-field" placeholder="Votre nom"/>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-navy-700 mb-1">Email *</label>
                            <input type="email" value={form.email} onChange={e => set('email', e.target.value)} className="input-field" placeholder="email@exemple.com"/>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-navy-700 mb-1">Téléphone</label>
                            <input value={form.phone} onChange={e => set('phone', e.target.value)} className="input-field" placeholder="+243..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 5 — Récapitulatif */}
                  {step === 5 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">Récapitulatif de votre demande</h2>
                      <p className="text-navy-500 mb-6">Vérifiez les informations avant d'envoyer.</p>
                      <div className="bg-gray-50 rounded-xl p-6 space-y-3 mb-6">
                        {[
                          ['Catégorie',    form.category || '—'],
                          ['Service',      SERVICES.find(s => s.id.toString() === form.service)?.title || '—'],
                          ['Description',  form.description || '—'],
                          ['Superficie',   form.superficie || '—'],
                          ['Fréquence',    form.frequence || '—'],
                          ['Budget',       form.budget || '—'],
                          ['Ville',        form.ville || '—'],
                          ['Contact',      form.nom || '—'],
                          ['Email',        form.email || '—'],
                        ].map(([k, v]) => (
                          <div key={k} className="flex gap-4 text-sm">
                            <span className="font-bold text-navy-600 w-28 flex-shrink-0">{k} :</span>
                            <span className="text-navy-800">{v}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 text-sm text-brand-700">
                        ℹ️ Un numéro de devis unique (DEV-XXXXXX) vous sera attribué et envoyé par email. Réponse sous 48h.
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={() => setStep(s => Math.max(1, s - 1))}
                  disabled={step === 1}
                  className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={16}/> Précédent
                </button>
                {step < 5 ? (
                  <button
                    onClick={() => setStep(s => Math.min(5, s + 1))}
                    disabled={(step === 1 && !form.category) || (step === 2 && !form.service)}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Suivant <ChevronRight size={16}/>
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="btn-primary">
                    <Send size={16}/> Envoyer ma demande
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
