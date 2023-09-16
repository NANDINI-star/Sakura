// Hero.js
import React from 'react';

const Hero = () => {
  return ( 
    <section className="flex justify-center items-center"  
    style={{
      backgroundImage: `url('/assets/Firefly Sakura education Indian school 69810.png')`,
      backgroundSize: 'cover', // You can adjust this property as needed
      backgroundPosition: 'center', // You can adjust this property as needed
      width: '100%', // Set the width to fill the container
      height: '100vh', // Set the height to fill the viewport
    }} >
      <div className='container mx-auto flex justify-center items-center'>
        <div style={{
        backgroundImage: `url('/assets/sq-block.png')`,
        backgroundSize: 'cover', // You can adjust this property as needed
        backgroundPosition: 'center', // You can adjust this property as needed
        width: '947px', // Set the width to fill the container
        height: '570px', // Set the height to fill the viewport
      }}
     className='shadow-inner drop-shadow-xl h-[570px] w-[947px] bg-[#FFFFFF] rounded-[65.47px] backdrop-blur bg-opacity-30 flex flex-col items-center justify-center gap-9'>
        <div className='p-5'>
          <h1 className='text-6xl text-center text-[#FFFFFF]' style={{ fontFamily: 'Inria Sans, sans-serif',}}>Want to study in japan ?</h1>
        </div>
        <div  className='p-5'>
          <p className='text-2xl text-[#FFFFFF] mx-[30px]'>
          Lorem ipsum, dolor sit ametLorem ipsum, dolor sit amet consectetur adipisicing elit. Ea deleniti itaque accusantium cumque dolorum ex dolor. Laborum, quidem odio. Sed?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea deleniti itaque accusantium cumque dolorum ex dolor. Laborum, quidem odio. Sed?
          Lorem ipsum, dol
          </p>
        </div>
        <div  className='p-5'>
          <button className='w-[430px] h-[70px] bg-[#FFE8E8] rounded-[58px] drop-shadow-2xl '>
          <h1 className='text-2xl text-[#BC005A]'>Explore More</h1>
          </button>
        </div>
        </div>
      </div>
    </section>
   
  );
};

export default Hero;





  


















