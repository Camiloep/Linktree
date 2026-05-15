'use client';
import React from 'react';
import SkillWithProgress from './SkillWithProgress';
import HtmlIcon from './Icons/HtmlIcon';
import CssIcon from './Icons/CssIcon';
import JsIcon from './Icons/JsIcon';
import TsIcon from './Icons/TsIcon';
import { useGithubData } from '@/hooks/useGithubData';
import { LanguageMap } from '@/types/github';

type IconComponent = React.ComponentType<{ width: string; height: string; className: string }>;

const LANGUAGE_ICONS: Record<string, IconComponent> = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  JavaScript: JsIcon,
  TypeScript: TsIcon,
};

const TOP_N = 8;
const MIN_PCT = 1;

function toPercentages(aggregated: LanguageMap): { language: string; percentage: number }[] {
  const total = Object.values(aggregated).reduce((sum, v) => sum + v, 0);
  if (total === 0) return [];

  return Object.entries(aggregated)
    .map(([language, bytes]) => ({
      language,
      percentage: Math.round((bytes / total) * 100),
    }))
    .filter(({ percentage }) => percentage >= MIN_PCT)
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, TOP_N);
}

const SkeletonSkill = () => (
  <div className="flex items-center space-x-4 animate-pulse">
    <div className="w-[50px] h-[50px] rounded-md bg-sky-800/30" />
    <div className="flex-1 h-2 rounded-full bg-sky-800/30" />
    <div className="w-9 h-3 rounded bg-sky-800/20" />
  </div>
);

const Skills: React.FC = () => {
  const { aggregated, loading, error } = useGithubData();
  const skills = toPercentages(aggregated);

  return (
    <div className="space-y-2">
      <p className="text-2xl font-bold">Habilidades Técnicas</p>
      <div className="flex">
        <div className="space-y-5 mx-auto w-full">
          {loading && Array.from({ length: 5 }).map((_, i) => <SkeletonSkill key={i} />)}
          {error && <p className="text-red-400 text-sm">{error}</p>}
          {!loading && skills.map(({ language, percentage }) => (
            <SkillWithProgress
              key={language}
              Icon={LANGUAGE_ICONS[language]}
              label={language}
              percentage={percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
