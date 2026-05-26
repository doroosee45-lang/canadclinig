import { Link } from 'react-router-dom';
import { Mail, Globe } from 'lucide-react';
import { SEDES } from '../../data/services';

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const SERVICES_LINKS = [
  'Nettoyage commercial','Nettoyage résidentiel','Restauration HACCP','Nettoyage à la vapeur',
  'Construction immeubles','Construction routes','Fin de bail','Gardiennage',
];

const NAV_LINKS = [
  ['Audit gratuit','/audit'],['Demander un devis','/devis'],['Nos réalisations','/realisations'],
  ['Grille tarifaire','/tarifs'],['Blog & actualités','/blog'],['Notre équipe','/experts'],
  ['Espace client','/login'],['Contact','/contact'],
];

const SOCIALS = [
  { Icon: FacebookIcon,  href: '#', label: 'Facebook'  },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: LinkedinIcon,  href: '#', label: 'LinkedIn'  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">

      {/* Accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30 flex-shrink-0">
              <span className="text-white font-display font-bold text-lg tracking-tight">CC</span>
            </div>
            <div>
              <p className="font-display text-base font-bold tracking-wider leading-none">CANADCLEANING</p>
              <p className="text-brand-400 text-[10px] tracking-widest uppercase mt-0.5">Nettoyage · Construction</p>
            </div>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Construire proprement, nettoyer durablement.<br/>
            47 services professionnels dans 7 villes.
          </p>

          <div className="space-y-2">
            <a href="mailto:info@canadcleaning.ca" className="flex items-center gap-2 text-xs text-gray-400 hover:text-brand-400 transition-colors group">
              <span className="w-6 h-6 rounded-md bg-white/5 group-hover:bg-brand-500/20 flex items-center justify-center transition-colors flex-shrink-0">
                <Mail size={11}/>
              </span>
              info@canadcleaning.ca
            </a>
            <a href="https://www.canadcleaning.ca" className="flex items-center gap-2 text-xs text-gray-400 hover:text-brand-400 transition-colors group">
              <span className="w-6 h-6 rounded-md bg-white/5 group-hover:bg-brand-500/20 flex items-center justify-center transition-colors flex-shrink-0">
                <Globe size={11}/>
              </span>
              www.canadcleaning.ca
            </a>
          </div>

          <div className="flex gap-2">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 bg-white/8 hover:bg-brand-500 border border-white/10 hover:border-brand-500 rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">Services</h4>
          <ul className="space-y-2">
            {SERVICES_LINKS.map(s => (
              <li key={s}>
                <Link to="/services" className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors group">
                  <span className="w-1 h-1 rounded-full bg-brand-500/50 group-hover:bg-brand-400 transition-colors flex-shrink-0" />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">Navigation</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-400 transition-colors group">
                  <span className="w-1 h-1 rounded-full bg-brand-500/50 group-hover:bg-brand-400 transition-colors flex-shrink-0" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sièges */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/50 mb-5">Nos sièges</h4>
          <ul className="space-y-3">
            {SEDES.slice(0, 5).map(s => (
              <li key={s.city} className="flex items-start gap-2.5 group">
                <span className="text-base leading-none mt-0.5 flex-shrink-0">{s.flag}</span>
                <div>
                  <p className="text-sm text-white font-semibold leading-tight group-hover:text-brand-400 transition-colors">{s.city}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.phone}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} <span className="text-gray-500 font-semibold">CANADCLEANING</span> — Tous droits réservés.
          </p>
          <div className="flex items-center gap-1">
            {[['Mentions légales','/a-propos'],['Confidentialité','/a-propos'],['CGV','/contact']].map(([label, to], i, arr) => (
              <span key={label} className="flex items-center gap-1">
                <Link to={to} className="text-xs text-gray-600 hover:text-gray-300 transition-colors">{label}</Link>
                {i < arr.length - 1 && <span className="text-gray-700 text-xs">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}