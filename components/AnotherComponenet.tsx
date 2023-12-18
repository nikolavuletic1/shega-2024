import React, { useEffect, useState, CSSProperties } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnotherComponentProps {
  animationClass: string;
  children: React.ReactNode;
  style?: CSSProperties;
  onInViewChange?: (isVisible: boolean) => void;
}

const AnotherComponent: React.FC<AnotherComponentProps> = ({ animationClass, children, style, onInViewChange }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      if (onInViewChange) {
        onInViewChange(true);
      }
    }
  }, [inView, onInViewChange]);

  return (
    <div
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      className={isVisible ? animationClass : ''}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default AnotherComponent;
