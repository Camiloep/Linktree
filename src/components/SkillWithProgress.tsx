import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

interface SkillWithProgressProps {
  Icon?: React.ComponentType<{ width: string; height: string; className: string }>;
  label?: string;
  percentage: number;
}

const SkillWithProgress: React.FC<SkillWithProgressProps> = ({ Icon, label, percentage }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex items-center space-x-4 transition duration-500 hover:translate-x-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {Icon ? (
        <Icon width="50px" height="50px" className="" />
      ) : (
        <span className="w-[50px] text-center text-xs font-semibold text-sky-300 leading-tight break-words">
          {label}
        </span>
      )}
      <div className="w-32">
        <ProgressBar percentage={percentage} hover={hover} />
      </div>
    </div>
  );
};

export default SkillWithProgress;
