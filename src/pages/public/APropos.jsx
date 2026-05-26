import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Shield, Leaf, Users, CheckCircle } from 'lucide-react';
import { Section, Container, PageHeader, SectionHeader, StatItem } from '../../components/ui';
import { STATS } from '../../data/services';

const TEAM = [
  { name:'Jean-Baptiste Mukendi', role:'Directeur Général', exp:'15 ans', spec:'Gestion opérationnelle & développement international', flag:'🇨🇩' },
  { name:'Sophie Lepage',         role:'Directrice Commerciale', exp:'12 ans', spec:'CRM, développement client, partenariats', flag:'🇨🇦' },
  { name:'Carlos Ndong Essono',   role:'Responsable Construction', exp:'18 ans', spec:'Génie civil, supervision de chantiers', flag:'🇬🇶' },
  { name:'Marie-Paule Itoua',     role:'Responsable Qualité HACCP', exp:'10 ans', spec:'Normes hygiène alimentaire, certification', flag:'🇨🇬' },
];

const CERTIFICATIONS = [
  { icon: Shield, label:'RC Pro', desc:'Responsabilité civile professionnelle incluse dans toutes les prestations' },
  { icon: Leaf,   label:'Écolabel EU', desc:'Produits certifiés à faible impact environnemental' },
  { icon: Award,  label:'HACCP', desc:'Protocole HACCP appliqué pour toutes les interventions restauration' },
  { icon: Users,  label:'Formation continue', desc:'Agents certifiés, uniformes d\'entreprise, badges nominatifs' },
];

export default function APropos() {
  return (
    <>
      <PageHeader title="À Propos de Nous" subtitle="Fondée en 2018, CANADCLEANING est votre partenaire unique pour construire, nettoyer et entretenir." breadcrumb="À propos"/>

      {/* Histoire */}
      <Section className="bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <div className="section-tag">Notre histoire</div>
              <h2 className="section-title mb-4">Fondée à Ottawa en 2018</h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                CANADCLEANING est née d'une vision simple : offrir à nos clients une solution complète et clé en main pour tous leurs besoins de propreté et de construction. Fondée à Ottawa en 2018, l'entreprise s'est rapidement développée pour rayonner dans 4 pays et 7 villes.
              </p>
              <p className="text-navy-600 leading-relaxed mb-6">
                Notre conviction profonde : un environnement bien construit et propre améliore l'image de marque, la santé, le bien-être et la productivité de tous. C'est cette conviction qui guide chacune de nos interventions.
              </p>
              <div className="space-y-3">
                {['2018 — Création à Ottawa, Canada','2020 — Ouverture des antennes Kinshasa & Brazzaville','2022 — Extension à Lubumbashi et Kolwezi','2023 — Lancement de l\'offre restauration HACCP','2024 — Ouverture Malabo, Guinée Équatoriale'].map((e,i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 bg-brand-500 rounded-full flex-shrink-0"/>
                    <span className="text-navy-700">{e}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className="grid grid-cols-2 gap-4">
              {[
                { label:'Fondée en', val:'2018', sub:'Ottawa, Canada' },
                { label:'Projets réalisés', val:'450+', sub:'Construction & nettoyage' },
                { label:'Employés', val:'65', sub:'Dans 4 pays' },
                { label:'Clients actifs', val:'350', sub:'Fidèles et satisfaits' },
              ].map((s,i) => (
                <motion.div key={i} initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.1}}
                  className="card p-6 text-center">
                  <p className="font-display text-3xl font-bold text-brand-500 mb-1">{s.val}</p>
                  <p className="font-bold text-navy-900 text-sm">{s.label}</p>
                  <p className="text-navy-400 text-xs mt-0.5">{s.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Mission & Valeurs */}
      <Section className="bg-navy-900">
        <Container>
          <SectionHeader light tag="Mission & valeurs" title="Ce qui nous anime chaque jour"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon:'💰', title:'Prix concurrentiels', desc:'Tarifs transparents et compétitifs, sans frais cachés.' },
              { icon:'🌿', title:'Éco-responsable',     desc:'Produits certifiés écolabel, réduction de l\'empreinte chimique.' },
              { icon:'👂', title:'Écoute client',       desc:'Adaptation sur mesure à chaque besoin et contrainte.' },
              { icon:'⭐', title:'Qualité irréprochable',desc:'Contrôle qualité après chaque intervention, rapport de passage.' },
            ].map((v,i) => (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <section className="bg-brand-500 py-14">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s,i) => <StatItem key={i} stat={s} index={i}/>)}
          </div>
        </Container>
      </section>

      {/* Équipe */}
      <Section>
        <Container>
          <SectionHeader tag="Notre équipe" title="Les experts qui vous servent" subtitle="Des professionnels expérimentés, formés aux normes les plus exigeantes de chaque secteur."/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m,i) => (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="card p-6 text-center group hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-700 to-navy-900 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {m.flag}
                </div>
                <h3 className="font-display font-bold text-navy-900 mb-1">{m.name}</h3>
                <p className="text-brand-500 text-sm font-bold mb-1">{m.role}</p>
                <p className="text-navy-400 text-xs mb-3">{m.exp} d'expérience</p>
                <p className="text-navy-600 text-xs leading-relaxed">{m.spec}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader tag="Certifications" title="Nos engagements qualité"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {CERTIFICATIONS.map((c,i) => (
              <motion.div key={i} initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.08}}
                className="card p-6 text-center">
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <c.icon size={22} className="text-brand-500"/>
                </div>
                <h3 className="font-display font-bold text-navy-900 mb-2">{c.label}</h3>
                <p className="text-navy-500 text-xs leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-primary">Travailler avec nous <ArrowRight size={16}/></Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
