
import * as React from 'react'
import Image, { StaticImageData } from 'next/image'

interface WelcomeMessageProps {
    message: string;
    src: string;
    alt: string;
    doc: string;
    role: string;
    society: string;
  }

  const Welcomemessage: React.FC<WelcomeMessageProps> = (props) => {
    return (
       
        <div className='mx-auto max-w-fit lg:max-w-screen-xl my-12 py-4  '>
        <div className='lg:flex items-center mx-2'>

          <Image 
             src={props.src}
             width={200}
             height={200}
             className='w-1/3 lg:order-last'
             alt={props.alt}
             />

          <div className='lg:w-2/3 pr-6'>

          <p className='text-gray-800 my-4 font-normal text-lg leading-10'>
         {props.message}
          </p>

          <h3 className='text-xl font-bold text-blue-jay'>{props.doc} </h3>
          <p className='text-gray-600 font-normal text-lg'>{props.role}</p>
          <p className='text-gray-600 font-normal text-lg'>{props.society}</p>

          </div>
          

         


        </div>
        


       </div>

    )
  };

    export default Welcomemessage;