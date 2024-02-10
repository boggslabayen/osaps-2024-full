"use client";

import * as React from "react";
import StickyNavbar from "../ui/components/Navbar";
import BannerNoImage from "../ui/components/banner-no-image";
import SpeakerDp from "../ui/components/speaker-dp";
import Footer from "../ui/components/Footer";
import Prof from "../ui/images/speakers/prof.png";
import Prof1 from "../ui/images/speakers/prof1.png";
import Prof2 from "../ui/images/speakers/prof2.png";
import UserProfile from "../ui/images/speakers/user_icon.png";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

const topics = [
  {
    id: 1,
    topic: "Facial Aesthetic Surgery",
    speakerPhoto: `${Prof2.src}`,
    speakerName: "Dr. Francisco Gomez Bravo",
    addedInfo: " ",
  },
  {
    id: 2,
    topic: "Periorbital Rejuvenation",
    speakerPhoto: `${UserProfile.src}`,
    speakerName: "To Follow",
    addedInfo: " ",
  },
  {
    id: 3,
    topic: "Breast Aesthetic Surgery",
    speakerPhoto: `${UserProfile.src}`,
    speakerName: "To Follow",
    addedInfo: " ",
  },
  {
    id: 4,
    topic: "Body Contouring",
    speakerPhoto: `${Prof1.src}`,
    speakerName: "Ali Saalabian, MD",
    addedInfo: "Austria",
  },
  {
    id: 5,
    topic: "Rhinoplasty",
    speakerPhoto: `${UserProfile.src}`,
    speakerName: "To Follow",
    addedInfo: " ",
  },
  {
    id: 6,
    topic: "Non-invasive aesthetic procedures & Energy devices",
    speakerPhoto: `${UserProfile.src}`,
    speakerName: "To Follow",
    addedInfo: " ",
  },
  {
    id: 7,
    topic: "Fat grafting and regenerative medicine",
    speakerPhoto: `${UserProfile.src}`,
    speakerName: "To Follow",
    addedInfo: " ",
  },
  {
    id: 8,
    topic: "Transgender health",
    speakerPhoto: `${UserProfile.src}`,
    speakerName: "To Follow",
    addedInfo: " ",
  },
  {
    id: 9,
    topic: "Breast aesthetic reconstruction",
    speakerPhoto: `${UserProfile.src}`,
    speakerName: "To Follow",
    addedInfo: " ",
  },
  {
    id: 10,
    topic: "Practice management and patient safety",
    speakerPhoto: `${UserProfile.src}`,
    speakerName: "To Follow",
    addedInfo: " ",
  },
];

function CreateTopics(topics: {
  id: React.Key | null | undefined;
  addedInfo: React.ReactNode;
  speakerName: React.ReactNode;
  speakerPhoto: string | StaticImport;
  topic:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}): React.JSX.Element {
  return (
    <div key={topics.id}>
      <div className="border-2 border-slate-50 py-8 rounded-lg">
        <div className="flex justify-center">
          <Image
            src={topics.speakerPhoto}
            alt="avatar"
            width={100}
            height={100}
          />
        </div>

        <div className="pb-4">
          <p className="font-lg text-center font-bold">{topics.speakerName}</p>
          <p className="font-lg text-center">{topics.addedInfo}</p>
        </div>

        <p className="text-xl font-body text-center">{topics.topic}</p>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <>
      <StickyNavbar />
      <BannerNoImage
        header="Program & Featured Speakers"
        subheader="Across the diverse spectrum of OSAPS 2024 programs and themes, our Featured Speakers empower attendees with insights, leadership, and inspiration to navigate the evolving landscape of aesthetic surgery."
        buttonTitle="Register Now"
      />

      <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0 py-8">
        <h3 className="pb-8 text-2xl font-bold">Invited Speaker</h3>
        <div className="flex items-center p-8 border-2 border-slate-50 rounded-lg">
          <Image
            src={Prof.src}
            width={200}
            height={200}
            alt="Prof Yushimura Image"
          />

          <div className="pl-8">
            <h4 className="md:text-4xl font-bold text-blue-jay">
              Prof. Kotaro Yoshimura, MD
            </h4>
            <p className="md:text-2xl pt-4 text-gray-600">
              Seiichi Ohmori Lecturer
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0 py-8">
        <p className="text-2xl leading-relaxed text-center text-blue-jay">
          Dive into a wealth of transformative knowledge offered by industry
          experts, spanning a diverse range of topics for a comprehensive
          learning experience.
        </p>
      </div>
      <div className=" mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0">
        <div className="grid grid-cols-2 gap-4  mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0 content-center">
          {topics.map(CreateTopics)}
        </div>
      </div>
      <Footer />
    </>
  );
}
