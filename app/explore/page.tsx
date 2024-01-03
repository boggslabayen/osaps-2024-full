'use client'

import * as React from 'react';
import StickyNavbar from "../ui/components/Navbar";
import BannerWithImage from '../ui/components/banner-with-image';
import Picture from './exploreImage.png';



export default function page(){
    return(
        <div>
        <StickyNavbar />
        <BannerWithImage 
        header='Unwind and Explore Mactans Treasures Beyond OSAPS 2024!'
        subheader="Mactan, Cebu is a captivating island paradise nestled in the Philippines, renowned for its pristine beaches, crystal-clear waters, and vibrant marine life. This tropical haven offers an array of water sports, historic sites like the Magellan Shrine, and the striking Mactan-Cebu International Airport. It's a destination where natural beauty and rich culture converge, providing travelers with an unforgettable experience in the heart of the Visayas region."
        src={Picture}
        imageAlt='Cebu Picture'
        />

        </div>
    )
}