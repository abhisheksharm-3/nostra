import React from 'react'

const HeaderImage = (props) => {
  return (
    <div className='bg-[url(./assets/header.png)]  bg-center bg-cover bg-no-repeat w-max-screen'>
        <div className="flex justify-center items-center flex-col">
            <h1 className='font-serif text-center text-orange-400 text-[40px] lg:text-[90px] font-bold capitalize leading-10 tracking-widest mt-64 lg:mt-72'>{props.title}</h1>
            <p className='font-serif text-white text-[23px] font-bold capitalize leading-7 tracking-wider mt-16 mb-64'>{props.path}</p>
        </div>
    </div>
  )
}

export default HeaderImage