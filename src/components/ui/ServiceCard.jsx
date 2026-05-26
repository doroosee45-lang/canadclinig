import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Couleur d'accent par catégorie
const CAT_ACCENT = {
  nettoyage:    'bg-blue-500/20 text-blue-300 border-blue-400/30',
  restauration: 'bg-orange-500/20 text-orange-300 border-orange-400/30',
  construction: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
};

const CAT_LABEL = {
  nettoyage:    'Nettoyage',
  restauration: 'Restauration',
  construction: 'Construction',
};

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-200 transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* ── Photo ── */}
      <div className="relative h-44 overflow-hidden bg-navy-100 flex-shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={e => {
            // Fallback : fond coloré + emoji si l'image est absente
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* Fallback emoji (visible si pas d'image) */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950 opacity-0 group-[.no-img]:opacity-100 transition-opacity">
          <span className="text-5xl">{service.icon}</span>
        </div>

        {/* Badge catégorie */}
        <div className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-sm ${CAT_ACCENT[service.cat]}`}>
          {CAT_LABEL[service.cat]}
        </div>

        {/* Icône en overlay bas-droite */}
        <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl shadow-sm">
          {service.icon}
        </div>

        {/* Dégradé bas pour lisibilité */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* ── Contenu ── */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-navy-900 text-base leading-snug mb-2 group-hover:text-brand-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-navy-500 text-sm leading-relaxed flex-1 mb-4">
          {service.desc}
        </p>

        {/* Footer carte */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
          <span className="text-brand-500 font-bold text-sm">{service.price}</span>
          <Link
            to={`/services/${service.id}`}
            className="flex items-center gap-1 text-xs font-semibold text-navy-400 hover:text-brand-500 transition-colors group/link"
          >
            Détails
            <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}