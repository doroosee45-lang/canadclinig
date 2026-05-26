// pages/public/APropos.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  ArrowRight, Award, Shield, Leaf, Users, Heart, Target, 
  Clock, Quote, Building2, MapPin, Calendar, Briefcase, Globe 
} from 'lucide-react';
import { Section, Container, PageHeader, SectionHeader, StatItem } from '../../components/ui';
import { STATS } from '../../data/services';

// Données de l'équipe avec photos
const TEAM = [
  { 
    name: 'François Mboma Voltaire', 
    role: 'Directeur Général', 
    exp: '15 ans', 
    spec: 'Gestion opérationnelle & développement international', 
    // flag: '🇨🇩',
    image: 'https://www.canadcleaningservices.com/PHOTO%20CLEANING/patron%201.jpg',
    alt: 'François Mboma Voltaire - Directeur Général'
  },
  { 
    name: 'Rodile Balaka', 
    role: 'Directrice Commerciale', 
    exp: '12 ans', 
    spec: 'CRM, développement client, partenariats', 
    // flag: '🇨🇦',
    image: "https://www.canadcleaningservices.com/PHOTO%20CLEANING/nettoyage%20d'hotels.jpg",
    alt: 'Rodile Balaka - Directrice Commerciale'
  },
  { 
    name: 'Meya osee', 
    role: 'Responsable Construction', 
    exp: '18 ans', 
    spec: 'Génie civil, supervision de chantiers', 
    // flag: '🇬🇶',
    image: "https://www.canadcleaningservices.com/PHOTO%20CLEANING/SECURITE.jpg",
    alt: 'Meya osee - Responsable Construction'
  },
  { 
    name: 'Mboma Meya', 
    role: 'Responsable Qualité HACCP', 
    exp: '10 ans', 
    spec: 'Normes hygiène alimentaire, certification', 
    // flag: '🇨🇬',
    image: "https://www.canadcleaningservices.com/PHOTO%20CLEANING/nettoyage%20d'hotels%2002.jpg",
    alt: 'Mboma Meya - Responsable Qualité HACCP'
  },
];

// Données des certifications
const CERTIFICATIONS = [
  { icon: Shield, label: 'RC Pro', desc: 'Responsabilité civile professionnelle incluse dans toutes les prestations' },
  { icon: Leaf, label: 'Écolabel EU', desc: 'Produits certifiés à faible impact environnemental' },
  { icon: Award, label: 'HACCP', desc: 'Protocole HACCP appliqué pour toutes les interventions restauration' },
  { icon: Users, label: 'Formation continue', desc: 'Agents certifiés, uniformes d\'entreprise, badges nominatifs' },
];

// Données des valeurs
const VALUES = [
  { icon: Shield, title: "Intégrité", desc: "Nous agissons avec honnêteté et transparence en toutes circonstances." },
  { icon: Award, title: "Excellence", desc: "La qualité premium est notre standard, pas une option." },
  { icon: Heart, title: "Respect des engagements", desc: "Nos promesses sont tenues, toujours." },
  { icon: Users, title: "Confiance", desc: "Une relation durable basée sur la fiabilité." },
  { icon: Target, title: "Détermination", desc: "Nous relevons tous les défis avec passion." },
  { icon: Clock, title: "Ponctualité", desc: "Le respect de vos délais est notre priorité." },
];

// Données des jalons
const MILESTONES = [
  { year: "2018", title: "Création à Ottawa", desc: "Fondation de CanadCleaning Inc au Canada", icon: Building2 },
  { year: "2020", title: "Expansion Afrique", desc: "Ouverture des antennes Kinshasa & Brazzaville", icon: MapPin },
  { year: "2022", title: "Extension RDC", desc: "Lubumbashi et Kolwezi rejoignent le réseau", icon: MapPin },
  { year: "2023", title: "Certification HACCP", desc: "Lancement de l'offre restauration certifiée", icon: Award },
  { year: "2024", title: "Ouverture Malabo", desc: "Nouvelle antenne en Guinée Équatoriale", icon: Globe },
];

// Section Héros
function FounderSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* Colonne gauche - Histoire */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-100 rounded-full opacity-50 blur-2xl -z-10" />
        <div className="section-tag mb-4">Notre histoire</div>
        <h2 className="section-title mb-6">
          Une passion devenue <span className="gradient-text">mission</span>
        </h2>
        <div className="space-y-4 text-navy-600 leading-relaxed">
          <p>
            Chez <strong className="text-brand-600">CanadCleaning Inc</strong>, notre parcours est celui d'une passion devenue mission. 
            Fondée sur le travail, la persévérance et la vision d'un avenir meilleur, notre entreprise s'est construite autour d'une idée simple : 
            offrir des services de qualité tout en respectant nos valeurs humaines.
          </p>
          <p>
            À travers les années, nous avons bâti une société fondée sur la <strong>confiance</strong>, l'<strong>excellence</strong> 
            et le <strong>respect des engagements</strong>. Cette philosophie guide chacune de nos actions.
          </p>
          <p>
            CanadCleaning Inc s'engage à fournir une qualité premium, à respecter ses promesses et à bâtir un environnement sain et sécurisé.
          </p>
        </div>

        {/* Citation du fondateur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-6 bg-gradient-to-r from-navy-50 to-gray-50 rounded-2xl border border-gray-100"
        >
          <Quote size={32} className="text-brand-400 mb-3" />
          <p className="text-navy-700 italic text-base leading-relaxed mb-5">
            "Suivre ses rêves, c'est construire le monde de demain."
          </p>
          <div>
            <p className="font-bold text-navy-900 text-lg">Francois Voltaire Mboma</p>
            <p className="text-sm text-gray-500">Président Directeur Général</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-medium">🇨🇩 Fondateur</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">● Actif</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Colonne droite - Photo du fondateur */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-100"
        >
          <img
            src="https://www.canadcleaningservices.com/PHOTO%20CLEANING/patron%201.jpg"
            alt="Francois Voltaire Mboma - Président Directeur Général"
            className="w-full h-[500px] object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold">Francois Voltaire Mboma</h3>
            <p className="text-base text-white/90">Président Directeur Général</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">🇨🇩 Fondateur</span>
              <span className="text-xs bg-green-500/30 backdrop-blur-sm px-3 py-1 rounded-full">✓ À votre service</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// Section Valeurs
function ValuesSection() {
  return (
    <div className="mt-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
          <Heart size={14} /> Nos valeurs
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
          Ce qui nous <span className="gradient-text">anime</span>
        </h2>
        <p className="text-navy-500">
          Des valeurs fondamentales qui guident chacune de nos actions et décisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {VALUES.map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-4 p-5 bg-white rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
              <value.icon size={20} className="text-brand-600" />
            </div>
            <div>
              <h4 className="font-bold text-navy-800 text-base">{value.title}</h4>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">{value.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Section Chronologie
function TimelineSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <div className="section-tag">Notre parcours</div>
        <h2 className="section-title mb-4">Fondée à Ottawa en 2018</h2>
        <p className="text-navy-600 leading-relaxed mb-4">
          CANADCLEANING est née d'une vision simple : offrir à nos clients une solution complète et clé en main pour tous leurs besoins.
        </p>
        <p className="text-navy-600 leading-relaxed mb-6">
          Un environnement bien construit et propre améliore l'image de marque, la santé, le bien-être et la productivité de tous.
        </p>
        <div className="space-y-3">
          {MILESTONES.map((milestone, i) => (
            <div key={i} className="flex items-center gap-4 text-sm group">
              <div className="w-12 text-brand-600 font-bold">{milestone.year}</div>
              <div className="flex-1">
                <span className="font-semibold text-navy-800">{milestone.title}</span>
                <span className="text-gray-500 ml-2">— {milestone.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >
        {[
          { label: 'Fondée en', val: '2018', sub: 'Ottawa, Canada' },
          { label: 'Projets réalisés', val: '450+', sub: 'Construction & nettoyage' },
          { label: 'Employés', val: '65', sub: 'Dans 4 pays' },
          { label: 'Clients actifs', val: '350', sub: 'Fidèles et satisfaits' },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
          >
            <p className="font-display text-3xl font-bold text-brand-500 mb-1">{s.val}</p>
            <p className="font-bold text-navy-900 text-sm">{s.label}</p>
            <p className="text-navy-400 text-xs mt-0.5">{s.sub}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

// Section Mission
function MissionSection() {
  const missions = [
    { icon: '💰', title: 'Prix concurrentiels', desc: 'Tarifs transparents et compétitifs, sans frais cachés.' },
    { icon: '🌿', title: 'Éco-responsable', desc: 'Produits certifiés écolabel, réduction de l\'empreinte chimique.' },
    { icon: '👂', title: 'Écoute client', desc: 'Adaptation sur mesure à chaque besoin et contrainte.' },
    { icon: '⭐', title: 'Qualité irréprochable', desc: 'Contrôle qualité après chaque intervention, rapport de passage.' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {missions.map((v, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
        >
          <div className="text-3xl mb-3">{v.icon}</div>
          <h3 className="font-display text-lg font-bold text-white mb-2">{v.title}</h3>
          <p className="text-gray-400 text-sm">{v.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
// Section Équipe avec photos et bouton
function TeamSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedTeam = showAll ? TEAM : TEAM.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedTeam.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group hover:-translate-y-1 transition-all duration-300 hover:shadow-md"
          >
            {/* Photo du membre */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-brand-100 to-indigo-100">
              <img
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3">
                <span className="text-2xl filter drop-shadow-md">{member.flag}</span>
              </div>
            </div>
            
            {/* Infos du membre */}
            <div className="p-5 text-center">
              <h3 className="font-bold text-navy-900 text-lg mb-1">{member.name}</h3>
              <p className="text-brand-500 text-sm font-semibold mb-1">{member.role}</p>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Clock size={12} className="text-gray-400" />
                <p className="text-navy-400 text-xs">{member.exp} d'expérience</p>
              </div>
              <p className="text-navy-500 text-xs leading-relaxed">{member.spec}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bouton Voir nos experts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-10"
      >
        <Link
          to="/experts"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Voir nos experts
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  );
}

// Section Certifications
function CertificationsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
      {CERTIFICATIONS.map((cert, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
        >
          <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-3">
            <cert.icon size={24} className="text-brand-500" />
          </div>
          <h3 className="font-bold text-navy-900 mb-1">{cert.label}</h3>
          <p className="text-navy-500 text-xs leading-relaxed">{cert.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Message d'inspiration
function InspirationMessage() {
  return (
    <div className="mt-8 p-5 bg-gradient-to-r from-brand-50 to-indigo-50 rounded-xl text-center border border-brand-100">
      <Heart size={24} className="text-brand-500 mx-auto mb-2" />
      <p className="text-brand-800 text-sm font-medium max-w-2xl mx-auto">
        À toutes les nouvelles générations, CanadCleaning souhaite être une source d'inspiration, 
        un exemple de passion, de rigueur et de réussite à travers l'excellence de ses services.
      </p>
    </div>
  );
}

export default function APropos() {
  return (
    <>
      <PageHeader 
        title="À Propos de Nous" 
        subtitle="Fondée en 2018, CANADCLEANING est votre partenaire unique pour construire, nettoyer et entretenir." 
        breadcrumb="À propos"
      />

      {/* Section Histoire & Photo */}
      <Section className="bg-white">
        <Container>
          <FounderSection />
          <ValuesSection />
        </Container>
      </Section>

      {/* Section Chronologie */}
      <Section className="bg-gray-50">
        <Container>
          <TimelineSection />
        </Container>
      </Section>

      {/* Section Mission */}
      <Section className="bg-navy-900">
        <Container>
          <SectionHeader light tag="Mission & valeurs" title="Ce qui nous anime chaque jour" />
          <MissionSection />
          <InspirationMessage />
        </Container>
      </Section>

      {/* Section Stats */}
      <section className="bg-brand-500 py-14">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <StatItem key={i} stat={s} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Section Équipe */}
      <Section>
        <Container>
          <SectionHeader 
            tag="Notre équipe" 
            title="Les experts qui vous servent" 
            subtitle="Des professionnels expérimentés, formés aux normes les plus exigeantes de chaque secteur."
          />
          <TeamSection />
        </Container>
      </Section>

      {/* Section Certifications */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader tag="Certifications" title="Nos engagements qualité" />
          <CertificationsSection />
          <div className="text-center">
            <Link to="/contact" className="btn-primary">
              Travailler avec nous <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}