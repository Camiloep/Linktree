import React from "react";

interface ReactLogoProps extends React.SVGProps<SVGSVGElement> {}

interface IconProps {
    width: string;
    height: string;
    className: string;
  }

const ReactIcon: React.FC<IconProps> = ({ width, height, className }) => (
  <>
    <svg
        width={width}
        height={height}
        className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
    >
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  </>
);

export default ReactIcon;
