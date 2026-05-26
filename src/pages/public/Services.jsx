import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { SERVICES, CATEGORIES } from '../../data/services';
import { Section, Container, PageHeader, FilterTabs, ServiceCard, SectionHeader } from '../../components/ui';

export default function Services() {
  const [activeFilter, setActive] = useState('all');
  const [search, setSearch]       = useState('');

  const filtered = SERVICES.filter(s => {
    const matchCat  = activeFilter === 'all' || s.cat === activeFilter;
    const matchText = !search || s.title.toLowerCase().includes(search.toLowerCase()) || s.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchText;
  });

  return (
    <>
      <PageHeader
        title="Nos 47 Services"
        subtitle="Une seule adresse pour tous vos besoins de nettoyage, restauration et construction."
        breadcrumb="Services professionnels"
      />
      <Section className="bg-gray-50">
        <Container>
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field pl-11"
                placeholder="Rechercher un service..."
              />
            </div>
          </div>

          {/* Filters */}
          <FilterTabs tabs={CATEGORIES} active={activeFilter} onChange={setActive}/>

          {/* Count */}
          <p className="text-center text-sm text-navy-500 mb-8 font-semibold">
            {filtered.length} service(s) trouvé(s)
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-navy-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-display text-xl">Aucun service trouvé</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((s, i) => <ServiceCard key={s.id} service={s} index={i}/>)}
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-14 card p-10 bg-navy-900">
            <h3 className="font-display text-3xl font-bold text-white mb-3">Vous ne trouvez pas votre besoin ?</h3>
            <p className="text-gray-400 mb-6">Contactez-nous directement, nous avons sûrement une solution sur mesure.</p>
            <Link to="/contact" className="btn-primary">Nous contacter <ArrowRight size={16}/></Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
