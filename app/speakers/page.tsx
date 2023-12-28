'use client'

import * as React from 'react';
import StickyNavbar from "../ui/components/Navbar";
import { Button } from '../ui/mtwexport';
// import Link from 'next/link';



export default function page(){
    return(
        <div>
        <StickyNavbar />
        <h1 className='font-normal'>Speakers</h1>
    
        <Button>Download</Button>
        

        </div>
    )
}