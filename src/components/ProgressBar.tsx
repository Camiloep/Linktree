import React from 'react';

interface ProgressBarProps {
  percentage: number;
  hover: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, hover }) => (
  <div className="w-full bg-gray-200 rounded-full  dark:bg-gray-700">
    <div 
      className={` rounded-full transition-colors duration-500 ${hover ? 'bg-red-700' : 'bg-blue-600'}`}
      style={{ width: `${percentage}%` }}
    ><p className='text-center'>{percentage}%</p></div>
  </div>
);

export default ProgressBar;
