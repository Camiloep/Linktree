import React from "react";

interface TiktokLogoProps extends React.SVGProps<SVGSVGElement> {}

const TiktokIcon: React.FC<TiktokLogoProps> = (props) => (
<svg
  {...props}
  viewBox="0 0 58 66"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M45.4286 11.3177C42.9872 8.54301 41.6418 4.97966 41.6429 1.29102H30.6071V45.3799C30.522 47.7658 29.5103 50.0257 27.7849 51.6837C26.0595 53.3417 23.7552 54.2685 21.3571 54.2688C16.2857 54.2688 12.0714 50.1444 12.0714 45.0243C12.0714 38.9088 18 34.3221 24.1071 36.2066V24.971C11.7857 23.3355 1 32.8643 1 45.0243C1 56.8643 10.8571 65.291 21.3214 65.291C32.5357 65.291 41.6429 56.2243 41.6429 45.0243V22.6599C46.1179 25.8594 51.4906 27.576 57 27.5666V16.5799C57 16.5799 50.2857 16.8999 45.4286 11.3177Z"
    fill="#F2F2F2"
    stroke="#3D2D42"></path>
</svg>
);

export default TiktokIcon;