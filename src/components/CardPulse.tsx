'use client'
import { ArrowUpRight, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export interface isCardProps {
  name: string
  description: string
  stargazers_count: number
  url: string
  languajes: string;
}

export interface GithubData {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  languages_url: string;
}

export const CardPulseBorder = ({
  name,
  description,
  stargazers_count,
  url,
  languajes
}: isCardProps) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  const [languagesData, setLanguagesData] = useState<Record<string, number> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData().then(fetchedData => {
      if (fetchedData) {
        setLanguagesData(fetchedData);
      }
    });
  }, []);

  const fetchData = async (): Promise<Record<string, number> | void> => {
    try {
      const response = await fetch(languajes);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      return jsonData as Record<string, number>;
    } catch (error) {
      setError('Error al obtener datos');
      console.error('Error al obtener los datos:', error);
    }
  };

  const calculateTotal = (data: Record<string, number>) => {
    return Object.values(data).reduce((total, count) => total + count, 0);
  }

  const calculatePercentages = (data: Record<string, number>, total: number) => {
    return Object.entries(data).map(([language, count]) => ({
      language,
      percentage: ((count / total) * 100).toFixed(2)
    }));
  }

  const total = languagesData ? calculateTotal(languagesData) : 0;
  const percentages = languagesData ? calculatePercentages(languagesData, total) : [];

  return (
    <motion.div variants={item} className='relative h-[110px] inline-block'>
      <a href={url} target='_blank'>
      <div className='flex flex-col h-full items-start px-8 pb-4 justify-center rounded-md border border-solid border-slate-800 bg-black'>
        <a
          href={url}
          className='flex items-center justify-between w-full underline-transparent'
          target='_blank'
          rel='noopener'
        >
          <span className='flex gap-x-1'>
            <span className='text-lg font-bold text-White-Custom'>{name}</span>
            <ArrowUpRight color='#BBBBBB' size={12} />
          </span>
          <span className='flex items-center text-sm gap-x-1 text-slate-200'>
            <Star size={14} />
            <p>{stargazers_count}</p>
          </span>
        </a>
        {error && <p className='text-red-500'>{error}</p>}
        {percentages.length > 0 ? (
          <p className='text-[13px] text-Text-Custom'>
            {percentages.map(({ language, percentage }) => (
              <span key={language}>{`${language}: ${percentage}% `}</span>
            ))}
          </p>
        ) : (<p className='text-[13px] text-Text-Custom'>{description}</p>)}
      </div>
      </a>
    </motion.div>
  )
}
