// import Image from 'next/legacy/image';
// const RedBgPattern = () => {
//     const lowResImagePath = '/RedBgLowRes.jpg';

//     return (
//       <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
//         {/* Fallback image */}
//         <img
//           src={lowResImagePath}
//           alt="Background Pattern"
//           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//         {/* Next.js Image component with placeholder */}
//         <Image
//           src="/RedBgPattern.svg"
//           alt="Background Pattern"
//           layout="fill"
//           objectFit="cover"
//           placeholder="empty"
//           blurDataURL={lowResImagePath}
//         />
//       </div>
//     );
//   };

//   export default RedBgPattern;

// import Image from 'next/image';

// const RedBgPattern = () => {
//   const lowResImagePath = '/RedBgLowRes.jpg';

//   return (
//     <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',  backgroundSize: 'cover',  

//       backgroundAttachment: 'fixed', }}>
//       {/* Fallback image */}

//       {/* Next.js Image component with placeholder */}

//       {/* SVG content */}
//       <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' viewBox='0 0 800 800'><rect fill='#810000' width='800' height='800'/><g ><circle fill='#810000' cx='400' cy='400' r='600'/><circle fill='#930002' cx='400' cy='400' r='500'/><circle fill='#a60003' cx='400' cy='400' r='400'/><circle fill='#b90003' cx='400' cy='400' r='300'/><circle fill='#cc0002' cx='400' cy='400' r='200'/><circle fill='#E00000' cx='400' cy='400' r='100'/></g></svg>
//     </div>
//   );
// };

// export default RedBgPattern;





const RedBgPattern = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // backgroundColor: '#810000',

        backgroundColor: '#890000',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23890000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%239f0909' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23b61311' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23ce1c1a' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23e62423' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23FF2C2C' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,


        // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cg %3E%3Ccircle fill='%23810000' cx='400' cy='400' r='600'/%3E%3Ccircle fill='%23930002' cx='400' cy='400' r='500'/%3E%3Ccircle fill='%23a60003' cx='400' cy='400' r='400'/%3E%3Ccircle fill='%23b90003' cx='400' cy='400' r='300'/%3E%3Ccircle fill='%23cc0002' cx='400' cy='400' r='200'/%3E%3Ccircle fill='%23E00000' cx='400' cy='400' r='100'/%3E%3C/g%3E%3C/svg%3E")`,


        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    ></div>
  );
};

export default RedBgPattern;
