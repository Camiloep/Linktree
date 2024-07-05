import React, { ReactNode } from 'react';
import ArrowIcon from './Icons/ArrowIcon';

interface SocialProps {
  className?: string;
  networkName: string;
  children?: ReactNode;
}

const Social: React.FC<SocialProps> = ({ className, networkName, children }) => {
  return (
    <article className={`max-w-full p-6 h-[200px] cursor-pointer ${className}`}>
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-end">
          {children}
        </div>
        <div className="flex flex-1 items-end justify-between">
          <p className="text-lg font-semibold">{networkName}</p>
          <div className="w-fit h-fit">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Social;
