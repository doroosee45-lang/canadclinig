import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Section, Container, PageHeader, FilterTabs } from '../../components/ui';

// LinkedIn supprimé de lucide-react → SVG inline
const LinkedinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const EXPERTS = [
  { name:'Jean-Baptiste Mukendi', role:'Directeur Général',          spec:'Direction',    exp:'15 ans', flag:'🇨🇩', bio:'Expert en gestion opérationnelle multi-pays, pilotage stratégique et développement commercial en Afrique centrale. Fondateur de CANADCLEANING.', certs:['MBA Management','Certification ISO 9001'] },
  { name:'Sophie Lepage',         role:'Directrice Commerciale',     spec:'Commercial',   exp:'12 ans', flag:'🇨🇦', bio:'Spécialiste CRM et développement client, Sophie a mis en place l\'ensemble du pipeline commercial et les partenariats internationaux.', certs:['Certification Salesforce','MBA Marketing'] },
  { name:'Carlos Ndong Essono',   role:'Responsable Construction',   spec:'Construction', exp:'18 ans', flag:'🇬🇶', bio:'Ingénieur génie civil de formation, Carlos supervise l\'ensemble des chantiers de construction en Guinée Équatoriale et en RDC.', certs:['Ingénieur Génie Civil','Certification BTP'] },
  { name:'Marie-Paule Itoua',     role:'Responsable Qualité HACCP',  spec:'Restauration', exp:'10 ans', flag:'🇨🇬', bio:'Spécialiste des normes hygiène alimentaire, Marie-Paule forme nos agents restauration et garantit la conformité HACCP de chaque intervention.', certs:['Certification HACCP','Formation ISO 22000'] },
  { name:'Patrick Kasongo',       role:'Chef d\'équipe Nettoyage',   spec:'Nettoyage',    exp:'8 ans',  flag:'🇨🇩', bio:'Patrick coordonne les équipes de nettoyage à Kinshasa et Lubumbashi. Expert en nettoyage industriel et commercial grande superficie.', certs:['Certification Nettoyage Pro','Formation Sécurité'] },
  { name:'Amina Diallo',          role:'Coordinatrice Planning',     spec:'Direction',    exp:'6 ans',  flag:'🇨🇬', bio:'Amina gère le planning des interventions et l\'attribution des agents. Elle assure la coordination entre les clients et les équipes terrain.', certs:['Certification Project Management','BTS Logistique'] },
  { name:'René Mbemba',           role:'Technicien Vapeur & Sols',   spec:'Nettoyage',    exp:'9 ans',  flag:'🇨🇬', bio:'Spécialiste nettoyage à la vapeur haute pression, cirage de planchers et traitement des sols. Intervient sur les chantiers les plus complexes.', certs:['Certification Nettoyage Vapeur','Formation Sols Pro'] },
  { name:'Isabelle Nguema',       role:'Chef de chantier Construction',spec:'Construction',exp:'11 ans',flag:'🇬🇶', bio:'Isabelle supervise les chantiers de construction d\'appartements et d\'immeubles. Spécialiste gros œuvre et coordination des corps de métier.', certs:['BTP Spécialité Gros Œuvre','Certification Sécurité Chantier'] },
];

const EXP_FILTERS = [
  { id:'all',          label:'Toute l\'équipe',   count:8 },
  { id:'Nettoyage',    label:'Nettoyage',          count:3 },
  { id:'Restauration', label:'Restauration HACCP', count:1 },
  { id:'Construction', label:'Construction',        count:2 },
  { id:'Commercial',   label:'Commercial',          count:1 },
  { id:'Direction',    label:'Direction',           count:2 },
];

export default function Experts() {
  const [active, setActive] = useState('all');
  const filtered = EXPERTS.filter(e => active === 'all' || e.spec === active);

  return (
    <>
      <PageHeader title="Notre Équipe d'Experts" subtitle="Des professionnels certifiés à votre service dans 4 pays." breadcrumb="Équipe"/>
      <Section className="bg-gray-50">
        <Container>
          <FilterTabs tabs={EXP_FILTERS} active={active} onChange={setActive}/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((expert, i) => (
              <motion.div
                key={expert.name}
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:i*0.08}}
                className="card p-6 group hover:-translate-y-1 transition-transform"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {expert.flag}
                </div>
                <div className="text-center mb-4">
                  <h3 className="font-display font-bold text-navy-900 text-base leading-tight">{expert.name}</h3>
                  <p className="text-brand-500 text-sm font-bold mt-0.5">{expert.role}</p>
                  <p className="text-navy-400 text-xs mt-0.5">{expert.exp} d'expérience</p>
                </div>
                <p className="text-navy-500 text-xs leading-relaxed mb-4 text-center">{expert.bio}</p>
                <div className="space-y-1.5 mb-4">
                  {expert.certs.map(c => (
                    <div key={c} className="flex items-center gap-1.5 text-xs text-navy-600 bg-navy-50 rounded-lg px-2 py-1">
                      <span className="text-brand-500">✓</span> {c}
                    </div>
                  ))}
                </div>
                <button className="w-full flex items-center justify-center gap-2 text-xs text-navy-400 hover:text-brand-500 transition-colors font-semibold border border-gray-200 rounded-lg py-2 hover:border-brand-300">
                  <LinkedinIcon /> LinkedIn
                </button>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}