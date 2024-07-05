import React, { ReactNode } from 'react';
import ArrowIcon from './Icons/ArrowIcon';

interface CustomArticleProps {
  className?: string;
  children?: ReactNode;
}

const CustomArticle: React.FC<CustomArticleProps> = ({ className, children }) => {
  return (
    <article className={`max-w-full p-6 h-[200px] cursor-pointer ${className}`}>
      <div className="w-full h-full flex flex-col">
        <div className="flex color-white justify-end">
          {React.Children.map(children, (child) =>
            React.isValidElement(child) && child.props.slot === 'icon' ? child : null
          )}
        </div>
        <div className="flex flex-1 items-end">
          <div className="w-fit h-fit">
            <ArrowIcon />
          </div>
        </div>
      </div>
    </article>
  );
};

export default CustomArticle;
