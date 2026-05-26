// pages/public/Experts.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, Award, MapPin } from 'lucide-react';
import { Section, Container, PageHeader, FilterTabs } from '../../components/ui';

// LinkedIn SVG inline
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Données des experts avec photos
const EXPERTS = [
  { 
    name: 'Francois Mboma ', 
    role: 'Directeur Général', 
    spec: 'Direction', 
    exp: '15 ans', 
    flag: '🇨🇩', 
    bio: 'Expert en gestion opérationnelle multi-pays, pilotage stratégique et développement commercial en Afrique centrale. Fondateur de CANADCLEANING.', 
    certs: ['MBA Management', 'Certification ISO 9001'],
    image: 'https://www.canadcleaningservices.com/PHOTO%20CLEANING/patron%201.jpg',
    location: 'Kinshasa, RDC'
  },
  { 
    name: 'Meya osee', 
    role: 'Directrice Commerciale', 
    spec: 'Commercial', 
    exp: '12 ans', 
    flag: '🇨🇦', 
    bio: 'Spécialiste CRM et développement client, Sophie a mis en place l\'ensemble du pipeline commercial et les partenariats internationaux.', 
    certs: ['Certification Salesforce', 'MBA Marketing'],
    image: 'https://www.canadcleaningservices.com/PHOTO%20CLEANING/SECURITE.jpg',
    location: 'Ottawa, Canada'
  },
  { 
    name: 'Balaka ', 
    role: 'Responsable Construction', 
    spec: 'Construction', 
    exp: '18 ans', 
    flag: '🇬🇶', 
    bio: 'Ingénieur génie civil de formation, Carlos supervise l\'ensemble des chantiers de construction en Guinée Équatoriale et en RDC.', 
    certs: ['Ingénieur Génie Civil', 'Certification BTP'],
    image: "https://www.canadcleaningservices.com/PHOTO%20CLEANING/nettoyage%20d'hotels%2002.jpg",
    location: 'Malabo, Guinée Équatoriale'
  },
  { 
    name: 'Mboma', 
    role: 'Responsable Qualité HACCP', 
    spec: 'Restauration', 
    exp: '10 ans', 
    flag: '🇨🇬', 
    bio: 'Spécialiste des normes hygiène alimentaire, Marie-Paule forme nos agents restauration et garantit la conformité HACCP de chaque intervention.', 
    certs: ['Certification HACCP', 'Formation ISO 22000'],
    image: 'https://www.canadcleaningservices.com/PHOTO%20CLEANING/personnel.jpg',
    location: 'Brazzaville, Congo'
  },
  { 
    name: 'Patrick Kasongo', 
    role: 'Chef d\'équipe Nettoyage', 
    spec: 'Nettoyage', 
    exp: '8 ans', 
    flag: '🇨🇩', 
    bio: 'Patrick coordonne les équipes de nettoyage à Kinshasa et Lubumbashi. Expert en nettoyage industriel et commercial grande superficie.', 
    certs: ['Certification Nettoyage Pro', 'Formation Sécurité'],
    image: 'https://www.canadcleaningservices.com/PHOTO%20CLEANING/personnel.jpg',
    location: 'Lubumbashi, RDC'
  },
  { 
    name: 'Amina', 
    role: 'Coordinatrice Planning', 
    spec: 'Direction', 
    exp: '6 ans', 
    flag: '🇨🇬', 
    bio: 'Amina gère le planning des interventions et l\'attribution des agents. Elle assure la coordination entre les clients et les équipes terrain.', 
    certs: ['Certification Project Management', 'BTS Logistique'],
    image: 'https://www.canadcleaningservices.com/PHOTO%20CLEANING/personnel.jpg',
    location: 'Pointe-Noire, Congo'
  },
  { 
    name: 'Mbemba', 
    role: 'Technicien Vapeur & Sols', 
    spec: 'Nettoyage', 
    exp: '9 ans', 
    flag: '🇨🇬', 
    bio: 'Spécialiste nettoyage à la vapeur haute pression, cirage de planchers et traitement des sols. Intervient sur les chantiers les plus complexes.', 
    certs: ['Certification Nettoyage Vapeur', 'Formation Sols Pro'],
    image: 'https://www.canadcleaningservices.com/PHOTO%20CLEANING/personnel.jpg',
    location: 'Brazzaville, Congo'
  },
  { 
    name: 'Voltaire', 
    role: 'Chef de chantier Construction', 
    spec: 'Construction', 
    exp: '11 ans', 
    flag: '🇬🇶', 
    bio: 'Isabelle supervise les chantiers de construction d\'appartements et d\'immeubles. Spécialiste gros œuvre et coordination des corps de métier.', 
    certs: ['BTP Spécialité Gros Œuvre', 'Certification Sécurité Chantier'],
    image: 'https://www.canadcleaningservices.com/PHOTO%20CLEANING/personnel.jpg',
    location: 'Malabo, Guinée Équatoriale'
  },
];

// Filtres
const EXP_FILTERS = [
  { id: 'all', label: 'Toute l\'équipe', count: 8 },
  { id: 'Nettoyage', label: 'Nettoyage', count: 2 },
  { id: 'Restauration', label: 'Restauration HACCP', count: 1 },
  { id: 'Construction', label: 'Construction', count: 2 },
  { id: 'Commercial', label: 'Commercial', count: 1 },
  { id: 'Direction', label: 'Direction', count: 2 },
];

// Composant pour une carte d'expert
function ExpertCard({ expert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
    >
      {/* Photo de l'expert */}
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-brand-100 to-indigo-100">
        <img
          src={expert.image}
          alt={expert.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Drapeau */}
        <div className="absolute top-3 right-3">
          <span className="text-2xl filter drop-shadow-md">{expert.flag}</span>
        </div>
        
        {/* Badge localisation */}
        <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <MapPin size={10} className="text-white" />
          <span className="text-white text-[10px] font-medium">{expert.location}</span>
        </div>
      </div>

      {/* Infos de l'expert */}
      <div className="p-5">
        <div className="text-center mb-3">
          <h3 className="font-poppins font-bold text-navy-900 text-lg leading-tight">{expert.name}</h3>
          <p className="text-brand-500 text-sm font-semibold mt-0.5">{expert.role}</p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <Clock size={12} className="text-gray-400" />
            <p className="text-navy-400 text-xs">{expert.exp} d'expérience</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-navy-500 text-xs leading-relaxed mb-4 text-center line-clamp-3">{expert.bio}</p>

        {/* Certifications */}
        <div className="space-y-1.5 mb-4">
          {expert.certs.map(cert => (
            <div key={cert} className="flex items-center gap-1.5 text-xs text-navy-600 bg-navy-50 rounded-lg px-2 py-1.5">
              <Award size={12} className="text-brand-500 flex-shrink-0" />
              <span className="font-poppins">{cert}</span>
            </div>
          ))}
        </div>

        {/* Bouton LinkedIn */}
        <button className="w-full flex items-center justify-center gap-2 text-xs text-navy-500 hover:text-brand-600 transition-colors font-semibold border border-gray-200 rounded-lg py-2.5 hover:border-brand-300 hover:bg-brand-50">
          <LinkedinIcon /> LinkedIn
        </button>
      </div>
    </motion.div>
  );
}

export default function Experts() {
  const [active, setActive] = useState('all');
  const filtered = EXPERTS.filter(e => active === 'all' || e.spec === active);

  return (
    <>
      <PageHeader 
        title="Notre Équipe d'Experts" 
        subtitle="Des professionnels certifiés à votre service dans 4 pays." 
        breadcrumb="Équipe"
      />
      
      <Section className="bg-gray-50">
        <Container>
          {/* Filtres */}
          <FilterTabs tabs={EXP_FILTERS} active={active} onChange={setActive} />

          {/* Nombre de résultats */}
          <p className="text-center text-sm text-navy-500 mb-8 font-medium">
            {filtered.length} expert(s) trouvé(s)
          </p>

          {/* Grille des experts */}
          {filtered.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-poppins text-xl text-navy-600">Aucun expert trouvé</p>
              <p className="text-gray-500 mt-2">Essayez un autre filtre</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((expert, index) => (
                <ExpertCard key={expert.name} expert={expert} index={index} />
              ))}
            </div>
          )}

          {/* Message de confiance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
              <span className="text-green-500 text-lg">✓</span>
              <span className="text-sm text-navy-600 font-medium">Tous nos experts sont certifiés et régulièrement formés</span>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}