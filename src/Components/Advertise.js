import React from 'react'

function Advertise() {
  return (
    <div className='border-b-4 py-2 hidden 1xl:flex  '>
        <div className='flex justify-between items-center max-w-[1440px] mx-auto 1xl:gap-[80px] '>
            <div className='flex justify-between items-center gap-3'>
            <img src='assets/Sakura_Logo.png'/>
            <img src='assets/Sakura Science Exchange Program.png'/>
            </div>
        <img src='assets/Group.png'/>
        <img src='assets/logo_jst_en 2.png'/>
        <div className='flex flex-col gap-2'>
            <h1 className='text-center  text-black font-InriaSans text-[20px] leading-normal tracking-0.383"'>Follow for more!</h1>
            <div className='flex justify-between items-center gap-4'>
                <img src='assets/download.png'/>
                <img src='assets/download (1).png'/>
                <img src='assets/Youtube_logo.png'/>
            </div>
        </div>
      </div>
    </div>
   
  )
}

export default Advertise