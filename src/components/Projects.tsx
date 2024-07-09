'use client';

import React, { useEffect, useState } from 'react';
import { CardPulseBorder } from './CardPulse';

const BASE_URL = 'https://api.github.com/users/Camiloep/repos';

export interface GithubData {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  languages_url: string;
}

export const Projects: React.FC = () => {
  const [data, setData] = useState<GithubData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cachedData = localStorage.getItem('githubData');
    if (cachedData) {
      setData(JSON.parse(cachedData));
    } else {
      fetchData().then(fetchedData => {
        if (fetchedData) {
          setData(fetchedData);
          localStorage.setItem('githubData', JSON.stringify(fetchedData));
        }
      });
    }
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

  const handleMouseEnter = () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.classList.add('paused');
    }
  };

  const handleMouseLeave = () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.classList.remove('paused');
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {error && <p className='text-red-500'>{error}</p>}
        {data &&
          data.map(d => (
            <div
              key={d.name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CardPulseBorder
                name={d.name}
                description={d.description}
                stargazers_count={d.stargazers_count}
                url={d.html_url}
                languajes={d.languages_url}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
