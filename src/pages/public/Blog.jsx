import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Section, Container, PageHeader, FilterTabs, SectionHeader } from '../../components/ui';

const ARTICLES = [
  { id:1, cat:'restauration', emoji:'🍽️', title:'Comment passer un contrôle HACCP avec succès ?', excerpt:'Guide complet pour préparer votre établissement à l\'inspection sanitaire. Protocoles, documents et conseils d\'experts.', date:'15 juin 2026', time:'5 min', author:'Marie-Paule Itoua' },
  { id:2, cat:'nettoyage',    emoji:'🧹', title:'5 erreurs à éviter lors du nettoyage après construction', excerpt:'Le nettoyage post-chantier est une étape critique. Voici les 5 erreurs les plus courantes et comment les éviter.', date:'8 juin 2026', time:'4 min', author:'Jean-Baptiste Mukendi' },
  { id:3, cat:'restauration', emoji:'💨', title:'Dégraissage de hottes : fréquence et protocole optimal', excerpt:'Une hotte mal entretenue est un risque d\'incendie. Découvrez la fréquence recommandée et notre protocole certifié.', date:'2 juin 2026', time:'6 min', author:'Marie-Paule Itoua' },
  { id:4, cat:'construction', emoji:'🏗️', title:'Construction en RDC : réglementations à connaître en 2026', excerpt:'Avant de lancer un chantier de construction en République Démocratique du Congo, voici les formalités essentielles.', date:'25 mai 2026', time:'7 min', author:'Carlos Ndong Essono' },
  { id:5, cat:'ecologie',     emoji:'🌿', title:'Nettoyage éco-responsable : nos produits certifiés Écolabel', excerpt:'Chez CANADCLEANING, nous avons choisi des produits à faible impact environnemental. Voici notre gamme éco certifiée.', date:'18 mai 2026', time:'3 min', author:'Sophie Lepage' },
  { id:6, cat:'restauration', emoji:'🎉', title:'Nettoyage post-banquet : notre méthode en 10 étapes', excerpt:'Organiser un grand événement ? Voici comment notre équipe prend en charge le nettoyage post-banquet en un temps record.', date:'10 mai 2026', time:'5 min', author:'Marie-Paule Itoua' },
  { id:7, cat:'nettoyage',    emoji:'🏢', title:'Comment choisir sa société de nettoyage de bureaux ?', excerpt:'Critères de sélection, questions à poser, garanties à demander. Notre guide pour faire le bon choix.', date:'3 mai 2026', time:'6 min', author:'Sophie Lepage' },
  { id:8, cat:'construction', emoji:'🛣️', title:'Construction de routes en Afrique : défis et solutions', excerpt:'Routes urbaines, pistes rurales, routes bitumées — CANADCLEANING partage son expérience sur les chantiers africains.', date:'28 avril 2026', time:'8 min', author:'Carlos Ndong Essono' },
  { id:9, cat:'nettoyage',    emoji:'🏥', title:'Hygiène en milieu médical : standards et protocoles', excerpt:'Les cabinets médicaux et cliniques exigent des protocoles de désinfection stricts. Voici notre approche certifiée.', date:'20 avril 2026', time:'5 min', author:'Jean-Baptiste Mukendi' },
];

const BLOG_FILTERS = [
  { id:'all',          label:'Tous les articles', count:9 },
  { id:'nettoyage',    label:'Nettoyage',          count:3 },
  { id:'restauration', label:'Restauration',        count:3 },
  { id:'construction', label:'Construction',         count:2 },
  { id:'ecologie',     label:'Écologie',             count:1 },
];

export default function Blog() {
  const [active, setActive] = useState('all');
  const [search, setSearch] = useState('');
  const filtered = ARTICLES.filter(a =>
    (active === 'all' || a.cat === active) &&
    (!search || a.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <PageHeader title="Blog & Actualités" subtitle="Conseils d'experts, guides pratiques et actualités CANADCLEANING." breadcrumb="Blog"/>
      <Section className="bg-gray-50">
        <Container>
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input value={search} onChange={e=>setSearch(e.target.value)} className="input-field pl-11" placeholder="Rechercher un article..."/>
          </div>
          <FilterTabs tabs={BLOG_FILTERS} active={active} onChange={setActive}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <motion.article
                key={a.id}
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:i*0.07}}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  {a.emoji}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-navy-400">
                    <span className="flex items-center gap-1"><Calendar size={11}/> {a.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11}/> {a.time} de lecture</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-navy-900 mb-2 leading-tight group-hover:text-brand-500 transition-colors">{a.title}</h3>
                  <p className="text-sm text-navy-500 leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-navy-400 font-semibold">Par {a.author}</span>
                    <button className="text-brand-500 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                      Lire <ArrowRight size={14}/>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-navy-400">
              <div className="text-5xl mb-4">📝</div>
              <p className="font-display text-xl">Aucun article trouvé</p>
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
