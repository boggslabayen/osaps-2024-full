
import * as React from 'react'
import Image from 'next/image'


export default function BannerWithImage(props: any) {
    return (
        <div className='bg-ivory py-20 flex justify-center'>

            <div className='max-w-screen mx-8 lg:max-w-screen-xl flex justify-between items-center'>

            <div className='w-full lg:w-2/3'>
            <h1 className='text-blue-jay font-extrabold text-4xl'>
                {props.header}
            </h1>
            <p className='text-gray-800 my-8 text-xl leading-10 font-normal'>{props.subheader}</p>
            </div>

            <Image 
            src={props.imageSource}
            width={607}
            height={562}
            className='w-1/2 hidden lg:block'
            alt={props.imageAlt}
            />

            </div>
            
        
            
            
            
    
        </div>
    )
}