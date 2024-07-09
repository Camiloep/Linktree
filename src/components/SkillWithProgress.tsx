import React, { useState } from 'react';
import ProgressBar from './ProgressBar'; // Asegúrate de importar el componente ProgressBar
import HtmlIcon from './Icons/HtmlIcon';
import CssIcon from './Icons/CssIcon';
import JsIcon from './Icons/JsIcon';
import ReactIcon from './Icons/ReactIcon';
import TsIcon from './Icons/TsIcon';


interface SkillWithProgressProps {
  Icon: React.ComponentType<{ width: string; height: string; className: string }>;
  percentage: number;
}

const SkillWithProgress: React.FC<SkillWithProgressProps> = ({ Icon, percentage }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex items-center space-x-4 transition duration-500 hover:translate-x-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon width="50px" height="50px" className="" />
      <div className="w-32">
        <ProgressBar percentage={percentage} hover={hover} />
      </div>
    </div>
  );
};

export default SkillWithProgress;
