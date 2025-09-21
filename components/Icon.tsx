
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const BrainCircuitIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5a3 3 0 1 0-5.993.142"/>
    <path d="M18 5a3 3 0 1 0-5.993.142"/>
    <path d="M12 12a3 3 0 1 0-5.993.142"/>
    <path d="M18 12a3 3 0 1 0-5.993.142"/>
    <path d="M12 19a3 3 0 1 0-5.993.142"/>
    <path d="M18 19a3 3 0 1 0-5.993.142"/>
    <path d="M12 5v7"/>
    <path d="M18 5v7"/>
    <path d="M6 5v7"/>
    <path d="M12 12v7"/>
    <path d="M18 12v7"/>
    <path d="M6 12v7"/>
    <path d="m6 5-1.5 1.5"/>
    <path d="m18 5 1.5 1.5"/>
    <path d="m6 12-1.5 1.5"/>
    <path d="m18 12 1.5 1.5"/>
    <path d="m6 19-1.5 1.5"/>
    <path d="m18 19 1.5 1.5"/>
  </svg>
);

export const CodeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
);
