// FAQ.js
import React from 'react';
import FAQCompo from './SmallCompo/FAQCompo';

const FAQ = () => {
  return (
    <div style={{ backgroundColor: '#D0DDFF' }}>
      <div className='container mx-auto  flex flex-col items-center justify-center' >
          <div className='relative max-w-[970px] pb-10 mx-auto h-[350px] rounded-[58px] my-[50px] mb-[100px] border border-black' style={{ backgroundColor: '#FFE8E8' }}>
           <div className='flex px-[100px] flex-col justify-center items-center gap-5'>
              <div className='mt-10'>
                <h1 className='text-6xl text-semsolid'>
                FAQs
                </h1>
              </div>
              <div className='max-w-[700px] max-h-[10px]'>
                <p className='lg:text-2xl text-m leading-loose'>
                  In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </p>
              </div>
           </div>
           <div>
            <img
            className='absolute -bottom-8 -right-14 w-[180px] h-[180px]'
            style={{
              maxHeight:'100%',
              maxWidth:'100%',
            }}
             src='/assets/Female-user-help-icon 1.png'
             alt='OverLay'
             />
           </div>
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
