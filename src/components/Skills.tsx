"use client"
import React from 'react';
import SkillWithProgress from './SkillWithProgress'; // Asegúrate de importar el componente SkillWithProgress
import HtmlIcon from './Icons/HtmlIcon';
import CssIcon from './Icons/CssIcon';
import JsIcon from './Icons/JsIcon';
import ReactIcon from './Icons/ReactIcon';
import TsIcon from './Icons/TsIcon';

const Skills: React.FC = () => (
    <div className="row-span-2 col-span-4 space-y-2">
      <p className="text-2xl font-bold text-center">Habilidades Técnicas</p>
      <div className='flex '>
        <div className="space-y-8 mx-auto">
            <SkillWithProgress Icon={HtmlIcon} percentage={80} />
            <SkillWithProgress Icon={CssIcon} percentage={75} />
            <SkillWithProgress Icon={JsIcon} percentage={50} />
            <SkillWithProgress Icon={ReactIcon} percentage={80} />
            <SkillWithProgress Icon={TsIcon} percentage={50} />
        </div>
      </div>
    </div>
  );
  

export default Skills;
