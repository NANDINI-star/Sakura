// FAQ.js
import React from 'react';
import FAQCompo from './SmallCompo/FAQCompo';

const FAQ = () => {
  return (
    <div id="faqs" style={{ backgroundColor: '#D0DDFF' }}>
      <div className='container mx-auto  flex flex-col items-center justify-center' >
        <div className='relative w-[300px] h-[200px] 1xl:w-[970px] 1xl:h-[350px] lg:w-[708px] lg:h-[255px] sm:w-[516px] sm:h-[186px] pb-10 mx-auto rounded-[58px] my-[50px] mb-[100px] border border-black' style={{ backgroundColor: '#FFE8E8' }}>
           <div className='flex px-[100px] flex-col justify-center items-center gap-5'>
              <div className='mt-10'>
                <h1 className='lg:text-6xl text-xl text-semsolid'>
                FAQs
                </h1>
              </div>
              <div className='max-w-[700px] max-h-[10px]'>
                <p className='lg:text-2xl text-xs leading-loose'>
                  Frequently Asked Questions about the Sakura Science Club
                </p>
              </div>
           </div>
           {/* <div> */}
            <img
            className='absolute -bottom-1 -right-1 w-[50px] h-[50px] lg:-bottom-8 lg:-right-14 sm:w-[131px] sm:h-[131px] 1xl:w-[180px] 1xl:h-[180px]'
            style={{
              maxHeight:'100%',
              maxWidth:'100%',
            }}
             src='/assets/Female-user-help-icon 1.png'
             alt='OverLay'
             />
           {/* </div> */}
        </div>
        <div>
            <FAQCompo />
            <FAQCompo />
            <FAQCompo />
            <FAQCompo />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
