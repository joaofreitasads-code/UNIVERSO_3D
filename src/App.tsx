import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
  Lock,
  Mail,
  Building2,
  Check,
} from 'lucide-react';

interface CarouselItem {
  id: string;
  image: string;
  title: string;
  className?: string;
}

interface BonusItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface TestimonialItem {
  id: number;
  image: string;
  fallback: string;
  alt: string;
}

const BRANDS = [
  'CREALITY',
  'ELEGOO',
  'BAMBU LAB',
  'ANYCUBIC',
  'PRUSA 3D',
  'FLASHFORGE',
  'ARTILLERY',
  'VORON DESIGN',
];

const ROW_1_CARDS: CarouselItem[] = [
  { id: 'r1-1', title: 'Minecraft 3D STL', image: 'https://www.universo3d.online/assets/carousel-1-BVYYLJwg.webp' },
  { id: 'r1-2', title: 'Colecionável 3D STL', image: '/car-pryqbdy.webp', className: '!max-w-[94%] !max-h-[90%]' },
  { id: 'r1-3', title: 'Modelo 3D STL', image: 'https://www.universo3d.online/assets/carousel-extra-1-YQixWJ53.webp' },
  { id: 'r1-4', title: 'Colecionável STL', image: 'https://www.universo3d.online/assets/6cCq8Rf--uwUDN_k.webp' },
  { id: 'r1-5', title: 'Action Figure STL', image: '/car-fbsor17.webp' },
  { id: 'r1-6', title: 'Modelo 3D STL', image: 'https://www.universo3d.online/assets/burmX7i-GPUYIH0P.webp' },
  { id: 'r1-7', title: 'Escultura Colecionável STL', image: 'https://www.universo3d.online/assets/iiQWumG-DEjf-ZmF.webp' },
  { id: 'r1-8', title: 'Colecionável STL', image: 'https://www.universo3d.online/assets/carousel-2-BqK37slN.webp' },
];

const ROW_2_CARDS: CarouselItem[] = [
  { id: 'r2-1', title: 'Miniatura STL', image: 'https://www.universo3d.online/assets/carousel-4-D8ZTFvgk.webp' },
  { id: 'r2-2', title: 'Miniatura Colecionável STL', image: '/car-y1v14tp.webp', className: '!max-w-[88%] !max-h-[88%]' },
  { id: 'r2-3', title: 'Guerreiro 3D STL', image: 'https://www.universo3d.online/assets/carousel-extra-5-I_WwLo6g.webp' },
  { id: 'r2-4', title: 'Figura Colecionável STL', image: 'https://www.universo3d.online/assets/vxV9uGs-BPqdIOyn.webp' },
  { id: 'r2-5', title: 'Escultura 3D STL', image: '/car-dskufwd.webp', className: '!max-w-[80%] !max-h-[84%]' },
  { id: 'r2-6', title: 'Escultura Detalhada STL', image: 'https://www.universo3d.online/assets/OWPMAw9-Dggt7BAj.webp' },
  { id: 'r2-7', title: 'Action Figure Lendária STL', image: 'https://www.universo3d.online/assets/NxLXZKR-dB8EFN5N.webp' },
  { id: 'r2-8', title: 'Guerreiro 3D STL', image: 'https://www.universo3d.online/assets/carousel-5-Cq8fdoJi.webp' },
];

const ROW_3_CARDS: CarouselItem[] = [
  { id: 'r3-1', title: 'Colecionável STL', image: 'https://www.universo3d.online/assets/carousel-2-BqK37slN.webp' },
  { id: 'r3-2', title: 'Modelo Detalhado STL', image: '/car-wryskmh.webp' },
  { id: 'r3-3', title: 'Figura de Ação STL', image: 'https://www.universo3d.online/assets/carousel-extra-8-IxzUvBU4.webp' },
  { id: 'r3-4', title: 'Colecionável Raro 3D STL', image: 'https://www.universo3d.online/assets/Iexyj0f-DE3EMOHB.webp' },
  { id: 'r3-5', title: 'Personagem 3D STL', image: '/car-tr2emxn.webp' },
  { id: 'r3-6', title: 'Guerreiro de Fantasia STL', image: 'https://www.universo3d.online/assets/5Ld6EQd-DPRpyfzW.webp' },
  { id: 'r3-7', title: 'Modelo Articulado STL', image: 'https://www.universo3d.online/assets/NucoHxQ-E8WOFn2a.webp' },
  { id: 'r3-8', title: 'Escultura Detalhada STL', image: 'https://www.universo3d.online/assets/carousel-6-DCrze3Vc.webp' },
];

const ROW_4_CARDS: CarouselItem[] = [
  { id: 'r4-1', title: 'Porta Copos Monster 3D', image: '/car-mlww9d1.webp', className: '!max-w-[92%] !max-h-[90%]' },
  { id: 'r4-2', title: 'Estatueta Colecionável STL', image: '/car-or71jqw.webp' },
  { id: 'r4-3', title: 'Canecas de Time 3D', image: '/car-gg0yzcn.webp', className: '!max-w-[94%] !max-h-[92%] scale-[1.08]' },
  { id: 'r4-4', title: 'Colecionável Geek 3D', image: '/car-rerhdfp.webp' },
  { id: 'r4-5', title: 'Modelo Geek STL', image: '/car-dtnlqds.webp', className: '!max-w-[96%] !max-h-[90%] scale-[1.12]' },
  { id: 'r4-6', title: 'Action Figure Especial STL', image: '/car-a6xifct.webp' },
  { id: 'r4-7', title: 'Escultura Premium 3D', image: '/car-f5nklb0.webp' },
];

const BONUSES: BonusItem[] = [
  {
    id: 1,
    title: 'PACK DE VEÍCULOS 3D PROFISSIONAIS',
    description: 'Amplie seu acervo com uma coleção de veículos 3D, incluindo diferentes modelos de carros, motos, caminhões e outras opções para impressão.',
    image: 'https://www.universo3d.online/assets/bonus-1-D7xp77aP.webp',
  },
  {
    id: 2,
    title: 'COLEÇÃO HERÓIS DA MARVEL',
    description: 'Uma coleção especial com modelos 3D de heróis da Marvel, perfeita para quem procura personagens conhecidos, peças de exposição e itens colecionáveis.',
    image: 'https://www.universo3d.online/assets/bonus-2-DhtXjDoR.webp',
  },
  {
    id: 3,
    title: 'PACK DE CHAVEIROS PERSONALIZADOS',
    description: 'Tenha também uma coleção de chaveiros personalizados em 3D, com diversos modelos e estilos para imprimir e ampliar ainda mais as possibilidades do seu acervo.',
    image: 'https://www.universo3d.online/assets/bonus-3-Bf4I0ShX.webp',
  },
  {
    id: 4,
    title: 'MODELOS FLEXÍVEIS E ARTICULADOS',
    description: 'Você também recebe uma coleção de modelos flexíveis e articulados, com peças que ganham movimento depois de impressas e chamam atenção pelo resultado.',
    image: 'https://www.universo3d.online/assets/bonus-4-DwIXkaw_.webp',
  },
  {
    id: 5,
    title: 'COLEÇÃO CLÁSSICOS DOS DESENHOS',
    description: 'Uma coleção repleta de personagens clássicos dos desenhos, com modelos conhecidos para imprimir, colecionar, presentear ou utilizar na decoração.',
    image: 'https://www.universo3d.online/assets/bonus-5-DMXtPMtT.webp',
  },
  {
    id: 6,
    title: 'COLEÇÃO MÁSCARAS 3D',
    description: 'Tenha acesso a uma coleção de máscaras 3D, com diferentes personagens, estilos e designs para criar impressões maiores e ainda mais impressionantes.',
    image: 'https://www.universo3d.online/assets/bonus-6-CQCK1QZU.webp',
  },
  {
    id: 7,
    title: 'COLEÇÃO POKÉMON 3D',
    description: 'Receba também uma coleção dedicada ao universo Pokémon, com diferentes personagens e criaturas transformados em modelos para impressão 3D.',
    image: 'https://www.universo3d.online/assets/bonus-7-B6ElVMsO.webp',
  },
  {
    id: 8,
    title: 'MASCOTES DE FUTEBOL 3D',
    description: 'Uma coleção especial de mascotes de futebol em 3D, com diversos modelos inspirados no universo dos clubes e das torcidas.',
    image: 'https://www.universo3d.online/assets/bonus-8-mlyb3qoR.webp',
  },
  {
    id: 9,
    title: 'HELICÓPTEROS 3D',
    description: 'Adicione ao seu acervo uma coleção de helicópteros 3D, com diferentes modelos para quem gosta de aviação, veículos e projetos diferenciados.',
    image: 'https://www.universo3d.online/assets/bonus-9-BczusQui.webp',
  },
  {
    id: 10,
    title: 'COLEÇÃO LEGO 3D',
    description: 'Você também recebe uma coleção de modelos em estilo LEGO, com personagens e peças variadas para deixar seu acervo ainda mais completo.',
    image: 'https://www.universo3d.online/assets/bonus-10-Bc2U9BDu.webp',
  },
  {
    id: 11,
    title: 'COLEÇÃO MINECRAFT 3D',
    description: 'E para completar, você recebe uma coleção inspirada no universo Minecraft, com personagens, criaturas e elementos conhecidos do jogo prontos para impressão 3D.',
    image: 'https://www.universo3d.online/assets/bonus-11-CsS1NIGA.webp',
  },
  {
    id: 12,
    title: 'COLEÇÃO AMIGURUMIS 3D',
    description: 'Amplie ainda mais seu acervo com uma coleção de Amigurumis 3D, com modelos inspirados no visual do crochê, trazendo personagens, animais e peças fofas para imprimir e colecionar.',
    image: 'https://i.imgur.com/BIKsask.png',
  },
  {
    id: 13,
    title: 'PORTA COPOS MONSTER 3D',
    description: 'Adicione ao seu catálogo uma coleção exclusiva de porta copos inspirados no tema Monster em 3D, com visual marcante, relevo detalhado e alta saída para venda.',
    image: 'https://i.imgur.com/MLWW9d1.png',
  },
  {
    id: 14,
    title: 'COLEÇÃO CANECAS DE TIME 3D',
    description: 'Receba uma coleção especial de canecas 3D personalizadas inspiradas em grandes times e torcidas de futebol, com designs exclusivos e excelente aceitação comercial.',
    image: '/car-gg0yzcn.webp',
  },
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    image: 'https://www.universo3d.online/assets/depoimento-1-BBN2Oe74.webp',
    fallback: '/depoimento-1-fb.webp',
    alt: 'Depoimento real de aluno - Universo 3D 1',
  },
  {
    id: 2,
    image: 'https://www.universo3d.online/assets/depoimento-3-Cn7cJzGT.webp',
    fallback: '/depoimento-2-fb.webp',
    alt: 'Depoimento real de aluno - Universo 3D 2',
  },
  {
    id: 3,
    image: 'https://www.universo3d.online/assets/depoimento-4-DJVEDa94.webp',
    fallback: '/depoimento-3-fb.webp',
    alt: 'Depoimento real de aluno - Universo 3D 3',
  },
  {
    id: 4,
    image: 'https://www.universo3d.online/assets/depoimento-5-DG3Xdqvb.webp',
    fallback: '/depoimento-4-fb.webp',
    alt: 'Depoimento real de aluno - Universo 3D 4',
  },
  {
    id: 5,
    image: 'https://www.universo3d.online/assets/depoimento-6-CwvLNkMG.webp',
    fallback: '/depoimento-5-fb.webp',
    alt: 'Depoimento real de aluno - Universo 3D 5',
  },
  {
    id: 6,
    image: 'https://www.universo3d.online/assets/depoimento-7-4HoiAS5R.webp',
    fallback: '/depoimento-6-fb.webp',
    alt: 'Depoimento real de aluno - Universo 3D 6',
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Os modelos são compatíveis com a minha impressora 3D?',
    a: 'Sim! Os arquivos estão em formato STL padrão universal e funcionam perfeitamente em qualquer fatiador (Cura, PrusaSlicer, Bambu Studio, OrcaSlicer, Chitubox, etc.) e em praticamente qualquer impressora 3D FDM (Filamento) ou Resina (Creality, Bambu Lab, Anycubic, Elegoo, Sovol, etc.).',
  },
  {
    q: 'Posso vender as peças que eu imprimir?',
    a: 'Com certeza! Nos planos que acompanham a Licença Comercial, você tem autorização total para imprimir fisicamente os modelos e vender as peças prontas em marketplaces, feiras, lojas ou sob encomenda. O que não é permitido é redistribuir ou revender os arquivos digitais STL.',
  },
  {
    q: 'Como e quando recebo o acesso ao catálogo?',
    a: 'O acesso é imediato. Assim que o pagamento for confirmado (no Pix ou Cartão de Crédito é instantâneo), você recebe no seu e-mail o link de acesso direto à Área de Membros VIP com login e senha para começar a baixar imediatamente.',
  },
  {
    q: 'Preciso ser experiente ou iniciantes também conseguem imprimir?',
    a: 'Não precisa ser especialista! Os modelos foram desenvolvidos e testados para facilitar a impressão, com geometrias limpas e peças divididas com encaixes inteligentes, reduzindo drasticamente a necessidade de suportes complexos e desperdício de material.',
  },
  {
    q: 'Qual é o formato dos arquivos e como funciona o download?',
    a: 'Todos os arquivos estão no formato padrão .STL de alta definição, organizados em pastas limpas dentro da plataforma. Você pode baixar apenas o arquivo que for imprimir no momento ou quantos quiser, sem ocupar todo o espaço do seu computador.',
  },
  {
    q: 'Como funciona a Garantia de 14 Dias?',
    a: 'Você tem 14 dias inteiros de garantia incondicional. Entre na plataforma, explore as coleções e confira os arquivos. Se por qualquer motivo achar que o catálogo não agregou para você, basta solicitar o reembolso que devolvemos 100% do seu dinheiro.',
  },
];

export default function App() {
  // Video Presentation State
  const [isPlayingHeroVideo, setIsPlayingHeroVideo] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  // Notebook Video State
  const [isPlayingNotebookVideo, setIsPlayingNotebookVideo] = useState(false);
  const notebookVideoRef = useRef<HTMLVideoElement>(null);

  // Testimonial Carousel State
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Upsell Modal State
  const [showUpsellModal, setShowUpsellModal] = useState(false);

  // Legal Modals State
  const [legalModalType, setLegalModalType] = useState<'termos' | 'privacidade' | null>(null);

  const handlePlayHeroVideo = () => {
    setIsPlayingHeroVideo(true);
    setTimeout(() => {
      if (heroVideoRef.current) {
        heroVideoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const handlePlayNotebookVideo = () => {
    setIsPlayingNotebookVideo(true);
    setTimeout(() => {
      if (notebookVideoRef.current) {
        notebookVideoRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('oferta-pro');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMercado = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('validacao-mercado');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard navigation for testimonials
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrevTestimonial();
      if (e.key === 'ArrowRight') handleNextTestimonial();
      if (e.key === 'Escape') {
        setShowUpsellModal(false);
        setLegalModalType(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative antialiased selection:bg-[#0066FF] selection:text-white">
      {/* Background Starfield */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-stars opacity-60"></div>

      {/* Hero Section */}
      <section id="hero-section" className="relative pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[800px] md:h-[800px] bg-[#0066FF]/5 rounded-full blur-2xl md:blur-[120px] pointer-events-none"></div>

        <div className="w-full relative z-20 flex flex-col items-center pt-8 md:pt-14 pb-2 px-2 sm:px-4 text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-display font-black text-[clamp(13px,3.6vw,28px)] sm:text-2xl md:text-3xl lg:text-[2.35rem] tracking-tight leading-snug sm:leading-[1.25] uppercase inline-block text-left mx-auto select-none">
            <span className="block whitespace-nowrap text-white drop-shadow-md">
              VOCÊ NÃO COMPROU UMA IMPRESSORA 3D
            </span>
            <span className="block whitespace-nowrap mt-1 sm:mt-1.5">
              <span className="text-white drop-shadow-md">PARA DEIXÁ-LA PARADA. </span>
              <span className="text-[#0066FF]">DESCUBRA NOVAS</span>
            </span>
            <span className="block whitespace-nowrap mt-1 sm:mt-1.5 text-[#0066FF]">
              IDEIAS DE PRODUTOS PARA IMPRIMIR E
            </span>
            <span className="block whitespace-nowrap mt-1 sm:mt-1.5 text-center text-[#0066FF]">
              VENDER.
            </span>
          </h1>

          {/* Hero Video Container (9:16 Aspect Ratio) */}
          <div className="w-full relative z-10 flex flex-col items-center mt-6 mb-8">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] mx-auto">
              {/* Outer Glow */}
              <div className="absolute -inset-2 rounded-[32px] sm:rounded-[40px] bg-gradient-to-r from-[#0066FF] via-[#38BDF8] to-[#0044CC] opacity-75 blur-xl pointer-events-none"></div>

              <div className="relative w-full aspect-[9/16] rounded-[24px] sm:rounded-[32px] overflow-hidden border-2 sm:border-[3px] border-[#0066FF] shadow-[0_0_40px_rgba(0,102,255,0.7)] bg-black flex items-center justify-center group">
                <video
                  ref={heroVideoRef}
                  id="video-apresentacao"
                  src={isPlayingHeroVideo ? 'https://i.imgur.com/s6S0rd5.mp4' : undefined}
                  poster="https://www.universo3d.online/poster-apresentacao.webp"
                  playsInline
                  controls={isPlayingHeroVideo}
                  preload={isPlayingHeroVideo ? 'auto' : 'none'}
                  className="w-full h-full object-cover rounded-[24px] sm:rounded-[32px]"
                >
                  Seu navegador não suporta a reprodução de vídeo.
                </video>

                {!isPlayingHeroVideo && (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={handlePlayHeroVideo}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlayHeroVideo()}
                    aria-label="Assistir ao vídeo de apresentação"
                    className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center z-20 group select-none bg-black"
                  >
                    <img
                      alt="Capa do Vídeo de Apresentação Universo 3D"
                      width={480}
                      height={854}
                      loading="eager"
                      className="absolute inset-0 w-full h-full object-cover select-none"
                      src="https://www.universo3d.online/poster-apresentacao.webp"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-2.5 group-hover:scale-105 transition-transform duration-300">
                      <div className="w-16 h-11 sm:w-20 sm:h-14 md:w-22 md:h-16 rounded-[14px] sm:rounded-[18px] bg-[#0066FF] hover:bg-[#0052CC] flex items-center justify-center shadow-[0_4px_30px_rgba(0,102,255,0.7)] group-hover:shadow-[0_6px_45px_rgba(0,102,255,0.95)] transition-all duration-300">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white fill-white ml-1 drop-shadow" />
                      </div>
                      <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white font-display font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                        Assistir Vídeo
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-6 mb-2 text-zinc-200 text-base sm:text-lg md:text-xl max-w-2xl text-center font-normal leading-relaxed px-4">
              Tenha acesso a uma Central 3D com modelos selecionados, categorias com potencial comercial e novas ideias para você imprimir, anunciar e vender — sem passar horas procurando arquivos aleatórios pela internet.
            </p>

            {/* CTA Button */}
            <div className="mt-6 w-full max-w-md px-2 flex flex-col items-center">
              <a
                href="#oferta-pro"
                onClick={scrollToOffer}
                className="group w-full inline-flex items-center justify-center gap-3 bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-2xl text-center shadow-[0_0_40px_rgba(0,255,102,0.8),0_0_20px_rgba(0,255,102,0.5)] hover:shadow-[0_0_55px_rgba(0,255,102,1),0_0_25px_rgba(0,255,102,0.8)] transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border-2 border-[#80FFB2] cursor-pointer"
              >
                <ShoppingCart className="w-6 h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
                <span>QUERO MEU ACESSO AGORA</span>
              </a>
            </div>
          </div>
        </div>

        {/* Brands Marquee */}
        <div id="brands-marquee" className="w-full overflow-hidden relative mb-4 pointer-events-none select-none">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          <div className="marquee pointer-events-none select-none">
            <div className="flex items-center gap-16 px-8 shrink-0">
              {BRANDS.map((brand, i) => (
                <span
                  key={`brand-1-${i}`}
                  className="text-zinc-500 font-display font-bold text-xl tracking-widest hover:text-zinc-300 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-16 px-8 shrink-0" aria-hidden="true">
              {BRANDS.map((brand, i) => (
                <span
                  key={`brand-2-${i}`}
                  className="text-zinc-500 font-display font-bold text-xl tracking-widest hover:text-zinc-300 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Model Carousel Section */}
      <section id="modelos-carrossel" className="section-lazy pt-0 pb-16 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-6 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3.5 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
              Ter uma impressora 3D é só o início. Saber o que imprimir muda tudo.
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 leading-tight">
              Modelos que <span className="grad-text">chamam atenção</span> — e despertam vontade de ter.
            </h2>
            <p className="text-zinc-300 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Escolha entre diferentes estilos e coleções organizadas para transformar arquivos digitais em peças físicas que realmente se destacam, sem perder horas garimpando na internet.
            </p>
          </div>
        </div>

        {/* Row 1: Marquee Cards */}
        <div className="w-full overflow-hidden relative mb-4 pointer-events-none select-none">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          <div className="marquee-cards pointer-events-none select-none">
            {[...ROW_1_CARDS, ...ROW_1_CARDS].map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="rounded-2xl overflow-hidden shrink-0 w-36 sm:w-44 md:w-64 p-2 sm:p-2.5 border border-zinc-700/60 md:shadow-xl group bg-cover bg-center"
                style={{ backgroundImage: 'url("https://www.universo3d.online/assets/card-bg-oI72pivU.webp")' }}
              >
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-xl bg-black/25 relative p-2.5 sm:p-3.5">
                  <img
                    alt={item.title}
                    width={256}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className={`max-w-[84%] max-h-[84%] w-auto h-auto object-contain object-center transition-transform duration-300 md:group-hover:scale-105 select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] ${item.className || ''}`}
                    src={item.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse Marquee Cards */}
        <div className="w-full overflow-hidden relative mb-4 pointer-events-none select-none">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          <div className="marquee-cards-reverse pointer-events-none select-none">
            {[...ROW_2_CARDS, ...ROW_2_CARDS].map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="rounded-2xl overflow-hidden shrink-0 w-36 sm:w-44 md:w-64 p-2 sm:p-2.5 border border-zinc-700/60 md:shadow-xl group bg-cover bg-center"
                style={{ backgroundImage: 'url("https://www.universo3d.online/assets/card-bg-oI72pivU.webp")' }}
              >
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-xl bg-black/25 relative p-2.5 sm:p-3.5">
                  <img
                    alt={item.title}
                    width={256}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className={`max-w-[84%] max-h-[84%] w-auto h-auto object-contain object-center transition-transform duration-300 md:group-hover:scale-105 select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] ${item.className || ''}`}
                    src={item.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Marquee Cards */}
        <div className="w-full overflow-hidden relative mb-4 pointer-events-none select-none">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          <div className="marquee-cards pointer-events-none select-none">
            {[...ROW_3_CARDS, ...ROW_3_CARDS].map((item, idx) => (
              <div
                key={`r3-${idx}`}
                className="rounded-2xl overflow-hidden shrink-0 w-36 sm:w-44 md:w-64 p-2 sm:p-2.5 border border-zinc-700/60 md:shadow-xl group bg-cover bg-center"
                style={{ backgroundImage: 'url("https://www.universo3d.online/assets/card-bg-oI72pivU.webp")' }}
              >
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-xl bg-black/25 relative p-2.5 sm:p-3.5">
                  <img
                    alt={item.title}
                    width={256}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className={`max-w-[84%] max-h-[84%] w-auto h-auto object-contain object-center transition-transform duration-300 md:group-hover:scale-105 select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] ${item.className || ''}`}
                    src={item.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 4: Reverse Marquee Cards */}
        <div className="w-full overflow-hidden relative pointer-events-none select-none">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          <div className="marquee-cards-reverse pointer-events-none select-none">
            {[...ROW_4_CARDS, ...ROW_4_CARDS, ...ROW_4_CARDS].map((item, idx) => (
              <div
                key={`r4-${idx}`}
                className="rounded-2xl overflow-hidden shrink-0 w-36 sm:w-44 md:w-64 p-2 sm:p-2.5 border border-zinc-700/60 md:shadow-xl group bg-cover bg-center"
                style={{ backgroundImage: 'url("https://www.universo3d.online/assets/card-bg-oI72pivU.webp")' }}
              >
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden rounded-xl bg-black/25 relative p-2.5 sm:p-3.5">
                  <img
                    alt={item.title}
                    width={256}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className={`max-w-[84%] max-h-[84%] w-auto h-auto object-contain object-center transition-transform duration-300 md:group-hover:scale-105 select-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] ${item.className || ''}`}
                    src={item.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 sm:mt-12 flex justify-center w-full px-4">
          <a
            href="#oferta-pro"
            onClick={scrollToOffer}
            className="group inline-flex items-center justify-center gap-3 bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-[0_0_35px_rgba(0,255,102,0.8),0_0_15px_rgba(0,255,102,0.5)] hover:shadow-[0_0_50px_rgba(0,255,102,1),0_0_25px_rgba(0,255,102,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#80FFB2] cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
            <span>LIBERAR TODOS OS MODELOS 3D</span>
          </a>
        </div>
      </section>

      {/* Notebook Mockup Section */}
      <section id="mockup-notebook" className="section-lazy py-16 md:py-24 relative bg-black overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
              Conheça a <span className="grad-text drop-shadow-[0_0_25px_rgba(0,102,255,0.6)]">área de membros</span> por dentro
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3.5 font-normal leading-relaxed">
              Você não vai precisar perder tempo procurando pasta por pasta. A <strong className="text-white font-semibold">Área de Membros VIP</strong> é 100% organizada por categorias para você encontrar o modelo desejado em segundos, baixar o arquivo pronto e colocar sua impressora para trabalhar.
            </p>
          </div>

          {/* Notebook Hardware Frame */}
          <div className="max-w-4xl md:max-w-5xl mx-auto relative px-2 sm:px-4 md:px-6">
            <div className="relative z-10">
              <div className="relative bg-[#18181C] rounded-t-[20px] sm:rounded-t-[26px] md:rounded-t-[32px] rounded-b-[4px] p-2 sm:p-2.5 md:p-3.5 border-2 border-[#0066FF] shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
                {/* Camera / Bezel */}
                <div className="flex items-center justify-center relative -mb-1 z-20">
                  <div className="w-10 sm:w-14 h-2 sm:h-2.5 bg-[#0A0A0C] rounded-b-md flex items-center justify-center gap-1.5 shadow-inner">
                    <div className="w-1 h-1 rounded-full bg-[#1A1A22] border border-white/20"></div>
                    <div className="w-0.5 h-0.5 rounded-full bg-[#0066FF] opacity-75"></div>
                  </div>
                </div>

                {/* Notebook Screen */}
                <div
                  id="notebook-screen-area"
                  className="relative rounded-md sm:rounded-lg md:rounded-xl overflow-hidden bg-[#000000] aspect-[16/9] border border-white/10 shadow-[inset_0_0_30px_rgba(0,0,0,0.9)] flex items-center justify-center group"
                >
                  <video
                    ref={notebookVideoRef}
                    id="video-catalogo-notebook"
                    src={isPlayingNotebookVideo ? 'https://i.imgur.com/XMHWIse.mp4' : undefined}
                    poster="https://www.universo3d.online/assets/poster-catalogo-B3YjnjQd.webp"
                    playsInline
                    controls={isPlayingNotebookVideo}
                    preload={isPlayingNotebookVideo ? 'auto' : 'none'}
                    className="w-full h-full object-cover"
                  >
                    Seu navegador não suporta a reprodução de vídeo.
                  </video>

                  {!isPlayingNotebookVideo && (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={handlePlayNotebookVideo}
                      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handlePlayNotebookVideo()}
                      aria-label="Assistir tour pela Área de Membros"
                      className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center z-20 group select-none"
                    >
                      <img
                        alt="Área de Membros Universo 3D"
                        width={854}
                        height={480}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover select-none"
                        src="https://www.universo3d.online/assets/poster-catalogo-B3YjnjQd.webp"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors pointer-events-none"></div>
                      <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-2.5 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-11 sm:w-20 sm:h-14 md:w-24 md:h-16 rounded-[14px] sm:rounded-[18px] bg-[#0066FF] hover:bg-[#0052CC] flex items-center justify-center shadow-[0_4px_30px_rgba(0,102,255,0.7)] group-hover:shadow-[0_6px_45px_rgba(0,102,255,0.95)] transition-all duration-300">
                          <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white fill-white ml-1 drop-shadow" />
                        </div>
                        <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white font-display font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-wider shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
                          Assistir Vídeo
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Notebook Base Hinge */}
              <div className="w-32 sm:w-44 md:w-56 h-1.5 sm:h-2 md:h-2.5 bg-[#0F0F12] border-t border-[#2A2A32] mx-auto rounded-b-sm shadow-sm"></div>
              <div className="relative -mt-1 w-[104%] -ml-[2%] h-3.5 sm:h-4.5 md:h-5.5 bg-gradient-to-b from-[#2E2E36] via-[#1A1A20] to-[#0D0D10] rounded-b-[16px] sm:rounded-b-[22px] md:rounded-b-[26px] shadow-[0_30px_70px_rgba(0,0,0,0.95)] border-t border-white/25 flex justify-center items-start">
                <div className="w-20 sm:w-28 md:w-36 h-1 sm:h-1.5 bg-[#08080A] rounded-b-md border-x border-b border-[#3A3A44]/80 shadow-inner"></div>
              </div>
              <div className="w-[75%] h-3 bg-gradient-to-r from-transparent via-black/90 to-transparent blur-md mx-auto -mt-2.5 pointer-events-none"></div>

              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400">
                  <Play className="w-3.5 h-3.5 text-[#0066FF]" /> Escolha o modelo, acesse o arquivo e comece sua próxima impressão.
                </span>
              </div>
            </div>
          </div>

          {/* Argumentation Checklist */}
          <div className="mt-12 sm:mt-16 md:mt-18 max-w-2xl mx-auto relative z-10 px-4 text-center">
            <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight mb-3">
              “MAS EU NÃO SEI QUAL PRODUTO ESCOLHER…”
            </h3>
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-4">
              E esse é justamente um dos motivos para ter uma biblioteca organizada.
            </p>
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 sm:mb-8">
              Você não precisa acertar “o produto perfeito” de primeira. Você pode:
            </p>

            <div className="max-w-xl mx-auto space-y-2.5 sm:space-y-3 my-5 sm:my-6 text-left inline-block">
              {[
                'explorar diferentes categorias',
                'escolher modelos que façam sentido para sua estrutura',
                'produzir pequenas quantidades',
                'testar novas ideias',
                'observar a resposta do mercado',
                'repetir o que fizer sentido para sua operação',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-[#0066FF] text-xl sm:text-2xl font-black shrink-0">✓</span>
                  <p className="text-zinc-200 text-base sm:text-lg font-medium leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-white font-display font-black text-lg sm:text-xl md:text-2xl mt-6 mb-4 leading-snug">
              O objetivo não é adivinhar. É ter opções para testar.
            </p>

            <div className="mt-4 mb-2">
              <a
                href="#validacao-mercado"
                onClick={scrollToMercado}
                className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#0066FF] text-base sm:text-lg font-bold tracking-wide transition-colors cursor-pointer"
              >
                Continuar ↓
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 sm:mt-12 flex justify-center w-full px-4 relative z-20">
            <a
              href="#oferta-pro"
              onClick={scrollToOffer}
              className="group inline-flex items-center justify-center gap-3 bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-[0_0_35px_rgba(0,255,102,0.8),0_0_15px_rgba(0,255,102,0.5)] hover:shadow-[0_0_50px_rgba(0,255,102,1),0_0_25px_rgba(0,255,102,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#80FFB2] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>ACESSAR ÁREA DE MEMBROS VIP</span>
            </a>
          </div>
        </div>
      </section>

      {/* Market Validation Section */}
      <section id="validacao-mercado" className="section-lazy pt-4 pb-16 relative bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight mb-4">
              Existe um <span className="grad-text">mercado real</span> para produtos feitos em impressão 3D
            </h2>
            <p className="text-zinc-300 font-light text-base md:text-lg leading-relaxed">
              Veja como peças semelhantes criadas com esse tipo de arquivo já possuem alta procura e aparecem com frequência nos maiores marketplaces do país.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <div className="rounded-3xl overflow-hidden bg-zinc-950 border-2 border-[#0066FF]/60 shadow-[0_0_35px_rgba(0,102,255,0.35)] relative w-full p-2 sm:p-4">
              <img
                alt="Mercado Comprovado - Anúncios e Vendas Reais de Peças 3D (1)"
                width={1774}
                height={887}
                loading="lazy"
                decoding="async"
                className="w-full h-auto aspect-[1774/887] object-contain rounded-2xl select-none"
                src="/mercado-1.webp"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-zinc-950 border-2 border-[#0066FF]/60 shadow-[0_0_35px_rgba(0,102,255,0.35)] relative w-full p-2 sm:p-4">
              <img
                alt="Mercado Comprovado - Anúncios e Vendas Reais de Peças 3D (2)"
                width={1774}
                height={887}
                loading="lazy"
                decoding="async"
                className="w-full h-auto aspect-[1774/887] object-contain rounded-2xl select-none"
                src="https://www.universo3d.online/assets/step-2-Y7N50RdW.webp"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-zinc-950 border-2 border-[#0066FF]/60 shadow-[0_0_35px_rgba(0,102,255,0.35)] relative w-full p-2 sm:p-4">
              <img
                alt="Mercado Comprovado - Anúncios e Vendas Reais de Peças 3D (3)"
                width={1774}
                height={887}
                loading="lazy"
                decoding="async"
                className="w-full h-auto aspect-[1774/887] object-contain rounded-2xl select-none"
                src="/mercado-3.webp"
              />
            </div>
          </div>

          <div className="mt-10 sm:mt-12 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={scrollToOffer}
              className="group inline-flex items-center justify-center gap-3 bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-[0_0_35px_rgba(0,255,102,0.8),0_0_15px_rgba(0,255,102,0.5)] hover:shadow-[0_0_50px_rgba(0,255,102,1),0_0_25px_rgba(0,255,102,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#80FFB2] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>QUERO VENDER ESSAS PEÇAS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lucrative Math Comparison Table */}
      <section id="matematica-lucrativa" className="section-lazy pt-8 pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0066FF]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight mt-0">
              Entenda o <span className="text-[#0066FF]">potencial</span> por trás de uma única impressão
            </h2>
            <p className="text-base md:text-lg mt-4 max-w-3xl mx-auto font-normal text-zinc-300 leading-relaxed">
              Compare a estimativa de consumo de filamento com faixas de valores praticadas no mercado para peças similares:
            </p>
          </div>

          <div className="relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <table className="w-full text-left border-collapse">
              <thead className="bg-black/80">
                <tr>
                  <th className="p-2 sm:p-4 md:p-6 text-[10px] sm:text-xs md:text-lg font-black font-display uppercase tracking-wider border border-white/10 w-1/3 text-center align-middle">
                    Modelo
                  </th>
                  <th className="p-2 sm:p-4 md:p-6 text-[10px] sm:text-xs md:text-lg font-black font-display text-gray-200 uppercase tracking-wider border border-white/10 w-1/3 text-center align-middle">
                    Consumo est. de filamento
                  </th>
                  <th className="p-2 sm:p-4 md:p-6 text-[10px] sm:text-xs md:text-lg font-black font-display text-[#60A5FA] uppercase tracking-wider border border-[#0066FF]/30 bg-[#0066FF]/5 w-1/3 text-center align-middle">
                    Anúncios encontrados
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black/60">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 text-center align-middle">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-1 sm:p-2 flex items-center justify-center overflow-hidden group">
                      <img
                        alt="Modelo 3D STL - Peça 1"
                        width={300}
                        height={300}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                        src="https://www.universo3d.online/assets/lucro-1-Cyd4RhEq.webp"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 font-bold font-display text-[11px] sm:text-sm md:text-xl text-center align-middle text-[#3B82F6]">
                    R$ 11,14
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-[#0066FF]/30 text-[#0066FF] font-black font-display text-sm sm:text-lg md:text-3xl bg-[#0066FF]/5 text-center align-middle drop-shadow-[0_0_10px_rgba(0,102,255,0.4)]">
                    R$ 147–165
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 text-center align-middle">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-1 sm:p-2 flex items-center justify-center overflow-hidden group">
                      <img
                        alt="Modelo 3D STL - Peça 2"
                        width={300}
                        height={300}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                        src="https://www.universo3d.online/assets/lucro-2-BFVmtSp3.webp"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 font-bold font-display text-[11px] sm:text-sm md:text-xl text-center align-middle text-[#3B82F6]">
                    R$ 9,74
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-[#0066FF]/30 text-[#0066FF] font-black font-display text-sm sm:text-lg md:text-3xl bg-[#0066FF]/5 text-center align-middle drop-shadow-[0_0_10px_rgba(0,102,255,0.4)]">
                    R$ 123–147
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 text-center align-middle">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-1 sm:p-2 flex items-center justify-center overflow-hidden group">
                      <img
                        alt="Modelo 3D STL - Peça 3"
                        width={300}
                        height={300}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                        src="https://www.universo3d.online/assets/lucro-3-Ca-zv9V7.webp"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 font-bold font-display text-[11px] sm:text-sm md:text-xl text-center align-middle text-[#3B82F6]">
                    R$ 8,37
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-[#0066FF]/30 text-[#0066FF] font-black font-display text-sm sm:text-lg md:text-3xl bg-[#0066FF]/5 text-center align-middle drop-shadow-[0_0_10px_rgba(0,102,255,0.4)]">
                    R$ 75–107
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-zinc-400 text-xs sm:text-sm text-center max-w-2xl mx-auto mt-4 font-normal leading-relaxed italic">
            *Valores meramente ilustrativos. Custos, preços e margens podem variar conforme material, tamanho da peça, acabamento, região e estratégia de venda.
          </p>

          <div className="mt-10 sm:mt-12 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={scrollToOffer}
              className="group inline-flex items-center justify-center gap-3 bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-[0_0_35px_rgba(0,255,102,0.8),0_0_15px_rgba(0,255,102,0.5)] hover:shadow-[0_0_50px_rgba(0,255,102,1),0_0_25px_rgba(0,255,102,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#80FFB2] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>QUERO MULTIPLICAR MEUS LUCROS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonus" className="section-lazy bg-black relative border-y border-[#0066FF]/15 overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-44 md:w-[800px] md:h-[400px] bg-[#0066FF]/5 rounded-full blur-2xl md:blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl text-center">
          <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-widest mb-3 text-[#0066FF]">
            BÔNUS INCLUSOS NO ACESSO PREMIUM
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-display font-black uppercase tracking-tight mb-5 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] max-w-4xl mx-auto leading-tight">
            UMA ÚNICA IDEIA PODE VIRAR SEU PRÓXIMO PRODUTO. TODOS ESTES BÔNUS ESTÃO LIBERADOS NO ACESSO PREMIUM.
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-3xl mx-auto mb-12 sm:mb-14 leading-relaxed">
            Ao garantir o seu Acesso Premium, você não leva apenas os modelos minerados — você recebe de presente todos os 14 bônus exclusivos abaixo, 100% liberados imediatamente na sua área de membros para começar a lucrar com diferentes nichos.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 sm:gap-3.5 max-w-5xl mx-auto text-left">
            {BONUSES.map((bonus) => (
              <div
                key={bonus.id}
                id={`bonus-card-${bonus.id}`}
                className="w-full bg-[#0E0E12] border border-white/10 hover:border-[#0066FF]/50 rounded-xl p-2.5 sm:p-3.5 flex flex-row items-center gap-3 sm:gap-4 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.8),0_0_15px_rgba(0,102,255,0.18)] group relative overflow-hidden text-left"
              >
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#0066FF] via-[#0066FF]/40 to-transparent"></div>
                <div className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 shrink-0 bg-black/70 rounded-lg border border-white/5 flex items-center justify-center p-1 sm:p-2 relative overflow-hidden group-hover:border-[#0066FF]/30 transition-colors">
                  <div className="absolute inset-0 bg-[#0066FF]/5 blur-md rounded-full scale-75 pointer-events-none opacity-40"></div>
                  <img
                    alt={bonus.title}
                    width={120}
                    height={120}
                    loading="lazy"
                    decoding="async"
                    className="max-h-14 xs:max-h-16 sm:max-h-20 w-auto h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300 select-none relative z-10"
                    src={bonus.image}
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
                  <div className="mb-1">
                    <h3 className="font-display font-black text-xs sm:text-[13px] md:text-sm text-white uppercase tracking-tight flex items-center gap-1.5 leading-tight">
                      <span className="text-xs sm:text-sm shrink-0">🎁</span>
                      <span className="text-[#0066FF] shrink-0">
                        BÔNUS {bonus.id < 10 ? `0${bonus.id}` : bonus.id}
                      </span>
                      <span className="text-zinc-500 font-bold shrink-0">—</span>
                      <span className="text-white truncate">{bonus.title}</span>
                    </h3>
                  </div>
                  <p className="text-zinc-300 text-[11px] sm:text-xs leading-relaxed font-normal">
                    {bonus.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-14 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={scrollToOffer}
              className="group inline-flex items-center justify-center gap-3 bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-[0_0_35px_rgba(0,255,102,0.8),0_0_15px_rgba(0,255,102,0.5)] hover:shadow-[0_0_50px_rgba(0,255,102,1),0_0_25px_rgba(0,255,102,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#80FFB2] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>GARANTIR ACESSO + 14 BÔNUS GRÁTIS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Phone Slider Section */}
      <section id="depoimento" className="section-lazy bg-black relative border-t border-white/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[650px] md:h-[650px] bg-[#0066FF]/5 rounded-full blur-2xl md:blur-[140px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 id="depoimento-titulo" className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight mb-3">
              QUEM ACESSOU JÁ ESTÁ <span className="grad-text">IMPRIMINDO E PRODUZINDO</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
              Veja a experiência de quem parou de perder horas procurando arquivos na internet e começou a aproveitar de verdade o potencial da sua impressora 3D.
            </p>
          </div>

          {/* Smartphone Showcase */}
          <div id="celular-depoimento-slider" className="relative w-full max-w-4xl mx-auto flex items-center justify-center gap-1.5 xs:gap-3 sm:gap-6 md:gap-8 px-1 sm:px-4">
            <button
              id="btn-depoimento-anterior"
              type="button"
              onClick={handlePrevTestimonial}
              aria-label="Ver depoimento anterior"
              className="group w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-zinc-950/95 hover:bg-zinc-900 text-white border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.75)] hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer z-30 flex items-center justify-center shrink-0"
            >
              <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white group-hover:-translate-x-0.5 transition-transform" />
            </button>

            <div id="celular-depoimento-wrapper" className="relative flex justify-center items-center select-none">
              <div className="absolute inset-0 bg-[#0066FF]/15 blur-[80px] rounded-full transform scale-95 pointer-events-none"></div>

              {/* Realistic Phone Case */}
              <div
                id="celular-depoimento-frame"
                className="relative w-[295px] xs:w-[330px] sm:w-[380px] md:w-[430px] lg:w-[460px] max-w-[80vw] xs:max-w-[82vw] sm:max-w-[84vw] rounded-[36px] sm:rounded-[48px] pt-2.5 pb-3 px-1.5 xs:pt-3 xs:pb-3.5 xs:px-2 sm:pt-4 sm:pb-4 sm:px-3 bg-gradient-to-b from-[#333333] via-[#1a1a1a] to-[#0a0a0a] shadow-[0_0_35px_rgba(255,255,255,0.45),0_30px_90px_rgba(0,0,0,0.95)] border-[3px] sm:border-4 border-white ring-2 ring-white/30 flex flex-col"
              >
                {/* Physical buttons on sides */}
                <div className="absolute -left-[3.5px] top-20 sm:top-24 w-[3.5px] h-6 sm:h-8 bg-zinc-400 rounded-l-sm"></div>
                <div className="absolute -left-[3.5px] top-30 sm:top-36 w-[3.5px] h-10 sm:h-12 bg-zinc-400 rounded-l-sm"></div>
                <div className="absolute -left-[3.5px] top-44 sm:top-52 w-[3.5px] h-10 sm:h-12 bg-zinc-400 rounded-l-sm"></div>
                <div className="absolute -right-[3.5px] top-24 sm:top-28 w-[3.5px] h-14 sm:h-16 bg-zinc-400 rounded-r-sm"></div>

                {/* Speaker & Front Camera */}
                <div className="flex items-center justify-center gap-2 mb-2 sm:mb-2.5">
                  <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-zinc-600 rounded-full opacity-80"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-700/90 border border-zinc-600"></div>
                </div>

                {/* Inner Screen */}
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#efeae2] border border-white/40 shadow-inner aspect-[9/16] w-full">
                  {TESTIMONIALS.map((item, idx) => {
                    const isActive = testimonialIndex === idx;
                    return (
                      <img
                        key={item.id}
                        id={`celular-depoimento-img-${item.id}`}
                        alt={item.alt}
                        width={450}
                        height={800}
                        className={`absolute inset-0 w-full h-full object-cover object-top select-none transition-opacity duration-300 ease-in-out ${
                          isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                        src={item.image}
                        onError={(e) => {
                          if (e.currentTarget.src !== item.fallback) {
                            e.currentTarget.src = item.fallback;
                          }
                        }}
                      />
                    );
                  })}
                </div>

                {/* Home Indicator Bar */}
                <div className="mt-1.5 sm:mt-2.5 flex justify-center">
                  <div className="w-16 sm:w-24 h-1 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>

            <button
              id="btn-depoimento-proximo"
              type="button"
              onClick={handleNextTestimonial}
              aria-label="Ver próximo depoimento"
              className="group w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-zinc-950/95 hover:bg-zinc-900 text-white border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.75)] hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer z-30 flex items-center justify-center shrink-0"
            >
              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div id="depoimento-indicadores" className="mt-8 flex flex-col items-center gap-2.5 z-20">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setTestimonialIndex(idx)}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
                    testimonialIndex === idx
                      ? 'w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]'
                      : 'w-2.5 bg-zinc-600 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 sm:mt-12 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={scrollToOffer}
              className="group inline-flex items-center justify-center gap-3 bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-[0_0_35px_rgba(0,255,102,0.8),0_0_15px_rgba(0,255,102,0.5)] hover:shadow-[0_0_50px_rgba(0,255,102,1),0_0_25px_rgba(0,255,102,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#80FFB2] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>QUERO TER ESSES RESULTADOS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing / Offers Section */}
      <section id="oferta" className="section-lazy bg-zinc-950 relative border-b border-white/5 py-20 md:py-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[800px] md:h-[800px] bg-[#0066FF]/5 rounded-full blur-2xl md:blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center mb-10 md:mb-12 w-full flex flex-col items-center justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 md:w-96 md:h-40 bg-[#0066FF]/20 blur-xl md:blur-[60px] rounded-full pointer-events-none"></div>
            <h2
              className="relative z-10 font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-4 text-center leading-tight"
              style={{
                textShadow: 'rgba(255, 255, 255, 0.6) 0px 0px 25px, rgba(0, 102, 255, 0.6) 0px 0px 50px',
              }}
            >
              ESCOLHA O PLANO IDEAL<br />
              <span className="inline-block mt-2 md:mt-3">PARA A SUA PRODUÇÃO</span>
            </h2>
            <p className="relative z-10 text-zinc-300 font-light text-base md:text-xl text-center mx-auto mt-2 max-w-2xl">
              Pagamento único, sem mensalidades. Acesso imediato liberado logo após a confirmação.
            </p>
          </div>

          <div className="w-full max-w-5xl flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-10">
            {/* Plan 1: Base */}
            <div className="w-full lg:max-w-[420px] glass-card border border-white/10 rounded-3xl py-7 px-6 sm:px-8 opacity-95 hover:opacity-100 transition-opacity flex flex-col bg-black/40">
              <div className="text-center mb-4">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-3">
                  Plano Inicial
                </span>
                <h3 className="font-display font-black text-lg uppercase tracking-wider text-white">
                  Coleção Base
                </h3>
              </div>

              <div className="border-b border-white/10 pb-4 mb-5 text-center">
                <p className="text-xs text-zinc-500 line-through mb-0.5">De R$ 47,00</p>
                <div className="flex justify-center items-baseline gap-1 mb-1">
                  <span className="text-lg text-zinc-400 font-bold">R$</span>
                  <span className="text-4xl sm:text-5xl font-display font-black text-white">10,90</span>
                </div>
                <p className="text-zinc-400/80 text-[11px] uppercase tracking-widest font-bold">Pagamento Único</p>
              </div>

              <ul className="space-y-3 mb-6 text-[13px] text-zinc-300 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#0066FF] stroke-[3]" />
                  <span>150 Mil Modelos STL</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#0066FF] stroke-[3]" />
                  <span>Acesso por 3 Meses</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#0066FF] stroke-[3]" />
                  <span>Garantia de 14 Dias</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-[#3B82F6]">
                  <X className="w-4 h-4 text-[#3B82F6] stroke-[3]" />
                  <span>Sem os 14 Bônus Inclusos</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-[#3B82F6]">
                  <X className="w-4 h-4 text-[#3B82F6] stroke-[3]" />
                  <span>Sem Atualizações Futuras</span>
                </li>
              </ul>

              <button
                type="button"
                onClick={() => setShowUpsellModal(true)}
                className="block w-full text-center py-4 rounded-xl bg-transparent border-2 border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white hover:bg-white/5 text-sm uppercase tracking-wider transition-all mt-auto font-bold cursor-pointer"
              >
                QUERO O BASE (R$ 10,90)
              </button>

              <div className="mt-4 text-center">
                <p className="font-bold text-[13px] sm:text-[14px] leading-snug px-2 text-[#3B82F6]">
                  💡 Recomendação: o Pacote Completo <span className="lg:hidden">logo abaixo</span><span className="hidden lg:inline">ao lado</span> é muito mais vantajoso!
                </p>
              </div>
            </div>

            {/* Plan 2: VIP Completo (Recommended) */}
            <div
              id="oferta-pro"
              className="w-full lg:max-w-[440px] bg-white text-black border-[2px] border-[#0066FF] rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(0,102,255,0.5)] flex flex-col scroll-mt-24"
            >
              <div className="bg-[#0066FF] text-white text-center py-2 px-3">
                <p className="text-xs font-black uppercase tracking-wider">
                  🔥 MAIS RECOMENDADO — PACOTE COMPLETO VIP
                </p>
              </div>

              <div className="p-6 sm:p-7 h-full flex flex-col items-center">
                <div className="w-full flex items-center justify-center mb-4 relative group">
                  <div className="absolute inset-0 bg-[#0066FF]/20 blur-xl rounded-full scale-90 pointer-events-none opacity-80"></div>
                  <img
                    alt="Pacote Completo VIP Universo 3D"
                    width={360}
                    height={240}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 w-auto h-auto max-h-52 sm:max-h-60 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300 select-none"
                    src="/oferta-vip-4790.webp"
                  />
                </div>

                <div className="text-center w-full mb-4">
                  <p className="text-base sm:text-lg text-zinc-500 font-black mb-1 italic">
                    DE R$ <span className="line-through">147,00</span>
                  </p>
                  <p className="text-zinc-800 font-bold text-sm sm:text-base mb-1 leading-none uppercase">
                    Por Apenas
                  </p>
                  <div className="flex justify-center items-start text-black mb-1 drop-shadow-sm">
                    <span className="text-xl font-black mt-1 mr-1 text-black">R$</span>
                    <span className="text-6xl sm:text-7xl font-display font-black tracking-tighter leading-none text-black">
                      47,90
                    </span>
                  </div>
                  <p className="text-zinc-600 font-bold text-xs uppercase tracking-widest">
                    Pagamento Único
                  </p>
                </div>

                <div className="w-full bg-zinc-100 rounded-2xl p-4 sm:p-5 mb-5 border border-zinc-200">
                  <ul className="w-full space-y-2.5 text-[13px] text-black font-medium">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0066FF] text-base font-black leading-none shrink-0 mt-0.5">✓</span>
                      <strong className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-black">
                        + 150 MIL MODELOS STL
                      </strong>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0066FF] text-base font-black leading-none shrink-0 mt-0.5">✓</span>
                      <strong className="text-black font-bold">
                        Licença Comercial para Venda de Peças Físicas
                      </strong>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0066FF] text-base font-black leading-none shrink-0 mt-0.5">✓</span>
                      <span className="text-black font-bold">Acesso Vitalício + Todas as Atualizações</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#0066FF] text-base font-black leading-none shrink-0 mt-0.5">✓</span>
                      <span className="text-black font-bold">Garantia Incondicional de 14 Dias</span>
                    </li>

                    {BONUSES.map((b) => (
                      <li key={b.id} className="flex items-start gap-2.5 text-black">
                        <span className="text-[#0066FF] text-base font-black leading-none shrink-0 mt-0.5">✓</span>
                        <span className="text-black font-bold leading-snug">
                          <strong className="text-black font-black">Bônus {b.id}:</strong> {b.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center w-full mt-auto">
                  <a
                    href="https://checkout.wiven.com.br/checkout/cmtmetu95064r01ohne5n1gub?offer=NBUSUEP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black uppercase text-base sm:text-lg py-4 rounded-xl text-center tracking-wider transition-all transform hover:scale-105 shadow-[0_0_35px_rgba(0,255,102,0.7)] hover:shadow-[0_0_50px_rgba(0,255,102,1)] border-2 border-[#80FFB2] cursor-pointer"
                  >
                    QUERO O ACERVO COMPLETO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="garantia" className="section-lazy py-16 md:py-24 relative overflow-hidden bg-black border-t border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[700px] md:h-[450px] bg-[#0066FF]/10 rounded-full blur-2xl md:blur-[130px] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="rounded-3xl border-2 border-[#0066FF]/35 bg-gradient-to-b from-[#0a1120]/95 via-[#080d18]/95 to-[#05080f] p-6 sm:p-10 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_45px_rgba(0,102,255,0.18)] relative overflow-hidden">
            <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>

            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
              <div className="relative shrink-0 flex items-center justify-center group">
                <div className="absolute inset-0 bg-[#0066FF]/25 blur-3xl rounded-full scale-90 pointer-events-none"></div>
                <img
                  alt="Selo de Garantia Incondicional de 14 Dias"
                  width={280}
                  height={280}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 object-contain drop-shadow-[0_15px_40px_rgba(0,102,255,0.45)] select-none transition-transform duration-300 group-hover:scale-105"
                  src="https://www.universo3d.online/assets/selo-garantia-14-dias-BCpm6Odj.webp"
                />
              </div>

              <div className="text-center lg:text-left flex-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(0,102,255,0.2)]">
                  <span>🛡️</span> RISCO ZERO PARA VOCÊ
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white mb-4 leading-tight">
                  GARANTIA INCONDICIONAL DE <span className="grad-text drop-shadow-[0_0_25px_rgba(0,102,255,0.6)]">14 DIAS</span>
                </h2>
                <p className="text-zinc-200 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-3.5">
                  Você tem 14 dias completos para acessar o Universo 3D™, explorar todas as categorias, baixar os arquivos STL e testar os modelos na sua impressora.
                </p>
                <p className="text-zinc-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6">
                  Se por qualquer motivo você achar que o conteúdo não é para você, basta solicitar o reembolso na plataforma que devolvemos 100% do seu investimento, sem complicações e sem burocracia.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 sm:gap-2.5 bg-black/50 px-3 py-2.5 rounded-xl border border-white/5 shadow-inner">
                    <span className="text-[#0066FF] text-base font-black shrink-0">✓</span>
                    <span className="text-white text-xs sm:text-[13px] font-bold tracking-tight leading-snug">
                      Teste sem riscos
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 bg-black/50 px-3 py-2.5 rounded-xl border border-white/5 shadow-inner">
                    <span className="text-[#0066FF] text-base font-black shrink-0">✓</span>
                    <span className="text-white text-xs sm:text-[13px] font-bold tracking-tight leading-snug">
                      Reembolso simplificado
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-2.5 bg-black/50 px-3 py-2.5 rounded-xl border border-white/5 shadow-inner">
                    <span className="text-[#0066FF] text-base font-black shrink-0">✓</span>
                    <span className="text-white text-xs sm:text-[13px] font-bold tracking-tight leading-snug">
                      Suporte dedicado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-lazy py-16 md:py-20 relative bg-black border-t border-white/5">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
              Tire suas dúvidas
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white">
              Perguntas <span className="grad-text drop-shadow-[0_0_20px_rgba(0,102,255,0.5)]">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={`faq-${idx}`}
                  className="rounded-xl bg-zinc-950/80 border border-white/10 overflow-hidden transition-colors hover:border-[#0066FF]/30"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 md:p-5 text-left font-bold flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm md:text-base text-zinc-100">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0066FF] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 md:px-5 pb-5 text-zinc-300 font-light text-sm leading-relaxed border-t border-white/5 pt-3.5">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={scrollToOffer}
              className="group inline-flex items-center justify-center gap-3 bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-[0_0_35px_rgba(0,255,102,0.8),0_0_15px_rgba(0,255,102,0.5)] hover:shadow-[0_0_50px_rgba(0,255,102,1),0_0_25px_rgba(0,255,102,0.8)] transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#80FFB2] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>EXPERIMENTAR SEM RISCO AGORA</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="main-footer" className="section-lazy bg-[#0A0A0A] pt-12 pb-10 border-t border-white/10 text-zinc-400 font-light text-[11px] sm:text-xs text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="font-display font-black text-white text-lg sm:text-xl tracking-wider mb-3">
            UNIVERSO 3D™
          </p>
          <p className="mb-10 max-w-xl mx-auto text-zinc-400 leading-relaxed text-[13px]">
            A maior e mais premium biblioteca de arquivos STL para impressão 3D de colecionáveis do mercado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-y border-white/5 py-8 text-zinc-300">
            <div className="flex flex-col items-center justify-center gap-2">
              <Lock className="w-6 h-6 text-[#0066FF] mb-1" />
              <span className="uppercase tracking-widest text-white font-bold text-[11px]">
                Ambiente 100% Seguro
              </span>
              <span className="text-[10px] text-zinc-400">Dados criptografados de ponta a ponta</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Mail className="w-6 h-6 text-[#0066FF] mb-1" />
              <span className="uppercase tracking-widest text-white font-bold text-[11px]">
                Suporte Especializado
              </span>
              <span className="text-[10px] text-zinc-300">suporte@universo3d.com.br</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Building2 className="w-6 h-6 text-[#0066FF] mb-1" />
              <span className="uppercase tracking-widest text-white font-bold text-[11px]">
                Empresa Verificada
              </span>
              <span className="text-[10px] text-zinc-300">CNPJ: 00.000.000/0001-00</span>
            </div>
          </div>

          <p className="mb-8 max-w-4xl mx-auto text-zinc-400 leading-relaxed text-[10px] sm:text-[11px] text-justify md:text-center">
            Todo o conteúdo, arquivos digitais e modelos STL fornecidos através do Universo 3D são protegidos por leis de direitos autorais e propriedade intelectual. A redistribuição, revenda ou compartilhamento não autorizado dos arquivos digitais não é permitida.
          </p>

          <div className="flex flex-wrap justify-center gap-6 uppercase tracking-widest mb-6 font-bold text-[10px] text-zinc-400">
            <button
              type="button"
              onClick={() => setLegalModalType('termos')}
              className="hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <button
              type="button"
              onClick={() => setLegalModalType('privacidade')}
              className="hover:text-[#0066FF] transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>

          <p className="text-zinc-400 tracking-widest text-[10px] uppercase">
            © 2026 UNIVERSO 3D. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </footer>

      {/* Upsell Popup Modal */}
      {showUpsellModal && (
        <div
          id="upsellModal"
          onClick={() => setShowUpsellModal(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
        >
          <div
            id="upsellModalContent"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[350px] sm:max-w-[370px] my-auto transform transition-all duration-300"
          >
            <div className="w-full bg-[#0F0F0F] border-[2px] border-[#0066FF] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(0,102,255,0.5),inset_0_0_12px_rgba(0,102,255,0.25)] flex flex-col mx-auto my-1">
              <button
                type="button"
                onClick={() => setShowUpsellModal(false)}
                aria-label="Fechar modal"
                className="absolute top-2 right-2.5 sm:top-2.5 sm:right-3 text-white/60 hover:text-white transition-colors z-30 p-1 rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="py-2 sm:py-2.5 text-center relative bg-gradient-to-b from-[#1a1a1a] to-[#0F0F0F] pr-8 pl-2">
                <h3 className="font-display font-black text-xs sm:text-sm md:text-base uppercase tracking-tight px-1 whitespace-nowrap">
                  <span className="grad-text font-extrabold">ESPERE! LEVE TUDO POR </span>
                  <span className="text-[#0066FF]">R$ 21,90</span>
                </h3>
              </div>

              <div className="bg-gradient-to-r from-[#0052CC] via-[#0066FF] to-[#003399] py-1 px-2.5 shadow-[0_0_15px_rgba(0,102,255,0.4)] border-y border-[#0066FF]/60">
                <p className="font-black text-white text-center leading-tight">
                  <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.15em] opacity-90">
                    O PACOTE MAIS COMPLETO E VANTAJOSO
                  </span>
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-tight">
                    + 150 MIL MODELOS STL + 500 FUNKOS + TODOS OS 14 BÔNUS
                  </span>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 flex flex-col items-center">
                <div className="w-full flex items-center justify-center mb-1.5 relative group">
                  <div className="absolute inset-0 bg-[#0066FF]/15 blur-lg rounded-full scale-90 pointer-events-none opacity-60"></div>
                  <img
                    src="https://www.universo3d.online/assets/funko-bonus-Czaxy3mw.webp"
                    alt="Pacote +500 Modelos Funkos STL"
                    width={240}
                    height={128}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 w-auto h-auto max-h-28 sm:max-h-32 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] select-none"
                  />
                </div>

                <div className="text-center w-full mb-2">
                  <p className="text-[11px] sm:text-xs text-[#60A5FA] font-black mb-0.5 italic">
                    DE R$ <span className="line-through">147,00</span>
                  </p>
                  <p className="text-[#0066FF] font-bold text-[11px] sm:text-xs mb-0.5 leading-none uppercase">
                    Por Apenas
                  </p>
                  <div className="flex justify-center items-start text-[#0066FF] mb-0.5 drop-shadow-[0_0_15px_rgba(0,102,255,0.5)]">
                    <span className="text-base sm:text-lg font-black mt-0.5 mr-0.5">R$</span>
                    <span className="text-4xl sm:text-5xl font-display font-black tracking-tighter leading-none">
                      21,90
                    </span>
                  </div>
                  <p className="text-zinc-400 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Pagamento Único
                  </p>
                </div>

                <div className="w-full bg-[#1A1A1A] rounded-xl p-2.5 sm:p-3 mb-2.5 border border-white/5 max-h-36 sm:max-h-40 overflow-y-auto">
                  <ul className="w-full space-y-1.5 text-[11px] text-white/90 font-medium">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#0066FF] text-xs font-black leading-none shrink-0 mt-0.5">✓</span>
                      <strong className="text-[11px] font-black uppercase text-[#0066FF]">
                        + 150 MIL MODELOS STL
                      </strong>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#0066FF] text-xs font-bold leading-none shrink-0 mt-0.5">✓</span>
                      <strong className="text-white">Licença Comercial para Venda de Peças Físicas</strong>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#0066FF] text-xs font-bold leading-none shrink-0 mt-0.5">✓</span>
                      <span>Acesso Vitalício + Todas as Atualizações</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#0066FF] text-xs font-bold leading-none shrink-0 mt-0.5">✓</span>
                      <span>Garantia Incondicional de 14 Dias</span>
                    </li>
                    {BONUSES.map((t) => (
                      <li key={`upsell-bonus-${t.id}`} className="flex items-start gap-1.5 text-zinc-300">
                        <span className="text-[#0066FF] text-[11px] font-black leading-none shrink-0 mt-0.5">✓</span>
                        <span className="text-zinc-200 leading-tight text-[10px] sm:text-[11px]">
                          <strong className="text-[#0066FF]">Bônus {t.id}:</strong> {t.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://checkout.wiven.com.br/checkout/cmtmf009r05xg01psocuf4cal?offer=5MJUM3P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#00FF66] hover:bg-[#2BFF7E] text-black font-display font-black uppercase text-sm sm:text-base py-3 rounded-xl text-center tracking-wider transition-all transform hover:scale-[1.02] shadow-[0_0_30px_rgba(0,255,102,0.7)] border-2 border-[#80FFB2] cursor-pointer"
                >
                  SIM! LEVAR TUDO POR R$ 21,90
                </a>

                <a
                  href="https://checkout.wiven.com.br/checkout/cmtkws58g09hz01pypy1crecf?offer=32HECNZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-zinc-400 hover:text-zinc-200 text-[11px] font-semibold underline underline-offset-2 transition-colors text-center cursor-pointer"
                >
                  Não quero os bônus, continuar apenas com o Plano Base por R$ 10,90 »
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legal Information Modal */}
      {legalModalType && (
        <div
          onClick={() => setLegalModalType(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-zinc-950 border border-white/20 rounded-2xl p-6 sm:p-8 text-left shadow-2xl my-auto text-zinc-300"
          >
            <button
              type="button"
              onClick={() => setLegalModalType(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModalType === 'termos' ? (
              <div>
                <h3 className="text-xl font-display font-black text-white uppercase mb-4">
                  Termos de Uso
                </h3>
                <div className="space-y-3 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                  <p>
                    Bem-vindo ao <strong>Universo 3D™</strong>. Ao acessar nosso catálogo e serviços, você concorda em cumprir e sujeitar-se a estes Termos de Uso.
                  </p>
                  <p>
                    <strong>1. Licença de Uso:</strong> Os arquivos digitais em formato .STL disponibilizados destinam-se à impressão tridimensional de peças físicas. Para os planos com Licença Comercial, é expressamente autorizada a comercialização dos produtos físicos impressos.
                  </p>
                  <p>
                    <strong>2. Direitos de Propriedade Intelectual:</strong> É estritamente proibida a revenda, sublicenciamento, doação, redistribuição ou compartilhamento público ou privado dos arquivos digitais .STL propriamente ditos.
                  </p>
                  <p>
                    <strong>3. Garantia:</strong> Oferecemos garantia incondicional de 14 dias para reembolso integral caso o usuário solicite dentro do prazo estipulado através da plataforma de pagamento.
                  </p>
                  <p>
                    <strong>4. Suporte:</strong> Para dúvidas técnicas ou de acesso, entre em contato via nosso e-mail oficial: suporte@universo3d.com.br.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-display font-black text-white uppercase mb-4">
                  Política de Privacidade
                </h3>
                <div className="space-y-3 text-sm leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                  <p>
                    A sua privacidade é fundamental para nós. Esta política descreve como tratamos e protegemos suas informações no <strong>Universo 3D™</strong>.
                  </p>
                  <p>
                    <strong>1. Coleta de Informações:</strong> Coletamos apenas as informações necessárias para liberação do acesso e identificação do usuário, como nome e endereço de e-mail.
                  </p>
                  <p>
                    <strong>2. Segurança dos Dados:</strong> Os pagamentos e dados transacionais são processados com criptografia de ponta a ponta através de gateways seguros e certificados. Não armazenamos números de cartão de crédito.
                  </p>
                  <p>
                    <strong>3. Uso das Informações:</strong> Seus dados jamais serão vendidos ou compartilhados com terceiros não autorizados. Usamos seu e-mail exclusivamente para envio dos acessos, atualizações e suporte ao cliente.
                  </p>
                  <p>
                    <strong>4. Contato:</strong> Qualquer solicitação sobre seus dados pode ser enviada diretamente a suporte@universo3d.com.br.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
