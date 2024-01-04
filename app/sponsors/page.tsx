'use client'

import * as React from 'react';
import StickyNavbar from "../ui/components/Navbar";
import BannerNoImage from '../ui/components/banner-no-image';
import {
    Select,
    Option
} from "../ui/mtwexport";


export default function page(){
    return(
        <div>
        <StickyNavbar />
        <BannerNoImage
            header="Sponsorship / Exhibition"
            subheader="Pharmaceutical companies, corporations and other service firms are invited to promote their brand by obtaining a specially designed Platinum, Gold and Silver Partnership Package. PAPRAS will collaborate with corporate sponsors to customize distinctive sponsorship opportunities that are aimed to optimize each sponsor's specific marketing, sales and branding objectives."
            buttonTitle="Contact Us"
        />
        <form action="" >
        
        <div className='flex'>

        <div className='px-4'>
        <p>First Name</p>
        <input type='text' placeholder='First Name'></input>
        </div>

        <div className='px-4'>
        <p>Last Name</p>
        <input type='text' placeholder='Last Name'></input>
        </div>

        </div>
        
        <button>Submit</button>


        
        

        </form>
        </div>
    )
}