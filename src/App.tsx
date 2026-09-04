import React, { useState, useRef, useEffect, useCallback } from 'react';
import notebookPoster from './assets/poster-catalogo.jpg';
import { CleanImage } from './components/CleanImage';
import {
  Play,
  Check,
  X,
  ShieldCheck,
  Lock,
  Mail,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gift,
  ShoppingCart
} from 'lucide-react';

interface ModelItem {
  id: string | number;
  image?: string;
  icon?: React.ReactNode;
  color?: string;
  title: string;
  imageClassName?: string;
}

const line1Models: ModelItem[] = [
  {
    id: 'l1-img-1',
    image: 'https://i.imgur.com/6cCq8Rf.png',
    title: 'Colecionável STL',
  },
  {
    id: 'l1-img-2',
    image: 'https://i.imgur.com/burmX7i.png',
    title: 'Modelo 3D STL',
  },
  {
    id: 'l1-img-3',
    image: 'https://i.imgur.com/iiQWumG.png',
    title: 'Escultura Colecionável STL',
  },
  {
    id: 'l1-img-4',
    image: 'https://i.imgur.com/RvI8Tgc.png',
    title: 'Action Figure STL',
  },
  {
    id: 'l1-img-5',
    image: 'https://i.imgur.com/IiNLkyN.png',
    title: 'Personagem Detalhado STL',
  },
  {
    id: 'l1-img-6',
    image: 'https://i.imgur.com/fqqiyqt.png',
    title: 'Busto Colecionável STL',
  },
  {
    id: 'l1-img-7',
    image: 'https://i.imgur.com/RbxY5oY.png',
    title: 'Artefato Épico STL',
  },
  {
    id: 'l1-img-8',
    image: 'https://i.imgur.com/S2xF2tJ.png',
    title: 'Guerreiro 3D STL',
  },
  {
    id: 'l1-img-9',
    image: 'https://i.imgur.com/eCDBAvz.png',
    title: 'Criatura Lendária STL',
  },
  {
    id: 'l1-img-10',
    image: 'https://i.imgur.com/fdpcefu.png',
    title: 'Colecionável Especial STL',
  },
  {
    id: 'l1-img-11',
    image: 'https://i.imgur.com/6up371W.png',
    title: 'Figura de Ação STL',
  },
  {
    id: 'l1-img-12',
    image: 'https://i.imgur.com/NUjg7qK.png',
    title: 'Personagem Anime STL',
  },
  {
    id: 'l1-img-13',
    image: 'https://i.imgur.com/XJqt9ir.png',
    title: 'Escultura Articulada STL',
  },
  {
    id: 'l1-img-14',
    image: 'https://i.imgur.com/9UwfIza.png',
    title: 'Modelo Premium STL',
  },
  {
    id: 'l1-img-15',
    image: 'https://i.imgur.com/lO3J8Wb.png',
    title: 'Personagem Fantasia STL',
  },
  {
    id: 'l1-img-16',
    image: 'https://i.imgur.com/3YWeqjV.png',
    title: 'Estátua Decorativa STL',
  },
];

const line2Models: ModelItem[] = [
  {
    id: 'l2-img-1',
    image: 'https://i.imgur.com/vxV9uGs.png',
    title: 'Figura Colecionável STL',
  },
  {
    id: 'l2-img-2',
    image: 'https://i.imgur.com/OWPMAw9.png',
    title: 'Escultura Detalhada STL',
  },
  {
    id: 'l2-img-3',
    image: 'https://i.imgur.com/NxLXZKR.png',
    title: 'Action Figure Lendária STL',
  },
  {
    id: 'l2-img-4',
    image: 'https://i.imgur.com/dtGZy9j.png',
    title: 'Diorama Épico STL',
  },
  {
    id: 'l2-img-5',
    image: 'https://i.imgur.com/wI4YRI2.png',
    title: 'Colecionável de Sucesso STL',
  },
  {
    id: 'l2-img-6',
    image: 'https://i.imgur.com/Nzv1cDH.png',
    title: 'Personagem Mítico STL',
  },
  {
    id: 'l2-img-7',
    image: 'https://i.imgur.com/BLI3Ocr.png',
    title: 'Modelo High-Poly STL',
  },
  {
    id: 'l2-img-8',
    image: 'https://i.imgur.com/Q2gtaee.png',
    title: 'Guerreiro Épico STL',
  },
  {
    id: 'l2-img-9',
    image: 'https://i.imgur.com/CldKhUH.png',
    title: 'Escultura Fantástica STL',
  },
  {
    id: 'l2-img-10',
    image: 'https://i.imgur.com/x9zamns.png',
    title: 'Colecionável Raro STL',
  },
  {
    id: 'l2-img-11',
    image: 'https://i.imgur.com/p2ftAEg.png',
    title: 'Action Figure Especial STL',
  },
  {
    id: 'l2-img-12',
    image: 'https://i.imgur.com/XColugb.png',
    title: 'Personagem Lendário STL',
  },
  {
    id: 'l2-img-13',
    image: 'https://i.imgur.com/IcKX7kO.png',
    title: 'Estátua Decorativa 3D STL',
  },
  {
    id: 'l2-img-14',
    image: 'https://i.imgur.com/AWA8wvx.png',
    title: 'Colecionável Premium STL',
  },
  {
    id: 'l2-img-15',
    image: 'https://i.imgur.com/1s9hRPB.png',
    title: 'Modelo Articulado Exclusivo STL',
  },
  {
    id: 'l2-img-16',
    image: 'https://i.imgur.com/PZGhNQL.png',
    title: 'Guerreiro 3D STL',
  },
];

const line3Models: ModelItem[] = [
  {
    id: 'l3-img-1',
    image: 'https://i.imgur.com/Iexyj0f.png',
    title: 'Colecionável Raro 3D STL',
  },
  {
    id: 'l3-img-2',
    image: 'https://i.imgur.com/5Ld6EQd.png',
    title: 'Guerreiro de Fantasia STL',
  },
  {
    id: 'l3-img-3',
    image: 'https://i.imgur.com/NucoHxQ.png',
    title: 'Modelo Articulado STL',
  },
  {
    id: 'l3-img-4',
    image: 'https://i.imgur.com/4jWcKxZ.png',
    title: 'Action Figure Clássica STL',
  },
  {
    id: 'l3-img-5',
    image: 'https://i.imgur.com/tnHf4pV.png',
    title: 'Personagem Futurista STL',
  },
  {
    id: 'l3-img-6',
    image: 'https://i.imgur.com/MiJs0Ha.png',
    title: 'Artefato Decorativo STL',
  },
  {
    id: 'l3-img-7',
    image: 'https://i.imgur.com/KWdI0NJ.png',
    title: 'Escultura Mítica 3D STL',
  },
  {
    id: 'l3-img-8',
    image: 'https://i.imgur.com/bu4uvAA.png',
    title: 'Herói Colecionável STL',
  },
  {
    id: 'l3-img-9',
    image: 'https://i.imgur.com/agiTngK.png',
    title: 'Modelo Exclusivo Limitado STL',
  },
  {
    id: 'l3-img-10',
    image: 'https://i.imgur.com/cT3ZstC.png',
    title: 'Action Figure Épica STL',
  },
  {
    id: 'l3-img-11',
    image: 'https://i.imgur.com/0A84s2W.png',
    title: 'Escultura Articulada 3D STL',
  },
  {
    id: 'l3-img-12',
    image: 'https://i.imgur.com/quzXTcN.png',
    title: 'Personagem Anime STL',
  },
  {
    id: 'l3-img-13',
    image: 'https://i.imgur.com/BrFGpUf.png',
    title: 'Colecionável Especial STL',
  },
  {
    id: 'l3-img-14',
    image: 'https://i.imgur.com/ys8ZIIc.png',
    title: 'Guerreiro Épico STL',
  },
  {
    id: 'l3-img-15',
    image: 'https://i.imgur.com/tT3WbfJ.png',
    title: 'Figura Decorativa STL',
  },
  {
    id: 'l3-img-16',
    image: 'https://i.imgur.com/OwSvkry.png',
    title: 'Colecionável Especial 3D STL',
  },
];

const brands = [
  'CREALITY',
  'ELEGOO',
  'BAMBU LAB',
  'ANYCUBIC',
  'PRUSA 3D',
  'FLASHFORGE',
  'ARTILLERY',
  'VORON DESIGN',
];

interface BonusItem {
  id: number;
  title: string;
  priceOriginal: string;
  image?: string;
  imageClassName?: string;
  icon?: React.ReactNode;
}

const bonuses: BonusItem[] = [
  {
    id: 1,
    title: 'Pack de Veículos 3D Profissionais',
    priceOriginal: 'R$ 39,00',
    image: 'https://i.imgur.com/Bf5JxqM.png',
    imageClassName: 'h-[65px] sm:h-[100px] md:h-[140px] w-auto max-w-[90%] object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300 select-none',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-yellow-300">
        <path
          d="M10 38 L16 28 C18 24 22 22 28 22 L40 22 C46 22 50 25 54 30 L58 35 C60 37 60 40 58 43 L56 45 C55 46 53 46 52 46 L12 46 C10 46 8 44 8 42 Z"
          fill="currentColor"
          opacity="0.85"
        />
        <path d="M26 25 L38 25 C42 25 45 27 48 30 L20 30 C22 27 24 25 26 25 Z" fill="#111" opacity="0.9" />
        <circle cx="18" cy="46" r="6" fill="#111" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="18" cy="46" r="2.5" fill="currentColor" />
        <circle cx="48" cy="46" r="6" fill="#111" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="48" cy="46" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Coleção Heróis da Marvel',
    priceOriginal: 'R$ 49,00',
    image: 'https://i.imgur.com/pdCj1DW.png',
    imageClassName: 'h-[92px] sm:h-[150px] md:h-[205px] scale-115 sm:scale-120 md:scale-125 w-auto max-w-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.95)] group-hover:scale-135 transition-transform duration-300 select-none',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-yellow-300">
        <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.9" />
        <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
        <circle cx="32" cy="32" r="14" fill="currentColor" opacity="0.3" />
        <polygon points="32,20 35.5,27.5 43.5,28.5 37.5,34 39,42 32,38 25,42 26.5,34 20.5,28.5 28.5,27.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Pack de Chaveiros Personalizados',
    priceOriginal: 'R$ 29,00',
    image: 'https://i.imgur.com/vxHNjbj.png',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-yellow-300">
        <circle cx="22" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="22" cy="22" r="6" fill="currentColor" opacity="0.3" />
        <path d="M31 31 L52 52 M44 44 L49 39 M49 49 L54 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Modelos Flexíveis e Articulados',
    priceOriginal: 'R$ 37,00',
    image: 'https://i.imgur.com/Q4lf6Zv.png',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-yellow-300">
        <path d="M10 32 C10 20 22 20 22 32 C22 44 34 44 34 32 C34 20 46 20 46 32 C46 44 58 44 58 32" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <circle cx="16" cy="32" r="4" fill="currentColor" />
        <circle cx="28" cy="32" r="4" fill="currentColor" />
        <circle cx="40" cy="32" r="4" fill="currentColor" />
        <circle cx="52" cy="32" r="4" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Coleção Clássicos dos Desenhos',
    priceOriginal: 'R$ 35,00',
    image: 'https://i.imgur.com/YvReDXB.png',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-yellow-300">
        <circle cx="32" cy="36" r="18" fill="currentColor" opacity="0.4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="18" cy="18" r="10" fill="currentColor" opacity="0.8" />
        <circle cx="46" cy="18" r="10" fill="currentColor" opacity="0.8" />
        <ellipse cx="27" cy="34" rx="2.5" ry="4" fill="#111" />
        <ellipse cx="37" cy="34" rx="2.5" ry="4" fill="#111" />
        <path d="M25 43 Q32 50 39 43" stroke="#111" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Coleção Máscaras 3D',
    priceOriginal: 'R$ 39,00',
    image: 'https://i.imgur.com/aHsgqES.png',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-yellow-300">
        <path d="M14 20 C14 12 50 12 50 20 C52 36 44 52 32 56 C20 52 12 36 14 20 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M19 28 Q26 24 30 30 M45 28 Q38 24 34 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
        <line x1="32" y1="32" x2="32" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M26 46 Q32 50 38 46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 7,
    title: 'Coleção Pokémon 3D',
    priceOriginal: 'R$ 47,00',
    image: 'https://i.imgur.com/4Ywvfe9.png',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-yellow-300">
        <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <line x1="6" y1="32" x2="24" y2="32" stroke="currentColor" strokeWidth="3.5" />
        <line x1="40" y1="32" x2="58" y2="32" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="32" cy="32" r="8" fill="#111" stroke="currentColor" strokeWidth="3" />
        <circle cx="32" cy="32" r="3.5" fill="currentColor" />
        <path d="M7 30 A 25 25 0 0 1 57 30 Z" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 8,
    title: 'Mascotes de Futebol 3D',
    priceOriginal: 'R$ 39,00',
    image: 'https://i.imgur.com/3vvYA6X.png',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-yellow-300">
        <path d="M32 6 L52 14 V32 C52 46 32 58 32 58 C32 58 12 46 12 32 V14 Z" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
        <circle cx="32" cy="30" r="15" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
        <polygon points="32,23 37,27 35,33 29,33 27,27" fill="currentColor" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Helicópteros 3D',
    priceOriginal: 'R$ 39,00',
    image: 'https://i.imgur.com/G6L87Iy.png',
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-yellow-300">
        <line x1="12" y1="16" x2="52" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="16" x2="32" y2="24" stroke="currentColor" strokeWidth="3" />
        <path d="M22 24 C14 24 10 30 10 38 C10 44 16 46 26 46 H40 C44 46 48 42 48 36 C48 30 42 24 34 24 Z" fill="currentColor" opacity="0.85" />
        <path d="M12 34 C12 30 16 26 22 26 H28 V38 H14 C12.5 38 12 36 12 34 Z" fill="#111" />
        <path d="M40 32 L56 28 V30 L40 38 Z" fill="currentColor" />
        <line x1="56" y1="22" x2="56" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="56" cy="29" r="2" fill="currentColor" />
        <line x1="20" y1="46" x2="18" y2="52" stroke="currentColor" strokeWidth="2.5" />
        <line x1="36" y1="46" x2="34" y2="52" stroke="currentColor" strokeWidth="2.5" />
        <path d="M12 52 H42 C45 52 46 50 46 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'Preciso de uma impressora específica?',
    a: 'Os arquivos são 100% universais e compatíveis com a maioria das impressoras FDM (Filamento) e Resina do mercado (Creality, Bambu Lab, Elegoo, Anycubic, etc.).',
  },
  {
    q: 'Posso vender as peças impressas?',
    a: 'Sim! Os pacotes com Licença Comercial autorizam você a imprimir e vender as peças físicas livremente em marketplaces, lojas e sob encomenda.',
  },
  {
    q: 'Como recebo o acesso?',
    a: 'Assim que a compra é confirmada, você recebe instantaneamente os dados de acesso à plataforma e área de membros exclusiva por e-mail.',
  },
  {
    q: 'Os arquivos têm suporte e divisão inteligente inclusos?',
    a: 'Sim! Todos os modelos de colecionáveis já contam com divisões geométricas milimétricas de encaixe macho-fêmea, otimizando o tempo de impressão e economizando suportes e filamento.',
  },
];

interface DepoimentoItem {
  id: number;
  image: string;
  alt: string;
}

const depoimentosList: DepoimentoItem[] = [
  {
    id: 1,
    image: 'https://i.imgur.com/acyobFA.png',
    alt: 'Depoimento 1 - Universo 3D',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/9b3x2ii.png',
    alt: 'Depoimento 2 - Universo 3D',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/eMJ3jpC.png',
    alt: 'Depoimento 3 - Universo 3D',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/IlSJNhC.png',
    alt: 'Depoimento 4 - Universo 3D',
  },
];

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [depoimentoIndex, setDepoimentoIndex] = useState(0);
  const [isNotebookVideoPlaying, setIsNotebookVideoPlaying] = useState(false);
  const notebookVideoRef = useRef<HTMLVideoElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Pré-carrega todas as imagens de depoimento para trocar instantaneamente sem piscar a tela
  useEffect(() => {
    depoimentosList.forEach((dep) => {
      const img = new Image();
      img.src = dep.image;
    });
  }, []);

  const prevDepoimento = useCallback(() => {
    setDepoimentoIndex((prev) => (prev === 0 ? depoimentosList.length - 1 : prev - 1));
  }, []);

  const nextDepoimento = useCallback(() => {
    setDepoimentoIndex((prev) => (prev === depoimentosList.length - 1 ? 0 : prev + 1));
  }, []);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleBaseClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsUpsellOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative antialiased selection:bg-yellow-400 selection:text-black">
      {/* Background Starfield */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-stars opacity-60" />

      {/* 1. Header Alert Bar */}
      <header id="header-bar" className="w-full bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#B45309] py-3 relative z-50 shadow-md text-black">
        <div className="container mx-auto px-4 flex justify-center items-center text-center">
          <p className="text-xs sm:text-sm md:text-base font-black tracking-wide flex items-center gap-1.5 drop-shadow-sm">
            🔥 Condição especial de lançamento
          </p>
        </div>
      </header>

      {/* 2-5. Hero Section */}
      <section id="hero-section" className="relative pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full relative z-20 flex flex-col items-center pt-10 md:pt-16 pb-2 px-4 text-center max-w-4xl mx-auto">
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.2] drop-shadow-2xl">
            <span className="block">Suas impressões 3D podem</span>
            <span className="block">
              <span className="grad-text drop-shadow-[0_0_25px_rgba(255,199,0,0.5)]">vender muito mais</span>
            </span>
            <span className="block">quando o modelo certo</span>
            <span className="block">
              <span className="grad-text drop-shadow-[0_0_25px_rgba(255,199,0,0.5)]">chega até você.</span>
            </span>
          </h1>

          {/* Live indicator badge */}
          <div className="w-full flex flex-col items-center mt-6 mb-3">
            <span className="text-sm sm:text-base md:text-lg font-black uppercase tracking-wide flex items-center gap-2">
              <span className="live-dot inline-block w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]" />
              Veja como funciona
            </span>
          </div>

          {/* Video Presentation */}
          <div className="w-full relative z-10 flex flex-col items-center mt-1 mb-8">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#FFC700] via-[#F59E0B] to-[#D97706] opacity-70 blur-xl pointer-events-none" />
              <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border-2 border-[#FFC700] shadow-[0_0_30px_rgba(255,199,0,0.6)] bg-black flex items-center justify-center">
                <video
                  src="https://i.imgur.com/W7vGfri.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover rounded-2xl"
                >
                  Seu navegador não suporta a reprodução de vídeo.
                </video>
              </div>
            </div>

            {/* Botão de Compra Direto para a Oferta de 42,90 */}
            <div className="mt-6 w-full max-w-sm px-2 flex flex-col items-center">
              <a
                href="#oferta-pro"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('oferta-pro');
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className="group w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FFC700] via-[#FFD700] to-[#E5B300] hover:from-[#FFE033] hover:to-[#FFC700] text-black font-display font-black text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-2xl text-center shadow-[0_0_35px_rgba(255,199,0,0.7)] hover:shadow-[0_0_50px_rgba(255,199,0,1)] transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border-2 border-yellow-200 cursor-pointer"
              >
                <ShoppingCart className="w-6 h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
                <span>QUERO O CATÁLOGO COMPLETO</span>
              </a>
              <p className="mt-2.5 text-xs text-yellow-300 font-bold uppercase tracking-wider flex items-center gap-1.5 opacity-90 text-center">
                <span>⚡</span>
                <span>Por Apenas R$ 42,90 — Acesso Vitalício + 9 Bônus</span>
              </p>
            </div>
          </div>

          <p className="mt-2 mb-8 text-zinc-300 text-base md:text-lg max-w-2xl font-light">
            Catálogo com centenas de arquivos STL de colecionáveis autorais, já divididos em peças para encaixe perfeito — sem estimar suporte, sem desperdiçar filamento.
          </p>
        </div>

        {/* 6. Marcas Marquee */}
        <div id="brands-marquee" className="w-full overflow-hidden relative mb-4">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="marquee">
            <div className="flex items-center gap-16 px-8 shrink-0">
              {brands.map((brand, i) => (
                <span key={`brand-1-${i}`} className="text-zinc-500 font-display font-bold text-xl tracking-widest hover:text-zinc-300 transition-colors">
                  {brand}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-16 px-8 shrink-0" aria-hidden="true">
              {brands.map((brand, i) => (
                <span key={`brand-2-${i}`} className="text-zinc-500 font-display font-bold text-xl tracking-widest hover:text-zinc-300 transition-colors">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Carrossel de Modelos */}
      <section id="modelos-carrossel" className="pt-0 pb-16 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-6 max-w-3xl mx-auto">
            <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight mb-4">
              Modelos que <span className="grad-text">chamam atenção</span> antes mesmo da primeira impressão.
            </h2>
            <p className="text-zinc-300 text-lg font-light max-w-2xl mx-auto">
              Personagens ricos em detalhes, com um visual marcante e pensados para criar peças que realmente se destacam.
            </p>
          </div>
        </div>

        {/* Carrossel Linha 1 - Direção Normal */}
        <div className="w-full overflow-hidden relative mb-4">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="marquee-cards">
            <div className="flex items-center gap-4 px-2 shrink-0">
              {line1Models.map((item, idx) => (
                <div
                  key={`card-l1-${idx}`}
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#FFC700]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        alt={item.title}
                        priority={idx < 4}
                        loading={idx < 4 ? 'eager' : 'lazy'}
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-yellow-400'} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 px-2 shrink-0" aria-hidden="true">
              {line1Models.map((item, idx) => (
                <div
                  key={`card-l1-dup-${idx}`}
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#FFC700]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-yellow-400'} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carrossel Linha 2 - Sentido Contrário (Reverse) */}
        <div className="w-full overflow-hidden relative mb-4">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="marquee-cards-reverse">
            <div className="flex items-center gap-4 px-2 shrink-0">
              {line2Models.map((item, idx) => (
                <div
                  key={`card-l2-${idx}`}
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#FFC700]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-yellow-400'} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 px-2 shrink-0" aria-hidden="true">
              {line2Models.map((item, idx) => (
                <div
                  key={`card-l2-dup-${idx}`}
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#FFC700]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-yellow-400'} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carrossel Linha 3 - Sentido Normal (Igual à Linha 1) */}
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className="marquee-cards">
            <div className="flex items-center gap-4 px-2 shrink-0">
              {line3Models.map((item, idx) => (
                <div
                  key={`card-l3-${idx}`}
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#FFC700]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-yellow-400'} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 px-2 shrink-0" aria-hidden="true">
              {line3Models.map((item, idx) => (
                <div
                  key={`card-l3-dup-${idx}`}
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#FFC700]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: "url('https://i.imgur.com/nQa7wxr.png')" }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-yellow-400'} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Mockup Notebook */}
      <section id="mockup-notebook" className="py-16 md:py-24 relative bg-black overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Conheça o <span className="grad-text drop-shadow-[0_0_25px_rgba(255,199,0,0.6)]">catálogo</span> por dentro
            </h2>
          </div>
          <div className="max-w-4xl md:max-w-5xl mx-auto relative px-2 sm:px-4 md:px-6">
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-[#FFC700]/30 via-[#F59E0B]/40 to-[#FFEF5C]/30 rounded-[50px] blur-2xl md:blur-3xl opacity-90 pointer-events-none" />
            <div className="relative z-10">
              {/* Laptop Screen Top */}
              <div className="relative bg-[#18181C] rounded-t-[20px] sm:rounded-t-[26px] md:rounded-t-[32px] p-2 sm:p-2.5 md:p-3.5 border-t-[2px] border-x-[2px] border-[#383842] shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(255,199,0,0.3)]">
                {/* Camera notch */}
                <div className="flex items-center justify-center relative -mb-1 z-20">
                  <div className="w-10 sm:w-14 h-2 sm:h-2.5 bg-[#0A0A0C] rounded-b-md flex items-center justify-center gap-1.5 shadow-inner">
                    <div className="w-1 h-1 rounded-full bg-[#1A1A22] border border-white/20" />
                    <div className="w-0.5 h-0.5 rounded-full bg-[#FACC15] opacity-75" />
                  </div>
                </div>
                {/* Screen Display area */}
                <div
                  id="notebook-screen-area"
                  className="relative rounded-md sm:rounded-lg md:rounded-xl overflow-hidden bg-[#000000] aspect-[16/9] border border-white/10 shadow-[inset_0_0_30px_rgba(0,0,0,0.9)] flex items-center justify-center group"
                >
                  <video
                    ref={notebookVideoRef}
                    id="video-catalogo-notebook"
                    src="https://i.imgur.com/GHHhHgT.mp4"
                    poster={notebookPoster}
                    controls={isNotebookVideoPlaying}
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsNotebookVideoPlaying(true)}
                    onPause={() => setIsNotebookVideoPlaying(false)}
                    onEnded={() => setIsNotebookVideoPlaying(false)}
                    className="w-full h-full object-cover"
                  >
                    Seu navegador não suporta a reprodução de vídeo.
                  </video>

                  {/* Capa com a imagem da Área de Membros aparente e Botão Estilo YouTube */}
                  {!isNotebookVideoPlaying && (
                    <div
                      onClick={() => {
                        if (notebookVideoRef.current) {
                          notebookVideoRef.current.play();
                          setIsNotebookVideoPlaying(true);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          notebookVideoRef.current?.play();
                          setIsNotebookVideoPlaying(true);
                        }
                      }}
                      aria-label="Assistir tour pela Área de Membros no YouTube"
                      className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center z-20 group select-none"
                    >
                      {/* Imagem da Área de Membros visível */}
                      <img
                        src={notebookPoster}
                        alt="Área de Membros Universo 3D"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover select-none"
                      />

                      {/* Leve película escura translúcida para contraste e realismo */}
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors pointer-events-none" />

                      {/* Botão Oficial Vermelho Estilo YouTube */}
                      <div className="relative z-10 w-16 h-11 sm:w-20 sm:h-14 md:w-24 md:h-16 rounded-[14px] sm:rounded-[18px] bg-[#FF0000] hover:bg-[#E60000] flex items-center justify-center shadow-[0_4px_30px_rgba(255,0,0,0.7)] group-hover:scale-110 group-hover:shadow-[0_6px_45px_rgba(255,0,0,0.95)] transition-all duration-300">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white fill-white ml-1 drop-shadow" />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Laptop Hinge & Base */}
              <div className="w-32 sm:w-44 md:w-56 h-1.5 sm:h-2 md:h-2.5 bg-[#0F0F12] border-t border-[#2A2A32] mx-auto rounded-b-sm shadow-sm" />
              <div className="relative -mt-1 w-[104%] -ml-[2%] h-3.5 sm:h-4.5 md:h-5.5 bg-gradient-to-b from-[#2E2E36] via-[#1A1A20] to-[#0D0D10] rounded-b-[16px] sm:rounded-b-[22px] md:rounded-b-[26px] shadow-[0_30px_70px_rgba(0,0,0,0.95)] border-t border-white/25 flex justify-center items-start">
                <div className="w-20 sm:w-28 md:w-36 h-1 sm:h-1.5 bg-[#08080A] rounded-b-md border-x border-b border-[#3A3A44]/80 shadow-inner" />
              </div>
              <div className="w-[85%] h-4 bg-gradient-to-r from-transparent via-[#FFC700]/30 to-transparent blur-xl mx-auto -mt-1.5 pointer-events-none" />
              <div className="w-[75%] h-3 bg-gradient-to-r from-transparent via-black/90 to-transparent blur-md mx-auto -mt-2.5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Validação de Mercado */}
      <section id="validacao-mercado" className="pt-4 pb-16 relative bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight mb-4">
              Um mercado <span className="grad-text">comprovado</span>
            </h2>
            <p className="text-zinc-300 font-light">
              Peças parecidas já são anunciadas todos os dias nos maiores marketplaces do país.
            </p>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <div className="rounded-3xl overflow-hidden bg-zinc-950 border-2 border-yellow-500/60 shadow-[0_0_50px_rgba(245,158,11,0.35)] relative group w-full p-2 sm:p-4">
              <CleanImage
                src="https://i.imgur.com/91smpGk.png"
                alt="Mercado Comprovado - Anúncios e Vendas Reais de Peças 3D (1)"
                className="w-full h-auto object-contain rounded-2xl select-none group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-zinc-950 border-2 border-yellow-500/60 shadow-[0_0_50px_rgba(245,158,11,0.35)] relative group w-full p-2 sm:p-4">
              <CleanImage
                src="https://i.imgur.com/JyP4Cx4.png"
                alt="Mercado Comprovado - Anúncios e Vendas Reais de Peças 3D (2)"
                className="w-full h-auto object-contain rounded-2xl select-none group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-zinc-950 border-2 border-yellow-500/60 shadow-[0_0_50px_rgba(245,158,11,0.35)] relative group w-full p-2 sm:p-4">
              <CleanImage
                src="https://i.imgur.com/Sq2a956.png"
                alt="Mercado Comprovado - Anúncios e Vendas Reais de Peças 3D (3)"
                className="w-full h-auto object-contain rounded-2xl select-none group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Matemática Lucrativa */}
      <section id="matematica-lucrativa" className="pt-8 pb-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mt-0">
              Matemática <span className="grad-text drop-shadow-[0_0_12px_rgba(255,199,0,0.4)]">Lucrativa</span>
            </h2>
            <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto font-medium text-zinc-300">
              Veja quanto peças semelhantes costumam ser anunciadas
            </p>
          </div>

          <div
            className="relative w-full rounded-2xl md:rounded-[2rem] overflow-hidden border-2 border-white/10"
            style={{ boxShadow: '0 0 50px rgba(0,0,0,0.8)' }}
          >
            <table className="w-full text-left border-collapse">
              <thead className="bg-black/80">
                <tr>
                  <th className="p-2 sm:p-4 md:p-6 text-[10px] sm:text-xs md:text-lg font-black font-display uppercase tracking-wider border border-white/10 w-1/3 text-center align-middle">
                    Modelo
                  </th>
                  <th className="p-2 sm:p-4 md:p-6 text-[10px] sm:text-xs md:text-lg font-black font-display text-gray-200 uppercase tracking-wider border border-white/10 w-1/3 text-center align-middle">
                    Consumo est. de filamento
                  </th>
                  <th className="p-2 sm:p-4 md:p-6 text-[10px] sm:text-xs md:text-lg font-black font-display text-[#FFEF5C] uppercase tracking-wider border border-[#FFC700]/30 bg-[#FFC700]/5 w-1/3 text-center align-middle">
                    Anúncios encontrados
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black/60">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 text-center align-middle">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-1 sm:p-2 flex items-center justify-center overflow-hidden group">
                      <CleanImage
                        src="https://i.imgur.com/sLGiXZU.png"
                        alt="Modelo 3D STL - Peça 1"
                        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 font-bold font-display text-[11px] sm:text-sm md:text-xl text-center align-middle text-[#ef4444]">
                    R$ 11,14
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-[#FFC700]/30 text-yellow-400 font-black font-display text-sm sm:text-lg md:text-3xl bg-[#FFC700]/5 text-center align-middle drop-shadow-[0_0_10px_rgba(255,199,0,0.3)]">
                    R$ 147–165
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 text-center align-middle">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-1 sm:p-2 flex items-center justify-center overflow-hidden group">
                      <CleanImage
                        src="https://i.imgur.com/tReZWy7.png"
                        alt="Modelo 3D STL - Peça 2"
                        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 font-bold font-display text-[11px] sm:text-sm md:text-xl text-center align-middle text-[#ef4444]">
                    R$ 9,74
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-[#FFC700]/30 text-yellow-400 font-black font-display text-sm sm:text-lg md:text-3xl bg-[#FFC700]/5 text-center align-middle drop-shadow-[0_0_10px_rgba(255,199,0,0.3)]">
                    R$ 123–147
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 text-center align-middle">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-1 sm:p-2 flex items-center justify-center overflow-hidden group">
                      <CleanImage
                        src="https://i.imgur.com/hpg6LLt.png"
                        alt="Modelo 3D STL - Peça 3"
                        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 font-bold font-display text-[11px] sm:text-sm md:text-xl text-center align-middle text-[#ef4444]">
                    R$ 8,37
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-[#FFC700]/30 text-yellow-400 font-black font-display text-sm sm:text-lg md:text-3xl bg-[#FFC700]/5 text-center align-middle drop-shadow-[0_0_10px_rgba(255,199,0,0.3)]">
                    R$ 75–107
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 12. 9 Bônus Exclusivos */}
      <section id="bonus" className="bg-black relative border-y border-[#FFC700]/10 overflow-hidden py-16 md:py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFC700]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 max-w-6xl text-center">
          <p className="text-lg md:text-2xl font-bold uppercase tracking-widest mb-2 opacity-90">
            E não para por aí...
          </p>
          <h2 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            TEM MAIS!
          </h2>
          <p className="text-[#FFEF5C] text-xl md:text-3xl font-light mb-12">
            Você também vai receber...
          </p>
          <div className="inline-block px-10 py-5 bg-[#FFC700] text-black font-black font-display text-2xl md:text-4xl uppercase tracking-tight mb-16 shadow-[0_0_40px_rgba(255,199,0,0.25)]">
            9 Bônus Exclusivos
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-6xl mx-auto text-left">
            {bonuses.map((bonus) => (
              <div
                key={`bonus-${bonus.id}`}
                className="bg-black/50 border border-white/10 rounded-lg sm:rounded-xl p-2 sm:p-3.5 md:p-5 flex flex-col items-center justify-between text-center hover:bg-white/5 transition-colors border-t border-t-[#FFC700]/40 relative group aspect-square"
              >
                <div className="w-full flex flex-col items-center">
                  <span className="grad-text font-black font-display text-[10px] xs:text-xs sm:text-base md:text-2xl mb-0.5 sm:mb-1 md:mb-1.5 tracking-wider sm:tracking-widest">
                    BÔNUS {bonus.id < 10 ? `0${bonus.id}` : bonus.id}
                  </span>
                  <h4 className="text-[9px] xs:text-[11px] sm:text-xs md:text-base font-bold uppercase tracking-tight sm:tracking-wide line-clamp-2 leading-tight min-h-[22px] sm:min-h-[28px] md:min-h-[40px] flex items-center justify-center">
                    {bonus.title}
                  </h4>
                </div>

                <div className="w-full flex-1 min-h-0 flex items-center justify-center relative my-0.5 sm:my-1.5 p-0.5 sm:p-1">
                  {bonus.image ? (
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full w-auto h-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.95)] group-hover:scale-105 transition-transform duration-300 select-none"
                    />
                  ) : (
                    <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl bg-yellow-400/5 border border-yellow-400/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_25px_rgba(255,199,0,0.15)] p-2 sm:p-3">
                      <div className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                        {bonus.icon}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento Real em Layout de Celular */}
      <section id="depoimento" className="bg-black relative border-t border-white/5 py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#FFC700]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div id="depoimento-badge" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 shadow-[0_0_20px_rgba(255,199,0,0.15)]">
              <span className="text-yellow-400">★ ★ ★ ★ ★</span>
              <span>Depoimento Real de Membro</span>
            </div>
            <h2 id="depoimento-titulo" className="font-display font-black text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight mb-3">
              QUEM ACESSOU JÁ COMEÇOU A <span className="grad-text">TESTAR PRODUTOS</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
              Veja feedbacks de pessoas que entraram para parar de perder tempo procurando STL e começar a organizar seus produtos.
            </p>
          </div>

          {/* Smartphone Mockup & Carrossel com Setas de Navegação */}
          <div id="celular-depoimento-slider" className="relative w-full max-w-4xl mx-auto flex items-center justify-center gap-1.5 xs:gap-3 sm:gap-6 md:gap-8 px-1 sm:px-4">
            {/* Seta Esquerda */}
            <button
              id="btn-depoimento-anterior"
              type="button"
              onClick={prevDepoimento}
              aria-label="Ver depoimento anterior"
              className="group w-9 h-9 xs:w-11 xs:h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-zinc-950/95 hover:bg-zinc-900 text-white border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.75)] hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer z-30 flex items-center justify-center shrink-0"
            >
              <ChevronLeft className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Smartphone Mockup Alongado / Vertical com Borda Branca */}
            <div
              id="celular-depoimento-wrapper"
              className="relative flex justify-center items-center select-none"
              onTouchStart={(e) => {
                touchStartXRef.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchStartXRef.current !== null) {
                  const diff = touchStartXRef.current - e.changedTouches[0].clientX;
                  if (diff > 45) nextDepoimento();
                  else if (diff < -45) prevDepoimento();
                  touchStartXRef.current = null;
                }
              }}
            >
              {/* Ambient phone back glow */}
              <div className="absolute inset-0 bg-[#FFC700]/15 blur-[80px] rounded-full transform scale-95 pointer-events-none" />

              {/* Realistic Phone Frame: Alongado para cima, com laterais contidas para não cobrir as setas */}
              <div
                id="celular-depoimento-frame"
                className="relative w-[210px] xs:w-[240px] sm:w-[320px] md:w-[390px] lg:w-[430px] max-w-[58vw] xs:max-w-[62vw] sm:max-w-[70vw] rounded-[38px] sm:rounded-[48px] pt-3 pb-3.5 px-2 sm:pt-4 sm:pb-4 sm:px-3 bg-gradient-to-b from-[#333333] via-[#1a1a1a] to-[#0a0a0a] shadow-[0_0_35px_rgba(255,255,255,0.45),0_30px_90px_rgba(0,0,0,0.95)] border-[3px] sm:border-4 border-white ring-2 ring-white/30 flex flex-col"
              >
                {/* Phone side buttons (exterior realism) */}
                <div className="absolute -left-[3.5px] top-20 sm:top-24 w-[3.5px] h-6 sm:h-8 bg-zinc-400 rounded-l-sm" />
                <div className="absolute -left-[3.5px] top-30 sm:top-36 w-[3.5px] h-10 sm:h-12 bg-zinc-400 rounded-l-sm" />
                <div className="absolute -left-[3.5px] top-44 sm:top-52 w-[3.5px] h-10 sm:h-12 bg-zinc-400 rounded-l-sm" />
                <div className="absolute -right-[3.5px] top-24 sm:top-28 w-[3.5px] h-14 sm:h-16 bg-zinc-400 rounded-r-sm" />

                {/* Top Bezel: Alto-falante e sensor externo (não cobre a tela nem o nome) */}
                <div className="flex items-center justify-center gap-2 mb-2 sm:mb-2.5">
                  <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-zinc-600 rounded-full opacity-80" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-700/90 border border-zinc-600" />
                </div>

                {/* Inner Screen Bezel - 100% livre de sobreposições, com proporção fixa e transição suave sem piscar */}
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black border border-white/40 shadow-inner aspect-[941/1672] w-full">
                  {depoimentosList.map((dep, idx) => (
                    <img
                      key={dep.id}
                      id={`celular-depoimento-img-${dep.id}`}
                      src={dep.image}
                      alt={dep.alt}
                      className={`absolute inset-0 w-full h-full object-cover object-top select-none transition-opacity duration-200 ease-in-out ${
                        depoimentoIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                      loading="eager"
                      decoding="sync"
                    />
                  ))}
                </div>

                {/* Bottom Bezel: Barra inferior de navegação na moldura externa */}
                <div className="mt-2 sm:mt-2.5 flex justify-center">
                  <div className="w-16 sm:w-24 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>

            {/* Seta Direita */}
            <button
              id="btn-depoimento-proximo"
              type="button"
              onClick={nextDepoimento}
              aria-label="Ver próximo depoimento"
              className="group w-9 h-9 xs:w-11 xs:h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-zinc-950/95 hover:bg-zinc-900 text-white border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.75)] hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer z-30 flex items-center justify-center shrink-0"
            >
              <ChevronRight className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Indicadores / Paginação dos Depoimentos */}
          <div id="depoimento-indicadores" className="mt-8 flex flex-col items-center gap-2.5 z-20">
            <div className="flex items-center gap-2">
              {depoimentosList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setDepoimentoIndex(idx)}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full h-2.5 cursor-pointer ${
                    depoimentoIndex === idx
                      ? 'w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]'
                      : 'w-2.5 bg-zinc-600 hover:bg-zinc-400'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-zinc-400 font-mono tracking-widest uppercase">
              {depoimentoIndex + 1} de {depoimentosList.length} {depoimentosList.length === 1 ? 'Depoimento' : 'Depoimentos'}
            </span>
          </div>
        </div>
      </section>

      {/* 13-14. Seção de Oferta & Preços */}
      <section id="oferta" className="bg-zinc-950 relative border-b border-white/5 py-20 md:py-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center mb-10 md:mb-12 w-full flex flex-col items-center justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-40 bg-[#FFC700]/25 blur-[60px] rounded-full pointer-events-none" />
            <h2
              className="relative z-10 font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-4 text-center leading-tight"
              style={{
                textShadow: '0 0 25px rgba(255,255,255,0.6), 0 0 50px rgba(255,199,0,0.5)',
              }}
            >
              ESCOLHA A COLEÇÃO<br />
              <span className="inline-block mt-2 md:mt-3">PERFEITA PARA VOCÊ</span>
            </h2>
            <p className="relative z-10 text-zinc-300 font-light text-lg md:text-xl text-center mx-auto mt-2">
              Acesso vitalício ao ecossistema.<br />Pagamento único.
            </p>
          </div>

          <div className="w-full max-w-5xl flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-10">
            {/* Card 1 - Coleção Base (R$ 16,90 - Ao clicar abre o Pop-up de R$ 24,90) */}
            <div className="w-full lg:max-w-[420px] glass-card border border-white/10 rounded-3xl py-7 px-6 sm:px-8 opacity-95 hover:opacity-100 transition-opacity flex flex-col bg-black/40">
              <div className="text-center mb-4">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-zinc-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-3">
                  Entrada
                </span>
                <h3 className="font-display font-black text-lg uppercase tracking-wider text-white">
                  Coleção Base
                </h3>
              </div>
              <div className="border-b border-white/10 pb-4 mb-5 text-center">
                <p className="text-xs text-zinc-500 line-through mb-0.5">De R$ 47,00</p>
                <div className="flex justify-center items-baseline gap-1 mb-1">
                  <span className="text-lg text-zinc-400 font-bold">R$</span>
                  <span className="text-4xl sm:text-5xl font-display font-black text-white">16,90</span>
                </div>
                <p className="text-zinc-400/80 text-[11px] uppercase tracking-widest font-bold">
                  Pagamento Único
                </p>
              </div>
              <ul className="space-y-3 mb-6 text-[13px] text-zinc-300 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="text-[#FFC700] text-base font-bold leading-none">✓</span>
                  <span>500 Modelos Funkos STL</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#FFC700] text-base font-bold leading-none">✓</span>
                  <span>Acesso por 3 Meses</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#FFC700] text-base font-bold leading-none">✓</span>
                  <span>Garantia de 7 Dias</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-[#ef4444]">
                  <span className="text-base font-bold leading-none">✕</span>
                  <span>Sem os 9 Bônus Inclusos</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-[#ef4444]">
                  <span className="text-base font-bold leading-none">✕</span>
                  <span>Sem Atualizações Futuras</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-[#ef4444]">
                  <span className="text-base font-bold leading-none">✕</span>
                  <span>Sem Licença Comercial</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={handleBaseClick}
                className="block w-full text-center py-4 rounded-xl border-2 border-white/20 text-white hover:text-black hover:bg-[#FFC700] hover:border-[#FFC700] text-sm uppercase tracking-wider transition-all mt-auto font-black cursor-pointer shadow-sm"
              >
                QUERO O BASE (R$ 16,90)
              </button>
              <div className="mt-4 text-center">
                <p className="font-bold text-[13px] sm:text-[14px] leading-snug px-2 text-[#ef4444]">
                  Atenção: temos uma oferta ainda mais vantajosa! <span className="lg:hidden">Veja logo abaixo</span>
                  <span className="hidden lg:inline">Veja ao lado</span>
                </p>
              </div>
            </div>

            {/* Card 2 - Coleção Completa VIP (R$ 42,90 - Destaque) */}
            <div
              id="oferta-pro"
              className="w-full lg:max-w-[440px] bg-[#0F0F0F] border-[2px] border-[#FFC700] rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(255,199,0,0.5),inset_0_0_15px_rgba(255,199,0,0.25)] flex flex-col scroll-mt-24"
            >
              <div className="bg-[#FFC700] text-black text-center py-2 px-3">
                <p className="text-xs font-black uppercase tracking-wider">
                  ������ MAIS VENDIDO — PACOTE COMPLETO VIP
                </p>
              </div>
              <div className="p-6 sm:p-7 h-full flex flex-col items-center">
                <div className="w-full flex items-center justify-center mb-4 relative group">
                  <div className="absolute inset-0 bg-yellow-500/15 blur-xl rounded-full scale-90 pointer-events-none opacity-70" />
                  <img
                    src="https://i.imgur.com/7ShOh79.png"
                    alt="Pacote +500 Modelos Funkos STL"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-auto h-auto max-h-44 sm:max-h-52 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-300 select-none"
                  />
                </div>
                <div className="text-center w-full mb-4">
                  <p className="text-base sm:text-lg text-red-400 font-black mb-1 italic">
                    DE R$ <span className="line-through">147,00</span>
                  </p>
                  <p className="text-[#FFEF5C] font-bold text-sm sm:text-base mb-1 leading-none uppercase">Por Apenas</p>
                  <div className="flex justify-center items-start text-[#FFC700] mb-1 drop-shadow-md">
                    <span className="text-xl font-black mt-1 mr-1">R$</span>
                    <span className="text-6xl sm:text-7xl font-display font-black tracking-tighter leading-none">42,90</span>
                  </div>
                  <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest">Pagamento Único</p>
                </div>
                <div className="w-full bg-[#1A1A1A] rounded-2xl p-4 mb-5 border border-white/5">
                  <ul className="w-full space-y-2 text-[13px] text-white/90 font-medium">
                    <li className="flex items-start gap-2.5 bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-2 text-yellow-300">
                      <span className="text-[#FFC700] text-base font-black leading-none">✓</span>
                      <strong className="text-xs sm:text-[13px] font-black uppercase tracking-tight text-[#FFEF5C]">
                        + 500 MODELOS FUNKOS STL
                      </strong>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#FFC700] text-base font-bold leading-none">✓</span>
                      <strong className="text-yellow-300">Licença Comercial Inclusa</strong>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#FFC700] text-base font-bold leading-none">✓</span>
                      <span>Acesso Vitalício + Atualizações Semanais</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#FFC700] text-base font-bold leading-none">✓</span>
                      <span>Garantia Blindada de 7 Dias</span>
                    </li>
                    <li className="w-full h-px bg-white/10 my-2" />
                    <li className="text-[11px] uppercase tracking-wider text-yellow-400 font-bold flex items-center gap-1.5 pt-0.5">
                      <span>🎁</span>
                      <span>TODOS OS 9 BÔNUS EXCLUSIVOS INCLUSOS:</span>
                    </li>
                    {bonuses.map((b) => (
                      <li key={`offer-bonus-${b.id}`} className="flex items-start gap-1.5 text-xs">
                        <span className="text-yellow-400 font-bold shrink-0">B0{b.id}:</span>
                        <span className="text-[#FFEF5C] leading-snug font-medium">{b.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center w-full mt-auto">
                  <a
                    href="https://checkout.wiven.com.br/checkout/cmtmetu95064r01ohne5n1gub?offer=NBUSUEP"
                    className="block w-full bg-[#FFC700] hover:bg-[#E5B300] text-black font-display font-black uppercase text-base sm:text-lg py-4 rounded-xl text-center tracking-wider transition-transform hover:scale-105 shadow-[0_0_25px_rgba(255,199,0,0.4)] cursor-pointer"
                  >
                    GARANTIR ACESSO VIP (R$ 42,90)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Garantia & FAQ */}
      <section id="garantia-faq" className="py-16 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="glass-card border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col gap-12 bg-black/50">
            {/* Guarantee Box */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14">
              <div className="shrink-0 w-24 h-24 rounded-full bg-yellow-500/10 border border-yellow-400/30 flex items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-yellow-400 stroke-[1.5]" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-display font-black text-2xl md:text-3xl mb-2">
                  Garantia Incondicional de 7 Dias
                </h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Se por qualquer motivo você não gostar do catálogo ou achar que os modelos não agregam ao seu negócio de impressão 3D, devolvemos 100% do seu investimento — sem perguntas e sem burocracia.
                </p>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div>
              <h3 className="font-display font-black text-2xl mb-6 text-center">
                Perguntas frequentes
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={`faq-${index}`}
                      className="rounded-xl bg-white/5 border border-white/10 overflow-hidden transition-colors hover:border-white/20"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full p-4 text-left font-bold flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        <span className="text-sm md:text-base text-zinc-100">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-yellow-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-zinc-400 font-light text-sm leading-relaxed border-t border-white/5 pt-3">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="main-footer" className="bg-[#0A0A0A] pt-12 pb-10 border-t border-white/10 text-zinc-400 font-light text-[11px] sm:text-xs text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="font-display font-black text-white text-lg sm:text-xl tracking-wider mb-3">
            UNIVERSO 3D™
          </p>
          <p className="mb-10 max-w-xl mx-auto text-zinc-400 leading-relaxed text-[13px]">
            A maior e mais premium biblioteca de arquivos STL para impressão 3D de colecionáveis do mercado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-y border-white/5 py-8 text-zinc-300">
            <div className="flex flex-col items-center justify-center gap-2">
              <Lock className="w-6 h-6 text-[#FFC700] mb-1" />
              <span className="uppercase tracking-widest text-white font-bold text-[11px]">
                Ambiente 100% Seguro
              </span>
              <span className="text-[10px] text-zinc-400">Dados criptografados de ponta a ponta</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Mail className="w-6 h-6 text-[#FFEF5C] mb-1" />
              <span className="uppercase tracking-widest text-white font-bold text-[11px]">
                Suporte Especializado
              </span>
              <span className="text-[10px] text-zinc-300">suporte@universo3d.com.br</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Building2 className="w-6 h-6 text-[#FFEF5C] mb-1" />
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
            <a href="#termos" className="hover:text-[#FFEF5C] transition-colors">
              Termos de Uso
            </a>
            <a href="#privacidade" className="hover:text-[#FFEF5C] transition-colors">
              Política de Privacidade
            </a>
          </div>

          <p className="text-zinc-400 tracking-widest text-[10px] uppercase">
            © 2026 UNIVERSO 3D. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </footer>

      {/* Upsell Modal */}
      {isUpsellOpen && (
        <div
          id="upsellModal"
          onClick={() => setIsUpsellOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
        >
          <div
            id="upsellModalContent"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[350px] sm:max-w-[370px] my-auto transform transition-all duration-300"
          >
            <div className="w-full bg-[#0F0F0F] border-[2px] border-[#FFC700] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-[0_0_50px_rgba(255,199,0,0.5),inset_0_0_12px_rgba(255,199,0,0.25)] flex flex-col mx-auto my-1">
              <button
                type="button"
                onClick={() => setIsUpsellOpen(false)}
                aria-label="Fechar modal"
                className="absolute top-2 right-2.5 sm:top-2.5 sm:right-3 text-white/60 hover:text-white transition-colors z-30 p-1 rounded-full hover:bg-white/10 cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="py-2 sm:py-2.5 text-center relative bg-gradient-to-b from-[#1a1a1a] to-[#0F0F0F] pr-8 pl-2">
                <h3 className="font-display font-black text-xs sm:text-sm md:text-base uppercase tracking-tight px-1 whitespace-nowrap">
                  <span className="grad-text font-extrabold">ESPERE! LEVE TUDO POR </span>
                  <span className="text-[#FFC700]">R$ 24,90</span>
                </h3>
              </div>

              <div className="bg-gradient-to-r from-[#D97706] via-[#FBBF24] to-[#B45309] py-1 px-2.5 shadow-[0_0_15px_rgba(245,158,11,0.4)] border-y border-[#FBBF24]/60">
                <p className="font-black text-black text-center leading-tight">
                  <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.15em] opacity-90">
                    O PACOTE MAIS COMPLETO E VANTAJOSO
                  </span>
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-tight">
                    + 500 MODELOS FUNKOS STL + TODOS OS 9 BÔNUS
                  </span>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 flex flex-col items-center">
                <div className="w-full flex items-center justify-center mb-1.5 relative group">
                  <div className="absolute inset-0 bg-yellow-500/15 blur-lg rounded-full scale-90 pointer-events-none opacity-60" />
                  <img
                    src="https://i.imgur.com/7ShOh79.png"
                    alt="Pacote +500 Modelos Funkos STL"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-auto h-auto max-h-28 sm:max-h-32 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] select-none"
                  />
                </div>
                <div className="text-center w-full mb-2">
                  <p className="text-[11px] sm:text-xs text-red-400 font-black mb-0.5 italic">
                    DE R$ <span className="line-through">147,00</span>
                  </p>
                  <p className="text-[#FFEF5C] font-bold text-[11px] sm:text-xs mb-0.5 leading-none uppercase">
                    Por Apenas
                  </p>
                  <div className="flex justify-center items-start text-[#FFC700] mb-0.5 drop-shadow-md">
                    <span className="text-base sm:text-lg font-black mt-0.5 mr-0.5">R$</span>
                    <span className="text-4xl sm:text-5xl font-display font-black tracking-tighter leading-none">
                      24,90
                    </span>
                  </div>
                  <p className="text-zinc-400 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest">
                    Pagamento Único
                  </p>
                </div>
                <div className="w-full bg-[#1A1A1A] rounded-xl p-2.5 sm:p-3 mb-2.5 border border-white/5 max-h-36 sm:max-h-40 overflow-y-auto">
                  <ul className="w-full space-y-1 text-[11px] text-white/90 font-medium">
                    <li className="flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-400/30 rounded p-1 text-yellow-300">
                      <span className="text-[#FFC700] text-xs font-black leading-none">✓</span>
                      <strong className="text-[11px] font-black uppercase text-[#FFEF5C]">
                        + 500 MODELOS FUNKOS STL
                      </strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#FFC700] text-xs font-bold leading-none">✓</span>
                      <strong>Licença Comercial Inclusa</strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="text-[#FFC700] text-xs font-bold leading-none">✓</span>
                      <span>Acesso Vitalício + Atualizações</span>
                    </li>
                    <li className="w-full h-px bg-white/10 my-0.5" />
                    <li className="text-[9px] uppercase tracking-wider text-yellow-400 font-bold flex items-center gap-1">
                      <span>🎁</span>
                      <span>TODOS OS 9 BÔNUS INCLUSOS:</span>
                    </li>
                    {bonuses.map((b) => (
                      <li key={`upsell-bonus-${b.id}`} className="flex items-center gap-1.5">
                        <span className="text-yellow-400 font-bold text-[10px] shrink-0">B0{b.id}:</span>
                        <span className="text-[#FFEF5C] leading-tight text-[10px] sm:text-[11px]">{b.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://checkout.wiven.com.br/checkout/cmtmf009r05xg01psocuf4cal?offer=5MJUM3P"
                  className="block w-full bg-[#FFC700] hover:bg-[#E5B300] text-black font-display font-black uppercase text-sm sm:text-base py-3 rounded-xl text-center tracking-wider transition-transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,199,0,0.4)] cursor-pointer"
                >
                  GARANTIR ACESSO (R$ 24,90)
                </a>
                <a
                  href="https://checkout.wiven.com.br/checkout/cmtkws58g09hz01pypy1crecf?offer=32HECNZ"
                  className="mt-2 text-zinc-400 hover:text-zinc-200 text-[11px] font-semibold underline underline-offset-2 transition-colors text-center cursor-pointer"
                >
                  Não quero os bônus, continuar com o Plano Base por R$ 16,90 »
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
