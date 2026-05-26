import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin,
  Sparkles, Shield, Award, Clock, ChevronRight } from 'lucide-react';
import { SERVICES, PACKS, STATS, TEMOIGNAGES, SEDES } from '../../data/services';
import { Section, Container, SectionHeader, ServiceCard, PackCard, TestimonialCard, StatItem } from '../../components/ui';

const FEATURED_SERVICES = SERVICES.slice(0, 6);
const FEATURED_PACKS    = PACKS.slice(0, 4);

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">

      {/* Photo de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://serviclean.be/wp-content/uploads/2023/03/Nettoyage-bureaux-Bruxelles.jpg')" }}
      />

      {/* Overlays pour lisibilité */}
      <div className="absolute inset-0 bg-navy-950/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-500/8 to-transparent" />

      {/* Blobs animés */}
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
              CANADCLEANING est votre partenaire de confiance pour des services de nettoyage professionnels, fiables et adaptés à tous vos besoins. De la construction à l'entretien durable.
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

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: Shield, text: 'Certifié HACCP' },
                { icon: Award,  text: 'RC Pro incluse' },
                { icon: Clock,  text: 'Urgences 4h' },
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

            {/* Catégories */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { icon: '🧹', label: 'Nettoyage',    count: '23 services', bg: 'bg-blue-500/20 border-blue-400/30' },
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

      {/* Scroll indicator */}
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
    { icon: '🏆', title: '47 services',          desc: 'Nettoyage, restauration HACCP et construction — tout en un.' },
    { icon: '🌍', title: '7 villes',              desc: 'Ottawa, Kinshasa, Lubumbashi, Kolwezi, Brazzaville, Pointe-Noire, Malabo.' },
    { icon: '✅', title: 'Certifié HACCP',        desc: 'Nos agents restauration sont formés et certifiés normes HACCP.' },
    { icon: '⚡', title: 'Urgences en 4h',        desc: "Intervention d'urgence disponible sous 4h pour la restauration." },
    { icon: '📄', title: 'Rapport systématique', desc: 'Rapport de passage remis après chaque intervention.' },
    { icon: '💚', title: 'Éco-responsable',       desc: 'Produits certifiés écolabel, à faible impact environnemental.' },
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
              <p className={`text-xs font-semibold ${
                s.status === 'Siège principal'      ? 'text-brand-500' :
                s.status === 'Ouverture prochaine'  ? 'text-gray-400'  :
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
                { Icon: Phone, label: 'Canada (Ottawa)',  val: '+1 (613) 769-0296' },
                { Icon: Phone, label: 'Congo (Kinshasa)', val: '+243 814 679 157' },
                { Icon: Mail,  label: 'Email',            val: 'info@canadcleaning.ca' },
                { Icon: MapPin,label: 'Site web',         val: 'www.canadcleaning.ca' },
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