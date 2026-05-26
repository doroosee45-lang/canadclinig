// pages/Services.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Section, Container, PageHeader, FilterTabs } from '../../components/ui';

// Données complètes des services
export const SERVICES = [
  // ─── NETTOYAGE (5 services) ──────────────────────────────────────────────────────
  {
    id: 1,
    cat: 'nettoyage',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    title: 'Nettoyage des bureaux',
    shortDesc: 'Nettoyage complet et rigoureux des bureaux',
    description: 'Chez CanadCleaning Inc, nous savons que la propreté de vos bureaux reflète l\'image de votre entreprise. Nos agents qualifiés assurent un entretien minutieux des sols, du mobilier, des vitres et des espaces communs. Grâce à des produits écologiques et à une méthode rigoureuse, nous garantissons un environnement sain, agréable et propice à la productivité.',
    features: ['Entretien des sols', 'Nettoyage mobilier', 'Vitres et surfaces', 'Produits écologiques'],
    price: 'Sur devis'
  },
  {
    id: 2,
    cat: 'nettoyage',
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    title: 'Nettoyage des espaces publics',
    shortDesc: 'Nettoyage complet et rigoureux des espaces publics',
    description: 'Les espaces publics exigent un niveau d\'entretien constant et irréprochable. CanadCleaning Inc intervient dans les mairies, écoles, hôpitaux, centres commerciaux et parkings, pour offrir un cadre propre, sûr et accueillant à tous les usagers. Notre approche repose sur la rapidité, la régularité et le respect strict des normes d\'hygiène.',
    features: ['Mairies et écoles', 'Hôpitaux et cliniques', 'Centres commerciaux', 'Parkings'],
    price: 'Sur devis'
  },
  {
    id: 3,
    cat: 'nettoyage',
    icon: '🏨',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
    title: 'Nettoyage des hôtels',
    shortDesc: 'Nettoyage complet et rigoureux des hôtels',
    description: 'Dans le secteur hôtelier, la première impression est capitale. C\'est pourquoi CanadCleaning Inc propose des prestations de nettoyage hôtelier de haut niveau, incluant les chambres, les couloirs, les restaurants et les zones communes. Discrets, efficaces et formés aux standards de qualité internationale, nos agents assurent une propreté impeccable pour vos clients.',
    features: ['Chambres et suites', 'Couloirs et halls', 'Restaurants et bars', 'Zones communes'],
    price: 'Sur devis'
  },
  {
    id: 4,
    cat: 'nettoyage',
    icon: '🏪',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    title: 'Nettoyage des commerces',
    shortDesc: 'Nettoyage professionnel pour boutiques et commerces',
    description: 'Boutiques, galeries marchandes, centres commerciaux — nous intervenons pour maintenir vos espaces de vente propres et accueillants. Un environnement impeccable fidélise vos clients et valorise vos produits.',
    features: ['Vitrines et devantures', 'Cabines d\'essayage', 'Zones de caisse', 'Stocks et réserves'],
    price: 'Sur devis'
  },
  {
    id: 5,
    cat: 'nettoyage',
    icon: '🏭',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800',
    title: 'Nettoyage industriel',
    shortDesc: 'Nettoyage des sites industriels et entrepôts',
    description: 'Sites de production, entrepôts logistiques, zones de stockage — nos équipes spécialisées interviennent dans les environnements industriels exigeants avec des équipements adaptés et des protocoles stricts.',
    features: ['Zones de production', 'Entrepôts logistiques', 'Salles blanches', 'Zones extérieures'],
    price: 'Sur devis'
  },

  // ─── MAINTENANCE DES BÂTIMENTS (5 services) ──────────────────────────────────────
  {
    id: 6,
    cat: 'maintenance',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
    title: 'Maintenance des Bâtiments',
    shortDesc: 'La fiabilité au meilleur coût',
    description: 'Chez CanadCleaning Inc, nous savons qu\'un bâtiment bien entretenu est un investissement qui dure. Nos équipes spécialisées assurent une maintenance préventive et corrective rigoureuse, conçue pour prolonger la durée de vie de vos installations tout en réduisant vos coûts d\'exploitation. Nous intervenons avec précision et efficacité dans les domaines suivants : réparations générales et entretien technique régulier, travaux de peinture, électricité, plomberie et menuiserie, vérification et remise à niveau des équipements essentiels. Chaque intervention est réalisée selon des normes de qualité strictes, avec un souci constant de performance et de sécurité.',
    features: ['Réparations générales', 'Entretien technique', 'Vérification équipements', 'Peinture & électricité'],
    price: 'Sur devis',
    highlight: '💡 Contrats flexibles, économiques et adaptés à vos besoins réels'
  },
  {
    id: 7,
    cat: 'maintenance',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800',
    title: 'Travaux de peinture',
    shortDesc: 'Ravalement et rénovation des surfaces',
    description: 'Ravalement de façades, peinture intérieure, pose de revêtements muraux — nos peintres professionnels redonnent vie à vos espaces avec des finitions soignées et durables.',
    features: ['Peinture intérieure', 'Ravalement extérieur', 'Pose de revêtements', 'Préparation des surfaces'],
    price: 'Sur devis'
  },
  {
    id: 8,
    cat: 'maintenance',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
    title: 'Électricité',
    shortDesc: 'Installation et maintenance électrique',
    description: 'Mise aux normes, dépannage, installation d\'éclairage et de prises — nos électriciens certifiés interviennent rapidement pour assurer la sécurité et le bon fonctionnement de vos installations.',
    features: ['Mise aux normes', 'Dépannage urgent', 'Installation éclairage', 'Tableaux électriques'],
    price: 'Sur devis'
  },
  {
    id: 9,
    cat: 'maintenance',
    icon: '🚰',
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800',
    title: 'Plomberie',
    shortDesc: 'Dépannage et installation sanitaire',
    description: 'Fuite d\'eau, canalisation bouchée, installation de sanitaires — nos plombiers expérimentés interviennent avec réactivité et efficacité pour résoudre tous vos problèmes.',
    features: ['Dépannage urgence', 'Installation sanitaire', 'Maintenance préventive', 'Débouchage canalisations'],
    price: 'Sur devis'
  },
  {
    id: 10,
    cat: 'maintenance',
    icon: '🪚',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    title: 'Menuiserie',
    shortDesc: 'Fabrication et rénovation sur mesure',
    description: 'Portes, fenêtres, agencements intérieurs, meubles sur mesure — nos menuisiers réalisent vos projets avec précision et savoir-faire artisanal.',
    features: ['Portes et fenêtres', 'Agencements intérieurs', 'Meubles sur mesure', 'Rénovation bois'],
    price: 'Sur devis'
  },

  // ─── CONSTRUCTION (10 services) ──────────────────────────────────────────────────
  {
    id: 11,
    cat: 'construction',
    icon: '🏗️',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
    title: 'Construction d\'immeubles',
    shortDesc: 'R+1, R+2, R+3 et plus — clé en main',
    description: 'Construction complète d\'immeubles résidentiels ou commerciaux. De la fondation à la livraison, nous gérons l\'ensemble du chantier avec des matériaux de qualité et un suivi rigoureux.',
    features: ['Gros œuvre', 'Second œuvre', 'Finitions incluses', 'Suivi de chantier'],
    price: 'Dès 800€/m²'
  },
  {
    id: 12,
    cat: 'construction',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
    title: 'Construction d\'appartements',
    shortDesc: 'Collectifs ou standing — qualité premium',
    description: 'Réalisation d\'appartements collectifs ou de standing, avec des prestations haut de gamme et des finitions soignées.',
    features: ['Plans sur mesure', 'Matériaux premium', 'Isolation performante', 'Livraison clé en main'],
    price: 'Dès 900€/m²'
  },
  {
    id: 13,
    cat: 'construction',
    icon: '🛣️',
    image: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=800',
    title: 'Construction de routes',
    shortDesc: 'Urbaines, rurales, bitumées — toutes catégories',
    description: 'Réalisation de routes urbaines et rurales, bitumées ou en béton. Nous assurons l\'ensemble des prestations : terrassement, couche de fondation, revêtement et signalisation.',
    features: ['Terrassement inclus', 'Revêtement bitume/béton', 'Signalisation', 'Finition professionnelle'],
    price: 'Dès 45€/m²'
  },
  {
    id: 14,
    cat: 'construction',
    icon: '⛏️',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
    title: 'Terrassement & fondations',
    shortDesc: 'Préparation du terrain et infrastructure de base',
    description: 'Préparation des terrains, excavation, fondations profondes et superficielles. Une base solide pour tous vos projets de construction.',
    features: ['Excavation', 'Fondations', 'Drainage', 'Préparation terrain'],
    price: 'Sur devis'
  },
  {
    id: 15,
    cat: 'construction',
    icon: '🧱',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c1f?w=800',
    title: 'Gros œuvre',
    shortDesc: 'Murs, poteaux, dalles — structure béton armé',
    description: 'Réalisation de la structure porteuse des bâtiments : murs porteurs, poteaux, poutres, dalles en béton armé. Une expertise technique pour des constructions durables.',
    features: ['Béton armé', 'Murs porteurs', 'Poteaux et poutres', 'Dalles'],
    price: 'Sur devis'
  },
  {
    id: 16,
    cat: 'construction',
    icon: '🔌',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800',
    title: 'Second œuvre',
    shortDesc: 'Cloisons, plomberie, électricité de base',
    description: 'Aménagement intérieur : cloisons, plomberie, électricité, faux plafonds. Nous préparons vos espaces pour les finitions.',
    features: ['Cloisons', 'Plomberie', 'Électricité', 'Faux plafonds'],
    price: 'Sur devis'
  },
  {
    id: 17,
    cat: 'construction',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800',
    title: 'Revêtements sols & murs',
    shortDesc: 'Carrelage, peinture, enduits — finitions soignées',
    description: 'Pose de revêtements pour sols et murs : carrelage, parquet, peinture, papier peint, enduits décoratifs.',
    features: ['Carrelage', 'Parquet', 'Peinture', 'Enduits décoratifs'],
    price: 'Sur devis'
  },
  {
    id: 18,
    cat: 'construction',
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800',
    title: 'VRD — Voirie & réseaux divers',
    shortDesc: 'Réseaux enterrés, canalisations, voirie complète',
    description: 'Aménagement des réseaux enterrés : assainissement, eau potable, électricité, télécommunications, et voirie.',
    features: ['Assainissement', 'Eau potable', 'Réseaux électriques', 'Télécommunications'],
    price: 'Sur devis'
  },
  {
    id: 19,
    cat: 'construction',
    icon: '🚦',
    image: 'https://images.unsplash.com/photo-1562857785-0e7b9c6f0ea2?w=800',
    title: 'Signalisation routière',
    shortDesc: 'Marquage au sol, panneaux, équipements de sécurité',
    description: 'Installation de signalisation horizontale et verticale : marquage au sol, panneaux de signalisation, équipements de sécurité.',
    features: ['Marquage au sol', 'Panneaux signalisation', 'Équipements sécurité', 'Balises'],
    price: 'Sur devis'
  },
  {
    id: 20,
    cat: 'construction',
    icon: '📐',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
    title: 'Plans & études techniques',
    shortDesc: 'Conception avec nos partenaires architectes agréés',
    description: 'Conception de plans, études techniques, permis de construire. En partenariat avec des architectes agréés.',
    features: ['Plans architecte', 'Études techniques', 'Permis construire', 'Suivi projet'],
    price: 'Sur devis'
  },

  // ─── SÉCURITÉ ET GARDIENNAGE (9 services) ────────────────────────────────────────
  {
    id: 21,
    cat: 'securite',
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    title: 'Service de Sécurité',
    shortDesc: 'Protection et Sérénité Garantie',
    description: 'Chez CanadCleaning Inc, nous savons que la propreté et la sécurité vont de pair. C\'est pourquoi nous avons développé un service de sécurité intégré, adapté aussi bien aux entreprises qu\'aux résidences privées. Nos agents qualifiés assurent une surveillance continue de vos locaux, de jour comme de nuit, avec professionnalisme et discrétion. Grâce à des équipements modernes (caméras, alarmes, systèmes de contrôle d\'accès), nous garantissons une protection optimale contre tout risque d\'intrusion ou de dégradation. Gardiennage et surveillance des bâtiments, contrôle d\'accès du personnel et des visiteurs, rondes de sécurité et gestion des alarmes, assistance et intervention rapide en cas d\'urgence. Avec CanadCleaning Inc, vous bénéficiez d\'un environnement propre, sûr et maîtrisé, pour travailler ou vivre en toute tranquillité.',
    features: ['Gardiennage', 'Contrôle d\'accès', 'Rondes sécurité', 'Intervention rapide'],
    price: 'Sur devis',
    highlight: '💼 Environnement propre, sûr et maîtrisé'
  },
  {
    id: 22,
    cat: 'securite',
    icon: '👮',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800',
    title: 'Gardiennage de bâtiments',
    shortDesc: 'Surveillance continue et protection des locaux',
    description: 'Gardiennage professionnel pour vos bâtiments commerciaux, industriels ou résidentiels. Nos agents assurent une présence dissuasive et une surveillance rigoureuse, jour et nuit. Service fiable et discret pour garantir la sécurité de vos biens et de vos collaborateurs.',
    features: ['Surveillance jour/nuit', 'Présence dissuasive', 'Rondes régulières', 'Rapports quotidiens'],
    price: 'Sur devis',
    highlight: '🏢 Service adapté aux entreprises, industries et résidences'
  },
  {
    id: 23,
    cat: 'securite',
    icon: '📹',
    image: 'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?w=800',
    title: 'Vidéosurveillance',
    shortDesc: 'Installation et monitoring 24/7',
    description: 'Caméras IP haute définition, enregistrement 24/7, télésurveillance — nous installons et gérons votre système de vidéosurveillance pour une protection optimale de vos locaux. Accès à distance et alertes en temps réel.',
    features: ['Caméras IP HD', 'Enregistrement 24/7', 'Télésurveillance', 'Visionnage à distance'],
    price: 'Sur devis'
  },
  {
    id: 24,
    cat: 'securite',
    icon: '🚪',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
    title: 'Contrôle d\'accès',
    shortDesc: 'Gestion des entrées et sécurité périmétrique',
    description: 'Installation et gestion de systèmes de contrôle d\'accès : badges, biométrie, digicodes, portillons et barrières. Nous assurons la sécurité périmétrique de vos locaux et la gestion des flux de visiteurs et de personnel.',
    features: ['Badges et biométrie', 'Digicodes', 'Portillons sécurisés', 'Gestion des flux'],
    price: 'Sur devis'
  },
  {
    id: 25,
    cat: 'securite',
    icon: '🚨',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800',
    title: 'Alarme et télésurveillance',
    shortDesc: 'Protection périmétrique et alerte immédiate',
    description: 'Installation de systèmes d\'alarme intrusion, détecteurs volumétriques, barrières infrarouges. Notre centrale de télésurveillance réagit 24h/24 et 7j/7 en cas d\'alerte, avec intervention rapide sur site.',
    features: ['Alarme intrusion', 'Détecteurs volumétriques', 'Barrières infrarouges', 'Centrale réactive'],
    price: 'Sur devis',
    highlight: '🚨 Intervention rapide garantie 24h/24 et 7j/7'
  },
  {
    id: 26,
    cat: 'securite',
    icon: '👥',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800',
    title: 'Agents de sécurité événementielle',
    shortDesc: 'Sécurité pour événements privés et professionnels',
    description: 'Agents de sécurité qualifiés pour vos événements : séminaires, conférences, concerts, salons, mariages, soirées privées. Gestion des foules, filtrage à l\'entrée, sécurité rapprochée, service d\'ordre.',
    features: ['Séminaires et conférences', 'Concerts et festivals', 'Filtrage entrée', 'Sécurité rapprochée'],
    price: 'Sur devis'
  },
  {
    id: 27,
    cat: 'securite',
    icon: '🚗',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800',
    title: 'Surveillance de parking',
    shortDesc: 'Sécurisation des parkings publics et privés',
    description: 'Surveillance humaine et technique de vos parkings. Rondes régulières, contrôle des accès, dissuasion des incivilités, gestion des conflits. Protection des véhicules de vos collaborateurs et clients.',
    features: ['Parkings publics', 'Parkings privés', 'Rondes régulières', 'Gestion des conflits'],
    price: 'Sur devis'
  },
  {
    id: 28,
    cat: 'securite',
    icon: '🏭',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800',
    title: 'Sécurité industrielle',
    shortDesc: 'Protection des sites sensibles et industriels',
    description: 'Sécurisation de vos sites industriels, zones sensibles, entrepôts et chantiers. Contrôle strict des accès, rondes de sécurité, gestion des risques spécifiques. Agents formés aux environnements industriels.',
    features: ['Sites sensibles', 'Zones industrielles', 'Contrôle accès renforcé', 'Rondes spécifiques'],
    price: 'Sur devis',
    highlight: '🏭 Agents formés aux environnements industriels et chantiers'
  },
  {
    id: 29,
    cat: 'securite',
    icon: '👤',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800',
    title: 'Sécurité rapprochée (VIP)',
    shortDesc: 'Protection individuelle haut niveau',
    description: 'Service de sécurité rapprochée pour personnalités, cadres dirigeants et VIP. Agents expérimentés formés à la protection individuelle, discrétion absolue et réactivité optimale.',
    features: ['Protection personnalités', 'Sécurité dirigeants', 'Discrétion absolue', 'Réactivité optimale'],
    price: 'Sur devis'
  },

  // ─── PLACEMENT ET GESTION DU PERSONNEL (2 services) ───────────────────────────────
  {
    id: 30,
    cat: 'personnel',
    icon: '👥',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800',
    title: 'Placement et Gestion du Personnel',
    shortDesc: 'L\'expertise au service de la performance',
    description: 'Chez CanadCleaning Inc, nous savons qu\'un service de qualité repose avant tout sur des équipes compétentes, motivées et bien encadrées. Nous avons développé un département spécialisé dans le placement et la gestion du personnel de nettoyage et de maintenance. Notre processus comprend des entretiens approfondis, la vérification des références professionnelles, une évaluation pratique et une formation continue avant toute mise en poste.',
    features: ['Recrutement rigoureux', 'Gestion transparente', 'Solutions flexibles', 'Encadrement permanent'],
    price: 'Sur devis',
    highlight: 'Placement temporaire, permanent ou sous contrat'
  },
  {
    id: 31,
    cat: 'personnel',
    icon: '📋',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
    title: 'Gestion RH externalisée',
    shortDesc: 'Délégation complète de la gestion du personnel',
    description: 'Plannings, salaires, congés, remplacements — nous prenons en charge la gestion complète de vos équipes de nettoyage et maintenance pour que vous puissiez vous concentrer sur votre cœur de métier.',
    features: ['Gestion des plannings', 'Traitement des salaires', 'Gestion des congés', 'Remplacement garantie'],
    price: 'Sur devis'
  },

  // ─── FORMATION (2 services) ─────────────────────────────────────────────────────
  {
    id: 32,
    cat: 'formation',
    icon: '🎓',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
    title: 'Formation du Personnel',
    shortDesc: 'La clé de la qualité de nos services',
    description: 'Chez CanadCleaning Inc, la formation de notre personnel constitue la clé de la qualité de nos services. Chaque membre de nos équipes bénéficie d\'un programme complet et rigoureux, couvrant les techniques de nettoyage professionnel, la maintenance des bâtiments, la sécurité au travail, l\'utilisation efficace et sécurisée des équipements, ainsi que les normes d\'hygiène et de désinfection. Nos agents suivent également des formations continues, adaptées aux nouvelles méthodes et technologies, pour rester au plus haut niveau d\'expertise.',
    features: ['Techniques nettoyage', 'Maintenance bâtiments', 'Sécurité travail', 'Normes hygiène'],
    price: 'Sur devis',
    highlight: 'Formations continues adaptées aux nouvelles méthodes'
  },
  {
    id: 33,
    cat: 'formation',
    icon: '✅',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    title: 'Certification HACCP',
    shortDesc: 'Formation aux normes alimentaires',
    description: 'Formation complète aux normes HACCP pour les personnels de restauration collective et industrielle. Obtenez la certification nécessaire à l\'exercice de votre activité.',
    features: ['Normes HACCP', 'Hygiène alimentaire', 'Traçabilité', 'Certification incluse'],
    price: 'Sur devis'
  },

  // ─── FOURNITURE ET LOGISTIQUE (2 services) ───────────────────────────────────────
  {
    id: 34,
    cat: 'logistique',
    icon: '🚚',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
    title: 'Fourniture et Logistique',
    shortDesc: 'Gestion complète des produits et équipements',
    description: 'Chez CanadCleaning Inc, nous assurons la fourniture et la gestion logistique de tous les produits et matériels nécessaires à nos interventions. Nos équipes disposent de produits de nettoyage écologiques, équipements modernes et matériels adaptés à chaque type d\'environnement. Grâce à une logistique organisée et ponctuelle, nous garantissons que chaque intervention se déroule efficacement et sans retard, tout en optimisant les coûts pour nos clients.',
    features: ['Produits écologiques', 'Équipements modernes', 'Logistique organisée', 'Optimisation des coûts'],
    price: 'Sur devis',
    highlight: 'Coordination parfaite entre personnel, produits et équipements'
  },
  {
    id: 35,
    cat: 'logistique',
    icon: '🧴',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800',
    title: 'Fourniture de produits d\'entretien',
    shortDesc: 'Distribution de produits professionnels',
    description: 'Nous fournissons tous les produits d\'entretien nécessaires à vos équipes : détergents, désinfectants, matériels de nettoyage, consommables. Une livraison régulière et programmée.',
    features: ['Détergents professionnels', 'Désinfectants certifiés', 'Matériel de nettoyage', 'Consommables'],
    price: 'Sur devis'
  },
];

// Catégories pour le filtre
export const CATEGORIES = [
  { id: 'all', label: 'Tous les services', count: SERVICES.length, color: 'navy' },
  { id: 'nettoyage', label: 'Nettoyage', count: SERVICES.filter(s => s.cat === 'nettoyage').length, color: 'blue' },
  { id: 'maintenance', label: 'Maintenance', count: SERVICES.filter(s => s.cat === 'maintenance').length, color: 'green' },
  { id: 'construction', label: 'Construction', count: SERVICES.filter(s => s.cat === 'construction').length, color: 'yellow' },
  { id: 'securite', label: 'Sécurité', count: SERVICES.filter(s => s.cat === 'securite').length, color: 'red' },
  { id: 'personnel', label: 'Personnel', count: SERVICES.filter(s => s.cat === 'personnel').length, color: 'purple' },
  { id: 'formation', label: 'Formation', count: SERVICES.filter(s => s.cat === 'formation').length, color: 'orange' },
  { id: 'logistique', label: 'Logistique', count: SERVICES.filter(s => s.cat === 'logistique').length, color: 'teal' },
];

// Composant pour une carte de service
function ServiceCardEnhanced({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2">
          <span className="text-xl">{service.icon}</span>
          <span className="text-xs font-semibold text-navy-900">{service.title.split(' ')[0]}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-navy-900 mb-2 line-clamp-2">{service.title}</h3>
        <p className="text-brand-600 text-sm font-semibold mb-2">{service.shortDesc}</p>
        <p className="text-navy-500 text-sm leading-relaxed line-clamp-3 mb-4">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.slice(0, 2).map((feature, i) => (
            <span key={i} className="text-xs bg-gray-100 text-navy-600 px-2 py-1 rounded-full flex items-center gap-1">
              ✓ {feature}
            </span>
          ))}
          {service.features.length > 2 && (
            <span className="text-xs text-gray-400">+{service.features.length - 2}</span>
          )}
        </div>

        {service.highlight && (
          <div className="mb-4 p-2 bg-brand-50 rounded-lg border border-brand-100">
            <p className="text-brand-700 text-xs font-semibold">{service.highlight}</p>
          </div>
        )}

        <div className="flex items-center justify-between mt-2">
          <span className="text-navy-900 font-bold text-sm">{service.price}</span>
          <Link
            to="/devis"
            className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:gap-3 transition-all"
          >
            Devis <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Composant Filtre
function FilterTabsComponent({ tabs, active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
            active === tab.id
              ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
              : 'bg-white text-navy-600 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          {tab.label}
          <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
            active === tab.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
          }`}>
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
}

// Page principale
export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = SERVICES.filter(s => {
    const matchCat = activeFilter === 'all' || s.cat === activeFilter;
    const matchText = !search ||
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchText;
  });

  return (
    <>
      <PageHeader
        title="Nos Services Professionnels"
        subtitle="Nettoyage, maintenance, construction, sécurité, gestion du personnel, formation et logistique — une solution complète pour vos besoins"
        breadcrumb="Services professionnels"
      />

      <Section className="bg-gray-50">
        <Container>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-brand-400 focus:ring-2 focus:ring-brand-200 transition-all outline-none"
                placeholder="Rechercher un service..."
              />
            </div>
          </div>

          <FilterTabsComponent tabs={CATEGORIES} active={activeFilter} onChange={setActiveFilter} />

          <p className="text-center text-sm text-navy-500 mb-8 font-semibold">
            {filtered.length} service(s) trouvé(s)
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl">
              <div className="text-6xl mb-4">🔍</div>
              <p className="font-display text-xl text-navy-600">Aucun service trouvé</p>
              <p className="text-gray-500 mt-2">Essayez une autre recherche ou filtre</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((service, index) => (
                <ServiceCardEnhanced key={service.id} service={service} index={index} />
              ))}
            </div>
          )}

          <div className="text-center mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-10 text-white">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Vous ne trouvez pas votre besoin ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              Contactez-nous directement, nous avons sûrement une solution sur mesure pour vous.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Nous contacter <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}