// pages/NosCompetences.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MapPin, Clock, Building2, Users, Award, Shield, 
  Leaf, Star, Briefcase, TrendingUp, Heart, Zap, Cpu, Factory, 
  Home, Truck, Sun, Stethoscope, CheckCircle, GraduationCap,
  Wrench, Sparkles, ClipboardList, Handshake, Globe, Rocket,
  Brush, PaintBucket, Hammer, HardHat, Building,
  PackageOpen, Box, Gauge, Crosshair, PlaneTakeoff, FileCheck,
  Ruler as RulerIcon, Palette, HardDrive as HardDriveIcon, Activity,
  BarChart3, Target, TruckIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Section, Container } from '../../components/ui';

// Données des compétences principales
const MAIN_COMPETENCES = [
  {
    id: 1,
    title: "Nettoyage industriel & commercial",
    icon: Factory,
    description: "Intervention sur tous types de surfaces et d'environnements professionnels : bureaux, usines, entrepôts, commerces, hôpitaux et établissements publics.",
    features: ["Nettoyage haute pression", "Désinfection approfondie", "Gestion des déchets", "Protocoles stricts"],
    bgGradient: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800"
  },
  {
    id: 2,
    title: "Maintenance des bâtiments",
    icon: Wrench,
    description: "Entretien préventif et correctif de vos installations pour prolonger leur durée de vie et garantir leur bon fonctionnement.",
    features: ["Plomberie", "Électricité", "Menuiserie", "Peinture et revêtements"],
    bgGradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800"
  },
  {
    id: 3,
    title: "Construction & Génie civil",
    icon: Hammer,
    description: "Réalisation de projets de construction clé en main : immeubles, routes, ponts et infrastructures publiques. Une équipe d'ingénieurs et d'architectes à votre service.",
    features: ["Gros œuvre", "Second œuvre", "VRD & voiries", "Études techniques"],
    bgGradient: "from-yellow-50 to-amber-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-700",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
  },
  {
    id: 4,
    title: "Logistique & Transit douanier",
    icon: Truck,
    description: "Gestion complète de votre chaîne logistique, transport international et dédouanement de marchandises. Une expertise reconnue en Afrique et à l'international.",
    features: ["Dédouanement", "Transport fret", "Entreposage", "Tracking en temps réel"],
    bgGradient: "from-cyan-50 to-blue-50",
    borderColor: "border-cyan-200",
    iconColor: "text-cyan-600",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
  },
  {
    id: 5,
    title: "Placement & gestion du personnel",
    icon: Users,
    description: "Recrutement, formation et gestion administrative de vos équipes de nettoyage et de maintenance.",
    features: ["Recrutement qualitatif", "Gestion des plannings", "Suivi des performances", "Remplacement garanti"],
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
  },
  {
    id: 6,
    title: "Formation professionnelle",
    icon: GraduationCap,
    description: "Programmes de formation certifiants pour vos équipes aux métiers du nettoyage, de la maintenance et de l'hygiène.",
    features: ["Certification HACCP", "Normes d'hygiène", "Sécurité au travail", "Utilisation des équipements"],
    bgGradient: "from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800"
  },
  {
    id: 7,
    title: "Sécurité & gardiennage",
    icon: Shield,
    description: "Protection de vos biens et de vos collaborateurs avec des agents formés et des équipements modernes.",
    features: ["Vidéosurveillance", "Contrôle d'accès", "Rondes de sécurité", "Intervention rapide"],
    bgGradient: "from-red-50 to-rose-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
  },
  {
    id: 8,
    title: "Énergie & Électricité",
    icon: Zap,
    description: "Installation et maintenance de réseaux électriques, solutions solaires et énergies renouvelables.",
    features: ["HT/BT", "Éclairage public", "Panneaux solaires", "Groupes électrogènes"],
    bgGradient: "from-sky-50 to-blue-50",
    borderColor: "border-sky-200",
    iconColor: "text-sky-600",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800"
  }
];

// Données des compétences spécifiques
const SPECIFIC_COMPETENCES = [
  { id: 1, title: "Nettoyage des vitres en hauteur", icon: Sparkles, level: 98, description: "Intervention sécurisée sur toutes hauteurs" },
  { id: 2, title: "Désinfection HACCP", icon: Shield, level: 100, description: "Normes sanitaires rigoureuses" },
  { id: 3, title: "Traitement des sols", icon: Brush, level: 95, description: "Carrelage, parquet, marbre, béton ciré" },
  { id: 4, title: "Gestion des urgences", icon: Clock, level: 97, description: "Intervention sous 4h" },
  { id: 5, title: "Maintenance préventive", icon: Wrench, level: 94, description: "Planification et suivi" },
  { id: 6, title: "Formation continue", icon: GraduationCap, level: 96, description: "Mise à niveau régulière" },
  { id: 7, title: "Dédouanement express", icon: FileCheck, level: 93, description: "Traitement douanier sous 48h" },
  { id: 8, title: "Transport international", icon: PlaneTakeoff, level: 91, description: "Afrique, Europe, Amérique" },
  { id: 9, title: "Construction durable", icon: Leaf, level: 94, description: "Matériaux écologiques certifiés" },
  { id: 10, title: "Gestion de projet BTP", icon: BarChart3, level: 96, description: "Suivi rigoureux des délais" },
];

// Données des compétences en construction (détaillées)
const CONSTRUCTION_SKILLS = [
  { name: "Gros œuvre (béton armé)", level: 95, icon: Building },
  { name: "Second œuvre & finitions", level: 93, icon: Palette },
  { name: "VRD & réseaux divers", level: 94, icon: RulerIcon },
  { name: "Construction d'immeubles R+", level: 96, icon: Building2 },
  { name: "Construction de routes", level: 92, icon: MapPin },
  { name: "Terrassement & fondations", level: 94, icon: HardHat },
  { name: "Plans & études techniques", level: 90, icon: FileCheck },
  { name: "Signalisation routière", level: 88, icon: Target },
];

// Données des compétences en logistique & douane
const LOGISTICS_SKILLS = [
  { name: "Dédouanement maritime & aérien", level: 95, icon: Truck },
  { name: "Transport fret international", level: 93, icon: PlaneTakeoff },
  { name: "Entreposage & stockage", level: 91, icon: Home },
  { name: "Gestion douanière (DAU, DUA)", level: 94, icon: FileCheck },
  { name: "Transit express sous 48h", level: 92, icon: Clock },
  { name: "Tracking & suivi en temps réel", level: 89, icon: Globe },
  { name: "Emballage & palettisation", level: 90, icon: PackageOpen },
  { name: "Assurance transport", level: 88, icon: Shield },
];

// Données des certifications
const CERTIFICATIONS = [
  { id: 1, name: "ISO 9001", description: "Qualité management", icon: Award },
  { id: 2, name: "HACCP", description: "Hygiène alimentaire", icon: Shield },
  { id: 3, name: "ISO 14001", description: "Environnement", icon: Leaf },
  { id: 4, name: "Certifié Écologique", description: "Produits écolabel", icon: Leaf },
  { id: 5, name: "RC Pro", description: "Responsabilité civile", icon: Shield },
  { id: 6, name: "Sécurité au travail", description: "Formation SST", icon: HardHat },
  { id: 7, name: "Agrément Douane", description: "Commissionnaire agréé", icon: FileCheck },
  { id: 8, name: "Qualibat", description: "Construction certifiée", icon: Building },
];

// Données des valeurs ajoutées
const ADDED_VALUES = [
  { id: 1, icon: Rocket, title: "Expertise éprouvée", description: "Des années d'expérience et des milliers de clients satisfaits" },
  { id: 2, icon: Leaf, title: "Engagement écologique", description: "Produits certifiés et matériels basse consommation" },
  { id: 3, icon: Clock, title: "Réactivité 24/7", description: "Intervention rapide en cas d'urgence" },
  { id: 4, icon: Users, title: "Équipe qualifiée", description: "Formation continue de nos agents" },
  { id: 5, icon: Briefcase, title: "Solutions sur mesure", description: "Prestations adaptées à vos besoins spécifiques" },
  { id: 6, icon: Handshake, title: "Relation de confiance", description: "Transparence et suivi personnalisé" },
  { id: 7, icon: Globe, title: "Présence internationale", description: "Intervention au Canada et en Afrique" },
  { id: 8, icon: Heart, title: "Engagement humain", description: "Création d'emplois et développement local" },
  { id: 9, icon: Truck, title: "Expertise douanière", description: "Dédouanement rapide et conforme" },
  { id: 10, icon: HardHat, title: "Construction durable", description: "Bâtiments écologiques et performants" },
];

// Composant pour une carte de compétence principale
function CompetenceCard({ competence, index }) {
  const IconComponent = competence.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`group bg-gradient-to-br ${competence.bgGradient} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${competence.borderColor}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={competence.image}
          alt={competence.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
          <div className={`w-8 h-8 rounded-lg ${competence.iconColor} bg-white shadow-sm flex items-center justify-center`}>
            <IconComponent size={16} />
          </div>
          <div className="text-left">
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Expertise</p>
            <p className="text-xs font-bold text-gray-800 leading-tight">Certifiée</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center ${competence.iconColor} flex-shrink-0`}>
            <IconComponent size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{competence.title}</h3>
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{competence.description}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {competence.features.map((feature, i) => (
            <span key={i} className="text-xs bg-white/80 text-gray-700 px-2.5 py-1 rounded-full border border-gray-200 shadow-sm flex items-center gap-1">
              <CheckCircle size={10} className={competence.iconColor} /> {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Composant pour une compétence spécifique avec barre de progression
function SpecificSkillCard({ skill, index }) {
  const IconComponent = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all border border-gray-100"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
            <IconComponent size={18} />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{skill.title}</h4>
            <p className="text-xs text-gray-500">{skill.description}</p>
          </div>
        </div>
        <span className="text-lg font-bold text-brand-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.8 }}
          className="bg-gradient-to-r from-brand-500 to-indigo-500 h-2 rounded-full"
        />
      </div>
    </motion.div>
  );
}

// Section compétences Construction
function ConstructionSkillsSection() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-yellow-100 border border-yellow-200 text-yellow-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <HardHat size={14} /> Bâtiment & Travaux Publics
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            Construction <span className="gradient-text">& Génie Civil</span>
          </h2>
          <p className="text-navy-500">
            Une expertise complète pour vos projets de construction et d'infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800"
                alt="Chantier de construction"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-sm font-semibold text-yellow-300 mb-1">Canaco Group</p>
                <p className="text-xl font-bold">Construction clé en main</p>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-5 border border-yellow-100">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-yellow-700">Canaco Group</strong>, notre division construction, réalise des projets d'envergure :
                immeubles R+3, R+5 et plus, routes bitumées, ponts et infrastructures publiques.
                Une équipe d'ingénieurs et d'architectes agréés pour des réalisations aux normes internationales.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {CONSTRUCTION_SKILLS.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-gray-50 rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <IconComponent size={16} className="text-yellow-600" />
                      <span className="font-semibold text-gray-700 text-sm">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-yellow-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="bg-gradient-to-r from-yellow-500 to-amber-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Section compétences Logistique & Douane
function LogisticsSkillsSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-cyan-100 border border-cyan-200 text-cyan-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Truck size={14} /> Transport & Transit
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            Logistique <span className="gradient-text">& Dédouanement</span>
          </h2>
          <p className="text-navy-500">
            Des solutions logistiques intégrées pour vos importations et exportations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {LOGISTICS_SKILLS.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <IconComponent size={16} className="text-cyan-600" />
                      <span className="font-semibold text-gray-700 text-sm">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-cyan-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800"
                alt="Logistique et transport"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-sm font-semibold text-cyan-300 mb-1">AfriLogistique</p>
                <p className="text-xl font-bold">Transit express & dédouanement</p>
              </div>
            </div>
            <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-cyan-700">AfriLogistique</strong>, notre division transport, assure le transit de vos marchandises
                par voie maritime, aérienne et terrestre. Service de dédouanement express sous 48h,
                entreposage sécurisé et tracking en temps réel. Partenaires des douanes locales et internationales.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Section hero
function CompetencesHero() {
  return (
    <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium mb-6"
          >
            <Sparkles size={16} className="text-brand-400" />
            Notre savoir-faire
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
          >
            Nos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400">
              Compétences
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Une expertise multi-sectorielle au service de votre réussite
          </motion.p>
        </div>
      </Container>
    </div>
  );
}

// Section Description détaillée
function CompetencesDescription() {
  return (
    <Section className="bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-5xl mb-6">🎯</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Une expertise <span className="gradient-text">polyvalente</span> à votre service
          </h2>
          <div className="prose prose-lg text-navy-500 mx-auto space-y-4 text-left">
            <p className="leading-relaxed">
              Chez <strong className="text-brand-600">CanadCleaning Inc</strong>, notre expertise repose sur un savoir-faire éprouvé et une équipe hautement qualifiée. 
              Nous allions rigueur, efficacité et professionnalisme pour garantir des prestations irréprochables, adaptées aux besoins de chaque client.
            </p>
            <p className="leading-relaxed">
              Nos compétences couvrent un large éventail de services, incluant le <strong>nettoyage industriel et commercial</strong>, la 
              <strong>maintenance des bâtiments</strong>, la <strong>construction</strong>, la <strong>logistique et le dédouanement</strong>, 
              le <strong>placement et la gestion du personnel</strong>, ainsi que la <strong>formation professionnelle</strong>.
            </p>
            <p className="leading-relaxed">
              Grâce à une organisation précise et une logistique performante, nous intervenons dans les délais impartis, avec une attention constante 
              portée à la qualité et à la sécurité. Fiers de notre expérience, nous investissons continuellement dans la formation de notre personnel 
              et dans l'utilisation de matériels modernes et écologiques.
            </p>
            <p className="leading-relaxed">
              Cette approche nous permet d'offrir des <strong>solutions durables et sur mesure</strong>, tout en respectant les normes environnementales 
              les plus exigeantes. Avec <strong className="text-brand-600">CanadCleaning Inc</strong>, vous bénéficiez d'un partenaire de confiance, 
              engagé à maintenir vos espaces propres, sains et fonctionnels, dans un esprit d'excellence et de responsabilité.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

// Section certifications
function CertificationsSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Award size={14} /> Nos labels
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
            Certifications & Agréments
          </h2>
          <p className="text-navy-500">
            Des garanties de qualité reconnues par les plus grands organismes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, i) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-3">
                  <IconComponent size={20} className="text-brand-600" />
                </div>
                <h3 className="font-bold text-sm text-gray-800">{cert.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{cert.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

// Section stats spécifiques
function CompetencesStats() {
  const stats = [
    { value: "15+", label: "Années d'expertise", icon: Award },
    { value: "1000+", label: "Clients satisfaits", icon: Users },
    { value: "98%", label: "Taux de satisfaction", icon: Star },
    { value: "24/7", label: "Service d'urgence", icon: Clock },
    { value: "50+", label: "Services proposés", icon: Briefcase },
    { value: "100%", label: "Formation continue", icon: GraduationCap },
  ];

  return (
    <Section className="bg-gradient-to-r from-navy-900 to-navy-800">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Chiffres clés
          </h2>
          <p className="text-gray-300">
            Des résultats qui parlent d'eux-mêmes
          </p>
        </div>
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
                <stat.icon size={24} className="text-brand-400" />
              </div>
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Page principale
export default function NosCompetences() {
  return (
    <>
      <CompetencesHero />
      
      <CompetencesDescription />

      {/* Compétences principales */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Sparkles size={14} /> Notre cœur de métier
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Nos Domaines d'Excellence
            </h2>
            <p className="text-navy-500">
              Des compétences complémentaires pour une prise en charge globale de vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {MAIN_COMPETENCES.map((competence, index) => (
              <CompetenceCard key={competence.id} competence={competence} index={index} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Section Construction */}
      <ConstructionSkillsSection />

      {/* Section Logistique & Douane */}
      <LogisticsSkillsSection />

      {/* Compétences spécifiques */}
      <Section className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
                <TrendingUp size={14} /> Notre maîtrise
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Compétences <span className="gradient-text">clés</span>
              </h2>
              <p className="text-navy-500 mb-6">
                Des savoir-faire précis et mesurables, au service de la qualité de nos prestations
              </p>
              <div className="space-y-4">
                {SPECIFIC_COMPETENCES.map((skill, index) => (
                  <SpecificSkillCard key={skill.id} skill={skill} index={index} />
                ))}
              </div>
            </div>

            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
                  alt="Équipe CanadCleaning en action"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold text-brand-300 mb-1">Notre équipe en action</p>
                  <p className="text-xl font-bold">Des professionnels dévoués</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 text-center border border-green-100">
                  <Leaf size={24} className="text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">100% écologique</p>
                  <p className="text-xs text-gray-500">Produits certifiés</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                  <Clock size={24} className="text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-800">Intervention rapide</p>
                  <p className="text-xs text-gray-500">Sous 4h en urgence</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CertificationsSection />

      {/* Valeurs ajoutées */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-100 border border-brand-200 text-brand-700 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              <Heart size={14} /> Nos engagements
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Nos Valeurs Ajoutées
            </h2>
            <p className="text-navy-500">
              Ce qui fait la différence chez CanadCleaning Inc
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {ADDED_VALUES.map((value, i) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-3">
                    <IconComponent size={20} className="text-brand-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{value.title}</h3>
                  <p className="text-xs text-gray-500">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      <CompetencesStats />

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
              Mettez notre expertise à votre service
            </h2>
            <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé
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