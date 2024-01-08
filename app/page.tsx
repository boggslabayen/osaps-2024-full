'use client'

import Image from 'next/image'
import * as React from 'react';
import StickyNavbar from "./ui/components/Navbar";
import Welcomemessage from './ui/components/Welcomemessage';
import DocFlor from './ui/images/Doc_Flor.png';
import DocGene from './ui/images/Doc_Gene.png';
import Hero from './ui/images/Banner.png'
import EventLogo from './ui/images/Logo_theme.png'
import { Button } from './ui/mtwexport';
import Link from 'next/link';
import PaprasLogo from './ui/images/papras_logo.png';
import osapsLogo from './ui/images/osaps_logo.png';
import Jetski from './ui/images/jetski.png'
import Icon001 from './ui/images/icon/001.png';
import Icon002 from './ui/images/icon/002.png';
import Icon003 from './ui/images/icon/003.png';
import Icon004 from './ui/images/icon/004.png';

export default function Home() {
  return (
    <main className="">
       <StickyNavbar />

       <div className='bg-coral-blue h-4/5 py-8 md:py-20'>


        <div className='flex flex-col md:relative  right-80  z-40'>
          
        
         <Image 
             src={EventLogo}
             width={0}
             height={0}
             className='mx-fit mx-auto 
             '
             alt='logo'
             />

          <div className='text-center py-10'>

          <h3 className='text-xl font-bold text-blue-jay'>July 4-6, 2024</h3>
          <h3 className='text-xl font-bold text-blue-jay'>Shangri-La Mactan, Cebu Philippines</h3>

          </div>

          <div className='text-center'>
            <Link href="/register" >

                <Button
                variant="filled"
                size="md"
                className="lg:inline-block rounded-full bg-amber-500 text-gray-800 font-bold mb-3"
                 >
                Register
                </Button>
                
                </Link>

            <p>Early bird rate ends on 06/01/2024 </p>
          </div>
          


        </div>

        <Image 
            src={Hero}
             width={0}
             height={0}
             className='mx-fit h-3/4 mx-auto hidden md:block md:absolute inset-x-0 -top-2 z-0'
             alt='girl smiling'
         />

       </div>



      <div className=' bg-ivory py-4'>
      
        <div className='md:flex mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0'>

          <div className='md:w-2/3 md:mr-4'>
            <h3 className='text-2xl md:text-4xl font-bold text-blue-jay mb-8'>
            Be part of an exciting global exchange of knowledge and expertise showcasing Asian beauty in the world of aesthetic plastic surgery
            </h3>
          </div>

          <div>

          <div className='flex items-center pb-4'>

          <div className='pr-4'>
            <Image 
             src={osapsLogo.src}
             width={90}
             height={90}
             className=''
             alt='Osaps Logo'
             />
          </div>

          <div className='flex flex-col'>
          <p>18th International Congress</p>
          <h3 className='text-xl font-bold'>Oriental Society of Aesthetic Plastic Surgeons</h3>
          </div>

          </div>

          <div className='flex items-center'>

          <div className='pr-4'>
            <Image 
             src={PaprasLogo.src}
             width={135}
             height={135}
             className=''
             alt='Papras Logo'
             />
          </div>

          <div className='flex flex-col'>
          <p>11th National Meeting</p>
          <h3 className='text-xl font-bold'>Philippine Association of Plastic Reconstructive and Aesthetic Surgeons</h3>
          </div>

          </div>

        </div>



       </div>

      </div> 
       


       <div>


       
      <Welcomemessage
        message="We will be gathering once again for the 18th Congress of the Oriental Society of Aesthetic Plastic Surgery. 
        I am pleased and proud to announce that the Congress will be hosted by my Society, the Philippine Association of Plastic Reconstructive & Aesthetic Surgeons on July 4-6, 2024 in Cebu, Philippines.  The host prepared a well rounded Program to highlight Asian Aesthetics. 
        Come one and all to share our knowledge talents and experiences in Aesthetic Surgery as it pertains to the concept of Asian beauty. "
        src={DocFlor.src}
        alt='Doc Flor Image'
        doc="Dr. Florencio Q. Lucero M.D."
        role="Secretary-General"
        society="Oriental Society of Aesthetic Plastic Surgery (OSAPS)"
        
      />

      <div className='mx-auto max-w-fit lg:max-w-screen-xl my-12 py-4  '>
        <div className='lg:flex items-center mx-2'>

          <Image 
             src={DocGene.src}
             width={200}
             height={200}
             className='w-1/3 lg:order-last'
             alt='Doc Gene Image'
             />

          <div className='lg:w-2/3 pr-6'>

          <p className='text-gray-800 my-4 font-normal text-lg leading-10'>
         We are glad to announce and host our upcoming Congress in <span className='font-bold'>2024: the 18th International Congress of the Oriental Society of Aesthetic Plastic Surgery (OSAPS) and the 11th National Meeting of the Philippine Association of Plastic Reconstructive and Aesthetic Surgeons, Inc. (PAPRAS).</span> This event will be attended by distinguished Plastic Surgeons from Asia and all over the world. This prestigious Congress will provide a platform for renowned experts to share their knowledge, exchange innovative ideas, and discuss the latest advancements in Aesthetic Plastic Surgery. With a diverse range of topics and interactive sessions, this Congress aims to foster collaboration and elevate the standards of aesthetic plastic surgery globally. 
        This event is set to take place from July 4 to 6, 2024,at the luxurious Shangri-La Mactan in Cebu, Philippines. The theme of thiscongress is <span className='font-bold'>'Harmony in Diversity: Oriental Beauty as a Global Standard in Aesthetic Plastic Surgery'</span> As the world becomes more interconnected, the beauty standards of different cultures converge and create a global tapestry of aesthetics. The congress aims to explore the diverse aspects of Oriental beauty
        and how they influence and enrich the field of aesthetic plastic surgery worldwide. Our distinguished panel of experts, renowned for their pioneering work in aesthetic surgery, will share their insights, expertise, and innovative techniques during the meeting.
          </p>

          <h3 className='text-xl font-bold text-blue-jay'> Dr. Gene Gerald SJ Tiongco, MD </h3>
          <p className='text-gray-600 font-normal text-lg'>President</p>
          <p className='text-gray-600 font-normal text-lg'>Philippine Association of Plastic Reconstructive and Aesthetic Surgeons (PAPRAS)</p>

          </div>
          

         


        </div>
        


       </div>

      </div>

      <div className='bg md:py-8'>

        <div className='flex mx-auto max-w-fit lg:max-w-screen-xl my-12 py-4 justify-between items-center'>

        <div className='flex flex-col md:w-6/12 md:mr-8 mx-2 md:mx-0'>
          <div>
          <h3 className='text-ivory font-bold text-2xl md:text-4xl md:pb-4'>
            INDULGE YOURSELF IN A LUXURIOUS LEARNING
          </h3>

          <p className='text-ivory leading-loose my-8 text-lg'>
            Experience the epitome of luxurious learning at OSAPS 2024 Cebu, hosted in the stunning Shangri-La Mactan Cebu. This prestigious event offers attendees an upscale and comfortable educational experience. Immerse yourself in a setting where knowledge and opulence converge, making OSAPS 2024 an unforgettable journey into the world of aesthetic surgery.
          </p>

          </div>

          <div>

            
            <Link href="/register" >

                <Button
                variant="filled"
                size="md"
                className="lg:inline-block rounded-full bg-amber-500 text-gray-800 font-bold mb-3"
                 >
                Register
                </Button>
                
                </Link>

          

          </div>
        </div>

        <div className='w-2/5 hidden md:block'>
          <Image 
          src={Jetski.src}
          width={450}
          height={534}
          alt='Jetski couple'
          />
        </div>

        </div>


      </div>

      <div className='mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0'>
        <div className=''>
          <h3 className='text-2xl md:text-4xl font-bold text-blue-jay text-center'>Why you should attend Harmony in Diversity?</h3>
        </div>

        <div className='md:grid grid-cols-2 md:my-10 justify-between gap-8'>

          
          

          
           <div className='  py-4  flex flex-col items-center mx-8'>
            <Image 
            src={Icon002.src}
            width={80}
            height={80}
            className=''
            alt='icon for forms'
            />
   
             <p className='text-center pt-4'><span className='font-bold'>Gain a global perspective</span> on the evolving landscape of aesthetic plastic surgery</p>
            </div>

            <div className='   py-4 flex flex-col items-center mx-8'>
            <Image 
            src={Icon001.src}
            width={80}
            height={80}
            className=''
            alt='icon for bulb'
            />
   
             <p className='text-center pt-4'><span className='font-bold'>Learn and network</span> with globally-renowned leaders in the field of aesthetic surgery</p>
            </div>

            <div className='  py-4  flex flex-col items-center mx-8'>
            <Image 
            src={Icon003.src}
            width={80}
            height={80}
            className=''
            alt='icon for sparkle'
            />
   
             <p className='text-center pt-4'><span className='font-bold'>Uncover cutting-edge knowledge</span> and emerging trends to keep you at the forefront of the ever-evolving field of aesthetic surgery.\</p>
            </div>

            <div className='   py-4 flex flex-col items-center mx-8'>
            <Image 
            src={Icon004.src}
            width={80}
            height={80}
            className=''
            alt='icon for fellows'
            />
   
             <p className='text-center pt-4'><span className='font-bold'>Connect with fellow plastic surgeons</span> who share your goals and aspirations in the field of aesthetic surgery.</p>
            </div>

          

         

          


        </div>

        <div className='flex justify-center'>

            
            <Link href="/register" >

                <Button
                variant="filled"
                size="md"
                className="lg:inline-block rounded-full bg-amber-500 text-gray-800 font-bold mb-3"
                 >
                Register
                </Button>
                
                </Link>

          

          </div>

        


      </div>



   



      
      
     
    </main>
  )
}
