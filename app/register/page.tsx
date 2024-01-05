'use client'

import * as React from 'react';
import StickyNavbar from "../ui/components/Navbar";
import {
    Select,
    Option,
    Button
} from "../ui/mtwexport";

import Picture from './registerImg.png';
import Link from 'next/link';
import BannerWithImageButton from '../ui/components/banner-with-imagebutton';
import { DefaultTable } from '../ui/components/pricingtable';
import { AddonsTable } from '../ui/components/addonstable';

import Image, { StaticImageData } from 'next/image';
import icon1 from './Scenario 1 - Pre-Approved/forms.png';
import icon2 from './Scenario 1 - Pre-Approved/journal-page.png';
import icon3 from './Scenario 1 - Pre-Approved/search-circle-outline.png';


export default function page(){
    return(
        <div className='max-w-screen'>
        <StickyNavbar />
        

        <BannerWithImageButton 
        header='Secure your spot at OSAPS 2024:Register today!'
        caption="Early bird ends on 02/29/2024"
        src={Picture.src}
        imageAlt='Cebu Picture'
        buttonTitle="Register Now"
        />

        <div className='mx-auto max-w-fit lg:max-w-screen-xl my-12 '>

            <p className='text-gray-800 mb-4 text-xl leading-10 font-normal mx-8'>
            Get ready to join us for OSAPS 2024, hosted at the luxurious <span className='font-bold'>Shangri-La Mactan, Cebu, from July 4-6, 2024.</span> We offer flexible pricing options to suit your needs:
            </p>

            <DefaultTable />
            <p className='text-gray-800 my-4 font-normal mx-8'>Exclusive discounts available for PAPRAS and PBPS affiliates upon checkout!</p>

            <p className='text-gray-800 my-8 text-xl leading-10 font-normal mx-8'>
            Maximize your participation by adding the Gala Night and Fillers Master Class to your registration, or register a guest or companion to enhance your OSAPS 2024 experience
            </p>

            <AddonsTable />
        

        </div>

         <div className='mx-auto max-w-fit lg:max-w-screen-xl my-12 '>

         <h3 className='text-xl font-bold text-blue-jay mx-8'>
         To register, simply follow these steps:
         </h3>


        <div className='flex justify-around py-8'>


            <div className='  max-w-fit py-4 px-4 flex flex-col items-center mx-8'>


            
            <Image 
            src={icon1}
            width={80}
            height={80}
            className=''
            alt='icon for forms'
            />
   
             <p className='text-center'>Complete the registration form</p>
            </div>

<div className='  max-w-fit py-4 px-4 flex flex-col items-center'>


   
<Image 
    src={icon3}
    width={80}
    height={80}
    className=''
    alt='icon for forms'
    />
   
   <p className='text-center'>Keep an eye on your e-mail for further instructions</p>
</div>

<div className=' max-w-fit py-4 px-4 flex flex-col items-center'>


   
<Image 
    src={icon2}
    width={80}
    height={80}
    className=''
    alt='icon for forms'
    />
   
   <p className='text-center'>Proceed with payment once registration is accepted</p>
</div>



        </div>

        <Link href='https://forms.gle/T8PMEEi4zRDm6yN46' target='_blank'>
            <Button variant='filled' className='bg-amber-500 rounded-full text-blue-jay mx-8' size='lg' ripple={true}>Register Now</Button>
            </Link>
        
        

        </div>



        
            
     
       
        </div>
    )
}