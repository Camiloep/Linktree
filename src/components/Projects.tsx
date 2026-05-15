'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { CardPulseBorder } from './CardPulse';
import { useGithubData } from '@/hooks/useGithubData';

const SCROLL_SPEED = 0.6; // px por frame

const SkeletonCard = () => (
  <div className="min-w-[300px] mr-2 h-[110px] rounded-md border border-solid border-sky-900 animate-pulse bg-sky-950/20 flex flex-col justify-center px-8 gap-2">
    <div className="h-4 w-2/3 rounded bg-sky-800/40" />
    <div className="h-3 w-full rounded bg-sky-800/30" />
    <div className="h-3 w-1/2 rounded bg-sky-800/20" />
  </div>
);

export const Projects: React.FC = () => {
  const { repos, languages, loading, error } = useGithubData();

  const carouselRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const scrollPos = useRef(0);
  const paused = useRef(false);   // hover pause
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);

  // Auto-scroll loop
  useEffect(() => {
    const tick = () => {
      if (!paused.current && !dragging.current && carouselRef.current) {
        const half = carouselRef.current.scrollWidth / 2;
        if (half > 0) {
          scrollPos.current = (scrollPos.current + SCROLL_SPEED) % half;
          carouselRef.current.style.transform = `translateX(-${scrollPos.current}px)`;
        }
      }
      frameRef.current = requestAnimationFrame(tick);
    };
    frameRef.current = requestAnimationFrame(tick);
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, []);

  // Clamp scroll position dentro del rango válido
  const clampScroll = useCallback((value: number) => {
    if (!carouselRef.current) return value;
    const half = carouselRef.current.scrollWidth / 2;
    return Math.max(0, Math.min(value, half - 1));
  }, []);

  // ── Mouse ──────────────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartScroll.current = scrollPos.current;
    e.preventDefault(); // evita selección de texto
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging.current || !carouselRef.current) return;
    const delta = dragStartX.current - e.clientX;
    scrollPos.current = clampScroll(dragStartScroll.current + delta);
    carouselRef.current.style.transform = `translateX(-${scrollPos.current}px)`;
  }, [clampScroll]);

  const onMouseUp = useCallback(() => { dragging.current = false; }, []);

  // ── Touch ──────────────────────────────────────────────────
  const onTouchStart = useCallback((e: TouchEvent) => {
    dragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragStartScroll.current = scrollPos.current;
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    if (!dragging.current || !carouselRef.current) return;
    e.preventDefault(); // evita scroll vertical de la página durante drag
    const delta = dragStartX.current - e.touches[0].clientX;
    scrollPos.current = clampScroll(dragStartScroll.current + delta);
    carouselRef.current.style.transform = `translateX(-${scrollPos.current}px)`;
  }, [clampScroll]);

  const onTouchEnd = useCallback(() => { dragging.current = false; }, []);

  // Listeners globales: el drag sigue funcionando aunque salgas del contenedor
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  // Touch listeners en el elemento para poder usar { passive: false }
  useEffect(() => {
    const el = carouselRef.current?.parentElement;
    if (!el) return;
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [onTouchStart, onTouchMove, onTouchEnd]);

  if (loading) {
    return (
      <div className="carousel-container">
        <div className="flex gap-2 overflow-hidden">
          {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      </div>
    );
  }

  return (
    <div
      className="carousel-container cursor-grab active:cursor-grabbing"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onMouseDown={onMouseDown}
    >
      <div className="carousel" ref={carouselRef}>
        {error && <p className="text-red-500">{error}</p>}
        {[...repos, ...repos].map((repo, index) => (
          <div key={index}>
            <CardPulseBorder
              name={repo.name}
              description={repo.description}
              stargazers_count={repo.stargazers_count}
              url={repo.html_url}
              languageData={languages[repo.name] ?? {}}
              isPrivate={repo.private}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
