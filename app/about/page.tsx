
import * as React from 'react';
import StickyNavbar from "../ui/components/Navbar";
import BannerWithImage from '../ui/components/banner-with-image';
import Picture from './about-imagepng.png';



export default function page(){
    return(
        <div>
        <StickyNavbar />
        <BannerWithImage 
        header='Harmony in Diversity'
        subheader="The Oriental Society of Aesthetic Plastic Surgery (OSAPS) is dedicated to advancing the concept of Oriental beauty, offering ongoing high-quality education to plastic surgeons regarding the latest procedures and ethical patient care. This year's 18th international congress, held in collaboration with the Philippine Association of Plastic and Reconstructive and Aesthetic Surgeons (PAPRAS) during their 11th National Meeting, serves as a valuable platform for the global exchange of knowledge in aesthetic surgery. The discussions revolve around how Oriental beauty is shaping the international standard in aesthetic plastic surgery, encapsulated by the theme Harmony in Diversity."
        imageSource={Picture}
        imageAlt='Cebu Picture'
        />

        </div>
    )
}