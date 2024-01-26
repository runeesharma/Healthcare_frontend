import React from 'react'
function Home() {
  return (
   <section className='hero_section  pt-[60px] 2xl:h-[800px]'>
    <div className='container'>
<div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between '>
<div>
  <div className='lg:w-[570px]'>
<h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] mt-10'>we help patients live healthy, longer life</h1>
<p  className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit earum quaerat, sed mollitia iste cum deleniti, blanditiis repellendus adipisci inventore provident numquam ducimus eligendi aspernatur placeat ipsum culpa quos quis! Molestias consequatur, quas velit aspernatur omnis aut quidem nulla.</p>
<button
        className="text-black
          inline-block
          mt-10 
          py-[5px]
          px-[5px]
          text-[24px]
          font-bold
          text-center
          decoration-none
          bg-[bg-gradient-to-r from-[#f1f1f0] from-10% via-[#f1e38b] via-30% to-[#ffbc15] to-90%]
          border-black
          border-[2px]
          rounded-[15px]
          shadow-[5px_5px_0px_black]
          duration-[0.3s]
          transition-all
          ease-in
          hover:bg-[#fff]
          hover:text-[#1d1254cc]
          hover:border-[#ff5252]
          hover:shadow-[#ff5252]
          active:bg-[#fcf414]
          active:shadow-[none]
          active:translate-y-[4px]
          active:duration-[0.2s]"
      >

                    Request an Appointement
                  </button>
  </div>
  {/* ======== hero counter =======*/}
  <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
    <div>
      <h2 className='text-[36px] leadidng-[56px] lg:text-[44px] lg:leading-[54px] font=[700] text-headingColor'>30+</h2>
      <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'> </span>
      <p className=''>Years of Experience</p>
    </div>
    <div>
      <h2 className='text-[36px] leadidng-[56px] lg:text-[44px] lg:leading-[54px] font=[700] text-headingColor'>15+</h2>
      <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'> </span>
      <p className=''>Clinic Location</p>
    </div>
    <div>
      <h2 className='text-[36px] leadidng-[56px] lg:text-[44px] lg:leading-[54px] font=[700] text-headingColor'>100%</h2>
      <span className='w-[100px] h-2 bg-[#42e2b5] rounded-full block mt-[-14px]'> </span>
      <p className=''>Patient Satisfaction</p>
    </div>
  </div>
</div>
<div  className='flex gap-[30px] jystify-end'>
   <div>
    <img src="src/assets/doctor.webp" className='w-full mt-40'></img>
   </div>
   <div className='mt-[30px]'>
    <img src="src/assets/doc2.avif" className='w-full mb-[30px] '></img>
   </div>
</div>
</div>
    </div>
   </section>
  )
}

export default Home