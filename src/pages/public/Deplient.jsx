// import { useState, useEffect } from "react";
// import {
//   Phone, Mail, Globe, MapPin, CheckCircle, Award, Zap, Leaf, Shield, Star
// } from "lucide-react";

// // ================= DONNÉES AVEC EMAIL ET LINK =================
// const SEDES = [
//   {
//     flag: "🇨🇦",
//     city: "Ottawa",
//     country: "Canada",
//     phone: "+1 (613) 769-0296",
//     email: "ottawa@canadcleaning.ca",
//     link: "https://canadcleaning.ca/contact-ottawa",
//     img: "https://img.magnific.com/photos-premium/drapeau-national-du-canada-montagne-foret-jasper-parc-national-paysage-ete-lac-beauver_363815-4351.jpg?semt=ais_hybrid&w=740&q=80"
//   },
//   {
//     flag: "🇨🇩",
//     city: "Kinshasa · Lubumbashi · Kolwezi",
//     country: "RD Congo",
//     phone: "+243 814 679 157",
//     email: "rdc@canadcleaning.ca",
//     link: "https://canadcleaning.ca/contact-rdc",
//     img: "https://img.magnific.com/photos-premium/paysage-congolais-montagne-foret-riviere_363815-4352.jpg?semt=ais_hybrid&w=740&q=80"
//   },
//   {
//     flag: "🇨🇬",
//     city: "Brazzaville · Pointe-Noire",
//     country: "Congo-Brazzaville",
//     phone: "+242 06 979 0860",
//     email: "congo@canadcleaning.ca",
//     link: "https://canadcleaning.ca/contact-congo",
//     img: "https://img.magnific.com/photos-premium/fleuve-congo-montagne-foret_363815-4353.jpg?semt=ais_hybrid&w=740&q=80"
//   },
//   {
//     flag: "🇬🇶",
//     city: "Malabo",
//     country: "Guinée Équatoriale",
//     phone: "+240 555 940 12",
//     email: "malabo@canadcleaning.ca",
//     link: "https://canadcleaning.ca/contact-malabo",
//     img: "https://web-cdnprod.aa.com.tr/uploads/Contents/2017/06/12/thumbs_b_c_b1cfb748c31f722452b7a74b312f4c4b.jpg?v=141533"
//   },
// ];

// const STATS = [
//   { val: "1 250+", label: "Clients satisfaits", icon: Star },
//   { val: "47", label: "Services professionnels", icon: CheckCircle },
//   { val: "7", label: "Villes couvertes", icon: MapPin },
//   { val: "98%", label: "Taux de recommandation", icon: Award },
// ];

// const SERVICES = [
//   {
//     id: "nettoyage", emoji: "🧹", title: "Nettoyage", subtitle: "23 prestations",
//     color: "#2563eb", light: "rgba(37,99,235,0.1)",
//     img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=85",
//     items: [
//       "Nettoyage commercial & bureau", "Nettoyage résidentiel", "Garderie / nettoyage scolaire",
//       "Centres de santé & cliniques", "Nettoyage des vitres & façades", "Ménage fin de bail",
//       "Nettoyage de tapis", "Nettoyage des sols", "Nettoyage après construction",
//       "Cabinets médicaux & dentaires", "Nettoyage à la vapeur", "Grand ménage & cirage planchers"
//     ],
//     prix: "À partir de 99€/mois",
//   },
//   {
//     id: "restauration", emoji: "🍽️", title: "Restauration", subtitle: "12 prestations HACCP",
//     color: "#ea580c", light: "rgba(234,88,12,0.1)",
//     img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85",
//     items: [
//       "Cuisine professionnelle HACCP", "Salle de restaurant & sanitaires", "Dégraissage hottes & extracteurs",
//       "Chambres froides", "Équipements de cuisson", "Désinfection HACCP certifiée",
//       "Terrasses & zones extérieures", "Grand ménage de fond", "Nettoyage post-événement",
//       "Vapeur haute pression", "Cantines scolaires & collectives", "Restaurants, Hôtels, Fast-food"
//     ],
//     prix: "À partir de 149€/jour",
//   },
//   {
//     id: "construction", emoji: "🏗️", title: "Construction", subtitle: "12 prestations",
//     color: "#d97706", light: "rgba(217,119,6,0.1)",
//     img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
//     items: [
//       "Construction d'immeubles R+1 à R+3+", "Construction d'appartements standing",
//       "Construction de routes bitumées", "Terrassement & fondations", "Gros œuvre béton armé",
//       "Second œuvre complet", "Revêtements sols & murs", "VRD — Voirie & réseaux",
//       "Signalisation routière", "Plans & études techniques", "Aménagement restaurants",
//       "Cuisines professionnelles clé main"
//     ],
//     prix: "À partir de 800€/m²",
//   },
//   {
//     id: "securite", emoji: "🛡️", title: "Sécurité", subtitle: "7 prestations",
//     color: "#7c3aed", light: "rgba(124,58,237,0.1)",
//     img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=85",
//     items: [
//       "Agents de sécurité qualifiés & assermentés", "Gardiennage 24h/24 — 7j/7",
//       "Contrôle d'accès & gestion visiteurs", "Protection des biens & personnes",
//       "Patrouille mobile & rondes régulières", "Intervention rapide sur alerte",
//       "Services adaptés sur mesure"
//     ],
//     prix: "Sur devis personnalisé",
//   },
// ];

// const CERTS = ["HACCP", "ISO 9001", "Écolabel EU", "RC Pro", "ISO 22000"];
// const TIMELINE = [
//   { year: "2018", txt: "Création à Ottawa, Canada" },
//   { year: "2020", txt: "Ouverture Kinshasa & Brazzaville" },
//   { year: "2022", txt: "Extension Lubumbashi et Kolwezi" },
//   { year: "2023", txt: "Lancement offre restauration HACCP" },
//   { year: "2024", txt: "Ouverture Malabo, Guinée Équatoriale" },
// ];

// // ================= STYLES GLOBAUX =================
// const G = {
//   bg: "#050e1f", bg2: "#081020", card: "rgba(255,255,255,0.04)",
//   cardBorder: "rgba(255,255,255,0.09)", orange: "#f97316", orangeD: "#ea580c",
//   white: "#ffffff", muted: "rgba(255,255,255,0.6)", dim: "rgba(255,255,255,0.35)",
//   font: "'Poppins', system-ui, -apple-system, sans-serif",
// };

// // ================= HOOK RESPONSIVE =================
// function useMediaQuery(query) {
//   const [matches, setMatches] = useState(false);
//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) setMatches(media.matches);
//     const listener = () => setMatches(media.matches);
//     media.addEventListener("change", listener);
//     return () => media.removeEventListener("change", listener);
//   }, [matches, query]);
//   return matches;
// }

// // ================= COMPOSANTS =================
// function Logo({ scale = 1 }) {
//   return (
//     <div style={{ display: "flex", alignItems: "center", gap: 14 * scale }}>
//       <div style={{
//         width: 52 * scale, height: 52 * scale, borderRadius: 14 * scale,
//         background: `linear-gradient(135deg, ${G.orange}, ${G.orangeD})`,
//         display: "flex", alignItems: "center", justifyContent: "center",
//         fontWeight: 900, fontSize: 18 * scale, color: G.white,
//         boxShadow: "0 6px 24px rgba(249,115,22,0.5)",
//       }}>CC</div>
//       <div>
//         <p style={{ margin: 0, fontWeight: 800, fontSize: 22 * scale, color: G.white, letterSpacing: "0.05em" }}>CANADCLEANING</p>
//         <p style={{ margin: "4px 0 0", fontWeight: 400, fontSize: 9 * scale, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase" }}>
//           Nettoyage · Construction · Sécurité
//         </p>
//       </div>
//     </div>
//   );
// }

// function Badge({ children, color = G.orange }) {
//   return (
//     <span style={{
//       background: color + "20", border: `1px solid ${color}50`, color,
//       borderRadius: 30, padding: "4px 12px", fontSize: 11, fontWeight: 600,
//       whiteSpace: "nowrap", display: "inline-block", fontFamily: G.font,
//     }}>{children}</span>
//   );
// }

// function ServiceCard({ svc }) {
//   return (
//     <div style={{
//       background: G.card, border: `1px solid ${G.cardBorder}`, borderRadius: 20,
//       overflow: "hidden", transition: "transform 0.3s ease, box-shadow 0.3s",
//       cursor: "pointer", height: "100%", display: "flex", flexDirection: "column",
//       fontFamily: G.font,
//     }} className="service-card">
//       <div style={{ position: "relative", height: 180 }}>
//         <img src={svc.img} alt={svc.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//         <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,14,31,0.95) 0%, rgba(5,14,31,0.3) 60%)" }} />
//         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 22px" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
//             <span style={{ fontSize: 28 }}>{svc.emoji}</span>
//             <div>
//               <p style={{ margin: 0, fontWeight: 800, fontSize: 22, color: G.white }}>{svc.title}</p>
//               <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{svc.subtitle}</p>
//             </div>
//           </div>
//         </div>
//         <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: svc.color }} />
//       </div>
//       <div style={{ padding: "20px 22px", flex: 1 }}>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 12px" }}>
//           {svc.items.slice(0, 8).map((item, i) => (
//             <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
//               <div style={{ width: 6, height: 6, borderRadius: "50%", background: svc.color, flexShrink: 0, marginTop: 7 }} />
//               <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.78)", lineHeight: 1.5 }}>{item}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={{ padding: "14px 22px", borderTop: `1px solid ${G.cardBorder}`, display: "flex", justifyContent: "space-between", background: svc.light }}>
//         <span style={{ fontSize: 13, fontWeight: 700, color: svc.color }}>{svc.prix}</span>
//         <span style={{ fontSize: 11, color: G.muted, background: "rgba(255,255,255,0.06)", border: `1px solid ${G.cardBorder}`, padding: "4px 12px", borderRadius: 20 }}>
//           Devis gratuit →
//         </span>
//       </div>
//     </div>
//   );
// }

// function StatCard({ stat }) {
//   const Icon = stat.icon;
//   return (
//     <div style={{
//       background: G.card, border: `1px solid ${G.cardBorder}`, borderRadius: 16,
//       padding: "24px 20px", textAlign: "center", transition: "transform 0.2s",
//       fontFamily: G.font,
//     }} className="stat-card">
//       <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(249,115,22,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
//         <Icon size={20} color={G.orange} />
//       </div>
//       <p style={{ margin: 0, fontWeight: 900, fontSize: 32, color: G.orange, lineHeight: 1 }}>{stat.val}</p>
//       <p style={{ margin: 0, fontSize: 13, color: G.muted }}>{stat.label}</p>
//     </div>
//   );
// }

// // ================= COMPOSANT PRINCIPAL =================
// export default function Depliant() {
//   const isMobile = useMediaQuery("(max-width: 768px)");
//   const colStats = isMobile ? "1fr" : "repeat(4, 1fr)";
//   const colServices = isMobile ? "1fr" : "1fr 1fr";
//   const colPhotoBand = isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)";
//   const colSièges = isMobile ? "1fr" : "repeat(4, 1fr)";
//   const colTarifs = isMobile ? "1fr" : "repeat(3, 1fr)";

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         body { background: #020810; font-family: 'Poppins', sans-serif; line-height: 1.5; }
//         .service-card:hover, .stat-card:hover { transform: translateY(-6px); box-shadow: 0 20px 35px -12px rgba(0,0,0,0.5); }
//         .hover-scale-img:hover { transform: scale(1.05); }
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.4; transform: scale(1); }
//           50% { opacity: 0.8; transform: scale(1.05); }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 6s ease-in-out infinite;
//         }
//         .fade-up {
//           animation: fadeUp 0.6s ease-out forwards;
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @media print {
//           body { margin: 0; background: white; }
//           .no-print { display: none !important; }
//           .service-card:hover, .stat-card:hover { transform: none; }
//           .animate-pulse-slow { animation: none; }
//         }
//         h1, h2, h3, p, span, div { font-family: 'Poppins', sans-serif; }
//       `}</style>

//       <div style={{ background: "linear-gradient(160deg, #020810 0%, #050e1f 100%)", minHeight: "100vh", padding: "40px 0" }}>
//         <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", background: G.bg, position: "relative", overflow: "hidden", borderRadius: 24, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
          
//           {/* ========== NOUVEAU HERO AVEC PHOTO DE FOND ========== */}
//           <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
//             {/* Photo de fond */}
//             <div style={{
//               position: "absolute",
//               inset: 0,
//               backgroundImage: "url('https://serviclean.be/wp-content/uploads/2023/03/Nettoyage-bureaux-Bruxelles.jpg')",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat"
//             }} />
            
//             {/* Overlays pour lisibilité */}
//             <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(5,14,31,0.7)" }} />
//             <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,14,31,0.9), rgba(5,14,31,0.6), transparent)" }} />
//             <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to top, #050e1f, transparent)" }} />
//             <div style={{ position: "absolute", top: 0, right: 0, width: "66%", height: "100%", background: "linear-gradient(to left, rgba(249,115,22,0.08), transparent)", pointerEvents: "none" }} />

//             {/* Blobs animés */}
//             <div style={{ position: "absolute", top: 80, right: 80, width: 288, height: 288, borderRadius: "50%", background: "rgba(249,115,22,0.15)", filter: "blur(64px)", animation: "pulse-slow 6s ease-in-out infinite" }} />
//             <div style={{ position: "absolute", bottom: 80, left: 80, width: 224, height: 224, borderRadius: "50%", background: "rgba(37,99,235,0.08)", filter: "blur(64px)", animation: "pulse-slow 6s ease-in-out infinite 1.5s" }} />

//             <div style={{ position: "relative", zIndex: 10, width: "100%", padding: isMobile ? "32px 24px" : "56px 64px 48px" }}>
//               <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 64, alignItems: "center" }}>
//                 {/* Colonne gauche */}
//                 <div>
//                   <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 40, padding: "6px 18px", marginBottom: 24 }}>
//                     {/* Icône Sparkles (remplacée par une étoile) */}
//                     <Star size={14} color={G.orange} />
//                     <span style={{ fontSize: 11, fontWeight: 600, color: G.orange, letterSpacing: "0.15em", textTransform: "uppercase" }}>47 services · 7 villes · Certifié HACCP</span>
//                   </div>

//                   <h1 style={{ margin: "0 0 24px", fontWeight: 800, fontSize: isMobile ? 36 : 58, lineHeight: 1.1, color: G.white, letterSpacing: "-0.02em" }}>
//                     LA PROPRETÉ<br />
//                     <span style={{ background: `linear-gradient(135deg, ${G.orange}, ${G.orangeD})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>NOTRE ENGAGEMENT,</span><br />
//                     VOTRE BIEN-ÊTRE !
//                   </h1>

//                   <p style={{ margin: "0 0 32px", fontSize: isMobile ? 15 : 17, color: G.muted, lineHeight: 1.65, maxWidth: 540 }}>
//                     CANADCLEANING est votre partenaire de confiance pour des services de nettoyage professionnels, fiables et adaptés à tous vos besoins. De la construction à l'entretien durable.
//                   </p>

//                   <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
//                     <div style={{ background: `linear-gradient(135deg, ${G.orange}, ${G.orangeD})`, color: G.white, padding: "14px 32px", borderRadius: 40, fontWeight: 600, fontSize: isMobile ? 13 : 15, textAlign: "center", boxShadow: "0 10px 20px -5px rgba(249,115,22,0.4)" }}>Demander un devis →</div>
//                     <div style={{ border: "1.5px solid rgba(255,255,255,0.3)", color: G.white, padding: "14px 32px", borderRadius: 40, fontWeight: 500, fontSize: isMobile ? 13 : 15 }}>Audit gratuit</div>
//                   </div>

//                   <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
//                     {[
//                       { Icon: Shield, text: "Certifié HACCP" },
//                       { Icon: Award, text: "RC Pro incluse" },
//                       { Icon: Zap, text: "Urgences 4h" }
//                     ].map(({ Icon, text }) => (
//                       <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: G.muted }}>
//                         <Icon size={16} color={G.orange} /> {text}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Colonne droite (vide pour l'instant, peut accueillir une illustration ou laisser vide) */}
//                 <div></div>
//               </div>
//             </div>
//           </section>

//           {/* Stats */}
//           <div style={{ background: G.bg2, borderTop: `1px solid ${G.cardBorder}`, borderBottom: `1px solid ${G.cardBorder}`, padding: isMobile ? "28px 24px" : "40px 64px" }}>
//             <div style={{ display: "grid", gridTemplateColumns: colStats, gap: 20 }}>{STATS.map(s => <StatCard key={s.label} stat={s} />)}</div>
//           </div>

//           {/* Services */}
//           <div style={{ padding: isMobile ? "40px 24px" : "56px 64px" }}>
//             <div style={{ marginBottom: 32 }}>
//               <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>Ce que nous faisons</p>
//               <h2 style={{ fontWeight: 700, fontSize: 32, color: G.white, letterSpacing: "-0.01em" }}>Nos 4 domaines d'expertise</h2>
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: colServices, gap: 24 }}>{SERVICES.map(svc => <ServiceCard key={svc.id} svc={svc} />)}</div>
//           </div>

//           {/* Photo band */}
//           <div style={{ display: "grid", gridTemplateColumns: colPhotoBand, height: isMobile ? 90 : 140, margin: isMobile ? "0 24px 40px" : "0 64px 48px", borderRadius: 20, overflow: "hidden", border: `1px solid ${G.cardBorder}` }}>
//             {SERVICES.map((svc, i) => (
//               <div key={i} style={{ position: "relative", overflow: "hidden" }}>
//                 <img src={svc.img} alt={svc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
//                 <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,14,31,0.9) 0%, rgba(5,14,31,0.1) 60%)" }} />
//                 <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center" }}>
//                   <span style={{ fontSize: isMobile ? 14 : 20 }}>{svc.emoji}</span>
//                   <p style={{ margin: "4px 0 0", fontSize: isMobile ? 10 : 13, fontWeight: 600, color: G.white }}>{svc.title}</p>
//                 </div>
//                 <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: svc.color }} />
//               </div>
//             ))}
//           </div>

//           {/* Petite barre orange */}
//           <div style={{ background: G.orange, padding: isMobile ? "14px 24px" : "18px 64px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
//             <p style={{ margin: 0, fontWeight: 600, fontStyle: "italic", fontSize: isMobile ? 13 : 15, color: G.white }}>"Construire proprement, nettoyer durablement."</p>
//             <p style={{ margin: 0, fontWeight: 500, fontSize: isMobile ? 12 : 14, color: "rgba(255,255,255,0.9)" }}>www.canadcleaning.ca</p>
//           </div>

//           {/* ========== PARTIE VERSO ========== */}
//           <div style={{ background: G.bg, marginTop: 0 }}>
//             <div style={{ position: "absolute", top: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

//             {/* Header certifications */}
//             <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20, padding: isMobile ? "28px 24px" : "48px 64px 32px", borderBottom: `1px solid ${G.cardBorder}` }}>
//               <Logo scale={isMobile ? 0.7 : 0.85} />
//               <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{CERTS.map(c => <Badge key={c}>{c}</Badge>)}</div>
//             </div>

//             {/* Histoire */}
//             <div style={{ background: G.bg2, borderBottom: `1px solid ${G.cardBorder}`, padding: isMobile ? "40px 24px" : "48px 64px" }}>
//               <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 48 }}>
//                 <div>
//                   <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Notre histoire</p>
//                   <h2 style={{ fontWeight: 700, fontSize: 28, color: G.white, marginBottom: 20 }}>Fondée à Ottawa en 2018</h2>
//                   <p style={{ fontSize: 15, color: G.muted, lineHeight: 1.7 }}>
//                     CANADCLEANING est née d'une vision simple : offrir à nos clients une solution complète et clé en main pour tous leurs besoins de propreté et de construction. Notre conviction : un environnement bien construit et propre améliore l'image, la santé et la productivité.
//                   </p>
//                 </div>
//                 <div>
//                   <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Chronologie</p>
//                   <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
//                     {TIMELINE.map((t, i) => (
//                       <div key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
//                         <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(249,115,22,0.15)", border: `2px solid ${G.orange}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//                           <span style={{ fontWeight: 800, fontSize: 10, color: G.orange }}>{t.year}</span>
//                         </div>
//                         <p style={{ margin: "8px 0 0", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{t.txt}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sièges avec photos, email et lien */}
//             <div style={{ padding: isMobile ? "40px 24px" : "48px 64px", borderBottom: `1px solid ${G.cardBorder}` }}>
//               <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Présence internationale</p>
//               <h2 style={{ fontWeight: 700, fontSize: 28, color: G.white, marginBottom: 28 }}>Nos sièges & bureaux</h2>
//               <div style={{ display: "grid", gridTemplateColumns: colSièges, gap: 24 }}>
//                 {SEDES.map(s => (
//                   <div key={s.city} style={{
//                     background: G.card,
//                     border: `1px solid ${G.cardBorder}`,
//                     borderRadius: 20,
//                     overflow: "hidden",
//                     transition: "transform 0.2s",
//                     display: "flex",
//                     flexDirection: "column"
//                   }} className="stat-card">
//                     <div style={{ height: 140, overflow: "hidden" }}>
//                       <img
//                         src={s.img}
//                         alt={`Bureau ${s.city}`}
//                         style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
//                         className="hover-scale-img"
//                       />
//                     </div>
//                     <div style={{ padding: "20px" }}>
//                       <span style={{ fontSize: 32, display: "block", marginBottom: 8 }}>{s.flag}</span>
//                       <p style={{ fontWeight: 600, fontSize: 16, color: G.white, marginBottom: 4 }}>{s.city}</p>
//                       <p style={{ fontSize: 13, color: G.muted, marginBottom: 12 }}>{s.country}</p>
                      
//                       <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
//                         <Phone size={14} color={G.orange} />
//                         <span style={{ fontSize: 13, color: G.dim }}>{s.phone}</span>
//                       </div>
                      
//                       <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
//                         <Mail size={14} color={G.orange} />
//                         <a href={`mailto:${s.email}`} style={{ fontSize: 13, color: G.dim, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = G.orange} onMouseLeave={(e) => e.target.style.color = G.dim}>
//                           {s.email}
//                         </a>
//                       </div>
                      
//                       <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                         <Globe size={14} color={G.orange} />
//                         <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: G.dim, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = G.orange} onMouseLeave={(e) => e.target.style.color = G.dim}>
//                           Page contact
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tarifs */}
//             <div style={{ background: G.bg2, borderBottom: `1px solid ${G.cardBorder}`, padding: isMobile ? "40px 24px" : "48px 64px" }}>
//               <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Tarification</p>
//               <h2 style={{ fontWeight: 700, fontSize: 28, color: G.white, marginBottom: 28 }}>Nos formules principales</h2>
//               <div style={{ display: "grid", gridTemplateColumns: colTarifs, gap: 24 }}>
//                 {[
//                   { cat: "🧹 Nettoyage", color: "#2563eb", plans: [{ name: "Commercial Pro", price: "199€–399€", unit: "/mois", hot: true, feat: ["Jusqu'à 200m²", "5×/semaine", "RC Pro incluse"] }, { name: "Résidentiel", price: "99€–149€", unit: "/mois", hot: false, feat: ["Produits inclus", "Agent certifié"] }, { name: "Fin de Bail", price: "Dès 149€", unit: "/studio", hot: false, feat: ["Photos avant/après", "Dépôt garanti"] }] },
//                   { cat: "🍽️ Restauration", color: "#ea580c", plans: [{ name: "Pack Journalier", price: "149€", unit: "/jour", hot: true, feat: ["Cuisine + salle", "Norme HACCP", "7j/7"] }, { name: "Hottes HACCP", price: "199€", unit: "/inter.", hot: false, feat: ["Certificat HACCP", "Rapport photo"] }, { name: "Post-Événement", price: "249€", unit: "/soir", hot: false, feat: ["Nuit & fériés", "Sous 4h urgence"] }] },
//                   { cat: "🏗️ Construction", color: "#d97706", plans: [{ name: "Immeuble", price: "800€", unit: "/m²", hot: true, feat: ["Clé en main", "R+1 à R+3+"] }, { name: "Appartement", price: "900€", unit: "/m²", hot: false, feat: ["Standing", "Finitions incluses"] }, { name: "Route bitumée", price: "45€", unit: "/m²", hot: false, feat: ["VRD inclus", "Signalisation"] }] },
//                 ].map(group => (
//                   <div key={group.cat} style={{ background: G.card, border: `1px solid ${G.cardBorder}`, borderRadius: 20, overflow: "hidden" }}>
//                     <div style={{ padding: "18px 20px", borderBottom: `1px solid ${G.cardBorder}`, background: group.color + "15" }}>
//                       <p style={{ fontWeight: 600, fontSize: 16, color: G.white }}>{group.cat}</p>
//                     </div>
//                     <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 14 }}>
//                       {group.plans.map(plan => (
//                         <div key={plan.name} style={{ padding: "14px 16px", borderRadius: 14, border: plan.hot ? `2px solid ${group.color}` : `1px solid ${G.cardBorder}`, background: plan.hot ? group.color + "12" : "rgba(255,255,255,0.02)", position: "relative" }}>
//                           {plan.hot && <span style={{ position: "absolute", top: -10, right: 12, background: group.color, color: G.white, fontSize: 9, fontWeight: 700, padding: "2px 10px", borderRadius: 20 }}>Populaire</span>}
//                           <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 600, color: G.white }}>{plan.name}</p>
//                           <p style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 800, color: group.color }}>{plan.price} <span style={{ fontSize: 12, fontWeight: 400, color: G.muted }}>{plan.unit}</span></p>
//                           <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{plan.feat.map(f => <span key={f} style={{ fontSize: 10, background: "rgba(255,255,255,0.06)", border: `1px solid ${G.cardBorder}`, color: G.muted, borderRadius: 30, padding: "4px 10px" }}>{f}</span>)}</div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CTA final */}
//             <div style={{ padding: isMobile ? "40px 24px" : "56px 64px" }}>
//               <div style={{ background: `linear-gradient(135deg, #0e1f45 0%, #0a1628 50%, #0e1a0a 100%)`, border: `1px solid rgba(249,115,22,0.25)`, borderRadius: 28, padding: isMobile ? "36px 24px" : "52px 64px", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr auto", gap: 48 }}>
//                 <div>
//                   <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Prêt à commencer ?</p>
//                   <h2 style={{ fontWeight: 800, fontSize: isMobile ? 32 : 40, color: G.white, lineHeight: 1.2, marginBottom: 20 }}>Devis gratuit<br /><span style={{ color: G.orange }}>en 48 heures</span></h2>
//                   <p style={{ fontSize: 16, color: G.muted, marginBottom: 32 }}>Construction · Nettoyage · Restauration · Sécurité<br />Un seul interlocuteur.</p>
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
//                     {[{ Icon: Phone, v: "+1 (613) 769-0296" }, { Icon: Mail, v: "info@canadcleaning.ca" }, { Icon: Globe, v: "www.canadcleaning.ca" }].map(({ Icon, v }) => (
//                       <div key={v} style={{ display: "flex", alignItems: "center", gap: 10 }}><Icon size={16} color={G.orange} /><span style={{ fontSize: 14, color: G.muted }}>{v}</span></div>
//                     ))}
//                   </div>
//                 </div>
//                 <div style={{ background: `linear-gradient(135deg, ${G.orange}, ${G.orangeD})`, borderRadius: 24, padding: "40px 32px", textAlign: "center", boxShadow: "0 20px 40px -12px rgba(249,115,22,0.5)" }}>
//                   <p style={{ fontWeight: 700, fontSize: 22, color: G.white, marginBottom: 8 }}>Contactez-nous</p>
//                   <p style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 24 }}>Réponse garantie sous 48h</p>
//                   <p style={{ fontWeight: 800, fontSize: 24, color: G.white, marginBottom: 8 }}>+1 613 769-0296</p>
//                   <p style={{ fontSize: 13, marginBottom: 24 }}>Ottawa · Canada</p>
//                   <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 40, padding: "12px 0", fontWeight: 600, fontSize: 13, textTransform: "uppercase" }}>Audit gratuit offert ✦</div>
//                 </div>
//               </div>
//             </div>

//             {/* Footer final */}
//             <div style={{ borderTop: `1px solid ${G.cardBorder}`, background: G.bg2, padding: isMobile ? "16px 24px" : "20px 64px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
//               <Logo scale={0.65} />
//               <p style={{ fontSize: 12, color: G.dim }}>© CANADCLEANING 2026 — Tous droits réservés</p>
//               <p style={{ fontSize: 13, fontWeight: 500, color: G.orange }}>info@canadcleaning.ca</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }














import { useState, useEffect } from "react";
import {
  Phone, Mail, Globe, MapPin, CheckCircle, Award, Zap, Leaf, Shield, Star
} from "lucide-react";

// ================= DONNÉES (inchangées) =================
const SEDES = [
  {
    flag: "🇨🇦",
    city: "Ottawa",
    country: "Canada",
    phone: "+1 (613) 769-0296",
    email: "ottawa@canadcleaning.ca",
    link: "https://canadcleaning.ca/contact-ottawa",
    img: "https://img.magnific.com/photos-premium/drapeau-national-du-canada-montagne-foret-jasper-parc-national-paysage-ete-lac-beauver_363815-4351.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    flag: "🇨🇩",
    city: "Kinshasa · Lubumbashi · Kolwezi",
    country: "RD Congo",
    phone: "+243 814 679 157",
    email: "rdc@canadcleaning.ca",
    link: "https://canadcleaning.ca/contact-rdc",
    img: "https://img.magnific.com/photos-premium/paysage-congolais-montagne-foret-riviere_363815-4352.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    flag: "🇨🇬",
    city: "Brazzaville · Pointe-Noire",
    country: "Congo-Brazzaville",
    phone: "+242 06 979 0860",
    email: "congo@canadcleaning.ca",
    link: "https://canadcleaning.ca/contact-congo",
    img: "https://img.magnific.com/photos-premium/fleuve-congo-montagne-foret_363815-4353.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    flag: "🇬🇶",
    city: "Malabo",
    country: "Guinée Équatoriale",
    phone: "+240 555 940 12",
    email: "malabo@canadcleaning.ca",
    link: "https://canadcleaning.ca/contact-malabo",
    img: "https://web-cdnprod.aa.com.tr/uploads/Contents/2017/06/12/thumbs_b_c_b1cfb748c31f722452b7a74b312f4c4b.jpg?v=141533"
  },
];

const STATS = [
  { val: "1 250+", label: "Clients satisfaits", icon: Star },
  { val: "47", label: "Services professionnels", icon: CheckCircle },
  { val: "7", label: "Villes couvertes", icon: MapPin },
  { val: "98%", label: "Taux de recommandation", icon: Award },
];

const SERVICES = [
  {
    id: "nettoyage", emoji: "🧹", title: "Nettoyage", subtitle: "23 prestations",
    color: "#2563eb", light: "rgba(37,99,235,0.1)",
    img: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=85",
    items: [
      "Nettoyage commercial & bureau", "Nettoyage résidentiel", "Garderie / nettoyage scolaire",
      "Centres de santé & cliniques", "Nettoyage des vitres & façades", "Ménage fin de bail",
      "Nettoyage de tapis", "Nettoyage des sols", "Nettoyage après construction",
      "Cabinets médicaux & dentaires", "Nettoyage à la vapeur", "Grand ménage & cirage planchers"
    ],
    prix: "À partir de 99€/mois",
  },
  {
    id: "restauration", emoji: "🍽️", title: "Restauration", subtitle: "12 prestations HACCP",
    color: "#ea580c", light: "rgba(234,88,12,0.1)",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=85",
    items: [
      "Cuisine professionnelle HACCP", "Salle de restaurant & sanitaires", "Dégraissage hottes & extracteurs",
      "Chambres froides", "Équipements de cuisson", "Désinfection HACCP certifiée",
      "Terrasses & zones extérieures", "Grand ménage de fond", "Nettoyage post-événement",
      "Vapeur haute pression", "Cantines scolaires & collectives", "Restaurants, Hôtels, Fast-food"
    ],
    prix: "À partir de 149€/jour",
  },
  {
    id: "construction", emoji: "🏗️", title: "Construction", subtitle: "12 prestations",
    color: "#d97706", light: "rgba(217,119,6,0.1)",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85",
    items: [
      "Construction d'immeubles R+1 à R+3+", "Construction d'appartements standing",
      "Construction de routes bitumées", "Terrassement & fondations", "Gros œuvre béton armé",
      "Second œuvre complet", "Revêtements sols & murs", "VRD — Voirie & réseaux",
      "Signalisation routière", "Plans & études techniques", "Aménagement restaurants",
      "Cuisines professionnelles clé main"
    ],
    prix: "À partir de 800€/m²",
  },
  {
    id: "securite", emoji: "🛡️", title: "Sécurité", subtitle: "7 prestations",
    color: "#7c3aed", light: "rgba(124,58,237,0.1)",
    img: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=85",
    items: [
      "Agents de sécurité qualifiés & assermentés", "Gardiennage 24h/24 — 7j/7",
      "Contrôle d'accès & gestion visiteurs", "Protection des biens & personnes",
      "Patrouille mobile & rondes régulières", "Intervention rapide sur alerte",
      "Services adaptés sur mesure"
    ],
    prix: "Sur devis personnalisé",
  },
];

const CERTS = ["HACCP", "ISO 9001", "Écolabel EU", "RC Pro", "ISO 22000"];
const TIMELINE = [
  { year: "2018", txt: "Création à Ottawa, Canada" },
  { year: "2020", txt: "Ouverture Kinshasa & Brazzaville" },
  { year: "2022", txt: "Extension Lubumbashi et Kolwezi" },
  { year: "2023", txt: "Lancement offre restauration HACCP" },
  { year: "2024", txt: "Ouverture Malabo, Guinée Équatoriale" },
];

// ================= STYLES GLOBAUX (THÈME CLAIR) =================
const G = {
  bg: "#ffffff",                 // fond principal blanc
  bg2: "#f9fafb",               // fond alterné gris très clair
  card: "#ffffff",              // fond des cartes blanc
  cardBorder: "#e5e7eb",        // bordure grise
  orange: "#f97316",
  orangeD: "#ea580c",
  white: "#1f2937",             // texte principal (gris foncé)
  muted: "#6b7280",             // texte secondaire (gris moyen)
  dim: "#9ca3af",               // texte discret (gris clair)
  font: "'Poppins', system-ui, -apple-system, sans-serif",
};

// ================= HOOK RESPONSIVE =================
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);
  return matches;
}

// ================= COMPOSANTS =================
function Logo({ scale = 1 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 * scale }}>
      <div style={{
        width: 52 * scale, height: 52 * scale, borderRadius: 14 * scale,
        background: `linear-gradient(135deg, ${G.orange}, ${G.orangeD})`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 900, fontSize: 18 * scale, color: "#fff",
        boxShadow: "0 6px 24px rgba(249,115,22,0.3)",
      }}>CC</div>
      <div>
        <p style={{ margin: 0, fontWeight: 800, fontSize: 22 * scale, color: G.white, letterSpacing: "0.05em" }}>CANADCLEANING</p>
        <p style={{ margin: "4px 0 0", fontWeight: 400, fontSize: 9 * scale, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Nettoyage · Construction · Sécurité
        </p>
      </div>
    </div>
  );
}

function Badge({ children, color = G.orange }) {
  return (
    <span style={{
      background: color + "10", border: `1px solid ${color}30`, color,
      borderRadius: 30, padding: "4px 12px", fontSize: 11, fontWeight: 600,
      whiteSpace: "nowrap", display: "inline-block", fontFamily: G.font,
    }}>{children}</span>
  );
}

function ServiceCard({ svc }) {
  return (
    <div style={{
      background: G.card, border: `1px solid ${G.cardBorder}`, borderRadius: 20,
      overflow: "hidden", transition: "transform 0.3s ease, box-shadow 0.3s",
      cursor: "pointer", height: "100%", display: "flex", flexDirection: "column",
      fontFamily: G.font, boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
    }} className="service-card">
      <div style={{ position: "relative", height: 180 }}>
        <img src={svc.img} alt={svc.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 22px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 28 }}>{svc.emoji}</span>
            <div>
              <p style={{ margin: 0, fontWeight: 800, fontSize: 22, color: "#fff" }}>{svc.title}</p>
              <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{svc.subtitle}</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: svc.color }} />
      </div>
      <div style={{ padding: "20px 22px", flex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 12px" }}>
          {svc.items.slice(0, 8).map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: svc.color, flexShrink: 0, marginTop: 7 }} />
              <p style={{ margin: 0, fontSize: 12, color: G.dim, lineHeight: 1.5 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: "14px 22px", borderTop: `1px solid ${G.cardBorder}`, display: "flex", justifyContent: "space-between", background: "#f9fafb" }}>
        <span style={{ fontSize: 13, fontWeight: 700, color: svc.color }}>{svc.prix}</span>
        <span style={{ fontSize: 11, color: G.muted, background: "#fff", border: `1px solid ${G.cardBorder}`, padding: "4px 12px", borderRadius: 20 }}>
          Devis gratuit →
        </span>
      </div>
    </div>
  );
}

function StatCard({ stat }) {
  const Icon = stat.icon;
  return (
    <div style={{
      background: G.card, border: `1px solid ${G.cardBorder}`, borderRadius: 16,
      padding: "24px 20px", textAlign: "center", transition: "transform 0.2s",
      fontFamily: G.font, boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    }} className="stat-card">
      <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(249,115,22,0.1)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
        <Icon size={20} color={G.orange} />
      </div>
      <p style={{ margin: 0, fontWeight: 900, fontSize: 32, color: G.orange, lineHeight: 1 }}>{stat.val}</p>
      <p style={{ margin: 0, fontSize: 13, color: G.muted }}>{stat.label}</p>
    </div>
  );
}

// ================= COMPOSANT PRINCIPAL =================
export default function Depliant() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const colStats = isMobile ? "1fr" : "repeat(4, 1fr)";
  const colServices = isMobile ? "1fr" : "1fr 1fr";
  const colPhotoBand = isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)";
  const colSièges = isMobile ? "1fr" : "repeat(4, 1fr)";
  const colTarifs = isMobile ? "1fr" : "repeat(3, 1fr)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #f3f4f6; font-family: 'Poppins', sans-serif; line-height: 1.5; }
        .service-card:hover, .stat-card:hover { transform: translateY(-6px); box-shadow: 0 20px 35px -12px rgba(0,0,0,0.1); }
        .hover-scale-img:hover { transform: scale(1.05); }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @media print {
          body { margin: 0; background: white; }
          .no-print { display: none !important; }
          .service-card:hover, .stat-card:hover { transform: none; }
          .animate-pulse-slow { animation: none; }
        }
        h1, h2, h3, p, span, div { font-family: 'Poppins', sans-serif; }
      `}</style>

      <div style={{ minHeight: "100vh", padding: "40px 0", background: "#f3f4f6" }}>
        <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", background: G.bg, position: "relative", overflow: "hidden", borderRadius: 24, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)" }}>
          
          {/* ========== HERO (garde un overlay sombre pour lisibilité) ========== */}
          <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://serviclean.be/wp-content/uploads/2023/03/Nettoyage-bureaux-Bruxelles.jpg')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
            <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to top, #ffffff, transparent)" }} />
            <div style={{ position: "absolute", top: 0, right: 0, width: "66%", height: "100%", background: "linear-gradient(to left, rgba(249,115,22,0.08), transparent)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 80, right: 80, width: 288, height: 288, borderRadius: "50%", background: "rgba(249,115,22,0.15)", filter: "blur(64px)", animation: "pulse-slow 6s ease-in-out infinite" }} />
            <div style={{ position: "absolute", bottom: 80, left: 80, width: 224, height: 224, borderRadius: "50%", background: "rgba(37,99,235,0.08)", filter: "blur(64px)", animation: "pulse-slow 6s ease-in-out infinite 1.5s" }} />

            <div style={{ position: "relative", zIndex: 10, width: "100%", padding: isMobile ? "32px 24px" : "56px 64px 48px" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 64, alignItems: "center" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.4)", borderRadius: 40, padding: "6px 18px", marginBottom: 24 }}>
                    <Star size={14} color={G.orange} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: G.orange, letterSpacing: "0.15em", textTransform: "uppercase" }}>47 services · 7 villes · Certifié HACCP</span>
                  </div>
                  <h1 style={{ margin: "0 0 24px", fontWeight: 800, fontSize: isMobile ? 36 : 58, lineHeight: 1.1, color: "#fff", letterSpacing: "-0.02em" }}>
                    LA PROPRETÉ<br />
                    <span style={{ background: `linear-gradient(135deg, ${G.orange}, ${G.orangeD})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>NOTRE ENGAGEMENT,</span><br />
                    VOTRE BIEN-ÊTRE !
                  </h1>
                  <p style={{ margin: "0 0 32px", fontSize: isMobile ? 15 : 17, color: "#e5e7eb", lineHeight: 1.65, maxWidth: 540 }}>
                    CANADCLEANING est votre partenaire de confiance pour des services de nettoyage professionnels, fiables et adaptés à tous vos besoins. De la construction à l'entretien durable.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
                    <div style={{ background: `linear-gradient(135deg, ${G.orange}, ${G.orangeD})`, color: "#fff", padding: "14px 32px", borderRadius: 40, fontWeight: 600, fontSize: isMobile ? 13 : 15, textAlign: "center", boxShadow: "0 10px 20px -5px rgba(249,115,22,0.4)" }}>Demander un devis →</div>
                    <div style={{ border: "1.5px solid rgba(255,255,255,0.4)", color: "#fff", padding: "14px 32px", borderRadius: 40, fontWeight: 500, fontSize: isMobile ? 13 : 15 }}>Audit gratuit</div>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                    {[
                      { Icon: Shield, text: "Certifié HACCP" },
                      { Icon: Award, text: "RC Pro incluse" },
                      { Icon: Zap, text: "Urgences 4h" }
                    ].map(({ Icon, text }) => (
                      <div key={text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#e5e7eb" }}>
                        <Icon size={16} color={G.orange} /> {text}
                      </div>
                    ))}
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <div style={{ background: G.bg2, borderTop: `1px solid ${G.cardBorder}`, borderBottom: `1px solid ${G.cardBorder}`, padding: isMobile ? "28px 24px" : "40px 64px" }}>
            <div style={{ display: "grid", gridTemplateColumns: colStats, gap: 20 }}>{STATS.map(s => <StatCard key={s.label} stat={s} />)}</div>
          </div>

          {/* Services */}
          <div style={{ padding: isMobile ? "40px 24px" : "56px 64px" }}>
            <div style={{ marginBottom: 32, textAlign: "center" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>Ce que nous faisons</p>
              <h2 style={{ fontWeight: 700, fontSize: 32, color: G.white, letterSpacing: "-0.01em" }}>Nos 4 domaines d'expertise</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: colServices, gap: 24 }}>{SERVICES.map(svc => <ServiceCard key={svc.id} svc={svc} />)}</div>
          </div>

          {/* Photo band */}
          <div style={{ display: "grid", gridTemplateColumns: colPhotoBand, height: isMobile ? 90 : 140, margin: isMobile ? "0 24px 40px" : "0 64px 48px", borderRadius: 20, overflow: "hidden", border: `1px solid ${G.cardBorder}` }}>
            {SERVICES.map((svc, i) => (
              <div key={i} style={{ position: "relative", overflow: "hidden" }}>
                <img src={svc.img} alt={svc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 60%)" }} />
                <div style={{ position: "absolute", bottom: 8, left: 0, right: 0, textAlign: "center" }}>
                  <span style={{ fontSize: isMobile ? 14 : 20 }}>{svc.emoji}</span>
                  <p style={{ margin: "4px 0 0", fontSize: isMobile ? 10 : 13, fontWeight: 600, color: "#fff" }}>{svc.title}</p>
                </div>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: svc.color }} />
              </div>
            ))}
          </div>

          {/* Petite barre orange */}
          <div style={{ background: G.orange, padding: isMobile ? "14px 24px" : "18px 64px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <p style={{ margin: 0, fontWeight: 600, fontStyle: "italic", fontSize: isMobile ? 13 : 15, color: "#fff" }}>"Construire proprement, nettoyer durablement."</p>
            <p style={{ margin: 0, fontWeight: 500, fontSize: isMobile ? 12 : 14, color: "rgba(255,255,255,0.9)" }}>www.canadcleaning.ca</p>
          </div>

          {/* ========== PARTIE VERSO (thème clair) ========== */}
          <div style={{ background: G.bg, marginTop: 0 }}>
            {/* Header certifications */}
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 20, padding: isMobile ? "28px 24px" : "48px 64px 32px", borderBottom: `1px solid ${G.cardBorder}` }}>
              <Logo scale={isMobile ? 0.7 : 0.85} />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>{CERTS.map(c => <Badge key={c}>{c}</Badge>)}</div>
            </div>

            {/* Histoire */}
            <div style={{ background: G.bg2, borderBottom: `1px solid ${G.cardBorder}`, padding: isMobile ? "40px 24px" : "48px 64px" }}>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 48 }}>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Notre histoire</p>
                  <h2 style={{ fontWeight: 700, fontSize: 28, color: G.white, marginBottom: 20 }}>Fondée à Ottawa en 2018</h2>
                  <p style={{ fontSize: 15, color: G.muted, lineHeight: 1.7 }}>
                    CANADCLEANING est née d'une vision simple : offrir à nos clients une solution complète et clé en main pour tous leurs besoins de propreté et de construction. Notre conviction : un environnement bien construit et propre améliore l'image, la santé et la productivité.
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Chronologie</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {TIMELINE.map((t, i) => (
                      <div key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(249,115,22,0.1)", border: `2px solid ${G.orange}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <span style={{ fontWeight: 800, fontSize: 10, color: G.orange }}>{t.year}</span>
                        </div>
                        <p style={{ margin: "8px 0 0", fontSize: 14, color: G.white }}>{t.txt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sièges avec photos, email et lien */}
            <div style={{ padding: isMobile ? "40px 24px" : "48px 64px", borderBottom: `1px solid ${G.cardBorder}` }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Présence internationale</p>
              <h2 style={{ fontWeight: 700, fontSize: 28, color: G.white, marginBottom: 28 }}>Nos sièges & bureaux</h2>
              <div style={{ display: "grid", gridTemplateColumns: colSièges, gap: 24 }}>
                {SEDES.map(s => (
                  <div key={s.city} style={{
                    background: G.card,
                    border: `1px solid ${G.cardBorder}`,
                    borderRadius: 20,
                    overflow: "hidden",
                    transition: "transform 0.2s",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                  }} className="stat-card">
                    <div style={{ height: 140, overflow: "hidden" }}>
                      <img src={s.img} alt={`Bureau ${s.city}`} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }} className="hover-scale-img" />
                    </div>
                    <div style={{ padding: "20px" }}>
                      <span style={{ fontSize: 32, display: "block", marginBottom: 8 }}>{s.flag}</span>
                      <p style={{ fontWeight: 600, fontSize: 16, color: G.white, marginBottom: 4 }}>{s.city}</p>
                      <p style={{ fontSize: 13, color: G.muted, marginBottom: 12 }}>{s.country}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <Phone size={14} color={G.orange} /><span style={{ fontSize: 13, color: G.dim }}>{s.phone}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <Mail size={14} color={G.orange} />
                        <a href={`mailto:${s.email}`} style={{ fontSize: 13, color: G.dim, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = G.orange} onMouseLeave={(e) => e.target.style.color = G.dim}>{s.email}</a>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Globe size={14} color={G.orange} />
                        <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: G.dim, textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.target.style.color = G.orange} onMouseLeave={(e) => e.target.style.color = G.dim}>Page contact</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tarifs */}
            <div style={{ background: G.bg2, borderBottom: `1px solid ${G.cardBorder}`, padding: isMobile ? "40px 24px" : "48px 64px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: G.orange, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Tarification</p>
              <h2 style={{ fontWeight: 700, fontSize: 28, color: G.white, marginBottom: 28 }}>Nos formules principales</h2>
              <div style={{ display: "grid", gridTemplateColumns: colTarifs, gap: 24 }}>
                {[
                  { cat: "🧹 Nettoyage", color: "#2563eb", plans: [{ name: "Commercial Pro", price: "199€–399€", unit: "/mois", hot: true, feat: ["Jusqu'à 200m²", "5×/semaine", "RC Pro incluse"] }, { name: "Résidentiel", price: "99€–149€", unit: "/mois", hot: false, feat: ["Produits inclus", "Agent certifié"] }, { name: "Fin de Bail", price: "Dès 149€", unit: "/studio", hot: false, feat: ["Photos avant/après", "Dépôt garanti"] }] },
                  { cat: "🍽️ Restauration", color: "#ea580c", plans: [{ name: "Pack Journalier", price: "149€", unit: "/jour", hot: true, feat: ["Cuisine + salle", "Norme HACCP", "7j/7"] }, { name: "Hottes HACCP", price: "199€", unit: "/inter.", hot: false, feat: ["Certificat HACCP", "Rapport photo"] }, { name: "Post-Événement", price: "249€", unit: "/soir", hot: false, feat: ["Nuit & fériés", "Sous 4h urgence"] }] },
                  { cat: "🏗️ Construction", color: "#d97706", plans: [{ name: "Immeuble", price: "800€", unit: "/m²", hot: true, feat: ["Clé en main", "R+1 à R+3+"] }, { name: "Appartement", price: "900€", unit: "/m²", hot: false, feat: ["Standing", "Finitions incluses"] }, { name: "Route bitumée", price: "45€", unit: "/m²", hot: false, feat: ["VRD inclus", "Signalisation"] }] },
                ].map(group => (
                  <div key={group.cat} style={{ background: G.card, border: `1px solid ${G.cardBorder}`, borderRadius: 20, overflow: "hidden", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                    <div style={{ padding: "18px 20px", borderBottom: `1px solid ${G.cardBorder}`, background: group.color + "10" }}>
                      <p style={{ fontWeight: 600, fontSize: 16, color: G.white }}>{group.cat}</p>
                    </div>
                    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: 14 }}>
                      {group.plans.map(plan => (
                        <div key={plan.name} style={{ padding: "14px 16px", borderRadius: 14, border: plan.hot ? `2px solid ${group.color}` : `1px solid ${G.cardBorder}`, background: plan.hot ? group.color + "08" : "transparent", position: "relative" }}>
                          {plan.hot && <span style={{ position: "absolute", top: -10, right: 12, background: group.color, color: "#fff", fontSize: 9, fontWeight: 700, padding: "2px 10px", borderRadius: 20 }}>Populaire</span>}
                          <p style={{ margin: "0 0 6px", fontSize: 13, fontWeight: 600, color: G.white }}>{plan.name}</p>
                          <p style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 800, color: group.color }}>{plan.price} <span style={{ fontSize: 12, fontWeight: 400, color: G.muted }}>{plan.unit}</span></p>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>{plan.feat.map(f => <span key={f} style={{ fontSize: 10, background: "#f3f4f6", border: `1px solid ${G.cardBorder}`, color: G.dim, borderRadius: 30, padding: "4px 10px" }}>{f}</span>)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA final */}
            <div style={{ padding: isMobile ? "40px 24px" : "56px 64px" }}>
              <div style={{ background: `linear-gradient(135deg, ${G.orange}, ${G.orangeD})`, borderRadius: 28, padding: isMobile ? "36px 24px" : "52px 64px", textAlign: "center", boxShadow: "0 20px 40px -12px rgba(249,115,22,0.3)" }}>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>Prêt à commencer ?</p>
                <h2 style={{ fontWeight: 800, fontSize: isMobile ? 32 : 40, color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>Devis gratuit<br />en 48 heures</h2>
                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.9)", marginBottom: 32 }}>Construction · Nettoyage · Restauration · Sécurité<br />Un seul interlocuteur.</p>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 28, marginBottom: 32 }}>
                  {[{ Icon: Phone, v: "+1 (613) 769-0296" }, { Icon: Mail, v: "info@canadcleaning.ca" }, { Icon: Globe, v: "www.canadcleaning.ca" }].map(({ Icon, v }) => (
                    <div key={v} style={{ display: "flex", alignItems: "center", gap: 10, color: "#fff" }}>
                      <Icon size={16} color="#fff" /><span style={{ fontSize: 14 }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 40, padding: "12px 0", fontWeight: 600, fontSize: 13, textTransform: "uppercase", display: "inline-block", width: "auto", minWidth: 200 }}>
                  Audit gratuit offert ✦
                </div>
              </div>
            </div>

            {/* Footer final */}
            <div style={{ borderTop: `1px solid ${G.cardBorder}`, background: G.bg2, padding: isMobile ? "16px 24px" : "20px 64px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <Logo scale={0.65} />
              <p style={{ fontSize: 12, color: G.dim }}>© CANADCLEANING 2026 — Tous droits réservés</p>
              <p style={{ fontSize: 13, fontWeight: 500, color: G.orange }}>info@canadcleaning.ca</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}