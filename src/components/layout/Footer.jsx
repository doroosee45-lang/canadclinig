import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin, Phone, Clock, Award, Send } from 'lucide-react';

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

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
  </svg>
);

const SERVICES_LINKS = [
  { name: 'Nettoyage commercial', path: '/services#nettoyage' },
  { name: 'Nettoyage résidentiel', path: '/services#nettoyage' },
  { name: 'Restauration HACCP', path: '/services#restauration' },
  { name: 'Construction immeubles', path: '/services#construction' },
  { name: 'Construction routes', path: '/services#construction' },
  { name: 'Gardiennage', path: '/services#securite' },
];

const NAV_LINKS = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Réalisations', path: '/realisations' },
  { label: 'Tarifs', path: '/tarifs' },
  { label: 'Équipe', path: '/experts' },
  { label: 'Audit gratuit', path: '/audit' },
  { label: 'Devis', path: '/devis' },
  { label: 'Contact', path: '/contact' },
];

const SOCIALS = [
  { Icon: FacebookIcon, href: 'https://facebook.com/canadcleaning', label: 'Facebook' },
  { Icon: InstagramIcon, href: 'https://instagram.com/canadcleaning', label: 'Instagram' },
  { Icon: LinkedinIcon, href: 'https://linkedin.com/company/canadcleaning', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: 'https://twitter.com/canadcleaning', label: 'Twitter' },
];

const FOOTER_CONTACTS = [
  {
    flag: "🇨🇦",
    country: "Canada",
    phone: "+1 613-769-0296",
    phone2: "+1 613-301-4085",
    phone3: "+1 613-406-3868",
    email: "info@canadcleaning.ca"
  },
  {
    flag: "🇨🇬",
    country: "Congo-Brazzaville",
    phone: "+242 06 969 3399",
    phone2: "+242 05 305 6366",
    phone3: "+242 06 636 68053",
    email: "congo@canadcleaning.ca"
  },
  {
    flag: "🇨🇩",
    country: "R.D. Congo",
    phone: "+243 814 679 157",
    phone2: "+243 819 496 662",
    phone3: "+243 970 859 332",
    email: "rdc@canadcleaning.ca"
  }
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden font-['Poppins',sans-serif]">
      {/* Accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1 - Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-brand-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/30">
                <span className="text-white font-bold text-sm tracking-tight">CC</span>
              </div>
              <div>
                <p className="font-semibold text-sm tracking-wide text-white">CANADCLEANING</p>
                <p className="text-brand-400 text-[9px] tracking-wider uppercase">Nettoyage · Construction</p>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed">
              47 services professionnels dans 7 villes.
            </p>

            <div className="space-y-2">
              <a href="mailto:info@canadcleaning.ca" className="flex items-center gap-2 text-xs text-gray-400 hover:text-brand-400 transition-colors">
                <Mail size={12} />
                <span>info@canadcleaning.ca</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Clock size={12} />
                <span>Urgence 24/7</span>
              </div>
            </div>

            <div className="flex gap-2">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 bg-white/5 hover:bg-brand-500 border border-white/10 hover:border-brand-500 rounded-lg flex items-center justify-center transition-all duration-200 text-gray-400 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Newsletter - S'abonner */}
            <div className="mt-2 pt-2 border-t border-white/10">
  <p className="text-xs text-gray-300 mb-2">Recevez nos offres</p>
  <div className="flex">
    <input
      type="email"
      placeholder="Votre email"
      className="flex-1 px-3 py-2 text-xs rounded-l-lg bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-400"
    />
    <button className="px-3 py-2 bg-brand-500 hover:bg-brand-600 rounded-r-lg transition-colors">
      <Send size={14} />
    </button>
  </div>
  <p className="text-[9px] text-gray-500 mt-1">
    Non, merci — Je ne souhaite pas recevoir d'offres
  </p>
</div>
          </div>

          {/* Colonne 2 - Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white mb-3">Nos services</h4>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((service) => (
                <li key={service.name}>
                  <Link to={service.path} className="text-xs text-gray-300 hover:text-brand-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white mb-3">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-xs text-gray-300 hover:text-brand-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white mb-3">Contactez-nous</h4>
            <div className="space-y-3">
              {FOOTER_CONTACTS.map((contact, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-base">{contact.flag}</span>
                    <span className="text-white text-xs font-medium">{contact.country}</span>
                  </div>
                  <div className="pl-6 space-y-1">
                    <div className="flex items-center gap-2">
                      <Phone size={10} className="text-gray-500 shrink-0" />
                      <div className="flex flex-wrap gap-x-1 text-xs text-gray-400">
                        <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="hover:text-brand-400 transition-colors">{contact.phone}</a>
                        <span className="text-gray-600">/</span>
                        <a href={`tel:${contact.phone2.replace(/\s/g, '')}`} className="hover:text-brand-400 transition-colors">{contact.phone2}</a>
                        {contact.phone3 && (
                          <>
                            <span className="text-gray-600">/</span>
                            <a href={`tel:${contact.phone3.replace(/\s/g, '')}`} className="hover:text-brand-400 transition-colors">{contact.phone3}</a>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={10} className="text-gray-500 shrink-0" />
                      <a href={`mailto:${contact.email}`} className="text-xs text-gray-400 hover:text-brand-400 transition-colors">
                        {contact.email}
                      </a>
                    </div>
                  </div>
                  {idx < FOOTER_CONTACTS.length - 1 && <div className="border-t border-white/5 my-2" />}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <Link to="/contact" className="flex items-center justify-between text-xs text-gray-400 hover:text-brand-400 transition-colors">
                <span>Tous nos contacts</span>
                <span className="text-brand-400">→</span>
              </Link>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <Award size={11} className="text-brand-400" />
              <p className="text-[10px] text-gray-500">Intervention sous 4h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-gray-500">
            © {new Date().getFullYear()} CANADCLEANING Inc. — Tous droits réservés.
          </p>
          <div className="flex items-center gap-3">
            <Link to="/a-propos" className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors">Mentions légales</Link>
            <span className="text-gray-600 text-[10px]">•</span>
            <Link to="/a-propos" className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors">Confidentialité</Link>
            <span className="text-gray-600 text-[10px]">•</span>
            <Link to="/contact" className="text-[10px] text-gray-500 hover:text-gray-300 transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}