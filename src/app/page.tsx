"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import ArrowIcon from "@/components/Icons/ArrowIcon";
import GitHubLogo from "@/components/Icons/GitHubLogo";
import Social from "@/components/Social";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import GlowArticle from "@/components/card";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import FacebookLogo from "@/components/Icons/FacebookIcon";
import TiktokIcon from "@/components/Icons/TiktokIcon";
import LinkedInIcon from "@/components/Icons/LinkedInIcon";
import { Projects } from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Logo from "@/components/Icons/Logo";
import { useGithubData } from "@/hooks/useGithubData";

// @ts-ignore
import '@/styles/globals.css'

const PARTICLES = [
  { left: '3%',  size: '10px', color: '#4fc3dc', opacity: 0.55, duration: '14s', delay: '0s',   drift:  '30px'  },
  { left: '10%', size: '24px', color: '#ffffff', opacity: 0.18, duration: '20s', delay: '3s',   drift: '-20px'  },
  { left: '18%', size: '8px',  color: '#6366f1', opacity: 0.6,  duration: '12s', delay: '6s',   drift:  '15px'  },
  { left: '26%', size: '18px', color: '#4fc3dc', opacity: 0.4,  duration: '17s', delay: '1s',   drift: '-25px'  },
  { left: '35%', size: '12px', color: '#a855f7', opacity: 0.5,  duration: '15s', delay: '8s',   drift:  '20px'  },
  { left: '44%', size: '32px', color: '#ffffff', opacity: 0.12, duration: '23s', delay: '4s',   drift: '-15px'  },
  { left: '52%', size: '8px',  color: '#4fc3dc', opacity: 0.6,  duration: '11s', delay: '10s',  drift:  '25px'  },
  { left: '60%', size: '20px', color: '#6366f1', opacity: 0.35, duration: '19s', delay: '5s',   drift: '-30px'  },
  { left: '68%', size: '14px', color: '#ffffff', opacity: 0.28, duration: '16s', delay: '7s',   drift:  '20px'  },
  { left: '75%', size: '22px', color: '#a855f7', opacity: 0.38, duration: '21s', delay: '2s',   drift: '-10px'  },
  { left: '82%', size: '10px', color: '#4fc3dc', opacity: 0.55, duration: '13s', delay: '9s',   drift:  '15px'  },
  { left: '89%', size: '16px', color: '#ffffff', opacity: 0.22, duration: '18s', delay: '1s',   drift: '-22px'  },
  { left: '94%', size: '12px', color: '#6366f1', opacity: 0.5,  duration: '15s', delay: '6s',   drift:  '10px'  },
  { left: '98%', size: '8px',  color: '#a855f7', opacity: 0.6,  duration: '12s', delay: '11s',  drift: '-15px'  },
] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SOCIAL_LINKS = [
  { href: 'https://x.com/milosx0818',                   label: 'Ir a mi Twitter / X', name: 'Twitter',   Icon: TwitterIcon   },
  { href: 'https://www.instagram.com/camilo_e.p/',       label: 'Ir a mi Instagram',   name: 'Instagram', Icon: InstagramIcon },
  { href: 'https://www.facebook.com/camilo.estrada.e4',  label: 'Ir a mi Facebook',    name: 'Facebook',  Icon: FacebookLogo  },
  { href: 'https://www.tiktok.com/@camilo_ep_',          label: 'Ir a mi TikTok',      name: 'TikTok',    Icon: TiktokIcon    },
  { href: 'https://www.linkedin.com/in/camiloep',        label: 'Ir a mi LinkedIn',    name: 'LinkedIn',  Icon: LinkedInIcon  },
];

export default function Home() {
  const { user } = useGithubData();

  return (
    <div className="contenedor">
      <div className="bubbles">
        {PARTICLES.map((p, i) => (
          <span key={i} style={{
            '--left':     p.left,
            '--size':     p.size,
            '--color':    p.color,
            '--opacity':  p.opacity,
            '--duration': p.duration,
            '--delay':    p.delay,
            '--drift':    p.drift,
          } as React.CSSProperties} />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-sm sm:max-w-3xl lg:max-w-5xl px-4 mx-auto flex flex-col lg:grid w-full h-full grid-cols-8 gap-4 py-10 text-[#E2E2E2] overflow-hidden"
      >
        {/* ── Intro ── */}
        <motion.div variants={item} className="col-span-5">
          <GlowArticle className="p-4 h-full">
            <article className="px-8 py-4 md:flex gap-x-6 items-center h-full md:text-left">
              {user?.avatar_url ? (
                <Image
                  src={user.avatar_url}
                  alt={user.name ?? 'Camilo Estrada'}
                  width={88}
                  height={88}
                  className="rounded-full border-2 border-sky-500 shrink-0 object-cover"
                  priority
                />
              ) : (
                <Logo />
              )}
              <div>
                <AboutMe />
              </div>
            </article>
          </GlowArticle>
        </motion.div>

        {/* ── GitHub card ── */}
        <motion.div variants={item} className="col-span-3">
          <GlowArticle className="p-4 h-full">
            <Link
              href="https://github.com/Camiloep"
              target="_blank"
              aria-label="Ir a mi GitHub"
              className="flex flex-col p-4 h-full"
            >
              <div className="flex justify-end">
                <GitHubLogo width="44px" height="50px" className="hover:-translate-y-1 hover:translate-x-1 transition-transform" />
              </div>
              <div className="flex-1 flex flex-col justify-end gap-y-1">
                {user && (
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>{user.public_repos} repos</span>
                    <span>{user.followers} seguidores</span>
                  </div>
                )}
                <div className="flex gap-x-2 items-center text-2xl font-bold">
                  <p>Mi GitHub</p>
                  <ArrowIcon />
                </div>
              </div>
            </Link>
          </GlowArticle>
        </motion.div>

        {/* ── Skills ── */}
        <motion.div variants={item} className="row-span-2 col-span-3">
          <GlowArticle className="p-6 h-full">
            <Skills />
          </GlowArticle>
        </motion.div>

        {/* ── Proyectos ── */}
        <motion.div variants={item} className="col-span-5">
          <GlowArticle className="p-6 h-full">
            <p className="text-2xl font-bold pb-2">Mis proyectos</p>
            <Projects />
          </GlowArticle>
        </motion.div>

        {/* ── Educación timeline ── */}
        <motion.div variants={item} className="col-span-5">
          <GlowArticle className="p-6 h-full space-y-4">
            <p className="text-2xl font-bold">Educación</p>
            <div className="relative pl-6 border-l-2 border-sky-500/50">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-sky-500 border-2 border-black" />
              <p className="text-xs text-gray-400 mb-1 uppercase tracking-wide">2024 · Graduado</p>
              <p className="text-lg font-semibold">Tecnología en Análisis y Desarrollo de Software</p>
              <p className="text-sm text-gray-400">Servicio Nacional de Aprendizaje — SENA</p>
            </div>
          </GlowArticle>
        </motion.div>

        {/* ── Redes sociales ── */}
        <motion.div variants={item} className="col-span-8 text-center">
          <h2 className="text-2xl font-bold">Mis redes</h2>
        </motion.div>

        <motion.div variants={item} className="col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SOCIAL_LINKS.map(({ href, label, name, Icon }) => (
            <Link key={name} href={href} target="_blank" aria-label={label}>
              <GlowArticle className="min-h-0">
                <Social networkName={name}>
                  <Icon width="50px" height="50px" />
                </Social>
              </GlowArticle>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
