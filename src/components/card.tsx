"use client"
import React, { useEffect } from 'react';
import '@/styles/globals.css'

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const GlowArticle: React.FC<Props> = ({ className, children }) => {
  useEffect(() => {
    const syncPointer = ({ x, y }: { x: number; y: number }) => {
      document.documentElement.style.setProperty('--x', x.toFixed(2));
      document.documentElement.style.setProperty('--xp', (x / window.innerWidth).toFixed(2));
      document.documentElement.style.setProperty('--y', y.toFixed(2));
      document.documentElement.style.setProperty('--yp', (y / window.innerHeight).toFixed(2));
    };
    syncPointer({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    document.body.addEventListener('pointermove', syncPointer);

    return () => {
      document.body.removeEventListener('pointermove', syncPointer);
    };
  }, []);

  return (
    <article
      data-glow
      className={`group text-[#E2E2E2] min-h-[200px] blur-effect border-2 border-[#3a3dfe] relative rounded-[24px] h-full ${className}`}
    >
      <div data-glow></div>
      {children}
    </article>
  );
};

export default GlowArticle;
