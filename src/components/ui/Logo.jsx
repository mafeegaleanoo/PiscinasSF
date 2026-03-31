import React from 'react';

const Logo = ({ className = '', style = {} }) => {
  return (
    <svg 
      className={className} 
      style={style} 
      width="340" height="85" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#009EDB"/>
          <stop offset="100%" stopColor="#00C3FF"/>
        </linearGradient>
        <linearGradient id="lgW" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#009EDB" stopOpacity=".6"/>
          <stop offset="100%" stopColor="#0369a1" stopOpacity=".85"/>
        </linearGradient>
        <clipPath id="lfl">
          <path d="M38 6 L58 6 L58 32 L84 78 Q84 96 48 96 Q12 96 12 78 L38 32 Z"/>
        </clipPath>
      </defs>
      <path d="M38 6 L58 6 L58 32 L84 78 Q84 96 48 96 Q12 96 12 78 L38 32 Z" fill="rgba(0,158,219,.07)" stroke="url(#lg1)" strokeWidth="2.2" strokeLinejoin="round"/>
      <line x1="35" y1="6" x2="61" y2="6" stroke="url(#lg1)" strokeWidth="3" strokeLinecap="round"/>
      <line x1="58" y1="18" x2="63" y2="18" stroke="#009EDB" strokeWidth="1.3" strokeLinecap="round" opacity=".5"/>
      <line x1="58" y1="25" x2="61" y2="25" stroke="#009EDB" strokeWidth="1" strokeLinecap="round" opacity=".38"/>
      <path d="M16 74 Q32 66 48 74 Q64 82 80 74 L84 78 Q84 96 48 96 Q12 96 12 78 Z" fill="url(#lgW)" clipPath="url(#lfl)"/>
      <path d="M15 73 Q32 65 48 73 Q64 81 81 73" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity=".6" clipPath="url(#lfl)"/>
      <path d="M14 84 Q32 76 48 84 Q64 92 82 84" fill="none" stroke="#00C3FF" strokeWidth="1.3" strokeLinecap="round" opacity=".4" clipPath="url(#lfl)"/>
      <circle cx="32" cy="88" r="2.4" fill="white" opacity=".3"/>
      <circle cx="48" cy="91" r="1.7" fill="white" opacity=".25"/>
      <circle cx="63" cy="86" r="2" fill="white" opacity=".22"/>
      <ellipse cx="48" cy="50" rx="46" ry="15" fill="none" stroke="#009EDB" strokeWidth="1" opacity=".22" transform="rotate(35 48 50)"/>
      <ellipse cx="48" cy="50" rx="46" ry="15" fill="none" stroke="#009EDB" strokeWidth="1" opacity=".22" transform="rotate(-35 48 50)"/>
      <circle cx="48" cy="50" r="3.2" fill="#009EDB" opacity=".85"/>
      <circle cx="48" cy="35" r="2.7" fill="#009EDB" opacity=".8"/>
      <circle cx="91" cy="58" r="2.4" fill="#009EDB" opacity=".75"/>
      <circle cx="5"  cy="42" r="2.4" fill="#009EDB" opacity=".75"/>
      <text x="110" y="46" fontFamily="'Montserrat',sans-serif" fontWeight="900" fontSize="36" fill="url(#lg1)" letterSpacing="-1">PISCINAS</text>
      <text x="112" y="73" fontFamily="'Montserrat',sans-serif" fontWeight="300" fontSize="19" fill="url(#lg1)" letterSpacing="5">sin fronteras</text>
      <line x1="110" y1="80" x2="392" y2="80" stroke="rgba(0,158,219,.18)" strokeWidth="1"/>
      <text x="112" y="95" fontFamily="'Montserrat',sans-serif" fontWeight="400" fontSize="9" fill="#009EDB" letterSpacing="1.6">by THE POOL SCIENTIST</text>
    </svg>
  );
};

export default Logo;
