// pages/NosSocietes.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, MapPin, Calendar, Clock, Building2, Users, Award, Shield, Leaf, Star, Globe, Briefcase, TrendingUp, Heart, Zap, Cpu, Factory, Home, Truck, Sun, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section, Container, PageHeader } from '../../components/ui';

// Données des contrats en cours
const CONTRATS = [
  {
    id: 1,
    name: "Sanctuaire des Promesses",
    location: "Ottawa, Canada",
    category: "Lieu de culte",
    description: "Entretien complet du lieu de culte, y compris nettoyage des vitres, désinfection des bancs et entretien des espaces extérieurs. Un environnement propre favorise la sérénité et le respect du lieu.",
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800",
    since: "2022",
    icon: "⛪"
  },
  {
    id: 2,
    name: "Hôtel Ramada Plaza",
    location: "Gatineau, Canada",
    category: "Hôtellerie",
    description: "Nettoyage quotidien des chambres, halls et espaces de restauration. Nous garantissons la propreté et le confort des visiteurs grâce à des équipes qualifiées et discrètes.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    since: "2021",
    icon: "🏨"
  },
  {
    id: 3,
    name: "Hôtel Hilton",
    location: "Canada",
    category: "Hôtellerie",
    description: "Prestations de nettoyage haut de gamme et entretien des zones de réception, des suites VIP et des salles de conférence.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    since: "2020",
    icon: "🏨"
  },
  {
    id: 4,
    name: "Huawei Technologies",
    location: "Canada",
    category: "Technologie",
    description: "Entretien régulier des bureaux, laboratoires et espaces techniques. Respect des normes de sécurité et discrétion assurée dans les zones sensibles.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
    since: "2021",
    icon: "📱"
  },
  {
    id: 5,
    name: "Société TAIZE",
    location: "Pointe-Noire, Congo",
    category: "Industriel",
    description: "Services de maintenance générale et nettoyage industriel. Une collaboration durable fondée sur la fiabilité et la performance.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800",
    since: "2019",
    icon: "🏭"
  },
  {
    id: 6,
    name: "Arnold Électrique",
    location: "Ottawa, Canada",
    category: "Électricité",
    description: "Nettoyage après travaux et maintenance continue des installations électriques. Un partenariat basé sur la confiance et la rapidité d'intervention.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800",
    since: "2022",
    icon: "⚡"
  },
  {
    id: 7,
    name: "Garderie Rêve d'Enfance",
    location: "Ottawa, Canada",
    category: "Petite enfance",
    description: "Entretien quotidien avec produits 100% non toxiques pour la sécurité des enfants. Hygiène irréprochable garantie dans les espaces de jeux et de repas.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800",
    since: "2023",
    icon: "🧸"
  },
  {
    id: 8,
    name: "White Hôtel",
    location: "Kinshasa, Congo",
    category: "Hôtellerie",
    description: "Nettoyage des chambres et espaces communs, désinfection des sanitaires, et gestion de la buanderie. Objectif : satisfaction totale des clients.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    since: "2020",
    icon: "🏨"
  },
  {
    id: 9,
    name: "Clinique Canadienne de Souanké",
    location: "Souanké, Congo",
    category: "Santé",
    description: "Nettoyage hospitalier complet, respect strict des protocoles d'hygiène et de stérilisation. Priorité à la santé et à la sécurité des patients.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    since: "2021",
    icon: "🏥"
  },
  {
    id: 10,
    name: "Immeuble Bamboutos",
    location: "Ottawa, Canada",
    category: "Immobilier",
    description: "Nettoyage des bureaux et ascenseurs, entretien des vitrines et couloirs communs. Service hautement professionnel pour un environnement impeccable.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    since: "2022",
    icon: "🏢"
  }
];

// Données des entreprises du groupe avec icônes Lucide
const GROUP_COMPANIES = [
  {
    id: 1,
    name: "CanadCleaning Inc",
    logo: "🧹",
    icon: Building2,
    founded: "2015",
    location: "Ottawa, Canada",
    domain: "Nettoyage professionnel, maintenance, sécurité",
    description: "Leader canadien du nettoyage et de la maintenance, CanadCleaning Inc offre des services de haute qualité pour les entreprises et les particuliers. Certifiée HACCP et ISO, l'entreprise intervient dans 7 villes à travers le Canada et l'Afrique.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    highlights: ["47 services", "1000+ clients", "Certifié HACCP"]
  },
  {
    id: 2,
    name: "Canaco Group",
    logo: "🏗️",
    icon: Factory,
    founded: "2018",
    location: "Kinshasa, RD Congo",
    domain: "Construction, génie civil, BTP",
    description: "Canaco Group est spécialisé dans la construction d'immeubles, de routes et d'infrastructures publiques. Avec une équipe d'ingénieurs expérimentés, l'entreprise réalise des projets clé en main aux normes internationales.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800",
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    highlights: ["100+ chantiers", "200+ employés", "Matériaux premium"]
  },
  {
    id: 3,
    name: "Wahei Solutions",
    logo: "⚡",
    icon: Zap,
    founded: "2019",
    location: "Lubumbashi, RD Congo",
    domain: "Énergie, électricité, infrastructure électrique",
    description: "Wahei Solutions est un expert en installation et maintenance électrique. L'entreprise intervient sur les réseaux haute et basse tension, les transformateurs et les systèmes d'éclairage public.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800",
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    highlights: ["Installation HT/BT", "Éclairage public", "Maintenance 24/7"]
  },
  {
    id: 4,
    name: "Omedev Services",
    logo: "💻",
    icon: Cpu,
    founded: "2020",
    location: "Brazzaville, Congo",
    domain: "Services numériques, IT, développement",
    description: "Omedev Services est la branche digitale du groupe. Spécialisée dans le développement web, les applications mobiles, l'hébergement et les solutions cloud pour les entreprises.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
    highlights: ["Dev web & mobile", "Cloud & hébergement", "Support IT 24/7"]
  },
  {
    id: 5,
    name: "GreenTech Énergie",
    logo: "🌱",
    icon: Sun,
    founded: "2021",
    location: "Pointe-Noire, Congo",
    domain: "Énergies renouvelables, solaire",
    description: "GreenTech Énergie propose des solutions solaires innovantes pour les entreprises et les particuliers. Installation de panneaux photovoltaïques, onduleurs et batteries de stockage.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
    bgGradient: "from-green-50 to-lime-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    highlights: ["Panneaux solaires", "Batteries stockage", "Énergie propre"]
  },
  {
    id: 6,
    name: "AfriLogistique",
    logo: "🚚",
    icon: Truck,
    founded: "2017",
    location: "Douala, Cameroun",
    domain: "Logistique, transport, fret",
    description: "AfriLogistique assure le transport et la logistique de marchandises à travers l'Afrique centrale. Flotte de camions, entrepôts et solutions sur mesure.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    bgGradient: "from-red-50 to-rose-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    highlights: ["Transport fret", "Entrepôts", "Douane incluse"]
  },
  {
    id: 7,
    name: "Immobilière CAN",
    logo: "🏠",
    icon: Home,
    founded: "2016",
    location: "Ottawa, Canada",
    domain: "Immobilier, gestion locative",
    description: "Immobilière CAN gère un portefeuille de biens immobiliers résidentiels et commerciaux. Achat, vente, location et gestion locative.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    bgGradient: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-200",
    iconColor: "text-cyan-600",
    highlights: ["Gestion locative", "Achat & vente", "Syndic de copropriété"]
  },
  {
    id: 8,
    name: "SantéPlus Médical",
    logo: "🏥",
    icon: Stethoscope,
    founded: "2019",
    location: "Kinshasa, RD Congo",
    domain: "Santé, équipements médicaux",
    description: "SantéPlus Médical fournit des équipements médicaux de pointe aux hôpitaux et cliniques. Formation du personnel et maintenance des équipements.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    bgGradient: "from-teal-50 to-emerald-50",
    borderColor: "border-teal-200",
    iconColor: "text-teal-600",
    highlights: ["Équipements médicaux", "Formation", "Maintenance"]
  }
];

// Catégories pour le filtre
const CATEGORIES = [
  { id: 'all', label: 'Tous nos clients', count: 10 },
  { id: 'Hôtellerie', label: 'Hôtellerie', count: 3 },
  { id: 'Santé', label: 'Santé', count: 1 },
  { id: 'Technologie', label: 'Technologie', count: 1 },
  { id: 'Industriel', label: 'Industriel', count: 1 },
  { id: 'Petite enfance', label: 'Petite enfance', count: 1 },
  { id: 'Immobilier', label: 'Immobilier', count: 1 },
  { id: 'Lieu de culte', label: 'Lieu de culte', count: 1 },
  { id: 'Électricité', label: 'Électricité', count: 1 },
];

// Composant pour une carte de contrat
function ContratCard({ contrat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={contrat.image}
          alt={contrat.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
          <span className="text-xl">{contrat.icon}</span>
          <span className="text-xs font-semibold text-navy-900">{contrat.category}</span>
        </div>
        <div className="absolute top-3 right-3 bg-brand-500 text-white rounded-full px-2.5 py-1 text-xs font-bold">
          Depuis {contrat.since}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-900 mb-2">{contrat.name}</h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
          <MapPin size={14} />
          <span>{contrat.location}</span>
        </div>
        <p className="text-navy-500 text-sm leading-relaxed mb-4 line-clamp-3">
          {contrat.description}
        </p>
        <Link
          to="/devis"
          className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-3 transition-all"
        >
          Demander une prestation similaire <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

// Composant pour une carte d'entreprise (style amélioré)
function CompanyCard({ company, index }) {
  const IconComponent = company.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`group bg-gradient-to-br ${company.bgGradient} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${company.borderColor}`}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={company.image}
          alt={company.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Badge année de fondation */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-md">
          <span className="text-lg">{company.logo}</span>
          <div className="text-left">
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Fondée en</p>
            <p className="text-sm font-bold text-gray-800 leading-tight">{company.founded}</p>
          </div>
        </div>
        
        {/* Badge localisation */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
          <MapPin size={12} className="text-white/80" />
          <p className="text-white text-xs font-medium">{company.location.split(',')[0]}</p>
        </div>
      </div>

      <div className="p-6">
        {/* En-tête avec icône et nom */}
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center ${company.iconColor}`}>
            <IconComponent size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{company.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{company.domain}</p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {company.description}
        </p>
        
        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-5">
          {company.highlights.map((highlight, i) => (
            <span key={i} className="text-xs bg-white/80 text-gray-700 px-2.5 py-1 rounded-full border border-gray-200 shadow-sm">
              ✦ {highlight}
            </span>
          ))}
        </div>

        {/* Bouton d'action */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-between w-full gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm px-4 py-2.5 rounded-xl transition-all border border-gray-200 shadow-sm hover:shadow-md"
        >
          <span>Collaborer avec {company.name.split(' ')[0]}</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

// Section Pourquoi choisir CanadCleaning
function WhyChooseUs() {
  const reasons = [
    { icon: Award, title: "Professionnalisme certifié", desc: "Une équipe formée selon les standards internationaux" },
    { icon: Leaf, title: "Matériel de pointe", desc: "Produits écologiques et équipements modernes" },
    { icon: Clock, title: "Réactivité", desc: "Disponibilité 24h/24 et 7j/7" },
    { icon: Star, title: "Expérience éprouvée", desc: "De nombreux contrats prestigieux au Canada et en Afrique" },
    { icon: Users, title: "Engagement humain", desc: "Création d'emplois et formation continue de nos agents" },
    { icon: Shield, title: "Sécurité garantie", desc: "Respect des normes les plus strictes" },
  ];

  return (
    <Section className="bg-navy-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/40 text-brand-300 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <Award size={14} /> Pourquoi nous choisir ?
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            CanadCleaning Inc <span className="gradient-text">l'excellence</span> à votre service
          </h2>
          <p className="text-gray-300 text-lg">
            Une expertise reconnue, une équipe dévouée et des engagements tenus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center mb-4">
                <reason.icon size={22} className="text-brand-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Section stats
function StatsSection() {
  const stats = [
    { value: "8", label: "Entreprises du groupe", icon: Building2 },
    { value: "10+", label: "Contrats actifs", icon: Briefcase },
    { value: "7", label: "Villes desservies", icon: MapPin },
    { value: "500+", label: "Employés", icon: Users },
    { value: "1000+", label: "Clients satisfaits", icon: Star },
    { value: "24/7", label: "Disponibilité", icon: Clock },
  ];

  return (
    <Section className="bg-gradient-to-r from-brand-500 to-indigo-600">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-2">
                <stat.icon size={28} className="text-white/80" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-xs text-white/80 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Composant Filtre personnalisé
function FilterTabs({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
            active === tab.id
              ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
              : 'bg-white text-navy-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {tab.label}
          <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
            active === tab.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
          }`}>
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
}

// Page principale
export default function NosSocietes() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredContrats = activeCategory === 'all'
    ? CONTRATS
    : CONTRATS.filter(c => c.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="Notre Groupe" 
        subtitle="Découvrez l'écosystème d'entreprises qui composent notre groupe — des experts au service de votre réussite"
        breadcrumb="Nos sociétés"
      />

      {/* Section Présentation du Groupe */}
      <Section className="bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="text-5xl mb-4">🏢</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Un groupe <span className="gradient-text">multidisciplinaire</span> au service de l'excellence
            </h2>
            <p className="text-navy-500 text-lg leading-relaxed">
              CanadCleaning Inc se distingue par son expertise et son engagement envers la qualité. 
              Grâce à une équipe expérimentée et un matériel professionnel, nous accompagnons des 
              institutions publiques et privées dans la gestion de leur hygiène, de leur maintenance 
              et de leurs ressources humaines.
            </p>
          </motion.div>

          {/* Carte de valeur ajoutée */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-navy-50 to-gray-50 rounded-2xl p-8 border border-gray-100 text-center"
          >
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { text: "✓ Expertise reconnue", color: "text-brand-600" },
                { text: "✓ Équipe expérimentée", color: "text-brand-600" },
                { text: "✓ Matériel professionnel", color: "text-brand-600" },
                { text: "✓ Engagement qualité", color: "text-brand-600" },
                { text: "✓ Présence internationale", color: "text-brand-600" },
              ].map((item, i) => (
                <span key={i} className={`font-semibold ${item.color}`}>{item.text}</span>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Section Nos Entreprises du Groupe - Style amélioré */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Globe size={14} /> Notre écosystème
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Nos Entreprises
            </h2>
            <p className="text-navy-500">
              Un groupe diversifié d'entreprises complémentaires pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GROUP_COMPANIES.map((company, index) => (
              <CompanyCard key={company.id} company={company} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      <StatsSection />

      {/* Section Nos Contrats */}
      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Nos Contrats en Cours
            </h2>
            <p className="text-navy-500">
              Des partenariats durables avec des institutions prestigieuses au Canada et en Afrique
            </p>
          </div>

          <FilterTabs 
            tabs={CATEGORIES} 
            active={activeCategory} 
            onChange={setActiveCategory} 
          />

          {filteredContrats.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">Aucun contrat trouvé dans cette catégorie.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredContrats.map((contrat, index) => (
                <ContratCard key={contrat.id} contrat={contrat} index={index} />
              ))}
            </div>
          )}
        </Container>
      </Section>

      <WhyChooseUs />

      {/* CTA Final */}
      <Section className="bg-brand-500">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
              Demandez un devis gratuit et découvrez pourquoi autant d'entreprises nous font confiance
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/devis" className="bg-white text-brand-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg">
                Demander un devis →
              </Link>
              <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-brand-600 font-bold px-8 py-4 rounded-xl transition-all">
                Nous contacter
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}