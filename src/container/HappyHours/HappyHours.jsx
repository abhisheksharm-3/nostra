import React from 'react'

import { images } from '../../constants'

const HappyHours = () => {
  return (
    <div className='bg-[url(./assets/happy.png)] bg-center bg-cover bg-no-repeat w-max-screen h-screen'>
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-serif text-center text-orange-400 text-[50px] lg:text-[128px] font-bold capitalize leading-10 tracking-wider mt-80 lg:mt-72 2xl:mt-[365px]">
                Happy Hours
            </h1>
            <p className="font-serif text-white text-[20px] lg:text-[32px] font-bold capitalize leading-7 tracking-wider mt-8 lg:mt-24 mb-64">
                Monday - Friday (4:00 Pm - 7:00 Pm)
            </p>
        </div>
    </div>
  )
}

export default HappyHours