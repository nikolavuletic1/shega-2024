
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { scroller } from 'react-scroll';
import { IMAGES_PEOPLE } from '@/constants/images-people';
import RedBgPattern from '@/components/RedBgPattern';
import CircleSocial from '@/components/CircleSocial';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
// import AnimateInView from '@/components/AnimateInView';
import { useSearchParams } from 'next/navigation';
import router from 'next/router';
import { motion } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

export default function About() {
  const [searchParams] = useSearchParams();
  const asPath = searchParams ? searchParams.toString() : '';

  const [ref, inView] = useInView({
    threshold: 0.01, // Adjust the threshold as needed
  });

  const [ref1, inView1] = useInView({
    threshold: 0.01,
  });
  

    const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
    });
  };


  return (
    // <div
    //   id="/about"
      <div
      
 
   
      id="/about"
      onClick={() => scrollToSection('about')}
      className='relative bg-red-20 bg-cover
      flex flex-col justify-center mt-[0rem] xl:mt-[0rem] lg:mt-[0rem] md:mt-[0rem] sm:mt-[0rem] h-full'>
      <RedBgPattern />


      <div
 

  className="flex flex-col items-center justify-evenly relative sm:flex-col md:flex-row lg:flex-row h-full"
>

  <motion.div 
    ref={ref}
    initial={{ opacity: 0, scale: 0 }}
    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
    transition={{ duration: 0.8 }}
    className='rounded-full w-[96%] xxl:min-w-[32%] xxl:max-w-[32%] flex order-1 lg:min-w-[45%] lg:max-w-[45%] md:min-w-[48%] md:max-w-[48%] sm:min-w-[80%] sm:max-w-[80%] xs:min-w-[90%] xs:max-w-[90%] bg-yellow-500 overflow-hidden border-4 h-full '
    style={{
      boxShadow: `
        rgba(0, 0, 0, 0.8) 0 0 7px 2px,  /* Black outer shadow */
        rgba(0, 0, 0, 0.7) 6px 5px 3px,  /* Yellow inner shadow */
        rgba(255, 255, 0, 0.8) 0 8px 10px inset,  /* Yellow inner shadow */
        rgba(0, 0, 0, 0.7) 10px 40px 10px inset,  /* Black inner shadow */
        rgba(255, 255, 0, 0.1) 0 -7px 20px inset  /* Yellow inner shadow */
      `,
      border: '18px solid yellow',
      padding: '10px',
      marginBottom: '1rem',
      marginTop: '1rem',
    }}
 >
    <div className="rounded-full w-full max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container h-full">
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
        className="rounded-full w-full max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container h-full"
      >
        {IMAGES_PEOPLE.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide rounded-full border-8 border-yellow-20 h-full">
            <div className="relative" style={{ paddingBottom: '100%', aspectRatio: '1 / 1 ' }}>
              <Image
                src={image.src}
                alt={image.alt}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-full h-full"
                style={{ objectFit: 'cover' }}
                fill
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </motion.div>

  <div
   
   
    className="text-center mt-4 md:order-1 h-full"
>
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, transform: 'translateX(100%) translateY(0%)' }}
        animate={inView ? { opacity: 1, transform: 'translateX(0) translateY(0)' } : { opacity: 0, transform: 'translateX(100%) translateY(0%)' }}
        transition={{ duration: 0.8 }} className="relative pb-8 max-w-[16rem] xs:max-w-[23rem] sm:max-w-[40rem] md:max-w-[22rem] lg:max-w-[28rem] xl:max-w-[28rem] z-10 h-full">
        <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline h-full">
          O Nama
        </h1>
        <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide font-outline-1 h-full">
          Klub društvenih igara Shega iz Vršca je mesto gde se okupljaju ljubitelji ovakve
          vrste zabave. U prijatnom ambijentu se možete družiti i nadigravati sa vašim
          prijateljima, kao i upoznati nove. Klub se nalazi u centru grada, u ulici Vuka
          Karadžića 10. Termine možete zakazivati na telefon: 060-123-456. Takođe radujemo se
          druženju sa Vama na našim društvenim mrežama!
        </p>
      </motion.div>
    </div>
  </div>

</div>

 
      {/* Placeholder for the missing code (RedBgPattern and CircleSocial) */}

      <div className="flex flex-col items-center text-center my-4 md:flex-row-reverse lg:flex-row-reverse justify-evenly h-full">
        <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem]">
          <motion.div
            ref={ref1}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
           className="flex items-center justify-evenly lg:h-[10rem] xl:h-[10rem] xxl:h-[10rem] h-full"
         
          >
            {/* Replace the following with the actual implementation */}
            <CircleSocial />
          </motion.div>
        </div>

        <div className="relative py-8 max-w-[16rem] xs:max-w-[23rem] sm:max-w-[40rem] md:max-w-[22rem] lg:max-w-[28rem] xl:max-w-[28rem] z-10 h-full">
        <motion.div 
          ref={ref1}
          initial={{ opacity: 0, transform: 'translateX(-100%) translateY(0%)' }}
          animate={inView1 ? { opacity: 1, transform: 'translateX(0) translateY(0)' } : { opacity: 0, transform: 'translateX(-100%) translateY(0%)' }}
    transition={{ duration: 0.8 }}
           className=""
          
          >
            <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline h-full">
              Naša Priča
            </h1>
            <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide sm-font-outline nav-font-outline-1 h-full">
              Dobrodošli u carstvo druženja, gde su igre ozbiljna stvar, a ozbiljnost je dozvoljena
              samo dok ne prokockate sve resurse za pobedu. Pripremite se za igru, smeh do suza
              i poneki taktički potez o kome ćete pričati sa vašim starim i novim drugarima iz
              Shega :) Spremni, pozicionirajte figure, bacite kocku, i neka društvena avantura
              počne! Dobrodošli!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}





// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { scroller } from 'react-scroll';
// import { IMAGES_PEOPLE } from '@/constants/images-people';
// import RedBgPattern from './RedBgPattern'; // Replace with the actual import
// import CircleSocial from './CircleSocial'; // Replace with the actual import
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Image from 'next/image';
// import AnimateInView from './AnimateInView';

// export default function About() {
//   const [isSectionInView, setIsSectionInView] = useState(false);

//   const handleInViewChange = (isVisible: boolean) => {
//     setIsSectionInView(isVisible);
//   };

//   const scrollToSection = (sectionId: string) => {
//     scroller.scrollTo(sectionId, {
//       smooth: true,
//       duration: 500,
//     });
//   };

//   return (
//     <div
//       id="/about"
//       onClick={() => scrollToSection('about')}
//       className={`relative bg-red-20 bg-cover ${
//         isSectionInView ? 'min-h-screen' : ''
//       } flex flex-col justify-center mt-[0rem] xl:mt-[0rem] lg:mt-[0rem] md:mt-[0rem] sm:mt-[0rem]`}
//     >
//       <RedBgPattern />

//       <div className="flex flex-col items-center justify-evenly relative sm:flex-col md:flex-row lg:flex-row">
//         <AnimateInView
//           animationClass={`animate-zoom-in-from-zero rounded-full w-[96%] xxl:min-w-[32%] xxl:max-w-[32%] flex order-1 lg:min-w-[45%] lg:max-w-[45%] md:min-w-[48%] md:max-w-[48%] sm:min-w-[80%] sm:max-w-[80%] xs:min-w-[90%] xs:max-w-[90%] bg-yellow-500 overflow-hidden border-4 ${
//             isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}
//           style={{
//             boxShadow: `
//               rgba(0, 0, 0, 0.8) 0 0 7px 2px,  /* Black outer shadow */
//               rgba(0, 0, 0, 0.7) 6px 5px 3px,  /* Yellow inner shadow */
//               rgba(255, 255, 0, 0.8) 0 8px 10px inset,  /* Yellow inner shadow */
//               rgba(0, 0, 0, 0.7) 10px 40px 10px inset,  /* Black inner shadow */
//               rgba(255, 255, 0, 0.1) 0 -7px 20px inset  /* Yellow inner shadow */
//             `,
//             border: '18px solid yellow',
//             padding: '10px',
//             marginBottom: '1rem',
//             marginTop: '1rem',
//           }}
//           onInViewChange={handleInViewChange}
//         >
//           <div className="rounded-full w-full max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container">
//             <Swiper
//               autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//               }}
//               spaceBetween={10}
//               slidesPerView={1}
//               onSlideChange={() => console.log('slide change')}
//               onSwiper={(swiper) => console.log(swiper)}
//               modules={[Autoplay]}
//               className="rounded-full w-full max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container"
//             >
//               {IMAGES_PEOPLE.map((image, index) => (
//                 <SwiperSlide key={index} className="swiper-slide rounded-full border-8 border-yellow-20">
//                   <div className="relative" style={{ paddingBottom: '100%', aspectRatio: '1 / 1 ' }}>
//                     <Image
//                       src={image.src}
//                       alt={image.alt}
//                       sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       className="rounded-full"
//                       style={{ objectFit: 'cover' }}
//                       fill
//                       loading="lazy"
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </AnimateInView>

//         <AnimateInView
//           animationClass="animate-fade-in-right text-center mt-4 md:order-1"
//           onInViewChange={handleInViewChange}
//         >
//           <div>
//             <div className="relative pb-8 max-w-[16rem] xs:max-w-[23rem] sm:max-w-[40rem] md:max-w-[22rem] lg:max-w-[28rem] xl:max-w-[28rem] z-10">
//               <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline">
//                 O Nama
//               </h1>
//               <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide font-outline-1">
//                 Klub društvenih igara Shega iz Vršca je mesto gde se okupljaju ljubitelji ovakve
//                 vrste zabave. U prijatnom ambijentu se možete družiti i nadigravati sa vašim
//                 prijateljima, kao i upoznati nove. Klub se nalazi u centru grada, u ulici Vuka
//                 Karadžića 10. Termine možete zakazivati na telefon: 060-123-456. Takođe radujemo se
//                 druženju sa Vama na našim društvenim mrežama!
//               </p>
//             </div>
//           </div>
//         </AnimateInView>
//       </div>

//       {/* Placeholder for the missing code (RedBgPattern and CircleSocial) */}

//       <div className="flex flex-col items-center text-center my-4 md:flex-row-reverse lg:flex-row-reverse justify-evenly">
//         <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem]">
//           <AnimateInView
//             animationClass="animate-zoom-in-from-zero flex items-center justify-evenly h-[7rem] lg:h-[10rem] xl:h-[10rem] xxl:h-[10rem]"
//             onInViewChange={handleInViewChange}
//           >
//             {/* Replace the following with the actual implementation */}
//             <CircleSocial />
//           </AnimateInView>
//         </div>

//         <div className="relative py-8 max-w-[16rem] xs:max-w-[23rem] sm:max-w-[40rem] md:max-w-[22rem] lg:max-w-[28rem] xl:max-w-[28rem] z-10">
//           <AnimateInView
//             animationClass="animate-fade-in-left"
//             onInViewChange={handleInViewChange}
//           >
//             <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline">
//               Naša Priča
//             </h1>
//             <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide sm-font-outline nav-font-outline-1">
//               Dobrodošli u carstvo druženja, gde su igre ozbiljna stvar, a ozbiljnost je dozvoljena
//               samo dok ne prokockate sve resurse za pobedu. Pripremite se za igru, smeh do suza
//               i poneki taktički potez o kome ćete pričati sa vašim starim i novim drugarima iz
//               Shega :) Spremni, pozicionirajte figure, bacite kocku, i neka društvena avantura
//               počne! Dobrodošli!
//             </p>
//           </AnimateInView>
//         </div>
//       </div>
//     </div>
//   );
// }


