// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { scroller } from 'react-scroll';
// import { IMAGES_PEOPLE } from '@/constants/images-people';
// import RedBgPattern from './RedBgPattern';
// import CircleSocial from './CircleSocial';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Image from 'next/image';


// export default function About() {
//   const scrollToSection = (sectionId: string) => {
//     scroller.scrollTo(sectionId, {
//       smooth: true,
//       duration: 500,
//     });
//   };

//   return (
//     <div id="/about" onClick={() => scrollToSection('about')} className="relative bg-red-20 bg-cover h-full flex flex-col justify-center mt-[0rem] xl:mt-[0rem] lg:mt-[0rem] md:mt-[0rem] sm:mt-[0rem]">
//       {/* Use BgPattern as an overlay */}
//       <RedBgPattern />

//       <div className="flex flex-col items-center justify-evenly relative sm:flex-col md:flex-row lg:flex-row">
//         <div className="animate-zoom-in-from-zero rounded-full w-[96%] xxl:min-w-[32%] xxl:max-w-[32%] flex order-1 lg:min-w-[45%] lg:max-w-[45%] md:min-w-[48%] md:max-w-[48%] sm:min-w-[80%] sm:max-w-[80%] xs:min-w-[90%] xs:max-w-[90%] bg-yellow-500 overflow-hidden border-4" 
//         style={{
//           boxShadow: `
//             rgba(0, 0, 0, 0.8) 0 0 7px 2px,  /* Black outer shadow */
//             rgba(0, 0, 0, 0.7) 6px 5px 3px,  /* Yellow inner shadow */
//             rgba(255, 255, 0, 0.8) 0 8px 10px inset,  /* Yellow inner shadow */
//             rgba(0, 0, 0, 0.7) 10px 40px 10px inset,  /* Black inner shadow */
//             rgba(255, 255, 0, 0.1) 0 -7px 20px inset  /* Yellow inner shadow */
//           `,
//           border: '18px solid yellow',
//           padding: '10px',
//           marginBottom: '1rem',
//           marginTop: '1rem',
//         }}>
//           <Swiper
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             spaceBetween={10}
//             slidesPerView={1}
//             onSlideChange={() => console.log('slide change')}
//             onSwiper={(swiper) => console.log(swiper)}
//             modules={[Autoplay]}
//             className="rounded-full w-full max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container  "
//           >
//             {IMAGES_PEOPLE.map((image, index) => (
//               <SwiperSlide key={index} className="swiper-slide  rounded-full border-8 border-yellow-20">
//                 <div className="relative" style={{ paddingBottom: '100%', aspectRatio: '1 / 1 ' }}>
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     className="rounded-full"
//                     style={{ objectFit: 'cover' }}
//                     fill
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className="animate-fade-in-right w-full  text-center max-w-3xl flex md:order-1 shrink sm:w-[40rem] md:w-80 lg:w-[28rem] xl:w-[28rem] mt-4">
//           <div className="relative pb-8">
//             <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem] z-10">
//               <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline"
//                 style={{
//                   textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//                 }}>O Nama</h1>
//               <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide font-outline-1" style={{
//                 textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,

//               }}>
//                 Klub društvenih igara Shega iz Vršca je mesto gde se okupljaju ljubitelji ovakve vrste zabave.
//                 U prijatnom ambijentu se možete družiti i nadigravati sa vašim prijateljima,
//                 kao i upoznati nove. Klub se nalazi u centru grada, u ulici Vuka Karadžića 10.
//                 Termine možete zakazivati na telefon: 060-123-456.
//                 Takođe radujemo se druženju sa Vama na našim društvenim mrežama!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center text-center my-4 md:flex-row-reverse lg:flex-row-reverse justify-evenly">
//         <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem]">
//           <div className="animate-zoom-in-from-zero flex items-center justify-evenly h-[7rem] lg:h-[10rem] xl:h-[10rem] xxl:h-[10rem] ">
//             <CircleSocial />
//           </div>
//         </div>

//         <div className="animate-fade-in-left relative  py-8">
//           <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem] z-10">
//             <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline" style={{
//               textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//             }}>Naša Priča</h1>
//             <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide sm-font-outline nav-font-outline-1" style={{
//               textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//             }}>
//               Dobrodošli u carstvo druženja, gde su igre ozbiljna stvar, a ozbiljnost je dozvoljena
//               samo dok ne prokockate sve resurse za pobedu. Pripremite se za igru, smeh do suza
//               i poneki taktički potez o kome ćete pričati sa vašim starim i novim drugarima iz Shega :)
//               Spremni, pozicionirajte figure, bacite kocku,
//               i neka društvena avantura počne!
//               Dobrodošli!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { scroller } from 'react-scroll';
// import { IMAGES_PEOPLE } from '@/constants/images-people';
// import RedBgPattern from './RedBgPattern';
// import CircleSocial from './CircleSocial';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Image from 'next/image';
// import { useEffect, useRef, useState } from 'react';

// export default function About() {


//   const sectionRef = useRef(null);
//   const [isSectionVisible, setIsSectionVisible] = useState(false);

//   useEffect(() => {
//     const handleIntersection = (entries: any[]) => {
//       entries.forEach((entry: { isIntersecting: any; }) => {
//         if (entry.isIntersecting) {
//           setIsSectionVisible(true);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(handleIntersection, { threshold: 1 });

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);


//   const scrollToSection = (sectionId: string) => {
//     scroller.scrollTo(sectionId, {
//       smooth: true,
//       duration: 500,
//     });
//   };

//   return (
//       <div
//       id="/about"
//       ref={sectionRef}
//       onClick={() => scrollToSection('about')}
//       className={`relative bg-red-20 bg-cover h-full flex flex-col justify-center mt-[0rem] xl:mt-[0rem] lg:mt-[0rem] md:mt-[0rem] sm:mt-[0rem] ${
//         isSectionVisible ? 'animate-section' : ''
//       }`}
//     >
//       <RedBgPattern />

//       <div className="flex flex-col items-center justify-evenly relative sm:flex-col md:flex-row lg:flex-row">
//         <div className="animate-zoom-in-from-zero rounded-full w-[96%] xxl:min-w-[32%] xxl:max-w-[32%] flex order-1 lg:min-w-[45%] lg:max-w-[45%] md:min-w-[48%] md:max-w-[48%] sm:min-w-[80%] sm:max-w-[80%] xs:min-w-[90%] xs:max-w-[90%] bg-yellow-500 overflow-hidden border-4" 
//         style={{
//           boxShadow: `
//             rgba(0, 0, 0, 0.8) 0 0 7px 2px,
//             rgba(0, 0, 0, 0.7) 6px 5px 3px,
//             rgba(255, 255, 0, 0.8) 0 8px 10px inset,
//             rgba(0, 0, 0, 0.7) 10px 40px 10px inset,
//             rgba(255, 255, 0, 0.1) 0 -7px 20px inset
//           `,
//           border: '18px solid yellow',
//           padding: '10px',
//           marginBottom: '1rem',
//           marginTop: '1rem',
//         }}>
//           <Swiper
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             spaceBetween={10}
//             slidesPerView={1}
//             onSlideChange={() => console.log('slide change')}
//             onSwiper={(swiper) => console.log(swiper)}
//             modules={[Autoplay]}
//             className="rounded-full w-full max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container"
//           >
//             {IMAGES_PEOPLE.map((image, index) => (
//               <SwiperSlide key={index} className="swiper-slide rounded-full border-8 border-yellow-20">
//                 <div className="relative" style={{ paddingBottom: '100%', aspectRatio: '1 / 1 ' }}>
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     className="rounded-full"
//                     style={{ objectFit: 'cover' }}
//                     fill
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         <div className="animate-fade-in-right w-full text-center max-w-3xl flex md:order-1 shrink sm:w-[40rem] md:w-80 lg:w-[28rem] xl:w-[28rem] mt-4">
//           <div className="relative pb-8">
//             <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem] z-10">
//               <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline"
//                 style={{
//                   textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//                 }}>
//                 O Nama
//               </h1>
//               <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide font-outline-1" style={{
//                 textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//               }}>
//                 Klub društvenih igara Shega iz Vršca je mesto gde se okupljaju ljubitelji ovakve vrste zabave.
//                 U prijatnom ambijentu se možete družiti i nadigravati sa vašim prijateljima,
//                 kao i upoznati nove. Klub se nalazi u centru grada, u ulici Vuka Karadžića 10.
//                 Termine možete zakazivati na telefon: 060-123-456.
//                 Takođe radujemo se druženju sa Vama na našim društvenim mrežama!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center text-center my-4 md:flex-row-reverse lg:flex-row-reverse justify-evenly">
//         <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem]">
//           <div className="animate-zoom-in-from-zero flex items-center justify-evenly h-[7rem] lg:h-[10rem] xl:h-[10rem] xxl:h-[10rem] ">
//             <CircleSocial />
//           </div>
//         </div>

//         <div className="animate-fade-in-left relative py-8">
//           <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem] z-10">
//             <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline"
//               style={{
//                 textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//               }}>
//               Naša Priča
//             </h1>
//             <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide sm-font-outline nav-font-outline-1" style={{
//               textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//             }}>
//               Dobrodošli u carstvo druženja, gde su igre ozbiljna stvar, a ozbiljnost je dozvoljena
//               samo dok ne prokockate sve resurse za pobedu. Pripremite se za igru, smeh do suza
//               i poneki taktički potez o kome ćete pričati sa vašim starim i novim drugarima iz Shega :)
//               Spremni, pozicionirajte figure, bacite kocku,
//               i neka društvena avantura počne!
//               Dobrodošli!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { scroller } from 'react-scroll';
// import { IMAGES_PEOPLE } from '@/constants/images-people';
// import RedBgPattern from './RedBgPattern';
// import CircleSocial from './CircleSocial';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Image from 'next/image';
// import AnimateInView from './AnimateInView';

// export default function About() {
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
//       className="relative bg-red-20 bg-cover h-full flex flex-col justify-center mt-[0rem] xl:mt-[0rem] lg:mt-[0rem] md:mt-[0rem] sm:mt-[0rem]"
//     >
//       <RedBgPattern />

//       <div className="flex flex-col items-center justify-evenly relative sm:flex-col md:flex-row lg:flex-row">
//         <AnimateInView animationClass="animate-zoom-in-from-zero rounded-full w-[96%]">
//           <Swiper
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             spaceBetween={10}
//             slidesPerView={1}
//             onSlideChange={() => console.log('slide change')}
//             onSwiper={(swiper) => console.log(swiper)}
//             modules={[Autoplay]}
//             className="rounded-full w-full max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container"
//           >
//             {IMAGES_PEOPLE.map((image, index) => (
//               <SwiperSlide key={index} className="swiper-slide rounded-full border-8 border-yellow-20">
//                 <div className="relative" style={{ paddingBottom: '100%', aspectRatio: '1 / 1 ' }}>
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                     className="rounded-full"
//                     style={{ objectFit: 'cover' }}
//                     fill
//                   />
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </AnimateInView>

//         <AnimateInView animationClass="animate-fade-in-right w-full mt-4">
//           <div>
//             <div className="relative pb-8">
//               <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem] z-10">
//                 <h1
//                   className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline"
//                   style={{
//                     textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//                   }}
//                 >
//                   O Nama
//                 </h1>
//                 <p
//                   className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide font-outline-1"
//                   style={{
//                     textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//                   }}
//                 >
//                   Klub društvenih igara Shega iz Vršca je mesto gde se okupljaju ljubitelji ovakve vrste zabave.
//                   U prijatnom ambijentu se možete družiti i nadigravati sa vašim prijateljima,
//                   kao i upoznati nove. Klub se nalazi u centru grada, u ulici Vuka Karadžića 10.
//                   Termine možete zakazivati na telefon: 060-123-456.
//                   Takođe radujemo se druženju sa Vama na našim društvenim mrežama!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </AnimateInView>
//       </div>

//       {/* ... Remaining code ... */}
//     </div>
//   );
// }




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { scroller } from 'react-scroll';
import { IMAGES_PEOPLE } from '@/constants/images-people';
import RedBgPattern from './RedBgPattern'; // Replace with the actual import
import CircleSocial from './CircleSocial'; // Replace with the actual import
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import AnimateInView from './AnimateInView';

export default function About() {
  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div id="/about" onClick={() => scrollToSection('about')} className="relative bg-red-20 bg-cover h-full flex flex-col justify-center mt-[0rem] xl:mt-[0rem] lg:mt-[0rem] md:mt-[0rem] sm:mt-[0rem]">
      {/* Use RedBgPattern as an overlay */}
      <RedBgPattern />

      <div className="flex flex-col items-center justify-evenly relative sm:flex-col md:flex-row lg:flex-row">
      <AnimateInView animationClass="animate-zoom-in-from-zero rounded-full w-[96%] xxl:min-w-[32%] xxl:max-w-[32%] flex order-1 lg:min-w-[45%] lg:max-w-[45%] md:min-w-[48%] md:max-w-[48%] sm:min-w-[80%] sm:max-w-[80%] xs:min-w-[90%] xs:max-w-[90%] bg-yellow-500 overflow-hidden border-4"
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
          }}>
          <div className="animate-zoom-in-from-zero rounded-full w-full max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container">
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
              className="rounded-full w-full max-w-[39rem] max-h-[38rem] overflow-hidden swiper-container"
            >
              {IMAGES_PEOPLE.map((image, index) => (
                <SwiperSlide key={index} className="swiper-slide rounded-full border-8 border-yellow-20">
                  <div className="relative" style={{ paddingBottom: '100%', aspectRatio: '1 / 1 ' }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-full"
                      style={{ objectFit: 'cover' }}
                      fill
                      loading="lazy" // Enable lazy loading
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </AnimateInView>
        {/* </div> */}

        <AnimateInView animationClass="animate-fade-in-right text-center   mt-4 md:order-1">
          <div>
            <div className="relative pb-8  ">
              <div className="max-w-[16rem]  xs:max-w-[23rem] sm:max-w-[40rem] md:max-w-[22rem] lg:max-w-[28rem] xl:max-w-[28rem] z-10">
                <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline"
                  style={{
                    textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
                  }}>O Nama</h1>
                <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide font-outline-1" style={{
                  textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
                }}>
                  Klub društvenih igara Shega iz Vršca je mesto gde se okupljaju ljubitelji ovakve vrste zabave.
                  U prijatnom ambijentu se možete družiti i nadigravati sa vašim prijateljima,
                  kao i upoznati nove. Klub se nalazi u centru grada, u ulici Vuka Karadžića 10.
                  Termine možete zakazivati na telefon: 060-123-456.
                  Takođe radujemo se druženju sa Vama na našim društvenim mrežama!
                </p>
              </div>
            </div>
          </div>
        </AnimateInView>
      </div>

      {/* Placeholder for the missing code (RedBgPattern and CircleSocial) */}

      <div className="flex flex-col items-center text-center my-4 md:flex-row-reverse lg:flex-row-reverse justify-evenly">
        <div className="w-full max-w-[40rem] shrink md:w-80 lg:w-[28rem] xl:w-[28rem]">
        <AnimateInView animationClass="animate-zoom-in-from-zero flex items-center justify-evenly h-[7rem] lg:h-[10rem] xl:h-[10rem] xxl:h-[10rem] ">
            {/* Replace the following with the actual implementation */}
            <CircleSocial />
            </AnimateInView>
        </div>

      <div className="relative py-8">
       <AnimateInView animationClass=" animate-fade-in-left max-w-[16rem]  xs:max-w-[23rem] sm:max-w-[40rem] md:max-w-[22rem] lg:max-w-[28rem] xl:max-w-[28rem] z-10">
            <h1 className="text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-4 text-yellow-20 sm-font-outline" style={{
              textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
            }}>Naša Priča</h1>
            <p className="text-xl text-yellow-20 leading-relaxed font-bold tracking-wide sm-font-outline nav-font-outline-1" style={{
              textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
            }}>
              Dobrodošli u carstvo druženja, gde su igre ozbiljna stvar, a ozbiljnost je dozvoljena
              samo dok ne prokockate sve resurse za pobedu. Pripremite se za igru, smeh do suza
              i poneki taktički potez o kome ćete pričati sa vašim starim i novim drugarima iz Shega :)
              Spremni, pozicionirajte figure, bacite kocku,
              i neka društvena avantura počne!
              Dobrodošli!
            </p>
            </AnimateInView>
          </div>
      
      </div>
    </div>
  );
}
