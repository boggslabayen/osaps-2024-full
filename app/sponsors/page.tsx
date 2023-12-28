'use client'

import * as React from 'react';
import StickyNavbar from "../ui/components/Navbar";
import BannerNoImage from '../ui/components/banner-no-image';


export default function page(){
    return(
        <div>
        <StickyNavbar />
        <BannerNoImage
            header="Sponsorship / Exhibition"
            subheader="Pharmaceutical companies, corporations and other service firms are invited to promote their brand by obtaining a specially designed Platinum, Gold and Silver Partnership Package. PAPRAS will collaborate with corporate sponsors to customize distinctive sponsorship opportunities that are aimed to optimize each sponsor's specific marketing, sales and branding objectives."
            buttonTitle="Contact Us"
        />
        </div>
    )
}