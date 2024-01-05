
import * as React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '../mtwexport';
import Link from 'next/link';

interface BannerWithImageButtonProps {
    header: string;
    caption: string;
    buttonTitle: string;
    src: string;
    imageAlt: string;
  }

  const BannerWithImageButton: React.FC<BannerWithImageButtonProps> = (props) => {
    return (
       
        <div className='bg-ivory py-8 md:py-20 flex justify-center w-screen'>

            <div className='max-w-screen mx-8 lg:max-w-screen-xl flex justify-between items-center'>

             <div className='w-full lg:w-2/3'>
             <h1 className='text-blue-jay font-extrabold text-4xl mb-10 leading-relaxed'>
                 {props.header}
             </h1>

            <Link href='https://forms.gle/T8PMEEi4zRDm6yN46' target='_blank'>
            <Button variant='filled' className='bg-amber-500 rounded-full text-blue-jay ' size='lg' ripple={true}>{props.buttonTitle}</Button>
            </Link>
            
            <p className='text-gray-800 my-8 text-xl leading-10 font-normal'>{props.caption}</p>
             </div>

             <Image 
             src={props.src}
             width={506}
             height={482}
             className='w-1/2 hidden lg:block'
             alt={props.imageAlt}
             />

             </div>

        </div>

    )
  };

    export default BannerWithImageButton;
            
        
            
            
      