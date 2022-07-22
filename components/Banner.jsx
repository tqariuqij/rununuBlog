import React from 'react';

const Banner = () => {
  return (
    <section className='relative py-24 px-4 mb-20 rounded-lg'>
      <div className='z-20 relative text-white container mx-auto'>
        <h1 className='mb-4 font-extrabold text-4xl flex flex-wrap'>
          Welcome to Rununu Blog
        </h1>
        <p className='leading-normal'>
          For the latest reviews, bargains and releases.
        </p>
        <p className='leading-normal'>
          At Rununu we go all out for you and provide you with all the info to
          ensure you get the best gadget in the market.
        </p>
        <a
          href='/'
          className='inline-block transition duration-500 ease bg-pink-500 transform hover:-translate-y-1 text-white no-underline hover:bg-blue-800 mt-4 p-4 rounded'
        >
          ok
        </a>
      </div>
      <div className='absolute inset-0 h-auto z-10'>
        <img
          src='https://res.cloudinary.com/johnte/image/upload/v1653877465/pathum-danthanarayana-t8TOMKe6xZU-unsplash_ytsdyr.jpg'
          alt=''
          className='h-full w-full object-fit-cover rounded-lg'
        />
      </div>
    </section>
  );
};

export default Banner;
