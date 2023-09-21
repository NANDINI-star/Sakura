import React from 'react'

function About() {
  return (
    <div className='bg-[#D0DDFF] p-10'>
        <div class="wrap w-5/6 mx-auto ">
            <div class="grid grid-cols-10 ">
            <div class="row-span-full col-start-4 col-end-11 self-center">
                <div class="object-cover rounded-3xl bg-pink-400 h-[550px] max-w-[778px]"
                style={{
                    backgroundImage: `url('/assets/image 1.png')`,
                    backgroundSize: 'cover', // You can adjust this property as needed
                    backgroundPosition: 'center', // You can adjust this property as needed
                    maxWidth: '778px', // Set the width to fill the container
                    maxHeight: '570px', // Set the height to fill the viewport
                    }} >
            </div>
            </div>
            <div class="row-span-full col-start-1 col-end-5  self-center max-w-[492px] max-h-[353px] p-4 text-white bg-pink-300 to-red-200 rounded-[58px] bg-[#FFE8E8]">
                <div className='max-w-[450px] '>
                    <h1 class="text-4xl font-bold mt-0 text-black p-6"> About The Program</h1>
                    <div>
                    <p class="mb-2 text-black ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text ois simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default About