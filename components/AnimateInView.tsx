
// import React, { useRef, useEffect, useState, CSSProperties } from 'react';
// import { useInView } from 'react-intersection-observer';

// interface AnimateInViewProps {
//   animationClass: string;
//   children: React.ReactNode;
//   style?: CSSProperties;
//   h1?: boolean;
//   onInViewChange?: (isVisible: boolean) => void;
//   setFirstElementVisible?: (isVisible: boolean) => void; // Add a callback to set first element visibility
// }

// const AnimateInView: React.FC<AnimateInViewProps> = ({ animationClass, children, style, onInViewChange, setFirstElementVisible }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     if (inView) {
//       setIsVisible(true);
//       if (onInViewChange) {
//         onInViewChange(true);
//       }
//       if (setFirstElementVisible) {
//         setFirstElementVisible(true);
//       }
//     }
//   }, [inView, onInViewChange, setFirstElementVisible]);

//   return (
//     <div
//       ref={ref as unknown as React.RefObject<HTMLDivElement>}
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


import React, { useRef, useEffect, useState, CSSProperties } from 'react';
import { useInView } from 'react-intersection-observer';


interface AnimateInViewProps {
  animationClass: string;
  children: React.ReactNode;
  style?: CSSProperties;
  h1?: boolean;
  onInViewChange?: (isVisible: boolean) => void;
  setFirstElementVisible?: (isVisible: boolean) => void;
}
// ... (previous imports)

const AnimateInView: React.FC<AnimateInViewProps> = ({ animationClass, children, style, onInViewChange, setFirstElementVisible }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);
  const animatedElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      if (onInViewChange) {
        onInViewChange(true);
      }
      if (setFirstElementVisible) {
        setFirstElementVisible(true);
      }
    }
  }, [inView, onInViewChange, setFirstElementVisible]);

  useEffect(() => {
    if (animatedElementRef.current) {
      animatedElementRef.current.classList.toggle('first-element-visible', isVisible);
    }
  }, [isVisible, animatedElementRef]);

  return (
    <div
      ref={(node) => {
        ref(node);
        animatedElementRef.current = node as HTMLDivElement;
      }}
      className={`animated-container ${isVisible ? animationClass : ''}`}
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
