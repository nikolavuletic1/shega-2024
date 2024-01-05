
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { IMAGES } from '../constants/images';
import GreenBgPattern from './GreenBgPattern';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';
import Image from 'next/image';


 


const Starting = () => {

  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });

  return (
    <>     
      {/* <div id="/" className="flex flex-col relative justify-evenly ipadMini mt-[5.5rem] sm:mt-[5.5rem] md:mt-[5.5rem] lg:mt-[6rem] xl:mt-[6rem] lg:pt-0 md:pt-12 min-h-screen"> */}
      <div id="/" className="flex flex-col relative justify-evenly ipadMini pt-[5.5rem] min-h-screen">
      

      <div className="absolute inset-0 pointer-events-none">
  <GreenBgPattern />
</div>


        <div className="flex flex-col justify-evenly items-center relative sm:flex-col md:flex-row lg:flex-row">
          <div className="flex flex-col w-[95%] xl:min-w-[45%] xl:max-w-[45%] lg:min-w-[40%] lg:max-w-[40%] md:min-w-[45%] md:max-w-[45%] sm:min-w-[75%] sm:max-w-[75%] xs:min-w-[90%] xs:max-w-[90%]">
            <motion.h1 ref={ref}
          initial={{ opacity: 0, transform: 'translateX(-100%) translateY(0%)' }}
          animate={inView ? { opacity: 1, transform: 'translateX(0) translateY(0)' } : { opacity: 0, transform: 'translateX(-100%) translateY(0%)' }}
    transition={{ duration: 0.4 }} className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-0 :mb-8 md:mb-8 lg:mb-8 mt-6 px-4 text-yellow-20 text-center relative z-10" style={{ textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black` }}>
              Klub Ljubitelja Društvenih Igara
            </motion.h1>
<motion.div
ref={ref}
initial={{ opacity: 0, transform: 'translateX(-100%) translateY(0%)' }}
animate={inView ? { opacity: 1, transform: 'translateX(0) translateY(0)' } : { opacity: 0, transform: 'translateX(-100%) translateY(0%)' }}
transition={{ duration: 0.8 }}
  
>
            <Link href="/">
              <Image
                src="/shega_logo23.webp"
                alt="logo"
                width={514}
                height={486}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="mx-auto w-full h-[8rem]  xs:w-[30rem] xs:h-[11rem] sm:w-[27rem] sm:h-[9rem] md:w-[30rem] md:h-[15rem] lg:w-[36rem] lg:h-[18rem] xl:w-[36rem] xl:h-[20rem] xxl:w-[36rem] xxl:h-[20rem] object-cover"
                loading="lazy" // Enable lazy loading
                // priority={true}
              />
            </Link>
          </motion.div>
          </div>

          <motion.div
           ref={ref}
           initial={{ opacity: 0, transform: 'translateX(100%) translateY(0%)' }}
           animate={inView ? { opacity: 1, transform: 'translateX(0) translateY(0)' } : { opacity: 0, transform: 'translateX(100%) translateY(0%)' }}
           transition={{ duration: 0.8 }} className='flex flex-col w-[96%] xxl:min-w-[32%] xxl:max-w-[32%] xl:min-w-[40%] xl:max-w-[40%] lg:min-w-[47%] lg:max-w-[47%] md:min-w-[47%] md:max-w-[47%] sm:min-w-[75%] sm:max-w-[75%] xs:min-w-[90%] xs:max-w-[90%]  '>
            <div className="rounded-full bg-yellow-500 overflow-hidden" style={{
              boxShadow: 'rgba(0, 0, 0, 0.8) 0 0 7px 2px, rgba(0, 0, 0, 0.7) 6px 5px 3px, rgba(255, 255, 0, 0.8) 0 8px 10px inset, rgba(0, 0, 0, 0.7) 10px 40px 10px inset, rgba(255, 255, 0, 0.1) 0 -7px 20px inset',
              border: '18px solid yellow',
              padding: '10px',
              marginBottom: '1rem',
              marginTop: '1rem',
            }}>
              <Swiper
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                spaceBetween={10}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Autoplay]}
                className="rounded-full shrink max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container "
              >
                {IMAGES.map((image, index) => (
                  <SwiperSlide key={index} className="swiper-slide rounded-full border-8 border-yellow-20">
                    <div className="relative" style={{ paddingBottom: '100%', aspectRatio: '1 / 1 ' }}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-full"
                        fill
                        loading="lazy" // Enable lazy loading
                  
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Starting;





// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Autoplay } from 'swiper/modules';
// import { IMAGES } from '../constants/images';
// import GreenBgPattern from './GreenBgPattern';
// import { scroller } from 'react-scroll';
// import AnimateInView from './AnimateInView';

// const Starting = () => {

//   const scrollToSection = (sectionId: string) => {
//     scroller.scrollTo(sectionId, {
//       smooth: true,
//       duration: 500,
//     });
//   };

//   const [isSectionInView, setIsSectionInView] = useState(false);

//   const handleInViewChange = (isVisible: boolean) => {
//     setIsSectionInView(isVisible);
//   };

//   return (
//     <>

// <AnimateInView animationClass={''} onInViewChange={handleInViewChange}>

//       <div id="/"    onClick={() => scrollToSection('/')} className={`flex flex-col justify-center w-full ipadMini mt-[5.5rem] sm:mt-[5.5rem] md:mt-[5.5rem] lg:mt-[9rem] xl:mt-[9rem] lg:pt-0 md:pt-12 ${
//         isSectionInView ? 'min-h-[39rem]' : ''
//       } relative`}> 
//         <div className="objects-container">
//           {/* ... other objects */}
//         </div>

//         <div
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             pointerEvents: 'none',
//           }}
//         >
//           <GreenBgPattern />
//         </div>
      
//         <div className="flex flex-col justify-evenly items-center relative sm:flex-col md:flex-row lg:flex-row"
//         >  
//           <div className="flex flex-col w-[95%] xl:min-w-[45%] xl:max-w-[45%] lg:min-w-[40%] lg:max-w-[40%] md:min-w-[45%] md:max-w-[45%] sm:min-w-[75%] sm:max-w-[75%] xs:min-w-[90%] xs:max-w-[90%]">
//             <h1 className="animate-fade-in-left-d text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-0 :mb-8 md:mb-8 lg:mb-8 mt-6 px-4 text-yellow-20 text-center relative z-10" style={{ textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black` }}>
//               Klub Ljubitelja Društvenih Igara
//             </h1>

//             <Link href="/">
//               <Image
//                 src="/shega_logo23.png"
//                 alt="logo"
//                 width={514}
//                 height={486}
//                 sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 className="animate-fade-in-left mx-auto w-full h-[8rem]  xs:w-[30rem] xs:h-[11rem] sm:w-[27rem] sm:h-[9rem] md:w-[30rem] md:h-[15rem] lg:w-[36rem] lg:h-[18rem] xl:w-[36rem] xl:h-[20rem] xxl:w-[36rem] xxl:h-[20rem] object-cover"
//                 loading="lazy" // Enable lazy loading
//               />
//             </Link>
//           </div>

//           <div className='animate-zoom-in-from-zero flex flex-col w-[96%] xxl:min-w-[32%] xxl:max-w-[32%] xl:min-w-[40%] xl:max-w-[40%] lg:min-w-[47%] lg:max-w-[47%] md:min-w-[47%] md:max-w-[47%] sm:min-w-[75%] sm:max-w-[75%] xs:min-w-[90%] xs:max-w-[90%]  '>
//             <div className="rounded-full bg-yellow-500 overflow-hidden" style={{
//               boxShadow: 'rgba(0, 0, 0, 0.8) 0 0 7px 2px, rgba(0, 0, 0, 0.7) 6px 5px 3px, rgba(255, 255, 0, 0.8) 0 8px 10px inset, rgba(0, 0, 0, 0.7) 10px 40px 10px inset, rgba(255, 255, 0, 0.1) 0 -7px 20px inset',
//               border: '18px solid yellow',
//               padding: '10px',
//               marginBottom: '1rem',
//               marginTop: '1rem',
//             }}>
//               <Swiper
//                 autoplay={{
//                   delay: 3000,
//                   disableOnInteraction: false,
//                 }}
//                 spaceBetween={10}
//                 slidesPerView={1}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//                 modules={[Autoplay]}
//                 className="rounded-full shrink max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container "
//               >
//                 {IMAGES.map((image, index) => (
//                   <SwiperSlide key={index} className="swiper-slide rounded-full border-8 border-yellow-20">
//                     <div className="relative" style={{ paddingBottom: '100%', aspectRatio: '1 / 1 ' }}>
//                       <Image
//                         src={image.src}
//                         alt={image.alt}
//                         sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                         className="rounded-full"
//                         fill
//                         loading="lazy" // Enable lazy loading
                  
//                       />
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//       </AnimateInView>
//     </>
//   );
// };

// export default Starting;
