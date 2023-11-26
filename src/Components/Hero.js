// Hero.js
import React from 'react';

const Hero = () => {
  return ( 
    <section className="flex justify-center items-center"  
    style={{
      // backgroundImage: `url('/assets/Firefly Sakura education Indian school 69810.png')`,
      backgroundImage: `url('/assets/Firefly Indian Students going to Japan 30694 (1).png')`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      width: '100%',
      height: '100vh',
    }} >
      <div className='container mx-auto flex justify-center items-center'>
        <div 
          style={{ minHeight: "500px"
            
          }}
        className='shadow-inner w-[300px] h-[500px] 1xl:w-[970px] 1xl:h-[350px] lg:w-[708px] lg:h-[255px] sm:w-[516px] sm:h-[186px]  drop-shadow-xl max-h-[570px] max-w-[947px] bg-[#FFFFFF] rounded-[65.47px] backdrop-blur bg-opacity-30 flex flex-col items-center justify-center gap-9'>
        <div className='p-5'>
          <h1 className=' text-3xl lg:text-6xl text-center text-[#FFFFFF]' style={{ fontFamily: 'Inria Sans, sans-serif',}}>Want to study in japan ?</h1>
        </div>
        <div  className='p-5'>
          <p className='sm:text-lg md:text-2xl  text-[#FFFFFF] mx-[30px] overflow-auto'>
          Lorem ipsum, dolor sit ametLorem ipsum, dolor sit amet consectetur adipisicing elit. Ea deleniti itaque accusantium cumque dolorum ex dolor. Laborum, quidem odio. Sed?
          
          </p>
        </div>
        <div  className='p-5'>
          <button className=' w-[200px] h-[30px] 1xl:w-[430px] 1xl:h-[70px]  bg-[#FFE8E8] rounded-[58px] drop-shadow-2xl '>
          <h1 className='1xl:text-2xl text-m text-[#98808c]'>Explore More</h1>
          </button>
        </div>
        </div>
      </div>
    </section>
   
  );
};

export default Hero;





  


















