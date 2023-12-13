// import React, { useRef, useEffect, useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// interface AnimateInViewProps {
//   animationClass: string;
//   children: React.ReactNode;
// }

// const AnimateInView: React.FC<AnimateInViewProps> = ({ animationClass, children }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (inView) {
//       setIsVisible(true);
//     }
//   }, [inView]);

//   return (
//     <div
//       ref={ref as unknown as React.RefObject<HTMLDivElement>}
//       className={isVisible ? animationClass : ''}
//       style={{ visibility: isVisible ? 'visible' : 'hidden' }}
//     >
//       {children}
//     </div>
//   );
// };

// export default AnimateInView;
import React, { useRef, useEffect, useState, CSSProperties } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimateInViewProps {
  animationClass: string;
  children: React.ReactNode;
  style?: CSSProperties; // Allow the style prop
  h1?: boolean; // Add the h1 property
}

const AnimateInView: React.FC<AnimateInViewProps> = ({ animationClass, children, style }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref as unknown as React.RefObject<HTMLDivElement>}
      className={isVisible ? animationClass : ''}
      style={{
        visibility: isVisible ? 'visible' : 'hidden',
        ...style, // Apply the style prop
      }}
    >
      {children}
    </div>
  );
};

export default AnimateInView;
