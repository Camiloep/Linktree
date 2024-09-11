"use client"

import ArrowIcon from "@/components/Icons/ArrowIcon";
import GitHubLogo from "@/components/Icons/GitHubLogo";
import Social from "@/components/Social";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import GlowArticle from "@/components/card";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import FacebookLogo from "@/components/Icons/FacebookIcon";
import TiktokIcon from "@/components/Icons/TiktokIcon";
import { Projects } from "@/components/Projects";

import '@/styles/globals.css'

import AboutMe from "@/components/AboutMe";

import Skills from "@/components/Skills";
import Logo from "@/components/Icons/Logo";
import { useEffect, useState } from "react";
import Link from "next/link";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * (29 - 10 + 1)) + 10;
};

const generateSpans = (count: number) => {
  const spans = [];
  for (let i = 0; i < count; i++) {
    spans.push(<span key={i} style={{ '--i': generateRandomNumber() } as React.CSSProperties}></span>);
  }
  return spans;
};


export default function Home() {

  const [ipAddress, setIpAddress] = useState<string>('');
  const [userAgent, setUserAgent] = useState<string>('');


    // Obtener la IP y el User Agent del usuario
    useEffect(() => {
      const fetchIP = async () => {
        try {
          const response = await fetch('https://ipapi.co/json/');
          const data = await response.json();
          setIpAddress(data.ip);
        } catch (error) {
          console.error('Error al obtener la IP:', error);
        }
      };
      fetchIP();
      
      // Obtener el User Agent del navegador
      setUserAgent(navigator.userAgent);    
    }, []);

  const getCurrentTimestamp = () => Math.floor(new Date().getTime() / 1000);

  return (
    <div className="contenedor">
      <div className="bubbles">
        {generateSpans(50)}
      </div>
      <div className="max-w-sm sm:max-w-3xl lg:max-w-5xl px-4 mx-auto flex flex-col lg:grid w-full h-full grid-cols-8 gap-4 py-30 box text-[#E2E2E2] overflow-hidden py-10">
        <GlowArticle className="col-span-5 p-4 lg:flex  gap-4">
        <article className="px-8 py-4 md:flex gap-x-4 items-center  h-full  md:text-left">
          <Logo/>
          <div>
          <AboutMe/>
          </div>
        </article>
        </GlowArticle>
        <GlowArticle className="col-span-3 p-4 place-items-center gap-4">
        <Link
          href="https://github.com/Camiloep"
          target="_blank"
          className="flex flex-col items-center md:items-start p-6 text-4xl h-full text-center md:text-left"
          onClick={() => {
            window.fbq('track', 'Contact', {
             event_name: 'Contact GitHub',
             event_time: getCurrentTimestamp(),
             method: 'GitHub',
             content_category: 'Real Estate',
             action_source: 'website',
             client_ip_address: ipAddress,  // IP del cliente
             client_user_agent: userAgent,  // User Agent del cliente
           });
         }}
        >
          <div className="w-full flex justify-center md:justify-end">
            <GitHubLogo width="55px" height="64px" className="hover:-translate-y-1 hover:translate-x-1"/>
          </div>
          <div className="flex-1 flex flex-col md:flex-row items-center md:items-end">
            <div className="flex gap-x-2 items-center">
              <p>Mi GitHub</p>
              <ArrowIcon />
            </div>
          </div>
        </Link>
        </GlowArticle>
        <GlowArticle className="row-span-2 col-span-3 p-6 space-y-2">
          <Skills/>
        </GlowArticle>
        <GlowArticle className=" col-span-5  p-6">
          <p className="text-xl font-bold pb-2">Mis proyectos</p>
          <Projects/>
        </GlowArticle>
        <GlowArticle className=" col-span-5  p-6 space-y-4">
          <p className="text-3xl font-bold">Educación</p>
          <div className="flex space-x-2">
          <p className="text-xl font-semibold">2024</p>
          <div>
          <p className="text-xl font-semibold">Tecnologia en Análisis y Desarrollo de software</p>
          <p>Servicio Nacional de Aprendizaje, <span>SENA</span></p>
          </div>
          </div>
        </GlowArticle>
        {/* <GlowArticle className="col-span-8">

        </GlowArticle> */}
        <h1 className="col-span-8 text-2xl font-bold text-center">Mis redes</h1>
        <Link href="https://x.com/camiloep0818" target="_blank" className="col-span-2" onClick={() => {
                   window.fbq('track', 'Contact', {
                    event_name: 'Contact Twitter',
                    event_time: getCurrentTimestamp(),
                    method: 'Twitter',
                    content_category: 'Real Estate',
                    action_source: 'website',
                    client_ip_address: ipAddress,  // IP del cliente
                    client_user_agent: userAgent,  // User Agent del cliente
                  });
                }}>
        <GlowArticle>
          <Social networkName="Twitter">
            <TwitterIcon  width="50px" height="50px"/>
          </Social>
        </GlowArticle>
        </Link>
        <Link href="https://www.instagram.com/camilo_e.p/" target="_blank" className="col-span-2" onClick={() => {
                   window.fbq('track', 'Contact', {
                    event_name: 'Contact Instagram',
                    event_time: getCurrentTimestamp(),
                    method: 'Instagram',
                    content_category: 'Real Estate',
                    action_source: 'website',
                    client_ip_address: ipAddress,  // IP del cliente
                    client_user_agent: userAgent,  // User Agent del cliente
                  });
                }}>
        <GlowArticle >
          <Social networkName="Instagram">
            <InstagramIcon  width="50px" height="50px"/>
          </Social>
        </GlowArticle>
        </Link>
        <Link href="https://www.facebook.com/camilo.estrada.e4" target="_blank" className="col-span-2" onClick={() => {
                   window.fbq('track', 'Contact', {
                    event_name: 'Contact Facebook',
                    event_time: getCurrentTimestamp(),
                    method: 'Facebook',
                    content_category: 'Real Estate',
                    action_source: 'website',
                    client_ip_address: ipAddress,  // IP del cliente
                    client_user_agent: userAgent,  // User Agent del cliente
                  });
                }}>
        <GlowArticle >
          <Social networkName="Facebook">
            <FacebookLogo  width="50px" height="50px"/>
          </Social>
        </GlowArticle>
        </Link>
        <Link href="https://www.tiktok.com/@camilo_ep_" target="_blank" className="col-span-2" onClick={() => {
                   window.fbq('track', 'Contact', {
                    event_name: 'Contact TikTok',
                    event_time: getCurrentTimestamp(),
                    method: 'TikTok',
                    content_category: 'Real Estate',
                    action_source: 'website',
                    client_ip_address: ipAddress,  // IP del cliente
                    client_user_agent: userAgent,  // User Agent del cliente
                  });
                }}>
        <GlowArticle >
            <Social networkName="TikTok">
              <TiktokIcon  width="50px" height="50px"/>
            </Social>
        </GlowArticle>
        </Link>
      </div>
    </div>
  );
}
