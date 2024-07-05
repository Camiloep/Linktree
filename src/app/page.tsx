import ArrowIcon from "@/components/Icons/ArrowIcon";
import GitHubLogo from "@/components/Icons/GitHubLogo";
import Social from "@/components/Social";
import TwitterIcon from "@/components/Icons/TwitterIcon";
import GlowArticle from "@/components/card";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import FacebookLogo from "@/components/Icons/FacebookIcon";
import TiktokIcon from "@/components/Icons/TiktokIcon";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div className="max-w-sm sm:max-w-3xl lg:max-w-5xl px-4 mx-auto flex flex-col lg:grid w-full h-full grid-cols-8 gap-4 py-30 box text-[#E2E2E2] overflow-hidden py-10">
        <GlowArticle className="col-span-5 p-4 flex place-items-center gap-4">
        <article className="px-8 py-4 flex gap-x-4 items-center justify-center h-full">
          <img
            src="/Images/favicon.webp"
            className="rounded-full aspect-square w-[150px]">
          </img>
          <div>
          <h1 className="font-bold text-[36px]">¡Hola!</h1>
          <p className="text-[20px]">
              Soy un aprendiz de front-end y dedico todos mis días a aprender.
            </p>
          </div>
          </article>
        </GlowArticle>
        <GlowArticle className="col-span-3 p-4 place-items-center gap-4">
          <a
            href="https://github.com/Camiloep"
            target="_blank"
            className="flex flex-col p-6 hover:text-white text-4xl h-full"
          >
            <div className="w-full flex justify-end">
              <GitHubLogo width="55px" height="64px" />
            </div>
            <div className="flex-1 flex items-end">
              <div className="flex gap-x-2 items-center">
                <p>Mi GitHub</p>
                <ArrowIcon />
              </div>
            </div>
          </a>
        </GlowArticle>
        <GlowArticle className="row-span-2 col-span-3  p-6">
          <p className="text-xl font-bold pb-2">Mis proyectos</p>
          <Projects/>
        </GlowArticle>
        <GlowArticle className="col-span-5 p-6 space-y-2">
          <p className="text-3xl font-bold">Sobre mi</p>
          <p className="text-xl font-semibold">Actualmente estoy realizando una pasantía de mi tecnología de análisis y desarrollo de software en <a href="https://www.instagram.com/nurent.co">@<span className="underline">Nurent</span></a></p>
        </GlowArticle>
        <GlowArticle className="col-span-5 p-6 space-y-2">
          <p className="text-xl font-semibold">Me encanta el desarrollo front-end y cada día me dedico a mejorar mis habilidades en React, TypeScript y Tailwind. Disfruto creando interfaces intuitivas y estilizadas, y siempre estoy buscando nuevos desafíos y aprendizajes en estas tecnologías.</p>
        </GlowArticle>
        <h1 className="col-span-8 text-2xl font-bold text-center">Mis redes</h1>
        <a href="https://x.com/camiloep0818" className="col-span-2">
        <GlowArticle>
          <Social>
            <TwitterIcon  width="50px" height="50px"/>
          </Social>
        </GlowArticle>
        </a>
        <a href="https://www.instagram.com/camilo_e.p/" className="col-span-2">
        <GlowArticle >
          <Social>
            <InstagramIcon  width="50px" height="50px"/>
          </Social>
        </GlowArticle>
        </a>
        <a href="https://www.facebook.com/camilo.estrada.e4" className="col-span-2">
        <GlowArticle >
          <Social>
            <FacebookLogo  width="50px" height="50px"/>
          </Social>
        </GlowArticle>
        </a>
        <a href="https://www.tiktok.com/@camilo_ep_" className="col-span-2">
        <GlowArticle >
            <Social>
              <TiktokIcon  width="50px" height="50px"/>
            </Social>
        </GlowArticle>
        </a>
      </div>
    </>
  );
}
