import React from 'react';

const FacebookLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V10.41h3.129V7.798c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.587l-.467 3.296h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
);

export default FacebookLogo;
