import React from 'react';
import './Wave.module.css';

export default function Wave() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#333399"
        fillOpacity="1"
        d="M0,160L48,181.3C96,203,192,245,288,224C384,203,480,117,576,80C672,43,768,53,864,96C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg>
  );
}
