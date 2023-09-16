import React from 'react'
import ProgramCard from './SmallCompo/ProgramCard'
function Programs() {
  return (
    <section className='p-[80px]' style={{backgroundColor:'#F5F5F5'}}>
      <div className='container mx-auto flex flex-col' >
        <div className='mb-10'>
              <h1 className='text-5xl' style={{ fontFamily: 'Inria Sans, sans-serif', color:'black'}}>
                  Sakura Science Exchange Programs
              </h1>
          </div>
          <div className='flex justify-between gap-2'>
            <ProgramCard/>
            <ProgramCard/>
            <ProgramCard/>
          </div>
      </div>
    </section>
  )
}

export default Programs