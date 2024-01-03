
import * as React from 'react';
import  StickyNavbar  from "../ui/components/Navbar";
import BannerWithImage from '../ui/components/banner-with-image';
import Picture from './about-imagepng.png';
import SpeakerDp from '../ui/components/speaker-dp';



const speakers = [
    {
        id:1,
        name: "Tatiana Robinson Park",
        role: "Web Designer",
    },
    {
        id:2,
        name: "Anderson Cooper",
        role: "Web Developer",
    },
    {
        id:3,
        name: "Tatiana Robinson Park",
        role: "Web Designer",
    },
    {
        id:4,
        name: "Anderson Cooper",
        role: "Web Developer",
    },
    {
        id:5,
        name: "Tatiana Robinson Park",
        role: "Web Designer",
    },
    {
        id:6,
        name: "Anderson Cooper",
        role: "Web Developer",
    },
];

function createSpeakerView(speakerItem: any){
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
        <BannerWithImage 
        header='Harmony in Diversity'
        subheader="The Oriental Society of Aesthetic Plastic Surgery (OSAPS) is dedicated to advancing the concept of Oriental beauty, offering ongoing high-quality education to plastic surgeons regarding the latest procedures and ethical patient care. This year's 18th international congress, held in collaboration with the Philippine Association of Plastic and Reconstructive and Aesthetic Surgeons (PAPRAS) during their 11th National Meeting, serves as a valuable platform for the global exchange of knowledge in aesthetic surgery. The discussions revolve around how Oriental beauty is shaping the international standard in aesthetic plastic surgery, encapsulated by the theme Harmony in Diversity."
        src={Picture.src}
        imageAlt='Cebu Picture'
        />

        

        <div className='mx-auto max-w-screen lg:max-w-screen-xl my-12'>

            <h3 className='text-blue-jay font-extrabold text-2xl text-center'>
            “OSAPS 2024, where innovation meets excellence, we promise a transformative experience in the world of aesthetic surgery.”
            </h3>

            <video className="w-full rounded-lg py-8" controls autoPlay muted>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>



        </div>

        <div className='bg-coral-blue pt-8'>

            <h3 className='text-blue-jay font-extrabold text-3xl text-center lg:max-w-screen-xl mx-auto'>
            Meet the organizing Committee
            </h3>

            <div className='flex justify-center mx-auto lg:max-w-screen-xl my-12'>
             <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
             {
            speakers.map(createSpeakerView)
             }
             </div>
       
            </div>

          

        </div>

       

     
        

        </div>
    )
}