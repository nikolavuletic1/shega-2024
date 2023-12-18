
// // Import necessary modules and components

// import React, { useRef, useState } from 'react';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
// import Image from 'next/image';
// import BlueBgPattern from './BlueBgPattern';
// import AnimateInView from './AnimateInView';



// // Define the Footer component
// const Footer = () => {


//   const [statusMessage, setStatusMessage] = useState('');
//   const form = useRef<HTMLFormElement | null>(null);



//   // Function to send email
//   const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       if (form.current) {
//         const result = await emailjs.sendForm(
//           process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//           process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//           form.current,
//           process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
//         );

//         console.log(result.text);
//         setStatusMessage('Uspešno Ste Poslali Poruku. Očekujte Naš Odgovor.');
//         form.current.reset(); // Reset the form fields
//       }
//     } catch (error) {
//       if (isEmailJSResponseStatus(error)) {
//         console.error(error.text);
//         setStatusMessage('Neuspelo Slanje Poruke. Molim Pokušajte Ponovo.');
//       } else {
//         console.error(error); // Log the entire error object for further inspection
//         setStatusMessage('Neuspelo Slanje Poruke. Molim Pokušajte Ponovo.');
//       }
//     }
//   };

//   function isEmailJSResponseStatus(value: any): value is EmailJSResponseStatus {
//     return value && typeof value === 'object' && 'text' in value;
//   }

//   // JSX structure for the Footer component
//   return (
//     <div id="/contact" className="flex flex-1 bg-blue-20 justify-center flex-col w-full h-full relative ">
//       <BlueBgPattern />

//       <AnimateInView
//         animationClass="animate-zoom-in-from-zero text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-8 mt-6 px-4 text-yellow-20 mx-auto text-center z-10"
//         style={{
//           textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//         }}
//       >
//         <h1>
//           Imate Neko Pitanje, Ili Sugestiju? Pišite Nam :-)
//         </h1>
//       </AnimateInView>

//       <div className="flex flex-col flex-1 lg:flex-row justify-evenly w-[90%] h-3/4 mx-auto relative">
//         {/* Form section */}
//         <AnimateInView
//           animationClass="animate-fade-in-left border-8 border-blue-70 w-[95%] mx-auto lg:w-[65%] p-3 md:h-[24rem] rounded-3xl"
//         >
//           <form
//             className="sm:w-full mx-auto p-2 flex flex-col justify-between h-full"
//             action=""
//             method="post"
//             onSubmit={sendEmail}
//             ref={form}
//           >
//             {statusMessage && (
//               <div className="text-center sm-font-outline self-center mb-3 px-4 rounded-md bg-blue-50 border-2 border-blue-70">
//                 <p className="text-xl text-yellow-20 focus:outline-none transition ease-in-out duration-300">
//                   {statusMessage}
//                 </p>
//               </div>
//             )}

//             {/* Input fields */}
//             <div className="sm:flex-col lg:flex">
//               <div className="flex flex-col text-2xl">
//                 Ime:
//                 <label htmlFor="user_name" className="sr-only" />
//                 <input
//                   type="name"
//                   name="user_name"
//                   id="user_name"
//                   autoComplete="user_name"
//                   aria-labelledby="user_name"
//                   className="input-field bg-transparent border-b-2 border-blue-70 focus:yellow-500 text-blue-70 text-xl focus:outline-none focus:outline-blue-70 rounded-sm mt-3"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col mt-3 text-2xl">
//                 Email:
//                 <label htmlFor="user_email" className="sr-only" />
//                 <input
//                   type="email"
//                   name="user_email"
//                   id="user_email"
//                   autoComplete="user_email"
//                   aria-labelledby="user_email_label"
//                   className="input-field bg-transparent border-b-2 border-blue-70 focus:yellow-500 text-blue-70 text-xl focus:outline-none focus:outline-blue-70 rounded-sm mt-3"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Textarea for message */}
//             <div className="sm:flex-col lg:flex mt-3 text-2xl">
//               Poruka:
//               <label htmlFor="user_message" className="sr-only" />
//               <textarea
//                 name="message"
//                 autoComplete="user_name"
//                 id="user_message"
//                 aria-labelledby="user_message_label"
//                 className="input-field resize-none h-14 w-full lg:w-[calc(100%-1rem)] bg-transparent border-b-2  text-blue-702 border-blue-70 text-xl focus:outline-none focus:outline-blue-70 rounded-sm custom-scrollbar mt-3"
//                 required
//               />
//             </div>

//             {/* Submit button */}
//             <input
//               type="submit"
//               value="Pošalji"
//               className="text-blue-70 text-xl self-center m-3 px-6 border-2 border-blue-70 rounded-full hover:bg-blue-50 hover:text-yellow-20 hover:border-blue-70 focus:outline-none transition ease-in-out duration-300"
//             />
//           </form>
//         </AnimateInView>

//         {/* Image section */}
//         <AnimateInView animationClass="animate-fade-in-right flex items-center justify-center">
//           <Image
//             src="/shega_logo23.png"
//             alt="Shega Logo"
//             width={960}
//             height={720}
//             className=" w-full h-64 xl:w-[30rem] xl:h-[20rem] object-cover hidden lg:block"
//           />
//         </AnimateInView>
//       </div>

//       {/* Copyright section */}
//       <p className="flex flex-1 text-blue-70 font-medium text-2xl justify-center m-3 z-10">© Shega 2024</p>
//     </div>
//   );
// };

// export default Footer;


// // Import necessary modules and components
// import React, { useRef, useState } from 'react';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
// import Image from 'next/image';
// import BlueBgPattern from './BlueBgPattern';
// import AnimateInView from './AnimateInView';
// import { scroller } from 'react-scroll';

// // Define the Footer component
// const Footer = () => {
//   const [statusMessage, setStatusMessage] = useState('');
//   const form = useRef<HTMLFormElement | null>(null);
//   const [isSectionInView, setIsSectionInView] = useState(false);

//   // Function to send email
//   const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       if (form.current) {
//         const result = await emailjs.sendForm(
//           process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//           process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//           form.current,
//           process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
//         );

//         console.log(result.text);
//         setStatusMessage('Uspešno Ste Poslali Poruku. Očekujte Naš Odgovor.');
//         form.current.reset(); // Reset the form fields
//       }
//     } catch (error) {
//       if (isEmailJSResponseStatus(error)) {
//         console.error(error.text);
//         setStatusMessage('Neuspelo Slanje Poruke. Molim Pokušajte Ponovo.');
//       } else {
//         console.error(error); // Log the entire error object for further inspection
//         setStatusMessage('Neuspelo Slanje Poruke. Molim Pokušajte Ponovo.');
//       }
//     }
//   };

//   function isEmailJSResponseStatus(value: any): value is EmailJSResponseStatus {
//     return value && typeof value === 'object' && 'text' in value;
//   }

//   const scrollToSection = (sectionId: string) => {
//     scroller.scrollTo(sectionId, {
//       smooth: true,
//       duration: 500,
//       containerId: 'contact'
//     });
//   };
  
//   // const scrollToSection = (sectionId: string) => {
//   //   scroller.scrollTo(sectionId, {
//   //     smooth: true,
//   //     duration: 500,
//   //     containerId: 'contact',
//   //     offset: -50, // Adjust this value based on your layout
//   //   });
//   // };
  
 

//   // JSX structure for the Footer component
//   return (
//     <div
//       id="/contact"
//       onClick={() => scrollToSection('contact')}
//       className={`flex flex-1 bg-blue-20 justify-center flex-col w-full h-full relative ${
//         isSectionInView ? 'min-h-[22rem]' : ''
//       }`}
//     >
//       <BlueBgPattern />

//       <AnimateInView
//         animationClass="animate-zoom-in-from-zero text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-8 mt-6 px-4 text-yellow-20 mx-auto text-center z-10"
//         style={{
//           textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
//         }}
//         onInViewChange={(isVisible: boolean) => setIsSectionInView(isVisible)}
//       >
//         <h1>Imate Neko Pitanje, Ili Sugestiju? Pišite Nam :-)</h1>
//       </AnimateInView>

//       <div className="flex flex-col flex-1 lg:flex-row justify-evenly w-[90%] h-3/4 mx-auto relative">
//         {/* Form section */}
//         <AnimateInView
//           animationClass="animate-fade-in-left border-8 border-blue-70 w-[95%] mx-auto lg:w-[65%] p-3 md:h-[24rem] rounded-3xl"
//         >
//           <form
//             className="sm:w-full mx-auto p-2 flex flex-col justify-between h-full"
//             action=""
//             method="post"
//             onSubmit={sendEmail}
//             ref={form}
//           >
//             {statusMessage && (
//               <div className="text-center sm-font-outline self-center mb-3 px-4 rounded-md bg-blue-50 border-2 border-blue-70">
//                 <p className="text-xl text-yellow-20 focus:outline-none transition ease-in-out duration-300">
//                   {statusMessage}
//                 </p>
//               </div>
//             )}

//             {/* Input fields */}
//             <div className="sm:flex-col lg:flex">
//               <div className="flex flex-col text-2xl">
//                 Ime:
//                 <label htmlFor="user_name" className="sr-only" />
//                 <input
//                   type="name"
//                   name="user_name"
//                   id="user_name"
//                   autoComplete="user_name"
//                   aria-labelledby="user_name"
//                   className="input-field bg-transparent border-b-2 border-blue-70 focus:yellow-500 text-blue-70 text-xl focus:outline-none focus:outline-blue-70 rounded-sm mt-3"
//                   required
//                 />
//               </div>

//               <div className="flex flex-col mt-3 text-2xl">
//                 Email:
//                 <label htmlFor="user_email" className="sr-only" />
//                 <input
//                   type="email"
//                   name="user_email"
//                   id="user_email"
//                   autoComplete="user_email"
//                   aria-labelledby="user_email_label"
//                   className="input-field bg-transparent border-b-2 border-blue-70 focus:yellow-500 text-blue-70 text-xl focus:outline-none focus:outline-blue-70 rounded-sm mt-3"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Textarea for message */}
//             <div className="sm:flex-col lg:flex mt-3 text-2xl">
//               Poruka:
//               <label htmlFor="user_message" className="sr-only" />
//               <textarea
//                 name="message"
//                 autoComplete="user_name"
//                 id="user_message"
//                 aria-labelledby="user_message_label"
//                 className="input-field resize-none h-14 w-full lg:w-[calc(100%-1rem)] bg-transparent border-b-2  text-blue-702 border-blue-70 text-xl focus:outline-none focus:outline-blue-70 rounded-sm custom-scrollbar mt-3"
//                 required
//               />
//             </div>

//             {/* Submit button */}
//             <input
//               type="submit"
//               value="Pošalji"
//               className="text-blue-70 text-xl self-center m-3 px-6 border-2 border-blue-70 rounded-full hover:bg-blue-50 hover:text-yellow-20 hover:border-blue-70 focus:outline-none transition ease-in-out duration-300"
//             />
//           </form>
//         </AnimateInView>

//         {/* Image section */}
//         <AnimateInView animationClass="animate-fade-in-right flex items-center justify-center">
//           <Image
//             src="/shega_logo23.png"
//             alt="Shega Logo"
//             width={960}
//             height={720}
//             className=" w-full h-64 xl:w-[30rem] xl:h-[20rem] object-cover hidden lg:block"
//           />
//         </AnimateInView>
//       </div>

//       {/* Copyright section */}
//       <p className="flex flex-1 text-blue-70 font-medium text-2xl justify-center m-3 z-10">© Shega 2024</p>
//     </div>
//   );
// };

// export default Footer;
import React, { useRef, useState } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Image from 'next/image';
import BlueBgPattern from './BlueBgPattern';
import AnimateInView from './AnimateInView';
import { scroller as localScroller } from 'react-scroll';

// Define the Footer component
const Footer = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const form = useRef<HTMLFormElement | null>(null);
  const [isSectionInView, setIsSectionInView] = useState(false);

  // Function to send email
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        );

        console.log(result.text);
        setStatusMessage('Uspešno Ste Poslali Poruku. Očekujte Naš Odgovor.');
        form.current.reset(); // Reset the form fields
      }
    } catch (error) {
      if (isEmailJSResponseStatus(error)) {
        console.error(error.text);
        setStatusMessage('Neuspelo Slanje Poruke. Molim Pokušajte Ponovo.');
      } else {
        console.error(error); // Log the entire error object for further inspection
        setStatusMessage('Neuspelo Slanje Poruke. Molim Pokušajte Ponovo.');
      }
    }
  };

  function isEmailJSResponseStatus(value: any): value is EmailJSResponseStatus {
    return value && typeof value === 'object' && 'text' in value;
  }

 


  // const scrollToSection = (sectionId: string) => {
  //   localScroller.scrollTo(sectionId, {
  //     smooth: true,
  //     duration: 500,
  //     containerId: '/contact',
  //     offset: 250, // Adjust this value based on your layout
  //   });
  // };

  // JSX structure for the Footer component
  return (
    <div
      id="/contact"
    
      className={`flex flex-1 bg-blue-20 justify-center flex-col w-full h-full relative ${
        isSectionInView ? 'min-h-[22rem]' : ''
      }`}
    >
      <BlueBgPattern />

      <AnimateInView
        animationClass="animate-zoom-in-from-zero text-[2.2rem] font-bold leading-none xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xxl:text-7xl mb-8 mt-6 px-4 text-yellow-20 mx-auto text-center z-10"
        style={{
          textShadow: `0 0.04em black, 0.04em 0 black, -0.04em 0 black, 0 -0.04em black`,
        }}
        onInViewChange={(isVisible: boolean) => setIsSectionInView(isVisible)}
      >
        <h1>Imate Neko Pitanje, Ili Sugestiju? Pišite Nam :-)</h1>
      </AnimateInView>

      <div className="flex flex-col flex-1 lg:flex-row justify-evenly w-[90%] h-3/4 mx-auto relative">
        {/* Form section */}
        <AnimateInView
          animationClass="animate-fade-in-left border-8 border-blue-70 w-[95%] mx-auto lg:w-[65%] p-3 md:h-[24rem] rounded-3xl"
        >
          <form
            className="sm:w-full mx-auto p-2 flex flex-col justify-between h-full"
            action=""
            method="post"
            onSubmit={sendEmail}
            ref={form}
          >
            {statusMessage && (
              <div className="text-center sm-font-outline self-center mb-3 px-4 rounded-md bg-blue-50 border-2 border-blue-70">
                <p className="text-xl text-yellow-20 focus:outline-none transition ease-in-out duration-300">
                  {statusMessage}
                </p>
              </div>
            )}

            {/* Input fields */}
            <div className="sm:flex-col lg:flex">
              <div className="flex flex-col text-2xl">
                Ime:
                <label htmlFor="user_name" className="sr-only" />
                <input
                  type="name"
                  name="user_name"
                  id="user_name"
                  autoComplete="user_name"
                  aria-labelledby="user_name"
                  className="input-field bg-transparent border-b-2 border-blue-70 focus:yellow-500 text-blue-70 text-xl focus:outline-none focus:outline-blue-70 rounded-sm mt-3"
                  required
                />
              </div>

              <div className="flex flex-col mt-3 text-2xl">
                Email:
                <label htmlFor="user_email" className="sr-only" />
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  autoComplete="user_email"
                  aria-labelledby="user_email_label"
                  className="input-field bg-transparent border-b-2 border-blue-70 focus:yellow-500 text-blue-70 text-xl focus:outline-none focus:outline-blue-70 rounded-sm mt-3"
                  required
                />
              </div>
            </div>

            {/* Textarea for message */}
            <div className="sm:flex-col lg:flex mt-3 text-2xl">
              Poruka:
              <label htmlFor="user_message" className="sr-only" />
              <textarea
                name="message"
                autoComplete="user_name"
                id="user_message"
                aria-labelledby="user_message_label"
                className="input-field resize-none h-14 w-full lg:w-[calc(100%-1rem)] bg-transparent border-b-2  text-blue-702 border-blue-70 text-xl focus:outline-none focus:outline-blue-70 rounded-sm custom-scrollbar mt-3"
                required
              />
            </div>

            {/* Submit button */}
            <input
              type="submit"
              value="Pošalji"
              className="text-blue-70 text-xl self-center m-3 px-6 border-2 border-blue-70 rounded-full hover:bg-blue-50 hover:text-yellow-20 hover:border-blue-70 focus:outline-none transition ease-in-out duration-300"
            />
          </form>
        </AnimateInView>

        {/* Image section */}
        <AnimateInView animationClass="animate-fade-in-right flex items-center justify-center">
          <Image
            src="/shega_logo23.png"
            alt="Shega Logo"
            width={960}
            height={720}
            className=" w-full h-64 xl:w-[30rem] xl:h-[20rem] object-cover hidden lg:block"
          />
        </AnimateInView>
      </div>

      {/* Copyright section */}
      <p className="flex flex-1 text-blue-70 font-medium text-2xl justify-center m-3 z-10">© Shega 2024</p>
    </div>
  );
};

export default Footer;
