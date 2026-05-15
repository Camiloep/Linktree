import React from 'react';

interface ProgressBarProps {
  percentage: number;
  hover: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, hover }) => (
  <div className="flex items-center gap-2">
    <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-500 ${hover ? 'bg-violet-500' : 'bg-sky-500'}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
    <span className="text-xs text-gray-300 w-9 text-right shrink-0">{percentage}%</span>
  </div>
);

export default ProgressBar;
