
// import Image from 'next/image';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Button from './Button';
// import { scroller } from 'react-scroll';
// import { IMAGES } from '@/constants/images';
// import OrangeBgPattern from './OrangeBgPattern';
// import AnimateInView from './AnimateInView';
// import AnimateInViewAbout from './AnimateInViewAbout';

// const Games = () => {
//   // const scrollToSection = (sectionId: string) => {
//   //   scroller.scrollTo(sectionId, {
//   //     smooth: true,
//   //     duration: 500,
//   //   });
//   // };

//   return (
//     <div
//       id="/games"
//       // onClick={() => scrollToSection('games')}
  
//       className="flex flex-col justify-center w-full h-full relative"
//     >
//       {/* Orange background pattern */}
//       <div
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           pointerEvents: 'none',
//         }}
//       >
//         <OrangeBgPattern />
//       </div>

//       {/* Heading */}
//       <AnimateInView animationClass="animate-zoom-in-from-zero text-[2.2rem] font-bold leading-none xs:text-5xl  sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-8 mt-6 px-4 text-blue-500 text-center relative z-10"
//         style={{
//           textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//         }}
//       ><h1>
//         Igre Koje Vas Očekuju U Shegi
//       </h1>
//       </AnimateInView>
//       {/* Swiper container */}
     
//       <AnimateInView animationClass="animate-fade-in-right flex justify-center items-center relative ">
//         <div className="flex flex-1 w-full relative">
//           {/* Stylish rounded container with box shadow and border */}
//           {/* className="rounded-full flex bg-blue-400 mb-6 overflow-hidden w-[18rem] h-[18rem] lg:w-[90%] lg:h-[23rem] md:w-[90%] md:h-[23rem] sm:w-[34rem] sm:h-[34rem] xs:w-[26rem] xs:h-[26rem] mx-auto" */}
//           <div
//             className="rounded-full flex blueBox bg-blue-400 mb-6 overflow-hidden w-[96%] lg:w-[90%] md:w-[90%] sm:w-[80%] xs:w-[90%] mx-auto"
//             // style={{
//             //   boxShadow: `
//             //     rgba(0, 0, 0, 0.8) 0 0 7px 2px,  /* Black outer shadow */
//             //     rgba(0, 0, 0, 0.7) 6px 5px 3px,  /* LightBlue inner shadow */
//             //     rgba(0, 0, 255, 0.8) 0 8px 10px inset,  /* Blue inner shadow */
//             //     rgba(0, 0, 0, 0.7) 10px 40px 10px inset,  /* Black inner shadow */
//             //     rgba(173, 216, 230, 0.8) 10px 45px 5px inset,  /* LightBlue inner shadow */
//             //     rgba(0, 0, 255, 0.8) 0 -7px 20px inset  /* Blue inner shadow */
//             //   `,
//             //   border: '18px solid #3B82F6',
//             //   padding: '10px',
//             // }}
//           >
//             {/* Swiper component */}
//             <Swiper
//               autoplay={{
//                 delay: 6000,
//                 disableOnInteraction: false,
//               }}
//               spaceBetween={50}
//               slidesPerView={1}
//               slidesPerGroup={1}
//               breakpoints={{
//                 640: {
//                   slidesPerView: 1,
//                   slidesPerGroup: 1,
//                 },
//                 768: {
//                   slidesPerView: 2,
//                   slidesPerGroup: 2,
//                 },
//                 1024: {
//                   slidesPerView: 3,
//                   slidesPerGroup: 3,
//                 },
//               }}
//               onSlideChange={() => console.log('slide change')}
//               onSwiper={(swiper) => console.log(swiper)}
//               modules={[Autoplay, Pagination, Navigation]}
//               className="rounded-full w-full h-full bg-blue-700 flex justify-center"
//             >
//               {/* Swiper slides */}
//               {IMAGES.map((image, index) => (
//                 <SwiperSlide
//                   key={index}
//                   className="relative swiper-slide flex items-center justify-center mt-1"
//                 >
//                   <div className="relative m-auto w-full h-full flex items-center justify-center">
//                     <div className="inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300 z-[100]">
//                       <Button href={image.href} />
//                     </div>
//                     <div className="w-full h-full  flex justify-center">
//                       <Image
//                         src={image.src}
//                         alt={image.alt}
//                         width={400}
//                         height={400}
//                         style={{ objectFit: 'cover' }}
//                         className="rounded-full border-8 border-blue-400 w-full  max-w-[39rem] max-h-[39rem]"
//                       />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//         </AnimateInView>
//     </div>
//   );
// };

// export default Games;



// import Image from 'next/image';
// // Games.tsx
// import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { scroller, Element } from 'react-scroll';
// import { IMAGES } from '@/constants/images';
// import OrangeBgPattern from './OrangeBgPattern';
// import AnimateInView from './AnimateInView';
// import Button from './Button';

// const Games = () => {
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

//   const resetScrollPosition = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     resetScrollPosition();
//     return () => resetScrollPosition();
//   }, [])

//   return (
//     <Element
//     name='/games'
//       // id="/games"
      
//       // onClick={() => scrollToSection('games')}
//       className={`flex flex-col  bg-blue-20 justify-center w-full h-full ${
//         isSectionInView ? 'min-h-screen' : ''
//       } relative`}
//     >
//       <OrangeBgPattern />

//       <AnimateInView
//         animationClass="animate-zoom-in-from-zero text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-8 mt-6 px-4 text-blue-500 text-center relative z-10"
//         style={{
//           textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//         }}
//         onInViewChange={handleInViewChange}
//       >
//         <h1>Igre Koje Vas Očekuju U Shegi</h1>
//       </AnimateInView>

//       <AnimateInView animationClass="animate-fade-in-right flex justify-center items-center relative">
//         <div className="flex flex-1 w-full relative">
//           <div className="rounded-full flex blueBox bg-blue-400 mb-6 overflow-hidden w-[96%] lg:w-[90%] md:w-[90%] sm:w-[80%] xs:w-[90%] mx-auto">
//             <Swiper
//               autoplay={{
//                 delay: 6000,
//                 disableOnInteraction: false,
//               }}
//               spaceBetween={50}
//               slidesPerView={1}
//               slidesPerGroup={1}
//               breakpoints={{
//                 640: {
//                   slidesPerView: 1,
//                   slidesPerGroup: 1,
//                 },
//                 768: {
//                   slidesPerView: 2,
//                   slidesPerGroup: 2,
//                 },
//                 1024: {
//                   slidesPerView: 3,
//                   slidesPerGroup: 3,
//                 },
//               }}
//               onSlideChange={() => console.log('slide change')}
//               onSwiper={(swiper) => console.log(swiper)}
//               modules={[Autoplay, Pagination, Navigation]}
//               className="rounded-full w-full h-full bg-blue-700 flex justify-center"
//             >
//               {IMAGES.map((image, index) => (
//                 <SwiperSlide
//                   key={index}
//                   className="relative swiper-slide flex items-center justify-center mt-1"
//                 >
//                   <div className="relative m-auto w-full h-full flex items-center justify-center">
//                     <div className="inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300 z-[100]">
//                       <Button href={image.href} />
//                     </div>
//                     <div className="w-full h-full  flex justify-center">
//                       <Image
//                         src={image.src}
//                         alt={image.alt}
//                         width={400}
//                         height={400}
//                         style={{ objectFit: 'cover' }}
//                         className="rounded-full border-8 border-blue-400 w-full max-w-[39rem] max-h-[39rem]"
//                       />
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </AnimateInView>
//     </Element>
//   );
// };

// export default Games;


import Image from 'next/image';
// Games.tsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { scroller, Element } from 'react-scroll';
import { IMAGES } from '@/constants/images';
import OrangeBgPattern from './OrangeBgPattern';
// import AnimateInView from './AnimateInView';
import Button from './Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

  
const Games = () => {
  // const scrollToSection = (sectionId: string) => {
  //   scroller.scrollTo(sectionId, {
  //     smooth: true,
  //     duration: 500,
  //   });
  // };

  // const [isSectionInView, setIsSectionInView] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.01, // Adjust the threshold as needed
  });

  // const handleInViewChange = (isVisible: boolean) => {
  //   setIsSectionInView(isVisible);
  // };

  // const resetScrollPosition = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  // useEffect(() => {
  //   resetScrollPosition();
  //   return () => resetScrollPosition();
  // }, [])

  return (
    <div
    id='/games'
      // id="/games"
      
      // onClick={() => scrollToSection('games')}
      className='flex flex-col bg-yellow-600 justify-evenly w-full min-h-screen relative' 
 
    >
      <OrangeBgPattern />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-0 :mb-8 md:mb-8 lg:mb-8 px-4 text-blue-500 text-center relative z-10"
        style={{
          textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
        }}
      >
        <h1>Igre Koje Vas Očekuju U Shegi</h1>
      </motion.div>

      <div 
      className="flex justify-center items-center relative">
        <div className="flex flex-1 w-full relative">
          <motion.div
           ref={ref}
           initial={{ opacity: 0, transform: 'translateX(100%) translateY(0%)' }}
           animate={inView ? { opacity: 1, transform: 'translateX(0) translateY(0)' } : { opacity: 0, transform: 'translateX(100%) translateY(0%)' }}
           transition={{ duration: 1 }} className="rounded-full flex blueBox bg-blue-400 mb-6 overflow-hidden w-[96%] lg:w-[90%] md:w-[90%] sm:w-[80%] xs:w-[90%] mx-auto">
            <Swiper
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              spaceBetween={50}
              slidesPerView={1}
              slidesPerGroup={1}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Autoplay, Pagination, Navigation]}
              className="rounded-full w-full h-full bg-blue-700 flex justify-center"
            >
              {IMAGES.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="relative swiper-slide flex items-center justify-center mt-1"
                >
                  <div className="relative m-auto w-full h-full flex items-center justify-center">
                    <div className="inset-0 flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300 z-[100]">
                      <Button href={image.href} />
                    </div>
                    <div className="w-full h-full  flex justify-center">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        style={{ objectFit: 'cover' }}
                        className="rounded-full border-8 border-blue-400 w-full max-w-[39rem] max-h-[39rem]"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Games;


