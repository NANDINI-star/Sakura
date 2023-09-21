// Hero.js
import React from 'react';

const Hero = () => {
  return ( 
    <section className="flex justify-center items-center my-3"  
    style={{
      backgroundImage: `url('/assets/Firefly Sakura education Indian school 69810.png')`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      width: '100%',
      height: '100vh',
    }} >
      <div className='container mx-auto flex justify-center items-center'>
        <div style={{
        backgroundImage: `url('/assets/sq-block.png')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        width: '947px', 
        height: '570px', 
      }}
     className='shadow-inner drop-shadow-xl max-h-[570px] max-w-[947px] bg-[#FFFFFF] rounded-[65.47px] backdrop-blur bg-opacity-30 flex flex-col items-center justify-center gap-9'>
        <div className='p-5'>
          <h1 className=' text-4xl md:text-6xl text-center text-[#FFFFFF]' style={{ fontFamily: 'Inria Sans, sans-serif',}}>Want to study in japan ?</h1>
        </div>
        <div  className='p-5'>
          <p className='sm:text-lg md:text-2xl  text-[#FFFFFF] mx-[30px] overflow-auto'>
          Lorem ipsum, dolor sit ametLorem ipsum, dolor sit amet consectetur adipisicing elit. Ea deleniti itaque accusantium cumque dolorum ex dolor. Laborum, quidem odio. Sed?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea deleniti itaque accusantium cumque dolorum ex dolor. Laborum, quidem odio. Sed?
          Lorem ipsum, dol
          </p>
        </div>
        <div  className='p-5'>
          <button className='w-[430px] h-[70px] bg-[#FFE8E8] rounded-[58px] drop-shadow-2xl '>
          <h1 className='text-2xl text-[#98808c]'>Explore More</h1>
          </button>
        </div>
        </div>
      </div>
    </section>
   
  );
};

export default Hero;





  


















