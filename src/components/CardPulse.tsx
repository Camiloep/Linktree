'use client'
import { ArrowUpRight, Lock, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { LanguageMap } from '@/types/github'

interface CardProps {
  name: string
  description: string
  stargazers_count: number
  url: string
  languageData: LanguageMap
  isPrivate?: boolean
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

function toPercentages(data: LanguageMap) {
  if (!data) return [];
  const total = Object.values(data).reduce((sum, v) => sum + v, 0);
  if (total === 0) return [];
  return Object.entries(data).map(([language, bytes]) => ({
    language,
    percentage: ((bytes / total) * 100).toFixed(1),
  }));
}

export const CardPulseBorder = ({
  name,
  description,
  stargazers_count,
  url,
  languageData,
  isPrivate = false,
}: CardProps) => {
  const percentages = toPercentages(languageData);
  const mouseDownX = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseDownX.current = e.clientX;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (Math.abs(e.clientX - mouseDownX.current) > 5) e.preventDefault();
  };

  const cardContent = (
    <>
      <span className="flex items-center justify-between w-full">
        <span className="flex gap-x-1 items-center">
          {isPrivate
            ? <Lock size={13} className="text-slate-400 shrink-0" />
            : <ArrowUpRight color="#BBBBBB" size={12} />
          }
          <span className="text-lg font-bold text-White-Custom">{name}</span>
        </span>
        <span className="flex items-center text-sm gap-x-1 text-slate-200">
          {isPrivate ? (
            <span className="text-[11px] text-slate-400 border border-slate-600 rounded px-1">
              Privado
            </span>
          ) : (
            <>
              <Star size={14} />
              <p>{stargazers_count}</p>
            </>
          )}
        </span>
      </span>
      {percentages.length > 0 ? (
        <p className="text-[13px] text-Text-Custom">
          {percentages.map(({ language, percentage }) => (
            <span key={language}>{`${language}: ${percentage}% `}</span>
          ))}
        </p>
      ) : (
        <p className="text-[13px] text-slate-500 italic">
          {isPrivate ? 'Contenido privado' : description}
        </p>
      )}
    </>
  );

  const cardClass =
    'flex flex-col h-full items-start px-8 pb-4 justify-center rounded-md border border-solid shadow-[inset_13px_1px_79px_-27px_rgba(0,0,255)] ' +
    (isPrivate
      ? 'border-slate-700 opacity-70 cursor-default'
      : 'border-sky-400');

  return (
    <motion.div
      variants={item}
      whileHover={isPrivate ? {} : { scale: 1.03, transition: { duration: 0.2 } }}
      className="relative h-[110px] inline-block"
    >
      {isPrivate ? (
        <div className={cardClass}>{cardContent}</div>
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClass}
          onMouseDown={handleMouseDown}
          onClick={handleClick}
        >
          {cardContent}
        </a>
      )}
    </motion.div>
  );
}
