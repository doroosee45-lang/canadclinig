import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Star, Phone, Mail, MapPin,
  Sparkles, Shield, Award, Clock, ChevronRight, FileText, Leaf
} from 'lucide-react';
import { SERVICES, PACKS, STATS, TEMOIGNAGES, SEDES } from '../../data/services';
import { Section, Container, SectionHeader, ServiceCard, PackCard, TestimonialCard, StatItem } from '../../components/ui';

const FEATURED_SERVICES = SERVICES.slice(0, 6);
const FEATURED_PACKS = PACKS.slice(0, 4);

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://serviclean.be/wp-content/uploads/2023/03/Nettoyage-bureaux-Bruxelles.jpg')" }}
      />
      <div className="absolute inset-0 bg-navy-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-500/8 to-transparent" />

      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-500/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-blue-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <Container className="relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Colonne gauche ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-brand-500/20 border border-brand-500/40 text-brand-300 rounded-full px-4 py-2 text-sm font-semibold mb-6"
            >
              <Sparkles size={14} /> 47 services · 7 villes · Certifié HACCP
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              LA PROPRETÉ<br />
              <span className="gradient-text">NOTRE ENGAGEMENT,</span><br />
              VOTRE BIEN-ÊTRE !
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl"
            >
              Bienvenue chez CanadCleaning
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link to="/devis" className="btn-primary text-base px-8 py-4">
                Demander un devis <ArrowRight size={18} />
              </Link>
              <Link to="/audit" className="btn-outline text-base px-8 py-4">
                Audit gratuit
              </Link>
              <Link to="/deplient" className="btn-outline text-base px-8 py-4">
                Depliant
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Shield, text: 'Certifié HACCP' },
                { icon: Award, text: 'RC Pro incluse' },
                { icon: Clock, text: 'Urgences 4h' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon size={15} className="text-brand-400" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Colonne droite — Stats + catégories ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="font-display text-4xl font-bold text-white mb-1">{stat.value}{stat.suffix}</div>
                  <div className="text-brand-400 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { icon: '🧹', label: 'Nettoyage', count: '23 services', bg: 'bg-blue-500/20 border-blue-400/30' },
                { icon: '🍽️', label: 'Restauration', count: '12 services', bg: 'bg-orange-500/20 border-orange-400/30' },
                { icon: '🏗️', label: 'Construction', count: '12 services', bg: 'bg-yellow-500/20 border-yellow-400/30' },
              ].map(item => (
                <div key={item.label} className={`border ${item.bg} rounded-xl p-4 text-center backdrop-blur-sm`}>
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-white font-bold text-sm">{item.label}</div>
                  <div className="text-gray-400 text-xs">{item.count}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-xs flex flex-col items-center gap-1"
      >
        <span>Défiler</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <Section className="bg-white overflow-hidden py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ── Texte gauche ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 70 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-600 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <Sparkles size={14} /> Nous
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 leading-tight mb-6">
              CanadCleaning{' '}
              <span className="gradient-text"> est une agence qui </span>{' '}
              effectue des services variés
            </h2>

            <p className="text-navy-500 text-lg leading-relaxed mb-4">
              Maintenance des Bâtiments, nettoyage complet de tapis, de vitres, de parties communes d’immeuble, de bureaux, de commerces, de maisons et d’appartements.
              Chez CanadCleaning, nous développons avec nos clients des relations basées sur la confiance. Alliant professionnalisme et savoir-faire, CanadCleaning s’engage à fournir des prestations de qualité, grâce à une équipe qualifiée et expérimentée.
            </p>

            <p className="text-navy-400 text-base leading-relaxed mb-8">
              Nous utilisons des produits écologique et du matériel de qualité, afin d’assurer un entretien durable et une maintenance efficace. Dans vos maisons et appartements, notre équipe applique des solutions désinfectantes pour nettoyer les surfaces fréquemment touchées : interrupteurs, poignées de porte, salles de bain, etc.
            </p>

            <p className="text-navy-400 text-base leading-relaxed mb-8">
              Intervenant auprès des particuliers et des professionnels, CanadCleaning propose un service de nettoyage et de maintenance complet, garantissant à vos employés et à vos clients un cadre de travail agréable, sain et professionnel.uchées : interrupteurs, poignées de porte, salles de bain, etc.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                { icon: Shield, text: 'Agents certifiés HACCP' },
                { icon: Leaf, text: 'Produits écolabel' },
                { icon: Clock, text: 'Urgences sous 4h' },
                { icon: FileText, text: 'Rapport après chaque passage' },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-brand-500" />
                  </div>
                  <span className="text-navy-700 text-sm font-semibold">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Photo droite ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 70, delay: 0.15 }}
            className="relative lg:pl-6"
          >
            <div className="absolute top-6 left-6 right-0 bottom-0 rounded-3xl bg-brand-500/8 border border-brand-200/40 -z-10" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://www.canadcleaningservices.com/PHOTO%20CLEANING/image_2022-07-01_105551560.webp"
                alt="Équipe CANADCLEANING en intervention professionnelle"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-display font-bold text-base">CANADCLEANING Inc.</p>
                  <p className="text-white/70 text-xs mt-0.5">Certifié HACCP · RC Pro incluse</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-brand-400 fill-brand-400" />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, type: 'spring', stiffness: 120 }}
              className="absolute -bottom-7 -left-7 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy-900 text-xl leading-none">+1 250</p>
                  <p className="text-navy-400 text-xs mt-1">Clients satisfaits</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, type: 'spring', stiffness: 120 }}
              className="absolute -top-5 -right-4 bg-navy-900 rounded-2xl shadow-xl p-4 border border-white/10 z-10"
            >
              <p className="text-white font-display font-bold text-2xl leading-none">4.9</p>
              <div className="flex gap-0.5 my-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-brand-400 fill-brand-400" />
                ))}
              </div>
              <p className="text-gray-400 text-xs">Note moyenne</p>
            </motion.div>

            <div className="absolute -z-20 -bottom-10 -right-10 w-72 h-72 bg-brand-500/8 rounded-full blur-3xl" />
            <div className="absolute -z-20 -top-10 -left-10 w-52 h-52 bg-blue-400/6 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </Container>
    </Section>
  );
}







// ─── Expertise Section (Nettoyage & Maintenance) ─────────────────────────────
function ExpertiseSection() {
  const expertisePoints = [
    {
      icon: "🏢",
      title: "Expertise pour tous types d'espaces",
      description:
        "Immeubles résidentiels, hôtels, bureaux, établissements de santé, commerces, sites industriels et institutions publiques. Aucune mission n'est trop grande ou trop petite — de la simple remise en état d'un local à la maintenance complète d'un complexe hôtelier.",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: "🧹",
      title: "Prestations complètes et sur mesure",
      description:
        "Nettoyage quotidien, désinfection approfondie, dépoussiérage, lavage, entretien des sols et vitres à toute hauteur, remise à neuf après travaux, maintenance préventive et corrective (peinture, plomberie, électricité, menuiserie).",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: "🌿",
      title: "Engagement écologique et durable",
      description:
        "Produits écologiques certifiés et équipements modernes à faible consommation énergétique. Nous préservons la santé de vos collaborateurs et clients, tout en réduisant notre impact sur la planète.",
      gradient: "from-green-500 to-lime-600",
    },
    {
      icon: "👥",
      title: "Équipe formée et polyvalente",
      description:
        "Agents formés aux techniques les plus récentes, respectant des protocoles d'hygiène stricts. Un suivi rigoureux et des formations continues garantissent un service discret, efficace et professionnel.",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: "💰",
      title: "Solutions économiques et fiables",
      description:
        "La meilleure qualité au juste prix. Contrats flexibles adaptés à vos besoins, maîtrise de vos coûts sans compromis. Un service haut de gamme, fiable et durable, tout en optimisant vos dépenses d'entretien.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: "⭐",
      title: "Votre satisfaction, notre priorité",
      description:
        "Une relation fondée sur la confiance, la réactivité et la transparence. La satisfaction client se prouve chaque jour sur le terrain, par la qualité de nos prestations et la constance de nos résultats.",
      gradient: "from-rose-500 to-red-600",
    },
  ];

  return (
    <Section className="bg-white overflow-hidden">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <Container className="relative">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 text-brand-600 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <Sparkles size={14} /> Notre expertise
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 mb-6 leading-tight">
            Spécialistes du nettoyage
            <span className="gradient-text block mt-2">
              de toutes tailles
            </span>
          </h2>
          <p className="text-xl text-navy-500 leading-relaxed">
            Une maintenance de qualité — Des solutions sur mesure pour chaque espace
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-brand-500 to-emerald-500 rounded-full mx-auto" />
        </motion.div>

        {/* Bannière de présentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative rounded-2xl shadow-2xl mb-16 overflow-hidden"
        >
          {/* Image d'arrière-plan - plus grande et bien centrée */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?w=2000')",
            }}
          />

          {/* Superposition plus légère pour laisser voir l'image */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-navy-900/40 to-navy-800/50" />

          {/* Effet de brillance subtil */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

          {/* Contenu */}
          <div className="relative p-8 md:p-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:flex-1 backdrop-blur-[2px]">
              <div className="flex justify-center md:justify-start mb-4">
                <span className="text-5xl drop-shadow-lg">🍁</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-md">
                CanadCleaning Inc
              </h3>
              <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl drop-shadow-md">
                La propreté et la maintenance ne sont pas de simples services, mais de véritables piliers du bien-être et de la performance d'un environnement.
                Une expertise bâtie sur des années d'expérience et un savoir-faire reconnu au Canada comme à l'international.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-8">
              <div className="bg-black/30 backdrop-blur-md rounded-xl px-6 py-4 border border-white/30 shadow-lg">
                <p className="text-white font-semibold flex items-center gap-2">
                  <Shield size={18} className="text-brand-400" /> 100% satisfait ou remboursé
                </p>
                <p className="text-brand-300 text-sm">Devis gratuit sous 24h</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Grille des cartes d'expertise */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertisePoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-300`} />
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citation finale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-brand-50 to-emerald-50 rounded-2xl p-8 md:p-10 text-center"
        >
          <span className="text-4xl mb-4 inline-block">✨</span>
          <blockquote className="text-xl md:text-2xl font-medium text-navy-800 italic leading-relaxed max-w-3xl mx-auto">
            "Parce qu'un environnement propre et bien entretenu, c'est le reflet de votre image et de votre excellence."
          </blockquote>
          <div className="mt-6 h-0.5 w-16 bg-gradient-to-r from-brand-400 to-emerald-400 mx-auto" />
          <p className="mt-6 text-navy-600 text-lg">
            Avec nous, vous avez la garantie d'un{" "}
            <strong className="text-brand-700">nettoyage professionnel irréprochable</strong> et d'une{" "}
            <strong className="text-emerald-700">maintenance de qualité supérieure</strong>, à chaque intervention.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/audit" className="btn-primary">
              Passer un audit <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Découvrir nos services
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}






// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeader
          tag="47 services professionnels"
          title="Une solution pour chaque besoin"
          subtitle="Nettoyage, restauration HACCP ou construction — CANADCLEANING couvre l'ensemble de vos besoins avec des équipes spécialisées."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {FEATURED_SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
        </div>
        <div className="text-center">
          <Link to="/services" className="btn-secondary">
            Voir tous les 47 services <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// ─── Stats Banner ─────────────────────────────────────────────────────────────
function StatsBanner() {
  return (
    <section className="bg-navy-900 py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => <StatItem key={i} stat={s} index={i} />)}
        </div>
      </Container>
    </section>
  );
}

// ─── Packs Section ────────────────────────────────────────────────────────────
function PacksSection() {
  return (
    <Section>
      <Container>
        <SectionHeader
          tag="Packs clé en main"
          title="Choisissez votre formule"
          subtitle="Des packs adaptés à chaque client, avec prix transparents et prestations incluses."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {FEATURED_PACKS.map((p, i) => <PackCard key={p.id} pack={p} index={i} />)}
        </div>
        <div className="text-center">
          <Link to="/solutions" className="btn-secondary">
            Voir toutes les formules <ChevronRight size={16} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

// ─── Why Us ───────────────────────────────────────────────────────────────────
function WhyUs() {
  const reasons = [
    { icon: '🏆', title: '47 services', desc: 'Nettoyage, restauration HACCP et construction — tout en un.' },
    { icon: '🌍', title: '7 villes', desc: 'Ottawa, Kinshasa, Lubumbashi, Kolwezi, Brazzaville, Pointe-Noire, Malabo.' },
    { icon: '✅', title: 'Certifié HACCP', desc: 'Nos agents restauration sont formés et certifiés normes HACCP.' },
    { icon: '⚡', title: 'Urgences en 4h', desc: "Intervention d'urgence disponible sous 4h pour la restauration." },
    { icon: '📄', title: 'Rapport systématique', desc: 'Rapport de passage remis après chaque intervention.' },
    { icon: '💚', title: 'Éco-responsable', desc: 'Produits certifiés écolabel, à faible impact environnemental.' },
  ];
  return (
    <Section className="bg-navy-950">
      <Container>
        <SectionHeader
          light
          tag="Nos engagements"
          title="Pourquoi choisir CANADCLEANING ?"
          subtitle="La confiance de nos clients repose sur des engagements concrets et mesurables."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{r.icon}</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <SectionHeader
          tag="Témoignages clients"
          title="Ils nous font confiance"
          subtitle="Plus de 1250 clients satisfaits dans 7 villes. Voici ce qu'ils disent de nous."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMOIGNAGES.map((t, i) => <TestimonialCard key={i} t={t} index={i} />)}
        </div>
      </Container>
    </Section>
  );
}

// ─── Sièges ───────────────────────────────────────────────────────────────────
function Offices() {
  return (
    <Section>
      <Container>
        <SectionHeader
          tag="Présence internationale"
          title="Notre présence, pour mieux vous servir"
          subtitle="7 villes, 4 pays. Des équipes locales à votre service."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {SEDES.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`card p-5 text-center ${s.status === 'Ouverture prochaine' ? 'opacity-60' : ''}`}
            >
              <div className="text-3xl mb-2">{s.flag}</div>
              <h3 className="font-display font-bold text-navy-900">{s.city}</h3>
              <p className="text-navy-500 text-xs mb-2">{s.country}</p>
              <p className={`text-xs font-semibold ${s.status === 'Siège principal' ? 'text-brand-500' :
                s.status === 'Ouverture prochaine' ? 'text-gray-400' :
                  'text-green-600'
                }`}>
                {s.status}
              </p>
              {s.phone !== 'Bientôt disponible' && (
                <p className="text-navy-600 text-xs mt-1">{s.phone}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

// ─── CTA Final ────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="bg-brand-500 py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Prêt à collaborer avec nous ?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Devis gratuit en 48h · Audit gratuit sur site · Un seul interlocuteur pour tout
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/devis" className="bg-white text-brand-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg">
              Demander un devis →
            </Link>
            <Link to="/audit" className="border-2 border-white text-white hover:bg-white hover:text-brand-600 font-bold px-8 py-4 rounded-xl transition-all">
              Audit gratuit
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-orange-100 text-sm">
            <span className="flex items-center gap-2"><CheckCircle size={14} /> Devis sous 48h</span>
            <span className="flex items-center gap-2"><CheckCircle size={14} /> Produits & matériels inclus</span>
            <span className="flex items-center gap-2"><CheckCircle size={14} /> RC Pro incluse</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

// ─── Contact rapide ───────────────────────────────────────────────────────────
function QuickContact() {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              tag="Contactez-nous"
              title="Un projet ? Une question ?"
              subtitle="Notre équipe vous répond dans les 24h. Devis gratuit, sans engagement."
              center={false}
            />
            <div className="space-y-4 mt-6">
              {[
                { Icon: Phone, label: 'Canada (Ottawa)', val: '+1 (613) 769-0296' },
                { Icon: Phone, label: 'Congo (Kinshasa)', val: '+243 814 679 157' },
                { Icon: Mail, label: 'Email', val: 'info@canadcleaning.ca' },
                { Icon: MapPin, label: 'Site web', val: 'www.canadcleaning.ca' },
              ].map(({ Icon, label, val }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-50 rounded-xl flex items-center justify-center">
                    <Icon size={16} className="text-brand-500" />
                  </div>
                  <div>
                    <p className="text-xs text-navy-500 font-semibold uppercase tracking-wider">{label}</p>
                    <p className="text-navy-800 font-semibold">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8">
            <h3 className="font-display text-2xl font-bold text-navy-900 mb-6">Envoyez-nous un message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="input-field" placeholder="Prénom *" />
                <input className="input-field" placeholder="Nom *" />
              </div>
              <input className="input-field" type="email" placeholder="Email *" />
              <input className="input-field" type="tel" placeholder="Téléphone" />
              <textarea className="input-field resize-none h-28" placeholder="Votre message..." />
              <button type="button" className="btn-primary w-full justify-center">
                Envoyer le message <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

// ─── Page principale ──────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <StatsBanner />
      <PacksSection />
      <WhyUs />
      <Testimonials />
      <Offices />
      <CTASection />
      <QuickContact />
    </>
  );
}