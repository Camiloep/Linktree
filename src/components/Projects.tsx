'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CardPulseBorder } from './CardPulse';

const BASE_URL = 'https://api.github.com/users/Camiloep/repos';

export interface GithubData {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}

export const Projects: React.FC = () => {
  const [data, setData] = useState<GithubData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData().then(fetchedData => {
      if (fetchedData) {
        setData(fetchedData);
      }
    });
  }, []);

  const fetchData = async (): Promise<GithubData[] | void> => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const jsonData = await response.json();
      return jsonData as GithubData[];
    } catch (error) {
      setError('Error al obtener los datos');
      console.error('Error al obtener los datos:', error);
    }
  };

  return (
    <>
      <div className='absolute text-transparent w-[400px] h-[400px] bg-white rounded-full blur-3xl opacity-10 translate-x-[320px] z-0'></div>
      <motion.div
        transition={{ type: 'spring', stiffness: 800, damping: 500 }}
        className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[1rem] gap-x-4 gap-y-4  max-h-[400px] overflow-y-auto'
      >
        {error && <p className='text-red-500'>{error}</p>}
        {data &&
          data.map(d => (
            <CardPulseBorder
              key={d.name}
              name={d.name}
              description={d.description}
              stargazers_count={d.stargazers_count}
              url={d.html_url}
            />
          ))}
      </motion.div>
    </>
  );
};
