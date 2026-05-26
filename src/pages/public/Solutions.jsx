import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PACKS } from '../../data/services';
import { Section, Container, PageHeader, FilterTabs, PackCard, SectionHeader } from '../../components/ui';

const PACK_FILTERS = [
  { id:'all',          label:'Tous les packs', count: 9 },
  { id:'nettoyage',    label:'Nettoyage',      count: 4 },
  { id:'restauration', label:'Restauration',   count: 3 },
  { id:'construction', label:'Construction',   count: 2 },
];

export default function Solutions() {
  const [active, setActive] = useState('all');
  const filtered = PACKS.filter(p => active === 'all' || p.cat === active);

  return (
    <>
      <PageHeader title="Nos Formules & Packs" subtitle="9 packs clé en main avec prix transparents. Choisissez celui qui correspond à votre besoin." breadcrumb="Solutions"/>
      <Section className="bg-gray-50">
        <Container>
          <FilterTabs tabs={PACK_FILTERS} active={active} onChange={setActive}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filtered.map((p, i) => <PackCard key={p.id} pack={p} index={i}/>)}
          </div>

          {/* Offre combinée */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 text-white text-center"
          >
            <div className="text-4xl mb-4">🔑</div>
            <h3 className="font-display text-3xl font-bold mb-3">Offre combinée Construction + Nettoyage</h3>
            <p className="text-gray-300 text-lg mb-6 max-w-xl mx-auto">
              Un seul interlocuteur pour construire et entretenir vos espaces. Tarif préférentiel garanti.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {['Un seul contrat','Tarif préférentiel','Suivi unique','Rapport global'].map(f => (
                <span key={f} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold">
                  <Check size={14} className="text-brand-400"/>{f}
                </span>
              ))}
            </div>
            <Link to="/tarifs" className="btn-primary text-base px-8 py-4">
              Voir Nos Tarifs <ArrowRight size={16}/>
            </Link>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
