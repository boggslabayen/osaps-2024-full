'use client'

import * as React from 'react';
import StickyNavbar from "../ui/components/Navbar";
import BannerNoImage from '../ui/components/banner-no-image';
import SpeakerDp from '../ui/components/speaker-dp';

const speakers = [
    {
        id:1,
        name: "Tatiana Robinson Park",
        role: "Web Designer",
        color: "Blue"
    },
    {
        id:2,
        name: "Anderson Cooper",
        role: "Web Developer",
        color: "Yellow"
    }
];

function createSpeakerView(speakerItem){
    return(
        
        
        <SpeakerDp 
        key={speakerItem.id}
        speakerName={speakerItem.name}
        role={speakerItem.role}
        />

    
    )
};



export default function page(){
    return(
        <div>
        <StickyNavbar />
        <BannerNoImage
            header="Program & Featured Speakers"
            subheader="Across the diverse spectrum of OSAPS 2024 programs and themes, our Featured Speakers empower attendees with insights, leadership, and inspiration to navigate the evolving landscape of aesthetic surgery."
            buttonTitle="Register Now"
        />

        <div className='flex'>
        {
            speakers.map(createSpeakerView)
        }
        </div>
       
        

        


        </div>
    )
}