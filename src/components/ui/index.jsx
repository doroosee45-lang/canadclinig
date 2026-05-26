import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Check, ArrowRight, X, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

// ─── Section Wrapper ──────────────────────────────────────────────────────────
export function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      {children}
    </section>
  );
}

export function Container({ children, className = '' }) {
  return <div className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</div>;
}

// ─── Section Header ───────────────────────────────────────────────────────────
export function SectionHeader({ tag, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`section-tag ${light ? 'bg-white/10 text-white border-white/20' : ''}`}
        >
          {tag}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`section-title mb-4 ${light ? 'text-white' : ''}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`section-subtitle max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-300' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// ─── Service Card + Modal ─────────────────────────────────────────────────────
const CAT_ACCENT = {
  nettoyage:    { badge: 'bg-sky-500/90 text-white',    bar: 'bg-sky-500',    label: 'Nettoyage' },
  restauration: { badge: 'bg-orange-500/90 text-white', bar: 'bg-orange-500', label: 'Restauration' },
  construction: { badge: 'bg-amber-500/90 text-white',  bar: 'bg-amber-500',  label: 'Construction' },
};

function ServiceModal({ service, onClose }) {
  const cat = CAT_ACCENT[service.cat];
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-lg"
          onClick={e => e.stopPropagation()}
        >
          {/* Image header */}
          <div className="relative h-56 overflow-hidden bg-navy-900">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
            {/* Fallback */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950 -z-10">
              <span className="text-7xl">{service.icon}</span>
            </div>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Badge */}
            <span className={`absolute top-4 left-4 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${cat.badge}`}>
              {cat.label}
            </span>

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={16} />
            </button>

            {/* Title over image */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">{service.icon}</span>
                <h2 className="font-display text-xl font-bold text-white leading-tight">{service.title}</h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Accent bar */}
            <div className={`h-1 w-16 ${cat.bar} rounded-full mb-4`} />

            <p className="text-navy-600 text-sm leading-relaxed mb-6">{service.desc}</p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400 mb-1">Tarif</p>
                <p className="font-display font-bold text-navy-900 text-lg">{service.price}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-navy-400 mb-1">Catégorie</p>
                <p className="font-display font-bold text-navy-900 text-lg capitalize">{service.cat}</p>
              </div>
            </div>

            {/* Points forts */}
            <div className="space-y-2 mb-6">
              {[
                'Agents certifiés et assurés',
                'Rapport de passage systématique',
                'Matériel & produits inclus',
                'Intervention rapide sur devis',
              ].map(pt => (
                <div key={pt} className="flex items-center gap-2 text-sm text-navy-700">
                  <span className="w-5 h-5 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-brand-500" />
                  </span>
                  {pt}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <Link
                to="/devis"
                className="flex-1 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm py-3 px-4 rounded-xl text-center transition-colors"
                onClick={onClose}
              >
                Demander un devis
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-gray-200 text-navy-600 hover:border-brand-400 hover:text-brand-500 text-sm font-semibold transition-colors"
                onClick={onClose}
              >
                <Phone size={14} /> Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ServiceCard({ service, index = 0 }) {
  const [showModal, setShowModal] = useState(false);
  const cat = CAT_ACCENT[service.cat];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.06, duration: 0.45 }}
        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100/80 transition-all duration-400 hover:-translate-y-1.5 flex flex-col cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        {/* ── Image ── */}
        <div className="relative h-48 overflow-hidden bg-navy-900 flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={e => { e.currentTarget.style.display = 'none'; }}
          />
          {/* Fallback fond + emoji */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950 -z-10">
            <span className="text-6xl opacity-60">{service.icon}</span>
          </div>

          {/* Overlay au hover */}
          <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/30 transition-all duration-300" />

          {/* Bouton voir détails — apparaît au hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white text-navy-900 font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
              Voir les détails <ArrowRight size={12} />
            </span>
          </div>

          {/* Badge catégorie */}
          <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${cat.badge} backdrop-blur-sm`}>
            {cat.label}
          </span>

          {/* Emoji en bas à droite */}
          <div className="absolute bottom-3 right-3 w-9 h-9 bg-white rounded-xl shadow-md flex items-center justify-center text-lg">
            {service.icon}
          </div>

          {/* Barre colorée en bas */}
          <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${cat.bar} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
        </div>

        {/* ── Contenu ── */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-display font-bold text-navy-900 text-[15px] leading-snug mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
            {service.title}
          </h3>
          <p className="text-navy-500 text-xs leading-relaxed flex-1 mb-4 line-clamp-2">
            {service.desc}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <span className="font-display font-bold text-brand-500 text-sm">{service.price}</span>
            <span className="flex items-center gap-1 text-[11px] font-bold text-navy-400 group-hover:text-brand-500 transition-colors">
              Détails <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {showModal && <ServiceModal service={service} onClose={() => setShowModal(false)} />}
    </>
  );
}

// ─── Pack Card ────────────────────────────────────────────────────────────────
export function PackCard({ pack, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative card p-7 flex flex-col ${pack.popular ? 'border-2 border-brand-500 shadow-brand' : ''}`}
    >
      {pack.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
          ⭐ Populaire
        </div>
      )}
      <div className="text-3xl mb-3">{pack.icon}</div>
      <p className="text-xs text-brand-500 font-bold uppercase tracking-widest mb-1">{pack.subtitle}</p>
      <h3 className="font-display text-xl font-bold text-navy-900 mb-4">{pack.title}</h3>
      <div className="flex items-baseline gap-1 mb-5">
        <span className="font-display text-3xl font-bold text-navy-900">{pack.price}</span>
        {pack.unit && <span className="text-navy-500 text-sm">{pack.unit}</span>}
      </div>
      <ul className="space-y-2 mb-6 flex-1">
        {pack.features.map(f => (
          <li key={f} className="flex items-start gap-2 text-sm text-navy-700">
            <Check size={15} className="text-brand-500 flex-shrink-0 mt-0.5" />
            {f}
          </li>
        ))}
      </ul>
      <a href="/devis" className={`w-full text-center py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
        pack.popular
          ? 'bg-brand-500 hover:bg-brand-600 text-white shadow-brand'
          : 'bg-navy-50 hover:bg-navy-100 text-navy-800 border border-navy-200'
      }`}>
        Demander un devis
      </a>
    </motion.div>
  );
}

// ─── Testimonial Card ─────────────────────────────────────────────────────────
export function TestimonialCard({ t, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="card p-6"
    >
      <div className="flex gap-1 mb-3">
        {[...Array(t.note)].map((_, i) => (
          <Star key={i} size={14} className="fill-brand-500 text-brand-500" />
        ))}
      </div>
      <p className="text-navy-700 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
      <div>
        <p className="font-bold text-navy-900 text-sm">{t.name}</p>
        <p className="text-navy-500 text-xs">{t.role}</p>
      </div>
    </motion.div>
  );
}

// ─── Stat Item ────────────────────────────────────────────────────────────────
export function StatItem({ stat, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      className="text-center"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
        {stat.value}{stat.suffix}
      </div>
      <p className="text-brand-300 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
    </motion.div>
  );
}

// ─── Page Header ──────────────────────────────────────────────────────────────
export function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <div className="bg-navy-900 pt-32 pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {breadcrumb && (
            <p className="text-brand-400 text-sm font-semibold uppercase tracking-widest mb-3">{breadcrumb}</p>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      </Container>
    </div>
  );
}

// ─── Filter Tabs ──────────────────────────────────────────────────────────────
export function FilterTabs({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
            active === tab.id
              ? 'bg-brand-500 text-white shadow-brand'
              : 'bg-white text-navy-700 border border-gray-200 hover:border-brand-400 hover:text-brand-500'
          }`}
        >
          {tab.label} {tab.count && <span className="ml-1 opacity-70">({tab.count})</span>}
        </button>
      ))}
    </div>
  );
}