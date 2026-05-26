import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, User } from 'lucide-react';
import { Section, Container, PageHeader, FilterTabs } from '../../components/ui';

const PROJECTS = [
  { id:1, cat:'nettoyage',    emoji:'🏢', title:'Nettoyage Siège Social BM Congo', location:'Kinshasa, RDC', date:'Mars 2026', client:'Banque Mondiale Congo', desc:'Nettoyage complet d\'un immeuble de bureaux de 2 000 m² sur 8 étages. Contrat mensuel, 5 interventions/semaine.', tags:['Commercial','Hebdomadaire','Grand immeuble'] },
  { id:2, cat:'construction', emoji:'🏛️', title:'Immeuble R+3 Gombe', location:'Kinshasa, RDC', date:'Janv. 2026', client:'Promoteur privé', desc:'Construction d\'un immeuble résidentiel R+3, 12 appartements standing. Gros œuvre, second œuvre et finitions inclus.', tags:['R+3','Standing','Clé en main'] },
  { id:3, cat:'restauration', emoji:'🍽️', title:'Restaurant Le Tropicana', location:'Brazzaville, Congo', date:'Fév. 2026', client:'Restaurant Le Tropicana', desc:'Contrat quotidien restauration : nettoyage cuisine professionnelle, salle, sanitaires. Certification HACCP obtenue.', tags:['Quotidien','HACCP','Cuisine pro'] },
  { id:4, cat:'routes',       emoji:'🛣️', title:'Route Bitumée N-241', location:'Kolwezi, RDC', date:'Nov. 2025', client:'Mairie de Kolwezi', desc:'Construction de 3,2 km de route bitumée, terrassement, VRD, signalisation routière complète.', tags:['Route bitumée','3,2 km','VRD inclus'] },
  { id:5, cat:'nettoyage',    emoji:'🏥', title:'Clinique Sainte-Marie', location:'Lubumbashi, RDC', date:'Avr. 2026', client:'Clinique Sainte-Marie', desc:'Nettoyage et désinfection quotidienne d\'une clinique de 80 lits. Protocoles médicaux stricts appliqués.', tags:['Médical','Quotidien','Désinfection'] },
  { id:6, cat:'construction', emoji:'🏠', title:'Résidence Les Palmiers', location:'Malabo, Guinée Éq.', date:'Déc. 2025', client:'Promoteur Ndong Group', desc:'Construction de 6 appartements de standing en copropriété. Second œuvre, revêtements, peintures finitions.', tags:['Appartements','Standing','6 unités'] },
  { id:7, cat:'restauration', emoji:'🎉', title:'Grand Banquet Hôtel Savana', location:'Brazzaville, Congo', date:'Mai 2026', client:'Hôtel Savana', desc:'Nettoyage post-banquet de 600 couverts. Intervention nocturne 3h, résultat impeccable pour le lendemain matin.', tags:['Post-événement','600 couverts','Nocturne'] },
  { id:8, cat:'nettoyage',    emoji:'🏫', title:'Université de Kinshasa', location:'Kinshasa, RDC', date:'Mars 2026', client:'UNIKIN', desc:'Contrat semestriel nettoyage de 15 salles de cours, 3 amphithéâtres et les espaces communs. 120 agents mobilisés.', tags:['Université','120 agents','Hebdomadaire'] },
  { id:9, cat:'routes',       emoji:'🚧', title:'Voirie Quartier Gombe', location:'Kinshasa, RDC', date:'Jan. 2026', client:'Commune de Gombe', desc:'Aménagement de 1,8 km de voirie interne avec canalisations, bordures et marquage au sol.', tags:['Voirie','VRD','Signalisation'] },
];

const REA_FILTERS = [
  { id:'all',          label:'Tous',         count:9 },
  { id:'nettoyage',    label:'Nettoyage',    count:3 },
  { id:'restauration', label:'Restauration', count:2 },
  { id:'construction', label:'Construction', count:2 },
  { id:'routes',       label:'Routes',       count:2 },
];

export default function Realisations() {
  const [active, setActive] = useState('all');
  const [modal,  setModal]  = useState(null);
  const filtered = PROJECTS.filter(p => active === 'all' || p.cat === active);

  return (
    <>
      <PageHeader title="Nos Réalisations" subtitle="Portfolio de projets réalisés dans 7 villes et 4 pays. Nettoyage, restauration et construction." breadcrumb="Réalisations"/>
      <Section className="bg-gray-50">
        <Container>
          <FilterTabs tabs={REA_FILTERS} active={active} onChange={setActive}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{opacity:0,scale:0.95}}
                whileInView={{opacity:1,scale:1}}
                viewport={{once:true}}
                transition={{delay:i*0.07}}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => setModal(p)}
              >
                <div className="h-44 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform duration-300">
                  {p.emoji}
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-navy-900 mb-1 group-hover:text-brand-500 transition-colors">{p.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-navy-400 mb-3">
                    <span className="flex items-center gap-1"><MapPin size={10}/>{p.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={10}/>{p.date}</span>
                  </div>
                  <p className="text-sm text-navy-600 mb-3 line-clamp-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className="bg-navy-50 text-navy-600 text-xs px-2 py-0.5 rounded-full font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.9,opacity:0}}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="h-40 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center text-6xl relative">
                {modal.emoji}
                <button onClick={() => setModal(null)} className="absolute top-4 right-4 text-white/60 hover:text-white bg-white/10 p-2 rounded-lg">
                  <X size={18}/>
                </button>
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-2">{modal.title}</h2>
                <div className="flex flex-wrap gap-3 text-xs text-navy-400 mb-4">
                  <span className="flex items-center gap-1"><MapPin size={11}/> {modal.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={11}/> {modal.date}</span>
                  <span className="flex items-center gap-1"><User size={11}/> {modal.client}</span>
                </div>
                <p className="text-navy-600 leading-relaxed mb-4">{modal.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {modal.tags.map(t => (
                    <span key={t} className="bg-brand-50 text-brand-700 text-xs px-3 py-1 rounded-full font-bold border border-brand-200">{t}</span>
                  ))}
                </div>
                <a href="/devis" className="btn-primary w-full justify-center">Demander un devis similaire</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
