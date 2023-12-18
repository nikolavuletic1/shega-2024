// import React, { useEffect, useState, CSSProperties } from 'react';

// interface AnimateInViewProps {
//   animationClass: string;
//   children: React.ReactNode;
//   style?: CSSProperties;
//   onInViewChange?: (isVisible: boolean) => void;
// }

// const AnimateInView: React.FC<AnimateInViewProps> = ({ animationClass, children, style, onInViewChange }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     if (onInViewChange) {
//       onInViewChange(true);
//     }
//   }, [onInViewChange]);

//   return (
//     <div
//       className={isVisible ? animationClass : ''}
//       style={{
//         visibility: isVisible ? 'visible' : 'hidden',
//         ...style,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export default AnimateInView;


import React, { useEffect, useState, CSSProperties } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateInViewProps {
  animationClass: string;
  children: React.ReactNode;
  style?: CSSProperties;
  onInViewChange?: (isVisible: boolean) => void;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({ animationClass, children, style, onInViewChange }) => {
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

export default AnimateInView;
