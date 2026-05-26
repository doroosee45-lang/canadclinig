import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Download, FileText } from 'lucide-react';
import { Section, Container, PageHeader } from '../../components/ui';
import toast from 'react-hot-toast';

const STEPS = [
  { id:1, label:'Type de besoin' },
  { id:2, label:'Superficie' },
  { id:3, label:'Fréquence' },
  { id:4, label:'Budget & lieu' },
  { id:5, label:'Résultat' },
];

export default function Audit() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ type:'', subtype:'', superficie:'', frequence:'', budget:'', ville:'', email:'', nom:'' });
  const [done, setDone] = useState(false);
  const [ref]           = useState(`AUD-${Date.now().toString().slice(-6)}`);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const getRecommendation = () => {
    if (form.type === 'nettoyage') {
      if (parseInt(form.superficie) < 100) return { pack:'Nettoyage Résidentiel Complet', price:'99€ HT/mois', duree:'1h30 à 2h', note:'Nettoyage hebdomadaire recommandé.' };
      return { pack:'Nettoyage Commercial Pro', price:'199€ HT/mois', duree:'2h à 4h', note:'Interventions 2× par semaine conseillées.' };
    }
    if (form.type === 'restauration') return { pack:'Pack Restauration Complet', price:'149€ HT/jour', duree:'2h à 3h/soir', note:'Norme HACCP incluse — rapport d\'intervention systématique.' };
    return { pack:'Construction Clé en Main', price:'Sur devis personnalisé', duree:'Selon chantier', note:'Étude technique gratuite sur site avant devis.' };
  };

  const handleGenerate = () => {
    if (!form.email || !form.nom) return toast.error('Nom et email requis');
    toast.success(`📄 Rapport ${ref} généré et envoyé à ${form.email}`);
    setDone(true);
  };

  const rec = getRecommendation();

  return (
    <>
      <PageHeader title="Audit Gratuit" subtitle="Répondez à 4 questions et recevez un diagnostic personnalisé avec fourchette tarifaire." breadcrumb="Audit"/>
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <div className="flex items-center gap-2 mb-10">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 flex-shrink-0 transition-all ${
                    done || step > s.id ? 'bg-brand-500 border-brand-500 text-white'
                    : step === s.id ? 'bg-white border-brand-500 text-brand-500'
                    : 'bg-white border-gray-200 text-gray-400'
                  }`}>
                    {done || step > s.id ? <Check size={12}/> : s.id}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-1 ${step > s.id || done ? 'bg-brand-500' : 'bg-gray-200'}`}/>
                  )}
                </div>
              ))}
            </div>

            <div className="card p-8">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }} transition={{ duration:0.2 }}>

                  {/* Step 1 */}
                  {step === 1 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">Quel est votre besoin principal ?</h2>
                      <p className="text-navy-500 mb-6">Sélectionnez la catégorie qui correspond à votre demande.</p>
                      <div className="space-y-3">
                        {[
                          { id:'nettoyage',    emoji:'🧹', label:'Nettoyage professionnel',  desc:'Résidentiel, commercial, médical, fin de bail...' },
                          { id:'restauration', emoji:'🍽️', label:'Restauration & cuisine',   desc:'Cuisine pro, HACCP, hottes, salle de restaurant...' },
                          { id:'construction', emoji:'🏗️', label:'Construction & travaux',   desc:'Immeuble, appartements, routes, second œuvre...' },
                        ].map(c => (
                          <button key={c.id} onClick={() => set('type', c.id)}
                            className={`w-full p-4 rounded-xl border-2 text-left flex items-center gap-4 transition-all ${form.type === c.id ? 'border-brand-500 bg-brand-50' : 'border-gray-200 hover:border-brand-300'}`}>
                            <span className="text-3xl">{c.emoji}</span>
                            <div>
                              <p className="font-bold text-navy-900">{c.label}</p>
                              <p className="text-sm text-navy-500">{c.desc}</p>
                            </div>
                            {form.type === c.id && <Check size={20} className="ml-auto text-brand-500"/>}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">
                        {form.type === 'construction' ? 'Superficie ou linéaire du projet' : 'Superficie à traiter'}
                      </h2>
                      <div className="space-y-3">
                        {(form.type === 'construction'
                          ? ['Moins de 200 m²','200 – 500 m²','500 m² – 1 000 m²','Plus de 1 000 m²','Route : 1 – 5 km','Route : plus de 5 km']
                          : ['Moins de 50 m²','50 – 100 m²','100 – 200 m²','200 – 500 m²','Plus de 500 m²']
                        ).map(s => (
                          <button key={s} onClick={() => set('superficie', s)}
                            className={`w-full p-4 rounded-xl border-2 text-left font-semibold transition-all ${form.superficie === s ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 hover:border-brand-300 text-navy-800'}`}>
                            {form.superficie === s && <Check size={16} className="inline mr-2 text-brand-500"/>}
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">
                        {form.type === 'construction' ? 'Type de chantier' : 'Fréquence souhaitée'}
                      </h2>
                      <div className="space-y-3">
                        {(form.type === 'construction'
                          ? ['Construction neuve','Réhabilitation','Extension / agrandissement','Route bitumée','VRD / voirie']
                          : ['Quotidien','Plusieurs fois par semaine','Hebdomadaire','Bihebdomadaire','Mensuel','Ponctuel (une seule fois)']
                        ).map(f => (
                          <button key={f} onClick={() => set('frequence', f)}
                            className={`w-full p-4 rounded-xl border-2 text-left font-semibold transition-all ${form.frequence === f ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-gray-200 hover:border-brand-300 text-navy-800'}`}>
                            {form.frequence === f && <Check size={16} className="inline mr-2 text-brand-500"/>}
                            {f}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4 */}
                  {step === 4 && !done && (
                    <div>
                      <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Budget & vos coordonnées</h2>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Budget indicatif (mensuel)</label>
                          <select value={form.budget} onChange={e => set('budget', e.target.value)} className="input-field">
                            <option value="">Sélectionner...</option>
                            <option>Moins de 100€</option><option>100 – 300€</option>
                            <option>300 – 1 000€</option><option>1 000 – 5 000€</option><option>Plus de 5 000€</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Ville / Pays *</label>
                          <input value={form.ville} onChange={e => set('ville', e.target.value)} className="input-field" placeholder="ex: Kinshasa, Congo"/>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Nom complet *</label>
                          <input value={form.nom} onChange={e => set('nom', e.target.value)} className="input-field" placeholder="Votre nom"/>
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Email (pour recevoir le rapport PDF) *</label>
                          <input type="email" value={form.email} onChange={e => set('email', e.target.value)} className="input-field" placeholder="email@exemple.com"/>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Résultat */}
                  {(step === 5 || done) && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                          <Check size={24} className="text-green-500"/>
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-navy-900">Votre diagnostic est prêt !</h2>
                          <p className="text-navy-500 text-sm">Référence : <strong className="text-brand-500">{ref}</strong></p>
                        </div>
                      </div>

                      <div className="bg-navy-900 rounded-xl p-6 text-white mb-6">
                        <p className="text-brand-400 text-xs font-bold uppercase tracking-widest mb-1">Pack recommandé</p>
                        <h3 className="font-display text-xl font-bold mb-2">{rec.pack}</h3>
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="font-display text-2xl font-bold text-brand-400">{rec.price}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div><span className="text-gray-400">Durée estimée :</span><br/><span className="text-white font-semibold">{rec.duree}</span></div>
                          <div><span className="text-gray-400">Zone :</span><br/><span className="text-green-400 font-semibold">✅ {form.ville || 'Couvert'}</span></div>
                        </div>
                      </div>

                      <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 mb-6 text-sm text-brand-700">
                        💡 {rec.note}
                      </div>

                      <div className="space-y-3">
                        <button className="btn-primary w-full justify-center">
                          <Download size={16}/> Télécharger le rapport PDF
                        </button>
                        <a href="/devis" className="btn-secondary w-full justify-center">
                          <FileText size={16}/> Demander un devis définitif
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              {!done && (
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                  <button onClick={() => setStep(s => Math.max(1, s - 1))} disabled={step === 1}
                    className="btn-secondary disabled:opacity-40">
                    <ChevronLeft size={16}/> Précédent
                  </button>
                  {step < 4 ? (
                    <button onClick={() => setStep(s => s + 1)} disabled={step === 1 && !form.type}
                      className="btn-primary disabled:opacity-40">
                      Suivant <ChevronRight size={16}/>
                    </button>
                  ) : (
                    <button onClick={handleGenerate} className="btn-primary">
                      Générer mon rapport <ChevronRight size={16}/>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
