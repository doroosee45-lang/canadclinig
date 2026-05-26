import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Section, Container, PageHeader, SectionHeader } from '../../components/ui';

const FAQ = [
  { q:'Les tarifs incluent-ils les produits et le matériel ?', a:'Oui, tous nos tarifs incluent les produits professionnels, le matériel industriel et l\'assurance RC Pro. Aucun coût caché.' },
  { q:'Y a-t-il des frais de déplacement ?', a:'Non, les frais de déplacement sont inclus dans nos zones de couverture habituelles (Ottawa, Kinshasa, Lubumbashi, Brazzaville, etc.).' },
  { q:'Peut-on modifier un contrat en cours ?', a:'Oui, nous offrons une flexibilité totale. Vous pouvez modifier la fréquence, ajouter des services ou interrompre le contrat avec un préavis de 30 jours.' },
  { q:'Les tarifs sont-ils HT ou TTC ?', a:'Les tarifs affichés sont hors taxes (HT). La TVA applicable selon votre pays s\'ajoute au moment de la facturation.' },
  { q:'Proposez-vous des tarifs préférentiels pour les contrats longue durée ?', a:'Oui, nous offrons jusqu\'à 15% de remise pour les contrats annuels et une offre combinée construction + nettoyage avec tarif préférentiel.' },
  { q:'Quels modes de paiement acceptez-vous ?', a:'Virement bancaire, Mobile Money (M-Pesa, Orange Money), carte bancaire internationale et paiement en espèces pour les petits montants.' },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
        <span className="font-bold text-navy-900 pr-4">{item.q}</span>
        <ChevronDown size={18} className={`text-brand-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}/>
      </button>
      {open && (
        <div className="px-5 pb-5 text-navy-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {item.a}
        </div>
      )}
    </motion.div>
  );
}

export default function Tarifs() {
  return (
    <>
      <PageHeader title="Grille Tarifaire" subtitle="Prix transparents, sans surprise. Tous les tarifs incluent produits, matériel et assurance RC Pro." breadcrumb="Tarifs"/>

      {/* Nettoyage */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader tag="Services de nettoyage" title="Tarifs Nettoyage" subtitle="Basés sur la superficie et la fréquence. Devis personnalisé sur demande."/>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-card mb-6">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="px-5 py-4 text-left font-display font-bold text-sm">Fréquence</th>
                  {['0–50 m²','50–100 m²','100–200 m²','200 m²+'].map(s => (
                    <th key={s} className="px-5 py-4 text-center font-display font-bold text-sm">{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['1× / semaine',      '79€',  '129€', '199€', 'Sur devis'],
                  ['2× / semaine',      '139€', '219€', '329€', 'Sur devis'],
                  ['5× / semaine',      '299€', '449€', '699€', 'Sur devis'],
                  ['Ponctuel',          '65€',  '99€',  '149€', 'Sur devis'],
                  ['Fin de bail',       '149€', '249€', '349€', 'Sur devis'],
                  ['Grand ménage',      '99€',  '169€', '269€', 'Sur devis'],
                ].map(([freq, ...prices], i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-brand-50 transition-colors`}>
                    <td className="px-5 py-4 font-semibold text-navy-800">{freq}</td>
                    {prices.map((p, j) => (
                      <td key={j} className="px-5 py-4 text-center">
                        <span className={`font-bold ${p === 'Sur devis' ? 'text-navy-400 italic' : 'text-brand-500'}`}>{p}</span>
                        {p !== 'Sur devis' && <span className="text-navy-400 text-xs"> HT/mois</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-navy-500 text-center">✅ Produits & matériels inclus &nbsp;·&nbsp; ✅ Assurance RC Pro &nbsp;·&nbsp; ✅ Rapport de passage systématique</p>
        </Container>
      </Section>

      {/* Restauration */}
      <Section>
        <Container>
          <SectionHeader tag="Restauration HACCP" title="Tarifs Restauration" subtitle="Conformité HACCP garantie. Disponible 7j/7 y compris nuits et jours fériés."/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {[
              { label:'Pack Cuisine Quotidien',   price:'Dès 89€',  unit:'HT/soir',        desc:'Cuisine après service : sols, équipements, surfaces' },
              { label:'Pack Salle Quotidien',     price:'Dès 59€',  unit:'HT/soir',        desc:'Salle restaurant, sanitaires, bar après fermeture' },
              { label:'Pack Complet Journalier',  price:'Dès 149€', unit:'HT/jour',        desc:'Cuisine + salle + sanitaires + bar' },
              { label:'Dégraissage Hottes',       price:'Dès 199€', unit:'HT/intervention',desc:'Démontage, dégraissage complet hottes et extracteurs' },
              { label:'Grand Ménage de Fond',     price:'Sur devis', unit:'',              desc:'Nettoyage intégral cave au plafond' },
              { label:'Pack Post-Événement',      price:'Dès 249€', unit:'HT',            desc:'Après banquet, mariage, soirée : salle + cuisine' },
              { label:'Contrat Mensuel',          price:'Sur devis', unit:'tarif préférentiel', desc:'Toutes prestations sur mesure selon besoins' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.07 }}
                className="card p-5 border-l-4 border-orange-500"
              >
                <h3 className="font-display font-bold text-navy-900 mb-2">{item.label}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-2xl font-display font-bold text-brand-500">{item.price}</span>
                  {item.unit && <span className="text-navy-400 text-xs">{item.unit}</span>}
                </div>
                <p className="text-sm text-navy-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 text-sm text-orange-800 text-center">
            🍽️ Produits homologués contact alimentaire · Conformité HACCP · Rapport d'intervention systématique · Disponibilité nocturne
          </div>
        </Container>
      </Section>

      {/* Construction */}
      <Section className="bg-gray-50">
        <Container>
          <SectionHeader tag="Services de construction" title="Tarifs Construction" subtitle="Devis personnalisé obligatoire avant tout début de chantier. Audit gratuit sur site."/>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { type:'🏛️ Immeuble',        price:'Dès 800€', unit:'/m²', details:['Gros œuvre inclus','Second œuvre inclus','Finitions incluses','Plans & études'] },
              { type:'🏠 Appartement',      price:'Dès 900€', unit:'/m²', details:['Standing premium','Finitions haut de gamme','VRD inclus','Supervision complète'] },
              { type:'🛣️ Route bitumée',    price:'Dès 45€',  unit:'/m²', details:['Terrassement inclus','Bitumage complet','Signalisation incluse','Garantie 5 ans'] },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity:0, scale:0.95 }}
                whileInView={{ opacity:1, scale:1 }}
                viewport={{ once:true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6"
              >
                <h3 className="font-display text-xl font-bold text-navy-900 mb-3">{item.type}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-display text-3xl font-bold text-brand-500">{item.price}</span>
                  <span className="text-navy-400 text-sm">{item.unit}</span>
                </div>
                <ul className="space-y-2">
                  {item.details.map(d => (
                    <li key={d} className="flex items-center gap-2 text-sm text-navy-700">
                      <Check size={14} className="text-brand-500 flex-shrink-0"/>{d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-navy-500 text-sm mb-4">Devis gratuit, sans engagement — obligatoire avant tout début de chantier</p>
            <Link to="/devis" className="btn-primary">Demander un devis construction <ArrowRight size={16}/></Link>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeader tag="Questions fréquentes" title="FAQ Tarifaire" subtitle="Toutes les réponses à vos questions sur nos tarifs et conditions."/>
          <div className="max-w-3xl mx-auto space-y-3">
            {FAQ.map((item, i) => <FAQItem key={i} item={item} index={i}/>)}
          </div>
          <div className="text-center mt-12">
            <p className="text-navy-500 mb-4">Vous avez d'autres questions ?</p>
            <Link to="/contact" className="btn-secondary">Contactez-nous <ArrowRight size={16}/></Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
