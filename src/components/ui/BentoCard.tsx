import React, { useRef, MouseEvent } from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'none';
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '', glowColor = 'none' }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const glowClass = glowColor === 'cyan' ? 'hover:shadow-glow-cyan' 
                  : glowColor === 'purple' ? 'hover:shadow-glow-purple' 
                  : '';

  return (
    <div 
      ref={cardRef}
      className={`bento-card relative p-6 md:p-8 ${glowClass} ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div className="bento-content relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default BentoCard;
