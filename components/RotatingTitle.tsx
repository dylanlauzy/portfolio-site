'use client'

import { useState } from 'react';


const RotatingTitle = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  
  const titles = ["developer", "student", "rock climber", "pokemon trainer", "ML engineer", "chess player"];
  
  return (
    <button
      className="inline text-red-600 animate-pulse"
      onClick={() => setTitleIndex((titleIndex + 1)  % titles.length)}
    >
      <span>{titles[titleIndex]}</span>
    </button>
  )
}

export default RotatingTitle