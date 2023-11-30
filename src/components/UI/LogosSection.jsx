import React from 'react'
import Container from '../container/Container'

const LogosSection = () => {
  return (
    <div className=' mt-20 w-full  lg:mb-36 relative  '>
    <section className=' flex flex-col gap-8 py-8 px-5 lg:py-20  lg:h-[45vh] justify-center items-center text-white bg-black '>
        <h1 className='font-bold text-4xl lg:text-5xl'>Tradely is partnered with world class brands</h1>
        <p className='text-center lg:text-xl'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et <br />quasi architecto beatae vitae dicta sunt explicabo.</p>
        <h4 className='lg:font-bold text-center lg:text-start pb-20'>At vero eos et accusamus et iusto odio dignissimos ducimus quis <span className=' font-bold text-[#D49539]'> blanditiis</span></h4>
        <Container>
            <img className='absolute h-[60px] lg:h-auto' src="logos.png" alt="" />
        </Container>
    </section>
    </div>
  )
}

export default LogosSection