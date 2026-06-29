import { motion } from 'framer-motion';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clients = [
  { name: 'GRAVITAS INVESTMENT LTD', summary: 'Strategic branding and digital presence transformation for investment portfolio management.', logoPath: '/images/logos/gravitas.jpg' },
  { name: 'PHARMA DECO LTD', summary: 'Comprehensive brand identity design for pharmaceutical packaging solutions.', logoPath: '/images/logos/phama.jpg' },
  { name: 'STI ASSET MANAGEMENT', summary: 'Corporate brand refresh and investor communication materials.', logoPath: '/images/logos/sti.jpg' },
  { name: 'LEKKI RESIDENCE ASSOCIATION', summary: 'Community branding and resident engagement digital platform.', logoPath: '/images/logos/lekki.jpg' },
  { name: 'C.R.C BUREAU', summary: 'Professional certification brand guidelines and visual identity system.', logoPath: '/images/logos/crc.jpg' },
  { name: 'NATURAL ECO CAPITAL', summary: 'Sustainable investment firm brand with eco-conscious visual language.', logoPath: '/images/logos/individual.jpg' },
  { name: 'ADMIRAL OVERSEAS NIG. LTD', summary: 'Maritime logistics brand development and fleet visualization.', logoPath: '/images/logos/admiral.jpg' },
  { name: 'WEMA BANK', summary: 'Financial institution digital transformation and customer experience design.', logoPath: '/images/logos/wema.jpg' },
  { name: 'WEBB INSURANCE BROKERS LTD', summary: 'Insurance brand positioning and agent portal design.', logoPath: '/images/logos/webb.jpg' },
  { name: 'OMINIVISION LTD', summary: 'Technology startup brand identity and investor pitch deck.', logoPath: '/images/logos/omnivision.jpg' },
  { name: 'SYNGENTA NIG LTD', summary: 'Agricultural technology brand communications and field marketing materials.', logoPath: '/images/logos/syngenta.jpg' },
  { name: 'AXENDIT LTD', summary: 'Business consulting brand framework and client presentation templates.', logoPath: '/images/logos/axendi.jpg' },
  { name: 'ASSOCIATION OF MICROFINANCE BANK', summary: 'Industry association brand standards and member directory platform.', logoPath: '/images/logos/microfinance.jpg' },
  { name: 'PATRICK SPEECH AND LANGUAGES', summary: 'Educational services brand and learning platform design.', logoPath: '/images/logos/patrick.jpg' },
  { name: 'JUS PARTNERS', summary: 'Legal services brand refinement and client consultation materials.', logoPath: '/images/logos/jus.jpg' },
  { name: 'OAK WELL PARTNERS', summary: 'Real estate investment brand and property showcase platform.', logoPath: '/images/logos/oakwell.jpg' },
  { name: 'FULL RANGE MICROFINANCE LTD', summary: 'Microfinance institution brand identity and loan application system.', logoPath: '/images/logos/fullrange.jpg' },
  { name: 'SEVERAL INDIVIDUAL CUSTOMERS', summary: 'Diverse client portfolio spanning multiple industries and brand touchpoints.', logoPath: '/images/logos/individual.jpg' },
];

interface PartnerCardProps {
  client: typeof clients[0];
}

const PartnerCard = ({ client }: PartnerCardProps) => (
  <div className="flex-shrink-0 w-[250px] sm:w-[300px] bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 mx-2 sm:mx-3">
    <div className="flex items-center justify-center h-16 mb-4 w-full">
      <img
        src={client.logoPath}
        alt={client.name}
        className="max-h-12 max-w-[120px] object-contain"
        onError={(e) => {
          e.currentTarget.src = '/images/logos/individual.jpg';
        }}
      />
    </div>

    <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] text-center mb-2 break-words line-clamp-2">
      {client.name}
    </h3>

    <p className="text-gray-500 text-center text-xs sm:text-sm leading-relaxed line-clamp-2">
      {client.summary}
    </p>
  </div>
);

export default function PartnerDiscovery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="partners" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#990000] text-sm font-semibold tracking-widest uppercase">Partner Discovery</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Discover the organizations we've partnered with to deliver exceptional results.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#990000]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#990000]/5 rounded-full blur-3xl pointer-events-none" />

          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg border border-gray-200 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-[#1A1A1A]" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg border border-gray-200 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-[#1A1A1A]" />
          </button>

          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth py-10"
          >
            <div className="flex w-max">
              {clients.map((client, index) => (
                <PartnerCard key={index} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}