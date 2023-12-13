
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from './Button';
import { scroller } from 'react-scroll';
import { IMAGES } from '@/constants/images';
import OrangeBgPattern from './OrangeBgPattern';
import AnimateInView from './AnimateInView';

const Games = () => {
  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
    });
  };

  return (
    <div
      id="/games"
      onClick={() => scrollToSection('games')}
      className="flex flex-col justify-center w-full h-full relative"
    >
      {/* Orange background pattern */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <OrangeBgPattern />
      </div>

      {/* Heading */}
      <AnimateInView  h1={true} animationClass="animate-zoom-in-from-zero text-[2.2rem] font-bold leading-none xs:text-5xl  sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-8 mt-6 px-4 text-blue-500 text-center relative z-10"
        style={{
          textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
        }}
      ><h1>
        Igre Koje Vas Očekuju U Shegi
      </h1>
      </AnimateInView>
      {/* Swiper container */}
     
      <AnimateInView animationClass="animate-fade-in-right flex justify-center items-center relative ">
        <div className="flex flex-1 w-full relative">
          {/* Stylish rounded container with box shadow and border */}
          {/* className="rounded-full flex bg-blue-400 mb-6 overflow-hidden w-[18rem] h-[18rem] lg:w-[90%] lg:h-[23rem] md:w-[90%] md:h-[23rem] sm:w-[34rem] sm:h-[34rem] xs:w-[26rem] xs:h-[26rem] mx-auto" */}
          <div
            className="rounded-full flex bg-blue-400 mb-6 overflow-hidden w-[96%] lg:w-[90%] md:w-[90%] sm:w-[80%] xs:w-[90%] mx-auto"
            style={{
              boxShadow: `
                rgba(0, 0, 0, 0.8) 0 0 7px 2px,  /* Black outer shadow */
                rgba(0, 0, 0, 0.7) 6px 5px 3px,  /* LightBlue inner shadow */
                rgba(0, 0, 255, 0.8) 0 8px 10px inset,  /* Blue inner shadow */
                rgba(0, 0, 0, 0.7) 10px 40px 10px inset,  /* Black inner shadow */
                rgba(173, 216, 230, 0.8) 10px 45px 5px inset,  /* LightBlue inner shadow */
                rgba(0, 0, 255, 0.8) 0 -7px 20px inset  /* Blue inner shadow */
              `,
              border: '18px solid #3B82F6',
              padding: '10px',
            }}
          >
            {/* Swiper component */}
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
              {/* Swiper slides */}
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
                        className="rounded-full border-8 border-blue-400 w-full  max-w-[39rem] max-h-[39rem]"
                        loading="lazy" // Enable lazy loading
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        </AnimateInView>
    </div>
  );
};

export default Games;

