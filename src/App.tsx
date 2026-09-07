import React, { useState, useRef, useEffect, useCallback } from 'react';
import notebookPoster from './assets/poster-catalogo.webp';
import heroPoster from './assets/poster-apresentacao.webp';
import cardBg from './assets/card-bg.webp';
import bonus1Image from './assets/optimized/bonus-1.webp';
import depoimentoBruna from './assets/optimized/depoimento-bruna.webp';
import depoimentoLucas from './assets/optimized/depoimento-lucas.webp';
import depoimentoRodrigo from './assets/optimized/depoimento-rodrigo.webp';
import depoimento4 from './assets/optimized/depoimento-4.webp';
import step1Img from './assets/optimized/step-1.webp';
import step2Img from './assets/optimized/step-2.webp';
import step3Img from './assets/optimized/step-3.webp';
import bonus2Image from './assets/optimized/bonus-2.webp';
import bonus3Image from './assets/optimized/bonus-3.webp';
import bonus4Image from './assets/optimized/bonus-4.webp';
import bonus5Image from './assets/optimized/bonus-5.webp';
import bonus6Image from './assets/optimized/bonus-6.webp';
import bonus7Image from './assets/optimized/bonus-7.webp';
import bonus8Image from './assets/optimized/bonus-8.webp';
import bonus9Image from './assets/optimized/bonus-9.webp';
import bonus10Image from './assets/optimized/bonus-10.webp';
import bonus11Image from './assets/optimized/bonus-11.webp';
import lucro1Image from './assets/optimized/lucro-1.webp';
import lucro2Image from './assets/optimized/lucro-2.webp';
import lucro3Image from './assets/optimized/lucro-3.webp';
import funkoBonusImage from './assets/optimized/funko-bonus.webp';
import rotatingModelImg from './assets/optimized/rotating-model.webp';
import carousel1 from './assets/optimized/carousel-1.webp';
import carousel2 from './assets/optimized/carousel-2.webp';
import carousel3 from './assets/optimized/carousel-3.webp';
import carousel4 from './assets/optimized/carousel-4.webp';
import carousel5 from './assets/optimized/carousel-5.webp';
import carousel6 from './assets/optimized/carousel-6.webp';
import carouselExtra1 from './assets/optimized/carousel-new/carousel-extra-1.webp';
import carouselExtra2 from './assets/optimized/carousel-new/carousel-extra-2.webp';
import carouselExtra3 from './assets/optimized/carousel-new/carousel-extra-3.webp';
import carouselExtra4 from './assets/optimized/carousel-new/carousel-extra-4.webp';
import carouselExtra5 from './assets/optimized/carousel-new/carousel-extra-5.webp';
import carouselExtra6 from './assets/optimized/carousel-new/carousel-extra-6.webp';
import carouselExtra7 from './assets/optimized/carousel-new/carousel-extra-7.webp';
import carouselExtra8 from './assets/optimized/carousel-new/carousel-extra-8.webp';
import carouselExtra9 from './assets/optimized/carousel-new/carousel-extra-9.webp';
import carouselExtra10 from './assets/optimized/carousel-new/carousel-extra-10.webp';
import seloGarantia from './assets/optimized/selo-garantia-14-dias.webp';
import { CleanImage } from './components/CleanImage';
import {
  Play,
  Check,
  X,
  Lock,
  Mail,
  Building2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  Sparkles
} from 'lucide-react';

interface ModelItem {
  id: string | number;
  image?: string;
  fallbackImage?: string;
  icon?: React.ReactNode;
  color?: string;
  title: string;
  imageClassName?: string;
}

const newModels: ModelItem[] = [
  {
    id: 'c-1',
    image: carousel1,
    fallbackImage: 'https://i.imgur.com/OW0TvSS.png',
    title: 'Minecraft 3D STL',
  },
  {
    id: 'c-2',
    image: carousel2,
    fallbackImage: 'https://i.imgur.com/YSY10He.png',
    title: 'Colecionável STL',
  },
  {
    id: 'c-3',
    image: carousel3,
    fallbackImage: 'https://i.imgur.com/4ffriGz.png',
    title: 'Action Figure STL',
  },
  {
    id: 'c-4',
    image: carousel4,
    fallbackImage: 'https://i.imgur.com/N8g8Jkb.png',
    title: 'Miniatura STL',
  },
  {
    id: 'c-5',
    image: carousel5,
    fallbackImage: 'https://i.imgur.com/IQfJhqF.png',
    title: 'Guerreiro 3D STL',
  },
  {
    id: 'c-6',
    image: carousel6,
    fallbackImage: 'https://i.imgur.com/ApsYGdc.png',
    title: 'Escultura Detalhada STL',
  },
];

const normalizedExistingImages = import.meta.glob<{ default: string }>('./assets/optimized/carousel-existing/*.webp', { eager: true });

function getNormalizedImage(url: string): string {
  const match = url.match(/\/([a-zA-Z0-9_-]+)\.png$/);
  if (match) {
    const key = `./assets/optimized/carousel-existing/${match[1]}.webp`;
    if (normalizedExistingImages[key]) {
      return normalizedExistingImages[key].default;
    }
  }
  return url;
}

const extraCarouselModels: ModelItem[] = [
  {
    id: 'extra-1',
    image: carouselExtra1,
    fallbackImage: 'https://i.imgur.com/0JBWYlv.png',
    title: 'Modelo 3D STL',
  },
  {
    id: 'extra-2',
    image: carouselExtra2,
    fallbackImage: 'https://i.imgur.com/wzoh3dn.png',
    title: 'Colecionável STL',
  },
  {
    id: 'extra-3',
    image: carouselExtra3,
    fallbackImage: 'https://i.imgur.com/Dbo3JOo.png',
    title: 'Action Figure STL',
  },
  {
    id: 'extra-4',
    image: carouselExtra4,
    fallbackImage: 'https://i.imgur.com/ND72KlP.png',
    title: 'Miniatura 3D STL',
  },
  {
    id: 'extra-5',
    image: carouselExtra5,
    fallbackImage: 'https://i.imgur.com/CHQtbUe.png',
    title: 'Guerreiro 3D STL',
  },
  {
    id: 'extra-6',
    image: carouselExtra6,
    fallbackImage: 'https://i.imgur.com/mkEOXIs.png',
    title: 'Escultura Detalhada STL',
  },
  {
    id: 'extra-7',
    image: carouselExtra7,
    fallbackImage: 'https://i.imgur.com/gXpWfT3.png',
    title: 'Personagem Épico STL',
  },
  {
    id: 'extra-8',
    image: carouselExtra8,
    fallbackImage: 'https://i.imgur.com/EefCNIq.png',
    title: 'Figura de Ação STL',
  },
  {
    id: 'extra-9',
    image: carouselExtra9,
    fallbackImage: 'https://i.imgur.com/euq5sBC.png',
    title: 'Colecionável Premium STL',
  },
  {
    id: 'extra-10',
    image: carouselExtra10,
    fallbackImage: 'https://i.imgur.com/OceZmpV.png',
    title: 'Busto Colecionável STL',
  },
];

function normalizeModelItem(item: ModelItem): ModelItem {
  if (typeof item.image === 'string' && item.image.startsWith('http')) {
    return {
      ...item,
      image: getNormalizedImage(item.image),
      fallbackImage: item.fallbackImage || item.image,
    };
  }
  return item;
}

const line1Models: ModelItem[] = [
  newModels[0], // Minecraft 3D STL
  extraCarouselModels[0],
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
  newModels[1], // Colecionável STL
  extraCarouselModels[1],
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
  newModels[2], // Action Figure STL
  extraCarouselModels[2],
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
  newModels[3], // Miniatura STL
  extraCarouselModels[3],
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
  newModels[4], // Guerreiro 3D STL
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
  newModels[5], // Escultura Detalhada STL
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
].map(normalizeModelItem);

const line2Models: ModelItem[] = [
  newModels[3], // Miniatura STL
  extraCarouselModels[4],
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
  newModels[4], // Guerreiro 3D STL
  extraCarouselModels[5],
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
  newModels[5], // Escultura Detalhada STL
  extraCarouselModels[6],
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
  newModels[0], // Minecraft 3D STL
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
  newModels[1], // Colecionável STL
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
  newModels[2], // Action Figure STL
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
].map(normalizeModelItem);

const line3Models: ModelItem[] = [
  newModels[1], // Colecionável STL
  extraCarouselModels[7],
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
  newModels[5], // Escultura Detalhada STL
  extraCarouselModels[8],
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
  newModels[0], // Minecraft 3D STL
  extraCarouselModels[9],
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
  newModels[4], // Guerreiro 3D STL
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
  newModels[2], // Action Figure STL
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
  newModels[3], // Miniatura STL
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
].map(normalizeModelItem);

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
  description: string;
  priceOriginal: string;
  image?: string;
  imageClassName?: string;
  icon?: React.ReactNode;
}

const bonuses: BonusItem[] = [
  {
    id: 1,
    title: 'Pack de Veículos 3D Profissionais',
    description: 'Modelos detalhados para fãs de carros, motos e máquinas.',
    priceOriginal: 'R$ 39,00',
    image: bonus1Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
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
    description: 'Personagens icônicos com forte impacto visual e colecionável.',
    priceOriginal: 'R$ 49,00',
    image: bonus2Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
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
    description: 'Peças práticas para presentes, lembranças e personalizações.',
    priceOriginal: 'R$ 29,00',
    image: bonus3Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
        <circle cx="22" cy="22" r="12" fill="none" stroke="currentColor" strokeWidth="3.5" />
        <circle cx="22" cy="22" r="6" fill="currentColor" opacity="0.3" />
        <path d="M31 31 L52 52 M44 44 L49 39 M49 49 L54 44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Modelos Flexíveis e Articulados',
    description: 'Impressões divertidas, articuladas e que chamam atenção.',
    priceOriginal: 'R$ 37,00',
    image: bonus4Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
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
    description: 'Personagens nostálgicos que despertam identificação imediata.',
    priceOriginal: 'R$ 35,00',
    image: bonus5Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
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
    description: 'Modelos marcantes para decoração, coleção e cosplay.',
    priceOriginal: 'R$ 39,00',
    image: bonus6Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
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
    description: 'Criaturas e personagens perfeitos para fãs e colecionadores.',
    priceOriginal: 'R$ 47,00',
    image: bonus7Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
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
    description: 'Modelos para quem gosta de futebol e peças temáticas.',
    priceOriginal: 'R$ 39,00',
    image: bonus8Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
        <path d="M32 6 L52 14 V32 C52 46 32 58 32 58 C32 58 12 46 12 32 V14 Z" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
        <circle cx="32" cy="30" r="15" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" />
        <polygon points="32,23 37,27 35,33 29,33 27,27" fill="currentColor" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: 9,
    title: 'Helicópteros 3D',
    description: 'Modelos diferenciados para ampliar ainda mais seu acervo.',
    priceOriginal: 'R$ 39,00',
    image: bonus9Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
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
  {
    id: 10,
    title: 'Coleção LEGO 3D',
    description: 'Personagens em estilo blocos com forte apelo visual.',
    priceOriginal: 'R$ 39,00',
    image: bonus10Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
        <rect x="12" y="24" width="40" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <rect x="18" y="16" width="10" height="8" rx="2" fill="currentColor" opacity="0.9" />
        <rect x="36" y="16" width="10" height="8" rx="2" fill="currentColor" opacity="0.9" />
        <circle cx="23" cy="38" r="4.5" fill="currentColor" opacity="0.4" />
        <circle cx="41" cy="38" r="4.5" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 11,
    title: 'Coleção Minecraft 3D',
    description: 'Modelos inspirados no universo dos games e cultura geek.',
    priceOriginal: 'R$ 47,00',
    image: bonus11Image,
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16 text-[#39FF14]">
        <rect x="14" y="14" width="36" height="36" rx="3" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="22" y="24" width="6" height="6" fill="currentColor" opacity="0.9" />
        <rect x="36" y="24" width="6" height="6" fill="currentColor" opacity="0.9" />
        <rect x="28" y="30" width="8" height="10" fill="currentColor" opacity="0.9" />
        <rect x="24" y="40" width="4" height="6" fill="currentColor" opacity="0.9" />
        <rect x="36" y="40" width="4" height="6" fill="currentColor" opacity="0.9" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'Os modelos são compatíveis com a minha impressora 3D?',
    a: 'Sim! Os arquivos estão em formato STL padrão universal e funcionam perfeitamente em qualquer fatiador (Cura, PrusaSlicer, Bambu Studio, OrcaSlicer, Chitubox, etc.) e em praticamente qualquer impressora 3D FDM (Filamento) ou Resina (Creality, Bambu Lab, Anycubic, Elegoo, Sovol, etc.).',
  },
  {
    q: 'Posso vender as peças que eu imprimir?',
    a: 'Com certeza! Nos planos que acompanham a Licença Comercial, você tem autorização total para imprimir fisicamente os modelos e vender as peças prontas em marketplaces, feiras, lojas ou sob encomenda. O que não é permitido é redistribuir ou revender os arquivos digitais STL.',
  },
  {
    q: 'Como e quando recebo o acesso ao acervo?',
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
    a: 'Você tem 14 dias inteiros de garantia incondicional. Entre na plataforma, explore as coleções e confira os arquivos. Se por qualquer motivo achar que o acervo não agregou para você, basta solicitar o reembolso que devolvemos 100% do seu dinheiro.',
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
    image: depoimentoBruna,
    alt: 'Depoimento da aluna Bruna - Fechou encomendas no teste com peças 3D',
  },
  {
    id: 2,
    image: depoimentoLucas,
    alt: 'Depoimento do aluno Lucas - Experiência e produção com o acervo 3D',
  },
  {
    id: 3,
    image: depoimentoRodrigo,
    alt: 'Depoimento do aluno Rodrigo - Resultados e feedback de impressão 3D',
  },
  {
    id: 4,
    image: depoimento4,
    alt: 'Depoimento de aluno - Resultados e satisfação com os modelos 3D',
  },
];

export default function App() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [depoimentoIndex, setDepoimentoIndex] = useState(0);
  const [isHeroVideoActive, setIsHeroVideoActive] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isNotebookVideoActive, setIsNotebookVideoActive] = useState(false);
  const notebookVideoRef = useRef<HTMLVideoElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const carouselTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pauseCarousel = useCallback(() => {
    if (carouselTimerRef.current) {
      clearTimeout(carouselTimerRef.current);
    }
    setIsCarouselPaused(true);
  }, []);

  const resumeCarouselWithDelay = useCallback(() => {
    if (carouselTimerRef.current) {
      clearTimeout(carouselTimerRef.current);
    }
    carouselTimerRef.current = setTimeout(() => {
      setIsCarouselPaused(false);
    }, 2400);
  }, []);

  useEffect(() => {
    return () => {
      if (carouselTimerRef.current) {
        clearTimeout(carouselTimerRef.current);
      }
    };
  }, []);

  const handlePlayHeroVideo = useCallback(() => {
    setIsHeroVideoActive(true);
    if (heroVideoRef.current) {
      if (!heroVideoRef.current.src || !heroVideoRef.current.src.includes('EAMTTmS')) {
        heroVideoRef.current.src = 'https://i.imgur.com/EAMTTmS.mp4';
      }
      const playPromise = heroVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Hero video play error:', err);
        });
      }
    }
  }, []);

  const handlePlayNotebookVideo = useCallback(() => {
    setIsNotebookVideoActive(true);
    if (notebookVideoRef.current) {
      if (!notebookVideoRef.current.src || !notebookVideoRef.current.src.includes('XMHWIse')) {
        notebookVideoRef.current.src = 'https://i.imgur.com/XMHWIse.mp4';
      }
      const playPromise = notebookVideoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Notebook video play error:', err);
        });
      }
    }
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
    <div className="min-h-screen bg-black text-white relative antialiased selection:bg-[#39FF14] selection:text-black">
      {/* Background Starfield */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-stars opacity-60" />

      {/* 1. Header Alert Bar */}
      <header id="header-bar" className="w-full bg-gradient-to-r from-[#50FF22] via-[#39FF14] to-[#50FF22] py-2.5 sm:py-3 relative z-50 shadow-md text-black font-black">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center text-center select-none">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] leading-none opacity-90">
            CENTRAL
          </span>
          <h2 className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-tight uppercase leading-tight my-0.5 drop-shadow-sm">
            UNIVERSO 3D™
          </h2>
          <span className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider opacity-90 leading-tight">
            MODELOS • IDEIAS • LUCRO REAL
          </span>
        </div>
      </header>

      {/* 2-5. Hero Section */}
      <section id="hero-section" className="relative pb-16 overflow-hidden">
        
        <div className="w-full relative z-20 flex flex-col items-center pt-10 md:pt-16 pb-2 px-4 text-center max-w-4xl mx-auto">
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.2] drop-shadow-2xl uppercase">
            <span className="block">Transforme sua impressora 3D em uma</span>
            <span className="block mt-1">
              <span className="grad-text ">
                fonte de renda com modelos que as pessoas realmente querem comprar
              </span>
            </span>
          </h1>

          {/* Live indicator badge */}
          <div className="w-full flex flex-col items-center mt-6 mb-3">
            <span className="text-sm sm:text-base md:text-lg font-black uppercase tracking-wide flex items-center gap-2">
              <span className="live-dot inline-block w-3 h-3 rounded-full bg-[#39FF14] " />
              Veja como funciona na prática
            </span>
          </div>

          {/* Video Presentation */}
          <div className="w-full relative z-10 flex flex-col items-center mt-1 mb-8">
            <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl px-2 sm:px-4">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border-2 border-[#39FF14] shadow-2xl bg-black flex items-center justify-center group">
                <video
                  ref={heroVideoRef}
                  id="video-apresentacao"
                  src={isHeroVideoActive ? "https://i.imgur.com/EAMTTmS.mp4" : undefined}
                  poster={heroPoster}
                  controls={isHeroVideoActive}
                  playsInline
                  preload="none"
                  width={854}
                  height={480}
                  className="w-full h-full object-cover rounded-2xl"
                >
                  Seu navegador não suporta a reprodução de vídeo.
                </video>

                {/* Capa com o poster de apresentação e Botão de Play */}
                {!isHeroVideoActive && (
                  <div
                    onClick={handlePlayHeroVideo}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handlePlayHeroVideo();
                      }
                    }}
                    aria-label="Assistir ao vídeo de apresentação"
                    className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center z-20 group select-none"
                  >
                    {/* Imagem do Poster de Alta Nitidez */}
                    <img
                      src={heroPoster}
                      alt="Capa do Vídeo de Apresentação Universo 3D"
                      width={854}
                      height={480}
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover select-none"
                    />

                    {/* Película escura translúcida para realismo e contraste */}
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors pointer-events-none" />

                    {/* Botão de Play */}
                    <div className="relative z-10 w-16 h-11 sm:w-20 sm:h-14 md:w-24 md:h-16 rounded-[14px] sm:rounded-[18px] bg-[#39FF14] hover:bg-[#50FF22] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-black fill-black ml-1 drop-shadow" />
                    </div>
                  </div>
                )}
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
                className="group w-full inline-flex items-center justify-center gap-3 bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black text-base sm:text-lg uppercase tracking-wide py-4 px-6 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 border-2 border-[#6EFF38] cursor-pointer"
              >
                <ShoppingCart className="w-6 h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
                <span>QUERO MEU ACESSO AGORA</span>
              </a>
            </div>
          </div>

          <p className="mt-2 mb-8 text-zinc-300 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Tenha acesso a um acervo completo de modelos 3D prontos para imprimir, sem perder horas garimpando arquivos na internet e tentando descobrir sozinho o que colocar na sua máquina para ter resultados reais.
          </p>
        </div>

        {/* 6. Marcas Marquee */}
        <div
          id="brands-marquee"
          className="w-full overflow-hidden relative mb-4"
          onTouchStart={pauseCarousel}
          onTouchEnd={resumeCarouselWithDelay}
          onTouchCancel={resumeCarouselWithDelay}
        >
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className={`marquee ${isCarouselPaused ? 'is-paused' : ''}`}>
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
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3.5 shadow-sm">
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

        {/* Carrossel Linha 1 - Direção Normal */}
        <div
          className="w-full overflow-hidden relative mb-4"
          onTouchStart={pauseCarousel}
          onTouchEnd={resumeCarouselWithDelay}
          onTouchCancel={resumeCarouselWithDelay}
        >
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className={`marquee-cards ${isCarouselPaused ? 'is-paused' : ''}`}>
            <div className="flex items-center gap-4 px-2 shrink-0">
              {line1Models.map((item, idx) => (
                <div
                  key={`card-l1-${idx}`}
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#39FF14]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: `url('${cardBg}')` }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${cardBg}')` }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        fallbackSrc={item.fallbackImage}
                        alt={item.title}
                        priority={false}
                        loading="lazy"
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-[#39FF14]'} group-hover:scale-110 transition-transform`}>
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
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#39FF14]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: `url('${cardBg}')` }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${cardBg}')` }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        fallbackSrc={item.fallbackImage}
                        alt={item.title}
                        loading="lazy"
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-[#39FF14]'} group-hover:scale-110 transition-transform`}>
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
        <div
          className="w-full overflow-hidden relative mb-4"
          onTouchStart={pauseCarousel}
          onTouchEnd={resumeCarouselWithDelay}
          onTouchCancel={resumeCarouselWithDelay}
        >
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className={`marquee-cards-reverse ${isCarouselPaused ? 'is-paused' : ''}`}>
            <div className="flex items-center gap-4 px-2 shrink-0">
              {line2Models.map((item, idx) => (
                <div
                  key={`card-l2-${idx}`}
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#39FF14]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: `url('${cardBg}')` }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${cardBg}')` }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        fallbackSrc={item.fallbackImage}
                        alt={item.title}
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-[#39FF14]'} group-hover:scale-110 transition-transform`}>
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
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#39FF14]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: `url('${cardBg}')` }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${cardBg}')` }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        fallbackSrc={item.fallbackImage}
                        alt={item.title}
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-[#39FF14]'} group-hover:scale-110 transition-transform`}>
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
        <div
          className="w-full overflow-hidden relative"
          onTouchStart={pauseCarousel}
          onTouchEnd={resumeCarouselWithDelay}
          onTouchCancel={resumeCarouselWithDelay}
        >
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <div className={`marquee-cards ${isCarouselPaused ? 'is-paused' : ''}`}>
            <div className="flex items-center gap-4 px-2 shrink-0">
              {line3Models.map((item, idx) => (
                <div
                  key={`card-l3-${idx}`}
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#39FF14]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: `url('${cardBg}')` }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${cardBg}')` }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        fallbackSrc={item.fallbackImage}
                        alt={item.title}
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-[#39FF14]'} group-hover:scale-110 transition-transform`}>
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
                  className="rounded-2xl overflow-hidden shrink-0 w-40 md:w-64 p-2.5 border border-zinc-700/60 shadow-xl hover:border-[#39FF14]/60 hover:scale-105 transition-all group bg-cover bg-center"
                  style={{ backgroundImage: `url('${cardBg}')` }}
                >
                  <div
                    className="w-full aspect-square flex items-end justify-center overflow-hidden rounded-xl bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${cardBg}')` }}
                  >
                    {item.image ? (
                      <CleanImage
                        src={item.image}
                        fallbackSrc={item.fallbackImage}
                        alt={item.title}
                        className={`w-full h-full object-contain object-bottom p-2 pb-1 group-hover:scale-105 transition-transform duration-300 rounded-lg select-none ${item.imageClassName || ''}`}
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center ${item.color || 'text-[#39FF14]'} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão de Compra - Seção Modelos */}
          <div className="mt-10 sm:mt-12 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('oferta-pro');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="group inline-flex items-center justify-center gap-3 bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#6EFF38] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>LIBERAR TODOS OS MODELOS 3D</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. Mockup Notebook */}
      <section id="mockup-notebook" className="py-16 md:py-24 relative bg-black overflow-hidden border-t border-white/10">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#39FF14]" /> Plataforma Exclusiva e Intuitiva
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
              Conheça o <span className="grad-text ">acervo</span> por dentro
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3.5 font-normal leading-relaxed">
              Veja exatamente como funciona a <strong className="text-white font-semibold">Área de Membros VIP</strong>: um ambiente 100% organizado por categorias para você encontrar em segundos o que deseja, baixar o arquivo pronto e colocar sua impressora para trabalhar.
            </p>
          </div>
          <div className="max-w-4xl md:max-w-5xl mx-auto relative px-2 sm:px-4 md:px-6">
                        <div className="relative z-10">
              {/* Laptop Screen Top */}
              <div className="relative bg-[#18181C] rounded-t-[20px] sm:rounded-t-[26px] md:rounded-t-[32px] p-2 sm:p-2.5 md:p-3.5 border-t-[2px] border-x-[2px] border-[#383842] shadow-[0_25px_70px_rgba(0,0,0,0.95)]">
                {/* Camera notch */}
                <div className="flex items-center justify-center relative -mb-1 z-20">
                  <div className="w-10 sm:w-14 h-2 sm:h-2.5 bg-[#0A0A0C] rounded-b-md flex items-center justify-center gap-1.5 shadow-inner">
                    <div className="w-1 h-1 rounded-full bg-[#1A1A22] border border-white/20" />
                    <div className="w-0.5 h-0.5 rounded-full bg-[#39FF14] opacity-75" />
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
                    src={isNotebookVideoActive ? "https://i.imgur.com/XMHWIse.mp4" : undefined}
                    poster={notebookPoster}
                    controls={isNotebookVideoActive}
                    playsInline
                    preload="none"
                    width={854}
                    height={480}
                    className="w-full h-full object-cover"
                  >
                    Seu navegador não suporta a reprodução de vídeo.
                  </video>

                  {/* Capa com a imagem da Área de Membros aparente e Botão Estilo YouTube */}
                  {!isNotebookVideoActive && (
                    <div
                      onClick={handlePlayNotebookVideo}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handlePlayNotebookVideo();
                        }
                      }}
                      aria-label="Assistir tour pela Área de Membros no YouTube"
                      className="absolute inset-0 w-full h-full cursor-pointer flex flex-col items-center justify-center z-20 group select-none"
                    >
                      {/* Imagem da Área de Membros visível */}
                      <img
                        src={notebookPoster}
                        alt="Área de Membros Universo 3D"
                        width={854}
                        height={480}
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover select-none"
                      />

                      {/* Leve película escura translúcida para contraste e realismo */}
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors pointer-events-none" />

                      {/* Botão de Play */}
                      <div className="relative z-10 w-16 h-11 sm:w-20 sm:h-14 md:w-24 md:h-16 rounded-[14px] sm:rounded-[18px] bg-[#39FF14] hover:bg-[#50FF22] flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-black fill-black ml-1 drop-shadow" />
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
                            <div className="w-[75%] h-3 bg-gradient-to-r from-transparent via-black/90 to-transparent blur-md mx-auto -mt-2.5 pointer-events-none" />

              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-zinc-400">
                  <Play className="w-3.5 h-3.5 text-[#39FF14]" /> Escolha o modelo, acesse o arquivo e comece sua próxima impressão.
                </span>
              </div>
            </div>
          </div>

          {/* Card Vertical em Destaque com Modelo 3D Girando */}
          <div className="mt-14 sm:mt-18 md:mt-24 flex flex-col items-center justify-center relative z-10 px-4 text-center">
            {/* Copy em Destaque */}
            <div className="max-w-xl mx-auto mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5 shadow-sm">
                <span>🎮</span> Coleção em Alta Procura
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight">
                Você recebe também a <span className="grad-text ">Coleção Minecraft 3D</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base mt-2 max-w-md mx-auto leading-relaxed">
                Peças de forte apelo com fãs e colecionadores: arquivos STL de alta resolução, prontos para fatiar, imprimir e transformar em produtos físicos altamente procurados.
              </p>
            </div>

            <div className="relative group w-[260px] xs:w-[290px] sm:w-[330px] md:w-[360px]">
              {/* Brilho Dourado de Fundo */}
              
              {/* Card Vertical (Mais Grandinho Retangular de Cima para Baixo) */}
              <div className="relative aspect-[3/4.2] rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col items-center justify-between overflow-hidden border border-[#39FF14]/40 border-t-2 border-t-[#39FF14] bg-gradient-to-b from-[#18181D]/90 via-[#0F0F13]/95 to-[#08080A] shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
                {/* Iluminação de fundo atrás do modelo */}
                
                {/* Badge Superior */}
                <div className="relative z-10 w-full flex items-center justify-center">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#39FF14] px-3 py-1 rounded-full bg-black/60 border border-[#39FF14]/40 shadow-inner">
                    Arquivos STL Inclusos
                  </span>
                </div>

                {/* Imagem Girando Devagar para Médio */}
                <div className="relative z-10 w-full flex-1 flex items-center justify-center my-2">
                  <img
                    src={rotatingModelImg}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://i.imgur.com/OW0TvSS.png';
                    }}
                    alt="Coleção Minecraft 3D STL"
                    width={235}
                    height={231}
                    loading="lazy"
                    decoding="async"
                    className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.95)] animate-spin-slow select-none"
                  />
                </div>

                {/* Rodapé Interno */}
                <div className="relative z-10 w-full text-center">
                  <span className="text-zinc-400 font-display font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                    Giro 360° do Modelo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Botão de Compra - Seção Plataforma */}
          <div className="mt-10 sm:mt-12 flex justify-center w-full px-4 relative z-20">
            <a
              href="#oferta-pro"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('oferta-pro');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="group inline-flex items-center justify-center gap-3 bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#6EFF38] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>ACESSAR ÁREA DE MEMBROS VIP</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. Validação de Mercado */}
      <section id="validacao-mercado" className="pt-4 pb-16 relative bg-black">
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
            <div className="rounded-3xl overflow-hidden bg-zinc-950 border-2 border-[#39FF14]/60 shadow-xl relative w-full p-2 sm:p-4">
              <CleanImage
                src={step1Img}
                alt="Mercado Comprovado - Anúncios e Vendas Reais de Peças 3D (1)"
                width={1774}
                height={887}
                className="w-full h-auto aspect-[1774/887] object-contain rounded-2xl select-none"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-zinc-950 border-2 border-[#39FF14]/60 shadow-xl relative w-full p-2 sm:p-4">
              <CleanImage
                src={step2Img}
                alt="Mercado Comprovado - Anúncios e Vendas Reais de Peças 3D (2)"
                width={1774}
                height={887}
                className="w-full h-auto aspect-[1774/887] object-contain rounded-2xl select-none"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-zinc-950 border-2 border-[#39FF14]/60 shadow-xl relative w-full p-2 sm:p-4">
              <CleanImage
                src={step3Img}
                alt="Mercado Comprovado - Anúncios e Vendas Reais de Peças 3D (3)"
                width={1774}
                height={887}
                className="w-full h-auto aspect-[1774/887] object-contain rounded-2xl select-none"
              />
            </div>
          </div>

          {/* Botão de Compra - Seção Validação de Mercado */}
          <div className="mt-10 sm:mt-12 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('oferta-pro');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="group inline-flex items-center justify-center gap-3 bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#6EFF38] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>QUERO VENDER ESSAS PEÇAS</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. Matemática Lucrativa */}
      <section id="matematica-lucrativa" className="pt-8 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mt-0">
              Entenda o <span className="grad-text ">potencial</span> por trás de uma única impressão
            </h2>
            <p className="text-base md:text-lg mt-4 max-w-3xl mx-auto font-normal text-zinc-300 leading-relaxed">
              Compare a estimativa de consumo de filamento com faixas de valores praticadas no mercado para peças similares:
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
                  <th className="p-2 sm:p-4 md:p-6 text-[10px] sm:text-xs md:text-lg font-black font-display text-[#6EFF38] uppercase tracking-wider border border-[#39FF14]/40 bg-[#39FF14]/10 w-1/3 text-center align-middle">
                    Anúncios encontrados
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black/60">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 text-center align-middle">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-1 sm:p-2 flex items-center justify-center overflow-hidden group">
                      <CleanImage
                        src={lucro1Image}
                        alt="Modelo 3D STL - Peça 1"
                        width={128}
                        height={128}
                        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 font-bold font-display text-[11px] sm:text-sm md:text-xl text-center align-middle text-[#ef4444]">
                    R$ 11,14
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-[#39FF14]/30 text-[#39FF14] font-black font-display text-sm sm:text-lg md:text-3xl bg-[#39FF14]/10 text-center align-middle drop-shadow-md">
                    R$ 147–165
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 text-center align-middle">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-1 sm:p-2 flex items-center justify-center overflow-hidden group">
                      <CleanImage
                        src={lucro2Image}
                        alt="Modelo 3D STL - Peça 2"
                        width={128}
                        height={128}
                        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 font-bold font-display text-[11px] sm:text-sm md:text-xl text-center align-middle text-[#ef4444]">
                    R$ 9,74
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-[#39FF14]/30 text-[#39FF14] font-black font-display text-sm sm:text-lg md:text-3xl bg-[#39FF14]/10 text-center align-middle drop-shadow-md">
                    R$ 123–147
                  </td>
                </tr>

                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 text-center align-middle">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto rounded-xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 p-1 sm:p-2 flex items-center justify-center overflow-hidden group">
                      <CleanImage
                        src={lucro3Image}
                        alt="Modelo 3D STL - Peça 3"
                        width={128}
                        height={128}
                        className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-white/10 font-bold font-display text-[11px] sm:text-sm md:text-xl text-center align-middle text-[#ef4444]">
                    R$ 8,37
                  </td>
                  <td className="p-2 sm:p-4 md:p-6 border border-[#39FF14]/30 text-[#39FF14] font-black font-display text-sm sm:text-lg md:text-3xl bg-[#39FF14]/10 text-center align-middle drop-shadow-md">
                    R$ 75–107
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Disclaimer de valores ilustrativos */}
          <p className="text-zinc-400 text-xs sm:text-sm text-center max-w-2xl mx-auto mt-4 font-normal leading-relaxed italic">
            *Valores meramente ilustrativos. Custos, preços e margens podem variar conforme material, tamanho da peça, acabamento, região e estratégia de venda.
          </p>

          {/* Botão de Compra - Seção Matemática Lucrativa */}
          <div className="mt-10 sm:mt-12 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('oferta-pro');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="group inline-flex items-center justify-center gap-3 bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#6EFF38] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>QUERO MULTIPLICAR MEUS LUCROS</span>
            </a>
          </div>
        </div>
      </section>

      {/* 12. 11 Bônus Exclusivos */}
      <section id="bonus" className="bg-black relative border-y border-[#39FF14]/20 overflow-hidden py-16 md:py-24">
                <div className="container mx-auto px-4 relative z-10 max-w-6xl text-center">
          <p className="text-lg md:text-2xl font-bold uppercase tracking-widest mb-2 text-[#39FF14] opacity-95">
            E não para por aí...
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black uppercase tracking-tight mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Além do Acervo Principal
          </h2>
          <p className="text-zinc-300 text-base sm:text-xl md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Você ainda recebe <strong className="text-white font-semibold">11 coleções temáticas extras</strong> incluídas na sua oferta para ampliar ainda mais suas opções de impressão.
          </p>
          <div className="inline-block px-8 py-3.5 sm:px-10 sm:py-4 bg-[#39FF14] text-black font-black font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tight mb-14 shadow-lg rounded-xl">
            11 Coleções Bônus Inclusas
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-6xl mx-auto text-left">
            {bonuses.slice(0, 9).map((bonus) => (
              <div
                key={`bonus-${bonus.id}`}
                className="bg-black/50 border border-white/10 rounded-lg sm:rounded-xl p-2 xs:p-2.5 sm:p-3.5 md:p-5 pb-2.5 xs:pb-3 sm:pb-4 md:pb-6 flex flex-col items-center justify-between text-center hover:bg-white/5 transition-colors border-t border-t-[#39FF14]/50 relative group min-h-[200px] xs:min-h-[225px] sm:min-h-[270px] md:min-h-[325px] w-full"
              >
                <div className="w-full flex flex-col items-center shrink-0 mb-1 sm:mb-2">
                  <span className="grad-text font-black font-display text-[9.5px] xs:text-xs sm:text-base md:text-2xl mb-0.5 sm:mb-1 md:mb-1.5 tracking-wider sm:tracking-widest">
                    BÔNUS {bonus.id < 10 ? `0${bonus.id}` : bonus.id}
                  </span>
                  <h4 className="text-[9px] xs:text-[10.5px] sm:text-xs md:text-base font-bold uppercase tracking-tight sm:tracking-wide line-clamp-2 leading-tight min-h-[22px] xs:min-h-[25px] sm:min-h-[28px] md:min-h-[38px] flex items-center justify-center">
                    {bonus.title}
                  </h4>
                </div>

                <div className="w-full flex-1 min-h-[64px] xs:min-h-[76px] sm:min-h-[120px] md:min-h-[155px] flex items-center justify-center relative my-1 sm:my-2 px-1">
                  {bonus.image ? (
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      width={300}
                      height={300}
                      loading="lazy"
                      decoding="async"
                      className="max-h-[64px] xs:max-h-[76px] sm:max-h-[120px] md:max-h-[155px] max-w-[92%] sm:max-w-[96%] w-auto h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300 select-none"
                    />
                  ) : (
                    <div className="w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm p-2 sm:p-3">
                      <div className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                        {bonus.icon}
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full flex items-center justify-center mt-auto pt-1 sm:pt-2 shrink-0">
                  <p className="text-[8px] xs:text-[9.5px] sm:text-xs md:text-sm text-zinc-300 font-medium leading-tight sm:leading-snug max-w-[98%] text-center">
                    {bonus.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="col-span-3 flex justify-center gap-2 sm:gap-4 md:gap-6">
              {bonuses.slice(9).map((bonus) => (
                <div
                  key={`bonus-wrap-${bonus.id}`}
                  className="w-[calc((100%-1rem)/3)] sm:w-[calc((100%-2rem)/3)] md:w-[calc((100%-3rem)/3)] flex"
                >
                  <div
                    key={`bonus-${bonus.id}`}
                    className="bg-black/50 border border-white/10 rounded-lg sm:rounded-xl p-2 xs:p-2.5 sm:p-3.5 md:p-5 pb-2.5 xs:pb-3 sm:pb-4 md:pb-6 flex flex-col items-center justify-between text-center hover:bg-white/5 transition-colors border-t border-t-[#39FF14]/50 relative group min-h-[200px] xs:min-h-[225px] sm:min-h-[270px] md:min-h-[325px] w-full"
                  >
                    <div className="w-full flex flex-col items-center shrink-0 mb-1 sm:mb-2">
                      <span className="grad-text font-black font-display text-[9.5px] xs:text-xs sm:text-base md:text-2xl mb-0.5 sm:mb-1 md:mb-1.5 tracking-wider sm:tracking-widest">
                        BÔNUS {bonus.id < 10 ? `0${bonus.id}` : bonus.id}
                      </span>
                      <h4 className="text-[9px] xs:text-[10.5px] sm:text-xs md:text-base font-bold uppercase tracking-tight sm:tracking-wide line-clamp-2 leading-tight min-h-[22px] xs:min-h-[25px] sm:min-h-[28px] md:min-h-[38px] flex items-center justify-center">
                        {bonus.title}
                      </h4>
                    </div>

                    <div className="w-full flex-1 min-h-[64px] xs:min-h-[76px] sm:min-h-[120px] md:min-h-[155px] flex items-center justify-center relative my-1 sm:my-2 px-1">
                      {bonus.image ? (
                        <img
                          src={bonus.image}
                          alt={bonus.title}
                          width={300}
                          height={300}
                          loading="lazy"
                          decoding="async"
                          className="max-h-[64px] xs:max-h-[76px] sm:max-h-[120px] md:max-h-[155px] max-w-[92%] sm:max-w-[96%] w-auto h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300 select-none"
                        />
                      ) : (
                        <div className="w-11 h-11 xs:w-13 xs:h-13 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm p-2 sm:p-3">
                          <div className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                            {bonus.icon}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="w-full flex items-center justify-center mt-auto pt-1 sm:pt-2 shrink-0">
                      <p className="text-[8px] xs:text-[9.5px] sm:text-xs md:text-sm text-zinc-300 font-medium leading-tight sm:leading-snug max-w-[98%] text-center">
                        {bonus.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botão de Compra - Seção Bônus */}
          <div className="mt-12 sm:mt-14 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('oferta-pro');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="group inline-flex items-center justify-center gap-3 bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#6EFF38] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>GARANTIR ACESSO + 11 BÔNUS GRÁTIS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Depoimento Real em Layout de Celular */}
      <section id="depoimento" className="bg-black relative border-t border-white/5 py-16 md:py-24 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <h2 id="depoimento-titulo" className="font-display font-black text-2xl sm:text-3xl md:text-5xl uppercase tracking-tight mb-3">
              QUEM ACESSOU JÁ ESTÁ <span className="grad-text">IMPRIMINDO E PRODUZINDO</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl mx-auto leading-relaxed">
              Veja a experiência de quem parou de perder horas procurando arquivos na internet e começou a aproveitar de verdade o potencial da sua impressora 3D.
            </p>
          </div>

          {/* Smartphone Mockup & Carrossel com Setas de Navegação */}
          <div id="celular-depoimento-slider" className="relative w-full max-w-4xl mx-auto flex items-center justify-center gap-1.5 xs:gap-3 sm:gap-6 md:gap-8 px-1 sm:px-4">
            {/* Seta Esquerda */}
            {depoimentosList.length > 1 && (
              <button
                id="btn-depoimento-anterior"
                type="button"
                onClick={prevDepoimento}
                aria-label="Ver depoimento anterior"
                className="group w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-zinc-950/95 hover:bg-zinc-900 text-white border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.75)] hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer z-30 flex items-center justify-center shrink-0"
              >
                <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white group-hover:-translate-x-0.5 transition-transform" />
              </button>
            )}

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
              
              {/* Realistic Phone Frame: Ampliado em altura para visualização destacada */}
              <div
                id="celular-depoimento-frame"
                className="relative w-[295px] xs:w-[330px] sm:w-[380px] md:w-[430px] lg:w-[460px] max-w-[80vw] xs:max-w-[82vw] sm:max-w-[84vw] rounded-[36px] sm:rounded-[48px] pt-2.5 pb-3 px-1.5 xs:pt-3 xs:pb-3.5 xs:px-2 sm:pt-4 sm:pb-4 sm:px-3 bg-gradient-to-b from-[#333333] via-[#1a1a1a] to-[#0a0a0a] shadow-[0_0_35px_rgba(255,255,255,0.45),0_30px_90px_rgba(0,0,0,0.95)] border-[3px] sm:border-4 border-white ring-2 ring-white/30 flex flex-col"
              >
                {/* Phone side buttons (exterior realism) */}
                <div className="absolute -left-[3.5px] top-20 sm:top-24 w-[3.5px] h-6 sm:h-8 bg-zinc-400 rounded-l-sm" />
                <div className="absolute -left-[3.5px] top-30 sm:top-36 w-[3.5px] h-10 sm:h-12 bg-zinc-400 rounded-l-sm" />
                <div className="absolute -left-[3.5px] top-44 sm:top-52 w-[3.5px] h-10 sm:h-12 bg-zinc-400 rounded-l-sm" />
                <div className="absolute -right-[3.5px] top-24 sm:top-28 w-[3.5px] h-14 sm:h-16 bg-zinc-400 rounded-r-sm" />

                {/* Top Bezel: Alto-falante e sensor externo */}
                <div className="flex items-center justify-center gap-2 mb-2 sm:mb-2.5">
                  <div className="w-12 sm:w-16 h-1 sm:h-1.5 bg-zinc-600 rounded-full opacity-80" />
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-zinc-700/90 border border-zinc-600" />
                </div>

                {/* Inner Screen Bezel - Altura ampliada para melhor leitura dos depoimentos */}
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black border border-white/40 shadow-inner aspect-[925/1720] w-full">
                  {depoimentosList.map((dep, idx) => (
                    <img
                      key={dep.id}
                      id={`celular-depoimento-img-${dep.id}`}
                      src={dep.image}
                      alt={dep.alt}
                      width={400}
                      height={710}
                      className={`absolute inset-0 w-full h-full object-cover object-top select-none transition-opacity duration-300 ease-in-out ${
                        depoimentoIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                      loading="lazy"
                      decoding="async"
                      fetchPriority={depoimentoIndex === idx ? 'high' : 'low'}
                    />
                  ))}
                </div>

                {/* Bottom Bezel: Barra inferior de navegação na moldura externa */}
                <div className="mt-1.5 sm:mt-2.5 flex justify-center">
                  <div className="w-16 sm:w-24 h-1 bg-white/40 rounded-full" />
                </div>
              </div>
            </div>

            {/* Seta Direita */}
            {depoimentosList.length > 1 && (
              <button
                id="btn-depoimento-proximo"
                type="button"
                onClick={nextDepoimento}
                aria-label="Ver próximo depoimento"
                className="group w-8 h-8 xs:w-10 xs:h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-zinc-950/95 hover:bg-zinc-900 text-white border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.75)] hover:scale-110 active:scale-90 transition-all duration-200 cursor-pointer z-30 flex items-center justify-center shrink-0"
              >
                <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>

          {/* Indicadores / Paginação dos Depoimentos */}
          {depoimentosList.length > 1 && (
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
                {depoimentoIndex + 1} de {depoimentosList.length} Depoimentos
              </span>
            </div>
          )}

          {/* Botão de Compra - Seção Depoimentos */}
          <div className="mt-10 sm:mt-12 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('oferta-pro');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="group inline-flex items-center justify-center gap-3 bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#6EFF38] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>QUERO TER ESSES RESULTADOS</span>
            </a>
          </div>
        </div>
      </section>

      {/* 13-14. Seção de Oferta & Preços */}
      <section id="oferta" className="bg-zinc-950 relative border-b border-white/5 py-20 md:py-24">
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center mb-10 md:mb-12 w-full flex flex-col items-center justify-center relative">
                        <h2
              className="relative z-10 font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-4 text-center leading-tight"
              style={{
                textShadow: '0 0 20px rgba(255,255,255,0.4)',
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
            {/* Card 1 - Coleção Base (R$ 10,90 - Ao clicar abre o Pop-up de R$ 21,90) */}
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
                <p className="text-zinc-400/80 text-[11px] uppercase tracking-widest font-bold">
                  Pagamento Único
                </p>
              </div>
              <ul className="space-y-3 mb-6 text-[13px] text-zinc-300 font-medium">
                <li className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#39FF14] text-black shrink-0 shadow-[0_0_8px_rgba(57,255,20,0.5)]">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </span>
                  <span>500 Modelos Funkos STL</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#39FF14] text-black shrink-0 shadow-[0_0_8px_rgba(57,255,20,0.5)]">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </span>
                  <span>Acesso por 3 Meses</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#39FF14] text-black shrink-0 shadow-[0_0_8px_rgba(57,255,20,0.5)]">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </span>
                  <span>Garantia de 14 Dias</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-[#ef4444]">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-500/20 text-red-400 shrink-0">
                    <X className="w-2.5 h-2.5 stroke-[3.5]" />
                  </span>
                  <span>Sem os 11 Bônus Inclusos</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-[#ef4444]">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-500/20 text-red-400 shrink-0">
                    <X className="w-2.5 h-2.5 stroke-[3.5]" />
                  </span>
                  <span>Sem Atualizações Futuras</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-[#ef4444]">
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-red-500/20 text-red-400 shrink-0">
                    <X className="w-2.5 h-2.5 stroke-[3.5]" />
                  </span>
                  <span>Sem Licença Comercial</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={handleBaseClick}
                className="block w-full text-center py-4 rounded-xl border-2 border-[#39FF14] text-[#39FF14] hover:text-black hover:bg-[#39FF14] text-sm uppercase tracking-wider transition-all mt-auto font-black cursor-pointer shadow-sm"
              >
                QUERO O BASE (R$ 10,90)
              </button>
              <div className="mt-4 text-center">
                <p className="font-bold text-[13px] sm:text-[14px] leading-snug px-2 text-emerald-400">
                  💡 Recomendação: o Pacote Completo <span className="lg:hidden">logo abaixo</span><span className="hidden lg:inline">ao lado</span> é muito mais vantajoso!
                </p>
              </div>
            </div>

            {/* Card 2 - Coleção Completa VIP (R$ 39,90 - Destaque) */}
            <div
              id="oferta-pro"
              className="w-full lg:max-w-[440px] bg-white text-black border-[2.5px] border-[#39FF14] rounded-3xl overflow-hidden relative shadow-2xl flex flex-col scroll-mt-24"
            >
              <div className="bg-[#39FF14] text-black text-center py-2 px-3 font-black shadow-sm">
                <p className="text-xs font-black uppercase tracking-wider">
                  🔥 MAIS RECOMENDADO — PACOTE COMPLETO VIP
                </p>
              </div>
              <div className="p-6 sm:p-7 h-full flex flex-col items-center">
                <div className="w-full flex items-center justify-center mb-4 relative group">
                                    <img
                    src={funkoBonusImage}
                    alt="Pacote +500 Modelos Funkos STL"
                    width={320}
                    height={208}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-auto h-auto max-h-44 sm:max-h-52 object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300 select-none"
                  />
                </div>
                <div className="text-center w-full mb-4">
                  <p className="text-base sm:text-lg text-zinc-500 font-black mb-1 italic">
                    DE R$ <span className="line-through">147,00</span>
                  </p>
                  <p className="text-zinc-800 font-bold text-sm sm:text-base mb-1 leading-none uppercase">Por Apenas</p>
                  <div className="flex justify-center items-start text-black mb-1 drop-shadow-sm">
                    <span className="text-xl font-black mt-1 mr-1 text-black">R$</span>
                    <span className="text-6xl sm:text-7xl font-display font-black tracking-tighter leading-none text-black">39,90</span>
                  </div>
                  <p className="text-zinc-600 font-bold text-xs uppercase tracking-widest">Pagamento Único</p>
                </div>
                <div className="w-full bg-zinc-100 rounded-2xl p-4 mb-5 border border-zinc-200">
                  <ul className="w-full space-y-2 text-black">
                    <li className="flex items-center gap-2.5 text-black">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#39FF14] text-black shrink-0 shadow-[0_0_10px_rgba(57,255,20,0.6)]">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </span>
                      <span className="font-bold text-black text-xs sm:text-[13px] leading-tight">
                        +150.000 Modelos 3D Organizados
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 text-black">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#39FF14] text-black shrink-0 shadow-[0_0_10px_rgba(57,255,20,0.6)]">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </span>
                      <span className="font-bold text-black text-xs sm:text-[13px] leading-tight">
                        +500 Modelos Funkos STL Inclusos
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 text-black">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#39FF14] text-black shrink-0 shadow-[0_0_10px_rgba(57,255,20,0.6)]">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </span>
                      <span className="font-bold text-black text-xs sm:text-[13px] leading-tight">
                        Licença Comercial para Venda de Peças Físicas
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 text-black">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#39FF14] text-black shrink-0 shadow-[0_0_10px_rgba(57,255,20,0.6)]">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </span>
                      <span className="font-bold text-black text-xs sm:text-[13px] leading-tight">
                        Acesso Vitalício + Todas as Atualizações
                      </span>
                    </li>
                    <li className="flex items-center gap-2.5 text-black">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#39FF14] text-black shrink-0 shadow-[0_0_10px_rgba(57,255,20,0.6)]">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </span>
                      <span className="font-bold text-black text-xs sm:text-[13px] leading-tight">
                        Garantia Incondicional de 14 Dias
                      </span>
                    </li>
                    {bonuses.map((b) => (
                      <li key={`offer-bonus-${b.id}`} className="flex items-start gap-2.5 text-black">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#39FF14] text-black shrink-0 mt-0.5 shadow-[0_0_10px_rgba(57,255,20,0.6)]">
                          <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                        </span>
                        <span className="text-black text-xs sm:text-[13px] leading-tight font-medium">
                          <strong className="font-bold text-black mr-1">Bônus {b.id}:</strong>
                          {b.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center w-full mt-auto">
                  <a
                    href="https://checkout.wiven.com.br/checkout/cmtmetu95064r01ohne5n1gub?offer=NBUSUEP"
                    className="block w-full bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black uppercase text-base sm:text-lg py-4 rounded-xl text-center tracking-wider transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    QUERO O PACOTE COMPLETO VIP
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
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 text-center md:text-left">
              <div className="shrink-0 flex items-center justify-center">
                <img
                  src={seloGarantia}
                  alt="Garantia Incondicional de 14 Dias"
                  width={240}
                  height={240}
                  className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain drop-shadow-[0_10px_30px_rgba(57,255,20,0.25)] select-none"
                />
              </div>
              <div className="flex-1">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/40 text-[#39FF14] font-display font-black text-xs uppercase tracking-wider mb-2.5">
                  100% SEGURO • RISCO ZERO
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl mb-3 text-white">
                  Garantia Incondicional de 14 Dias
                </h3>
                <p className="text-zinc-300 font-light leading-relaxed text-sm sm:text-base max-w-xl">
                  Se você acessar o acervo, olhar os modelos e achar que não valeu a pena, basta pedir o reembolso em até 14 dias. Devolvemos 100% do seu investimento, sem burocracia e sem perguntas.
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
                          className={`w-5 h-5 text-[#39FF14] shrink-0 transition-transform duration-200 ${
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

          {/* Botão de Compra - Seção Garantia & FAQ */}
          <div className="mt-12 flex justify-center w-full px-4">
            <a
              href="#oferta-pro"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('oferta-pro');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="group inline-flex items-center justify-center gap-3 bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black text-sm sm:text-base md:text-lg uppercase tracking-wide py-3.5 sm:py-4 px-6 sm:px-8 rounded-2xl text-center shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#6EFF38] cursor-pointer"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5] text-black group-hover:scale-110 transition-transform" />
              <span>EXPERIMENTAR SEM RISCO AGORA</span>
            </a>
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
              <Lock className="w-6 h-6 text-[#39FF14] mb-1" />
              <span className="uppercase tracking-widest text-white font-bold text-[11px]">
                Ambiente 100% Seguro
              </span>
              <span className="text-[10px] text-zinc-400">Dados criptografados de ponta a ponta</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Mail className="w-6 h-6 text-[#39FF14] mb-1" />
              <span className="uppercase tracking-widest text-white font-bold text-[11px]">
                Suporte Especializado
              </span>
              <span className="text-[10px] text-zinc-300">suporte@universo3d.com.br</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <Building2 className="w-6 h-6 text-[#39FF14] mb-1" />
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
            <a href="#termos" className="hover:text-[#39FF14] transition-colors">
              Termos de Uso
            </a>
            <a href="#privacidade" className="hover:text-[#39FF14] transition-colors">
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
            <div className="w-full bg-[#0F0F0F] border-[2.5px] border-[#39FF14] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-2xl flex flex-col mx-auto my-1">
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
                  <span className="text-[#39FF14]">R$ 21,90</span>
                </h3>
              </div>

              <div className="bg-gradient-to-r from-[#50FF22] via-[#39FF14] to-[#50FF22] py-1 px-2.5 shadow-md border-y border-[#6EFF38]">
                <p className="font-black text-black text-center leading-tight">
                  <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.15em] font-bold">
                    O PACOTE MAIS COMPLETO E VANTAJOSO
                  </span>
                  <span className="block text-[10px] sm:text-[11px] uppercase tracking-tight font-black">
                    + 500 MODELOS FUNKOS STL + TODOS OS 11 BÔNUS
                  </span>
                </p>
              </div>

              <div className="p-3.5 sm:p-4 flex flex-col items-center">
                <div className="w-full flex items-center justify-center mb-1.5 relative group">
                                    <img
                    src={funkoBonusImage}
                    alt="Pacote +500 Modelos Funkos STL"
                    width={240}
                    height={128}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-auto h-auto max-h-28 sm:max-h-32 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] select-none"
                  />
                </div>
                <div className="text-center w-full mb-2">
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-bold mb-0.5 italic">
                    DE R$ <span className="line-through">147,00</span>
                  </p>
                  <p className="text-zinc-300 font-bold text-[11px] sm:text-xs mb-0.5 leading-none uppercase">
                    Por Apenas
                  </p>
                  <div className="flex justify-center items-start text-[#39FF14] mb-0.5 drop-shadow-md">
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
                  <ul className="w-full space-y-1 text-[11px] text-white/90 font-medium">
                    <li className="flex items-center gap-1.5 bg-[#39FF14]/15 border border-[#39FF14]/40 rounded p-1 text-white">
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#39FF14] text-black shrink-0 shadow-[0_0_6px_rgba(57,255,20,0.6)]">
                        <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                      </span>
                      <strong className="text-[11px] font-black uppercase text-[#39FF14]">
                        + 150.000 MODELOS 3D ORGANIZADOS
                      </strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#39FF14] text-black shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                      </span>
                      <strong className="text-white">+ 500 Modelos Funkos STL Inclusos</strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#39FF14] text-black shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                      </span>
                      <strong className="text-white">Licença Comercial para Venda de Peças Físicas</strong>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full bg-[#39FF14] text-black shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                      </span>
                      <span>Acesso Vitalício + Atualizações</span>
                    </li>
                    <li className="w-full h-px bg-white/10 my-0.5" />
                    <li className="text-[9px] uppercase tracking-wider text-[#39FF14] font-bold flex items-center gap-1">
                      <span>🎁</span>
                      <span>TODOS OS 11 BÔNUS INCLUSOS:</span>
                    </li>
                    {bonuses.map((b) => (
                      <li key={`upsell-bonus-${b.id}`} className="flex items-center gap-1.5">
                        <span className="text-zinc-300 font-bold text-[10px] shrink-0">Bônus {b.id}:</span>
                        <span className="text-zinc-200 leading-tight text-[10px] sm:text-[11px]">{b.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://checkout.wiven.com.br/checkout/cmtmf009r05xg01psocuf4cal?offer=5MJUM3P"
                  className="block w-full bg-[#39FF14] hover:bg-[#50FF22] text-black font-display font-black uppercase text-sm sm:text-base py-3 rounded-xl text-center tracking-wider transition-all transform hover:scale-[1.02] shadow-[0_0_25px_rgba(57,255,20,0.5)] cursor-pointer"
                >
                  SIM! LEVAR TUDO POR R$ 21,90
                </a>
                <a
                  href="https://checkout.wiven.com.br/checkout/cmtkws58g09hz01pypy1crecf?offer=32HECNZ"
                  className="mt-2 text-zinc-400 hover:text-zinc-200 text-[11px] font-semibold underline underline-offset-2 transition-colors text-center cursor-pointer"
                >
                  Não quero os bônus, continuar apenas com o Plano Base por R$ 10,90 »
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
