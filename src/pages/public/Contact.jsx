// pages/public/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Send, Clock, CheckCircle, 
  Youtube, Twitter, Facebook, Instagram, Linkedin, 
  Navigation, Building, Music
} from 'lucide-react';
import { Section, Container, PageHeader } from '../../components/ui';
import toast from 'react-hot-toast';

// Données des contacts par pays
const CONTACTS_DATA = {
  canada: {
    country: "Canada",
    flag: "🇨🇦",
    color: "from-red-50 to-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    offices: [
      {
        name: "Siège Principal - Ottawa",
        address: "427-2100 Russell Rd, Ottawa, Ontario, Canada",
        phones: ["+1 613-769-0296", "+1 613-301-4085", "+1 613-406-3868"],
        email: "info@canadcleaning.ca",
        mapLink: "https://www.google.com/maps/search/?api=1&query=427-2100+Russell+Rd+Ottawa+Ontario+Canada"
      }
    ]
  },
  congo: {
    country: "Congo-Brazzaville",
    flag: "🇨🇬",
    color: "from-green-50 to-emerald-100",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    offices: [
      {
        name: "Agence Principale - Brazzaville",
        address: "55, Avenue de l'Intendance – Rond-point Chaconat Mpila, Brazzaville, Congo",
        phones: ["+242 06 969 3399", "+242 05 305 6366", "+242 06 636 68053", "+242 06 669 5624"],
        email: "congo@canadcleaning.ca",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Rond-point+Chaconat+Mpila+Brazzaville+Congo"
      }
    ]
  },
  rdc: {
    country: "République Démocratique du Congo",
    flag: "🇨🇩",
    color: "from-blue-50 to-sky-100",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    offices: [
      {
        name: "Agence - Kinshasa",
        address: "171, Commune de Lingwala, Rond-point Huilerie, Kinshasa, RDC",
        phones: ["+243 814 679 157", "+243 819 496 662"],
        email: "kinshasa@canadcleaning.ca",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Rond-point+Huilerie+Kinshasa+RDC"
      },
      {
        name: "Agence - Lubumbashi",
        address: "17, Avenue Victoire, Commune de Kasa-Vubu, Lubumbashi, RDC",
        phones: ["+243 970 859 332", "+243 815 056 201", "+243 997 148 012"],
        email: "lubumbashi@canadcleaning.ca",
        mapLink: "https://www.google.com/maps/search/?api=1&query=Avenue+Victoire+Lubumbashi+RDC"
      }
    ]
  }
};

// Réseaux sociaux
const SOCIAL_MEDIA = [
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/canadcleaning", color: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/canadcleaning", color: "bg-pink-600", hoverColor: "hover:bg-pink-700" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/canadcleaning", color: "bg-blue-800", hoverColor: "hover:bg-blue-900" },
  { name: "X (Twitter)", icon: Twitter, url: "https://twitter.com/canadcleaning", color: "bg-black", hoverColor: "hover:bg-gray-800" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@canadcleaning", color: "bg-red-600", hoverColor: "hover:bg-red-700" },
  { name: "TikTok", icon: Music, url: "https://tiktok.com/@canadcleaning", color: "bg-black", hoverColor: "hover:bg-gray-800" },
];

// Données des images pour la galerie
const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400",
    alt: "Équipe de nettoyage professionnel",
    title: "Équipe dévouée"
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
    alt: "Nettoyage de bureaux",
    title: "Nettoyage commercial"
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400",
    alt: "Bureau impeccable",
    title: "Espaces de travail"
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    alt: "Hôtellerie de luxe",
    title: "Services hôteliers"
  }
];

// Composant pour une carte statique
function StaticMapSection() {
  const markers = [
    { name: "Ottawa", lat: 45.4215, lng: -75.6972 },
    { name: "Brazzaville", lat: -4.2634, lng: 15.2429 },
    { name: "Kinshasa", lat: -4.322, lng: 15.316 },
    { name: "Lubumbashi", lat: -11.664, lng: 27.482 },
  ];
  
  const markersParam = markers.map(m => `${m.lat},${m.lng}`).join('|');
  const mapUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=4.5,17.5&zoom=3&size=800x400&markers=${markersParam}&maptype=mapnik`;

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      <img
        src={mapUrl}
        alt="Carte des implantations CanadCleaning"
        className="w-full h-[400px] object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=800";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-sm font-semibold text-brand-300 mb-1">Nos implantations</p>
        <p className="text-lg font-bold">Canada • Congo • RDC</p>
        <div className="flex flex-wrap gap-3 mt-2">
          {markers.map((loc, idx) => (
            <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              📍 {loc.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Composant pour une carte de contact par pays
function ContactCard({ data }) {
  const [expanded, setExpanded] = useState(false);
  const allOffices = data.offices;
  const displayOffices = expanded ? allOffices : allOffices.slice(0, 1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-br ${data.color} rounded-2xl overflow-hidden shadow-lg border ${data.borderColor}`}
    >
      <div className="p-6">
        <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/50">
          <span className="text-4xl">{data.flag}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{data.country}</h3>
            <p className="text-xs text-gray-500">{allOffices.length} agence(s)</p>
          </div>
        </div>

        <div className="space-y-5">
          {displayOffices.map((office, idx) => (
            <div key={idx} className="bg-white/80 rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg ${data.iconColor} bg-white shadow-sm flex items-center justify-center flex-shrink-0`}>
                  <Building size={16} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{office.name}</h4>
                  <div className="flex items-start gap-1 mt-1 text-gray-500 text-xs">
                    <MapPin size={12} className="flex-shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                </div>
              </div>

              <div className="ml-11 space-y-2 mb-3">
                <div className="flex flex-wrap gap-2">
                  {office.phones.map((phone, pIdx) => (
                    <a
                      key={pIdx}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded-full hover:bg-gray-200 transition"
                    >
                      <Phone size={10} className={data.iconColor} />
                      <span className="text-gray-700">{phone}</span>
                    </a>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={12} className={data.iconColor} />
                  <a href={`mailto:${office.email}`} className="text-xs text-gray-600 hover:text-brand-600 transition">
                    {office.email}
                  </a>
                </div>
              </div>

              <a
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 hover:text-brand-700 mt-2 ml-11"
              >
                <Navigation size={12} />
                Obtenir l'itinéraire
              </a>
            </div>
          ))}
        </div>

        {allOffices.length > 1 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-sm font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 mx-auto"
          >
            {expanded ? "Voir moins" : `Voir les ${allOffices.length} agences`}
            <svg className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  );
}

// Section réseaux sociaux
function SocialMediaSection() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="text-center mb-6">
        <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Suivez-nous</h3>
        <p className="text-sm text-gray-500">Restez connectés avec CanadCleaning Inc sur les réseaux sociaux</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {SOCIAL_MEDIA.map((social, idx) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: idx * 0.05 }}
              className={`${social.color} ${social.hoverColor} text-white p-3 rounded-full shadow-lg transition-all duration-300`}
              aria-label={social.name}
            >
              <IconComponent size={20} />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}

// Section disponibilité
function AvailabilitySection() {
  return (
    <div className="bg-gradient-to-r from-brand-500 to-indigo-600 rounded-2xl p-6 text-white text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock size={24} className="text-white/80" />
        <h3 className="font-display text-xl font-bold">Disponibilité 24h/24 - 7j/7</h3>
      </div>
      <p className="text-white/90 text-sm">Service d'urgence disponible 24h/24 — Intervention sous 4h</p>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
          <Phone size={12} />
          <span className="text-xs">Urgence Canada: +1 613-769-0296</span>
        </div>
        <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
          <Phone size={12} />
          <span className="text-xs">Urgence Afrique: +242 06 969 3399</span>
        </div>
      </div>
    </div>
  );
}

// Section horaires d'ouverture
function OpeningHoursSection() {
  const hoursData = [
    { country: "Canada", flag: "🇨🇦", city: "Ottawa", hours: { week: "08h00 - 18h00", sat: "09h00 - 13h00", sun: "Fermé" }, phone: "+1 613-769-0296", color: "from-red-500 to-red-600", textColor: "text-red-600" },
    { country: "Congo-Brazzaville", flag: "🇨🇬", city: "Brazzaville", hours: { week: "08h00 - 17h00", sat: "09h00 - 12h00", sun: "Fermé" }, phone: "+242 06 969 3399", color: "from-green-500 to-emerald-600", textColor: "text-green-600" },
    { country: "RD Congo", flag: "🇨🇩", city: "Kinshasa / Lubumbashi", hours: { week: "08h00 - 17h00", sat: "09h00 - 12h00", sun: "Fermé" }, phone: "+243 814 679 157", color: "from-blue-500 to-indigo-600", textColor: "text-blue-600" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-16"
    >
      <div className="relative rounded-2xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-indigo-900" />
        
        <div className="relative px-6 pt-8 pb-6 text-center border-b border-white/10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-xs font-medium tracking-wide">HORAIRES 2026</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Clock size={22} className="text-white" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">Nos horaires d'ouverture</h3>
          </div>
          <p className="text-white/50 text-sm mt-2">Disponibles pour vous servir dans tous nos bureaux</p>
        </div>

        <div className="relative px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {hoursData.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`relative h-2 bg-gradient-to-r ${item.color}`} />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl filter drop-shadow-md">{item.flag}</div>
                    <div>
                      <p className="font-bold text-gray-800 text-xl">{item.country}</p>
                      <p className="text-xs text-gray-400 flex items-center gap-1">
                        <MapPin size={10} />
                        {item.city}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:scale-150 transition-transform" />
                        Lundi - Vendredi
                      </span>
                      <span className="font-semibold text-gray-800">{item.hours.week}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-gray-50">
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 transition-transform" />
                        Samedi
                      </span>
                      <span className="font-semibold text-gray-800">{item.hours.sat}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                        Dimanche
                      </span>
                      <span className="text-gray-400 text-sm">{item.hours.sun}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center">
                          <span className="text-xs">🌙</span>
                        </div>
                        <span className="text-xs text-gray-500 font-medium">Urgence 24/7</span>
                      </div>
                      <a href={`tel:${item.phone.replace(/\s/g, '')}`} className={`text-sm font-bold ${item.textColor} hover:opacity-80 transition-colors`}>
                        {item.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { icon: "✓", text: "Devis gratuit sous 24h", color: "from-emerald-500 to-green-600" },
              { icon: "⚡", text: "Intervention sous 4h (urgence)", color: "from-amber-500 to-orange-600" },
              { icon: "🌿", text: "Produits écologiques certifiés", color: "from-teal-500 to-emerald-600" },
              { icon: "🛡️", text: "Assurance RC Pro incluse", color: "from-blue-500 to-indigo-600" }
            ].map((badge, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${badge.color} shadow-md hover:shadow-lg transition-all duration-300 cursor-default`}
              >
                {badge.icon} {badge.text}
              </motion.span>
            ))}
          </div>

          <div className="mt-6 pt-4 text-center border-t border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-white/70 text-xs">Service d'astreinte actif</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/60 text-xs">📞 Réponse garantie sous 30 minutes</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/60 text-xs">🌍 Intervention internationale</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', phone: '', pays: '', objet: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nom || !form.email || !form.message) return toast.error('Veuillez remplir les champs obligatoires');
    toast.success('Message envoyé ! Nous vous répondons sous 24h.');
    setSent(true);
  };

  return (
    <>
      <PageHeader 
        title="Contactez-nous" 
        subtitle="Nos équipes sont à votre écoute au Canada, au Congo-Brazzaville et en RDC" 
        breadcrumb="Contact"
      />
      
      <Section className="bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4 text-center">Nos Implantations</h2>
            <StaticMapSection />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Colonne gauche - Formulaire avec galerie 4 photos */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              {sent ? (
                <div className="text-center py-10 p-8">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">Message envoyé !</h3>
                  <p className="text-navy-500">Nous vous répondons sous 24h ouvrées.</p>
                </div>
              ) : (
                <>
                  <div className="p-8">
                    <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Envoyez-nous un message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Nom complet *</label>
                          <input
                            value={form.nom}
                            onChange={e => set('nom', e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Email *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={e => set('email', e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all"
                            placeholder="email@exemple.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Téléphone</label>
                          <input
                            value={form.phone}
                            onChange={e => set('phone', e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all"
                            placeholder="+1 (613) 769-0296"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-navy-700 mb-1">Pays</label>
                          <select
                            value={form.pays}
                            onChange={e => set('pays', e.target.value)}
                            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all"
                          >
                            <option value="">Sélectionner un pays</option>
                            <option>Canada</option>
                            <option>Congo-Brazzaville</option>
                            <option>République Démocratique du Congo</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-700 mb-1">Objet</label>
                        <select
                          value={form.objet}
                          onChange={e => set('objet', e.target.value)}
                          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all"
                        >
                          <option value="">Sélectionner un objet...</option>
                          <option>Demande de devis nettoyage</option>
                          <option>Demande de devis maintenance</option>
                          <option>Demande de devis construction</option>
                          <option>Demande de devis logistique</option>
                          <option>Information générale</option>
                          <option>Réclamation</option>
                          <option>Partenariat</option>
                          <option>Recrutement</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-navy-700 mb-1">Message *</label>
                        <textarea
                          value={form.message}
                          onChange={e => set('message', e.target.value)}
                          className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all resize-none h-32"
                          placeholder="Décrivez votre besoin..."
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full justify-center py-3">
                        <Send size={16} /> Envoyer le message
                      </button>
                    </form>
                  </div>

                  {/* Galerie 4 photos en bas du formulaire */}
                  <div className="border-t border-gray-100 bg-gray-50">
                    <div className="p-4">
                      <p className="text-xs text-gray-500 text-center mb-3">Nos réalisations en images</p>
                      <div className="grid grid-cols-4 gap-2">
                        {GALLERY_IMAGES.map((img, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative rounded-lg overflow-hidden cursor-pointer group"
                          >
                            <img
                              src={img.src}
                              alt={img.alt}
                              className="w-full h-20 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="text-white text-[10px] font-semibold text-center">{img.title}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Colonne droite - Contacts */}
            <div className="space-y-6">
              <ContactCard data={CONTACTS_DATA.canada} />
              <ContactCard data={CONTACTS_DATA.congo} />
              <ContactCard data={CONTACTS_DATA.rdc} />
              <SocialMediaSection />
              <AvailabilitySection />
            </div>
          </div>

          <OpeningHoursSection />
        </Container>
      </Section>
    </>
  );
}