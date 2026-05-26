export const SERVICES = [
  // ─── NETTOYAGE (23) ──────────────────────────────────────────────────────
  { id:1,  cat:'nettoyage',    icon:'🏢', image:'https://serviclean.be/wp-content/uploads/2023/03/Nettoyage-bureaux-Bruxelles.jpg',    title:'Nettoyage commercial & bureau',       desc:'Entretien quotidien ou hebdomadaire de vos espaces professionnels.', price:'Sur devis' },
  { id:2,  cat:'nettoyage',    icon:'🏠', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROI5Yaf4R3_Nr_0hgHyXV-qGeTYr-nEpiQGA&s',   title:'Nettoyage résidentiel',               desc:'Ménage complet pour appartements, maisons et résidences.', price:'Dès 99€/mois' },
  { id:3,  cat:'nettoyage',    icon:'🎒', image:'https://img.freepik.com/photos-gratuite/femme-afro-tenant-seau-articles-nettoyage_58466-11246.jpg',      title:'Garderie / nettoyage scolaire',        desc:'Environnement sain et sécurisé pour les enfants.', price:'Sur devis' },
  { id:4,  cat:'nettoyage',    icon:'🏥', image:'https://www.wecleaned.fr/storage/media/ravalement-vs-nettoyage-facade-01KEWC1Y7ZV1SSBEWYJGX6SY9A.jpg',           title:'Centres de santé',                    desc:'Désinfection et nettoyage selon normes sanitaires strictes.', price:'Sur devis' },
  { id:5,  cat:'nettoyage',    icon:'🪟', image:'/images/services/nettoyage-vitres.jpg',        title:'Nettoyage des vitres',                desc:'Vitres intérieures et extérieures, immeubles, façades.', price:'Dès 49€' },
  { id:6,  cat:'nettoyage',    icon:'🔑', image:'/images/services/fin-de-bail.jpg',             title:'Ménage fin de location / bail',       desc:'Remise en état complète pour dépôt de garantie.', price:'Dès 149€' },
  { id:7,  cat:'nettoyage',    icon:'🪴', image:'/images/services/nettoyage-tapis.jpg',         title:'Nettoyage de tapis',                  desc:'Extraction profonde, désinfection et parfumage.', price:'Dès 29€/tapis' },
  { id:8,  cat:'nettoyage',    icon:'✨', image:'/images/services/nettoyage-sols.jpg',          title:'Nettoyage des sols',                  desc:'Carrelage, parquet, marbre, béton ciré — tous types de sols.', price:'Sur devis' },
  { id:9,  cat:'nettoyage',    icon:'🍂', image:'/images/services/menage-saisonnier.jpg',       title:'Nettoyage automne & printemps',       desc:'Grand ménage saisonnier complet intérieur/extérieur.', price:'Sur devis' },
  { id:10, cat:'nettoyage',    icon:'🏗️', image:'/images/services/apres-construction.jpg',     title:'Nettoyage après construction',        desc:'Élimination poussières, gravats, résidus post-chantier.', price:'Sur devis' },
  { id:11, cat:'nettoyage',    icon:'🐾', image:'/images/services/cabinets-veterinaires.jpg',   title:'Cabinets vétérinaires',               desc:'Désinfection totale, traitement des odeurs animales.', price:'Sur devis' },
  { id:12, cat:'nettoyage',    icon:'🦷', image:'/images/services/cabinets-dentaires.jpg',      title:'Cabinets dentaires',                  desc:"Nettoyage conforme aux normes d'hygiène dentaires.", price:'Sur devis' },
  { id:13, cat:'nettoyage',    icon:'♨️', image:'/images/services/nettoyage-vapeur.jpg',        title:'Nettoyage à la vapeur',               desc:'Désinfection haute température sans produits chimiques.', price:'Dès 79€' },
  { id:14, cat:'nettoyage',    icon:'🧹', image:'/images/services/grand-menage.jpg',            title:'Grand ménage',                        desc:'Nettoyage intensif complet de tous vos espaces.', price:'Sur devis' },
  { id:15, cat:'nettoyage',    icon:'💫', image:'/images/services/cirage-planchers.jpg',        title:'Cirage de planchers',                 desc:'Lustrage, polissage et protection de vos sols en bois.', price:'Sur devis' },
  { id:16, cat:'nettoyage',    icon:'💊', image:'/images/services/pharmacies.jpg',              title:'Pharmacies',                          desc:'Hygiène pharmaceutique rigoureuse et traçabilité.', price:'Sur devis' },
  { id:17, cat:'nettoyage',    icon:'🩺', image:'/images/services/cabinets-medicaux.jpg',       title:'Cabinets médicaux',                   desc:'Nettoyage et désinfection selon protocoles médicaux.', price:'Sur devis' },
  { id:18, cat:'nettoyage',    icon:'📚', image:'/images/services/enseignement.jpg',            title:"Établissements d'enseignement",       desc:'Écoles, lycées, universités — environnement propre.', price:'Sur devis' },
  { id:19, cat:'nettoyage',    icon:'🚗', image:'/images/services/concessionnaires.jpg',        title:'Concessionnaires automobiles',        desc:'Show-room, ateliers, espaces clients et bureaux.', price:'Sur devis' },
  { id:20, cat:'nettoyage',    icon:'📦', image:'/images/services/entrepots.jpg',               title:'Entrepôts',                           desc:'Nettoyage industriel de grandes surfaces de stockage.', price:'Sur devis' },
  { id:21, cat:'nettoyage',    icon:'🏘️', image:'/images/services/appartements.jpg',           title:'Appartements (entretien régulier)',   desc:"Service d'entretien récurrent sur mesure.", price:'Dès 79€/mois' },
  { id:22, cat:'nettoyage',    icon:'🔨', image:'/images/services/nettoyage-chantier.jpg',      title:'Nettoyage en construction',           desc:'Accompagnement nettoyage tout au long du chantier.', price:'Sur devis' },
  { id:23, cat:'nettoyage',    icon:'🛡️', image:'/images/services/gardiennage.jpg',             title:'Gardiennage',                         desc:'Surveillance et sécurité de vos locaux.', price:'Sur devis' },
  // ─── RESTAURATION (12) ───────────────────────────────────────────────────
  { id:24, cat:'restauration', icon:'🍽️', image:'/images/services/salle-restaurant.jpg',       title:'Salle de restaurant',                 desc:'Nettoyage complet après service : sols, tables, sanitaires.', price:'Dès 59€/soir' },
  { id:25, cat:'restauration', icon:'👨‍🍳', image:'/images/services/cuisine-pro.jpg',            title:'Cuisine professionnelle',             desc:'Plans de travail, équipements, sols — norme HACCP.', price:'Dès 89€/soir' },
  { id:26, cat:'restauration', icon:'💨', image:'/images/services/hottes-extracteurs.jpg',      title:'Dégraissage hottes & extracteurs',    desc:'Démontage, dégraissage complet, remontage certifié.', price:'Dès 199€' },
  { id:27, cat:'restauration', icon:'❄️', image:'/images/services/chambres-froides.jpg',        title:'Chambres froides',                    desc:'Parois, étagères, joints — norme hygiène alimentaire.', price:'Sur devis' },
  { id:28, cat:'restauration', icon:'🔥', image:'/images/services/equipements-cuisson.jpg',     title:'Équipements de cuisson',              desc:'Fours, friteuses, grills, salamandres.', price:'Sur devis' },
  { id:29, cat:'restauration', icon:'✅', image:'/images/services/desinfection-haccp.jpg',      title:'Désinfection HACCP',                  desc:'Surfaces de contact alimentaire, traçabilité complète.', price:'Sur devis' },
  { id:30, cat:'restauration', icon:'🚿', image:'/images/services/sanitaires.jpg',              title:'Sanitaires clients & personnel',      desc:'Désinfection et réapprovisionnement consommables.', price:'Sur devis' },
  { id:31, cat:'restauration', icon:'🌿', image:'/images/services/terrasses.jpg',               title:'Terrasses & zones extérieures',       desc:'Mobilier, parasols, façades, zones fumeurs.', price:'Sur devis' },
  { id:32, cat:'restauration', icon:'🏆', image:'/images/services/grand-menage-fond.jpg',       title:'Grand ménage de fond',                desc:'Nettoyage intégral cave au plafond — fermeture annuelle.', price:'Sur devis' },
  { id:33, cat:'restauration', icon:'🎉', image:'/images/services/post-evenement.jpg',          title:'Nettoyage post-événement',            desc:'Après banquets, mariages, soirées privées.', price:'Dès 249€' },
  { id:34, cat:'restauration', icon:'💧', image:'/images/services/vapeur-haute-pression.jpg',   title:'Nettoyage vapeur haute pression',     desc:"Joints, recoins, équipements difficiles d'accès.", price:'Sur devis' },
  { id:35, cat:'restauration', icon:'🏫', image:'/images/services/cantines.jpg',                title:'Cantines scolaires & collectives',    desc:'Réfectoires, cuisines collectives, zones de lavage.', price:'Sur devis' },
  // ─── CONSTRUCTION (12) ───────────────────────────────────────────────────
  { id:36, cat:'construction', icon:'🏛️', image:'/images/services/construction-immeubles.jpg', title:"Construction d'immeubles",            desc:'R+1, R+2, R+3 et plus — clé en main.', price:'Dès 800€/m²' },
  { id:37, cat:'construction', icon:'🏠', image:'/images/services/construction-appartements.jpg',title:"Construction d'appartements",        desc:'Collectifs ou standing — qualité premium.', price:'Dès 900€/m²' },
  { id:38, cat:'construction', icon:'🛣️', image:'/images/services/construction-routes.jpg',    title:'Construction de routes',              desc:'Urbaines, rurales, bitumées — toutes catégories.', price:'Dès 45€/m²' },
  { id:39, cat:'construction', icon:'⛏️', image:'/images/services/terrassement.jpg',           title:'Terrassement & fondations',           desc:'Préparation du terrain et infrastructure de base.', price:'Sur devis' },
  { id:40, cat:'construction', icon:'🧱', image:'/images/services/gros-oeuvre.jpg',            title:'Gros œuvre',                          desc:'Murs, poteaux, dalles — structure béton armé.', price:'Sur devis' },
  { id:41, cat:'construction', icon:'🔌', image:'/images/services/second-oeuvre.jpg',          title:'Second œuvre',                        desc:'Cloisons, plomberie, électricité de base.', price:'Sur devis' },
  { id:42, cat:'construction', icon:'🎨', image:'/images/services/revetements.jpg',            title:'Revêtements sols & murs',             desc:'Carrelage, peinture, enduits — finitions soignées.', price:'Sur devis' },
  { id:43, cat:'construction', icon:'🌐', image:'/images/services/vrd.jpg',                    title:'VRD — Voirie & réseaux divers',       desc:'Réseaux enterrés, canalisations, voirie complète.', price:'Sur devis' },
  { id:44, cat:'construction', icon:'🚦', image:'/images/services/signalisation.jpg',          title:'Signalisation routière',              desc:'Marquage au sol, panneaux, équipements de sécurité.', price:'Sur devis' },
  { id:45, cat:'construction', icon:'📐', image:'/images/services/plans-techniques.jpg',       title:'Plans & études techniques',           desc:'Conception avec nos partenaires architectes agréés.', price:'Sur devis' },
  { id:46, cat:'construction', icon:'🍴', image:'/images/services/amenagement-restaurants.jpg',title:'Aménagement restaurants',             desc:"Aménagement intérieur d'espaces de restauration.", price:'Sur devis' },
  { id:47, cat:'construction', icon:'🍳', image:'/images/services/cuisines-pro-construction.jpg',title:'Cuisines professionnelles',          desc:'Construction clé en main : gros et second œuvre.', price:'Sur devis' },
];

export const CATEGORIES = [
  { id:'all',         label:'Tous les services', count: 47, color:'navy' },
  { id:'nettoyage',   label:'Nettoyage',          count: 23, color:'blue' },
  { id:'restauration',label:'Restauration',        count: 12, color:'orange' },
  { id:'construction',label:'Construction',         count: 12, color:'yellow' },
];

export const PACKS = [
  { id:1, cat:'nettoyage',   icon:'🏠', title:'Nettoyage Résidentiel',    subtitle:'Complet', price:'99€–149€', unit:'HT/mois',       features:['Ménage hebdomadaire','Produits inclus','Agent certifié','Rapport de passage'], popular:false },
  { id:2, cat:'nettoyage',   icon:'🏢', title:'Nettoyage Commercial',     subtitle:'Pro',     price:'199€–399€', unit:'HT/mois',       features:["Locaux jusqu'à 200m²",'5×/semaine','Matériel industriel','Assurance RC Pro'], popular:true  },
  { id:3, cat:'restauration',icon:'🍽️', title:'Restauration Quotidien',   subtitle:'Complet', price:'149€',      unit:'HT/jour',       features:['Cuisine + salle + sanitaires','Norme HACCP',"Rapport d'intervention",'7j/7 disponible'], popular:true  },
  { id:4, cat:'restauration',icon:'🎉', title:'Post-Événement',           subtitle:'Banquet', price:'249€',      unit:'HT/intervention',features:['Salle + cuisine','Nuit & jours fériés','Résultat garanti','Sous 4h si urgence'], popular:false },
  { id:5, cat:'restauration',icon:'💨', title:'Dégraissage Hottes',       subtitle:'HACCP',   price:'199€',      unit:'HT/intervention',features:['Démontage complet','Conformité HACCP','Certificat remis','Rapport photo avant/après'], popular:false },
  { id:6, cat:'construction',icon:'🏛️', title:'Construction Immeuble',    subtitle:'Clé en main', price:'Sur devis', unit:'',          features:['Gros & second œuvre','Finitions incluses','Plans partenaires','Suivi de chantier'], popular:false },
  { id:7, cat:'construction',icon:'🛣️', title:'Route Bitumée',            subtitle:'Complète',price:'Dès 45€',   unit:'/m²',           features:['Terrassement inclus','VRD compris','Signalisation','Livraison garantie'], popular:false },
  { id:8, cat:'nettoyage',   icon:'🌿', title:'Entretien Écologique',     subtitle:'Éco+',    price:'79€–159€',  unit:'HT/intervention',features:['Produits écolabel','Sans allergènes','Éco-responsable','Certifié ISO 14001'], popular:false },
  { id:9, cat:'nettoyage',   icon:'🔑', title:'Fin de Bail',              subtitle:'Garantie',price:'Dès 149€',  unit:'HT (studio)',    features:['Remise en état complète','Photos avant/après','Dépôt garanti','État des lieux inclus'], popular:false },
];

export const SEDES = [
  { city:'Ottawa',      country:'Canada',             phone:'+1 (613) 769-0296', flag:'🇨🇦', status:'Siège principal' },
  { city:'Kinshasa',    country:'RD Congo',           phone:'+243 814 679 157',  flag:'🇨🇩', status:'Antenne opérationnelle' },
  { city:'Lubumbashi',  country:'RD Congo',           phone:'+243 970 859 332',  flag:'🇨🇩', status:'Antenne opérationnelle' },
  { city:'Kolwezi',     country:'RD Congo',           phone:'+243 970 859 332',  flag:'🇨🇩', status:'Antenne opérationnelle' },
  { city:'Brazzaville', country:'Congo-Brazzaville',  phone:'+242 06 979 0860',  flag:'🇨🇬', status:'Antenne opérationnelle' },
  { city:'Pointe-Noire',country:'Congo-Brazzaville',  phone:'+242 06 979 0860',  flag:'🇨🇬', status:'Antenne opérationnelle' },
  { city:'Malabo',      country:'Guinée Équatoriale', phone:'Bientôt disponible',flag:'🇬🇶', status:'Ouverture prochaine' },
];

export const STATS = [
  { value:1250, suffix:'+', label:'Clients satisfaits' },
  { value:47,   suffix:'',  label:'Services disponibles' },
  { value:7,    suffix:'',  label:'Villes couvertes' },
  { value:98,   suffix:'%', label:'Taux de recommandation' },
];

export const TEMOIGNAGES = [
  { name:'Jean Moukoko',     role:'Restaurant Le Tropicana, Kinshasa',  text:"Service impeccable ! L'équipe CANADCLEANING intervient chaque soir après le service. Ma cuisine est certifiée HACCP grâce à eux.", note:5 },
  { name:'Marie Lepage',     role:'Directrice Immobilier, Ottawa',       text:"J'ai confié la construction de 3 appartements et leur nettoyage post-chantier à CANADCLEANING. Résultat parfait dans les délais.", note:5 },
  { name:'Patrick Mukendi',  role:'Gérant Pharmacie, Lubumbashi',        text:"Notre pharmacie est nettoyée chaque matin selon les protocoles. Aucune réclamation de l'inspection sanitaire depuis 2 ans.", note:5 },
  { name:'Sophie Bénali',    role:'Gestionnaire Copropriété, Brazzaville',text:'Ponctualité, professionnalisme et rapport de passage après chaque intervention. Je recommande sans hésitation.', note:5 },
  { name:'Carlos Ndong',     role:'Chef de projet, Malabo',              text:'La seule entreprise de la région qui propose construction ET nettoyage. Gain de temps et argent considérable.', note:5 },
  { name:'Amélie Trousseau', role:'DG Hôtel Grand Palace, Brazzaville', text:'Toute notre restauration est gérée par CANADCLEANING : cuisine, salle, chambre froide. Zéro défaut sanitaire.', note:5 },
];