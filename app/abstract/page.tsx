'use client'

import * as React from 'react';
import StickyNavbar from "../ui/components/Navbar";
import BannerNoImage from '../ui/components/banner-no-image';



export default function page(){
    return(
        <div>
        <StickyNavbar />
        <BannerNoImage
            header="Program & Featured Speakers"
            subheader="Across the diverse spectrum of OSAPS 2024 programs and themes, our Featured Speakers empower attendees with insights, leadership, and inspiration to navigate the evolving landscape of aesthetic surgery."
            buttonTitle="Register"
        />
        </div>
    )
}