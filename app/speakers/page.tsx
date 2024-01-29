"use client";

import * as React from "react";
import StickyNavbar from "../ui/components/Navbar";
import BannerNoImage from "../ui/components/banner-no-image";
import SpeakerDp from "../ui/components/speaker-dp";
import Footer from "../ui/components/Footer";
import Prof from "../ui/images/speakers/prof.png";
import Image from "next/image";

const topics = [
  {
    id: 1,
    topic: "Facial Aesthetic Surgery",
  },
  {
    id: 2,
    topic: "Periorbital Rejuvenation",
  },
  {
    id: 3,
    topic: "Breast Aesthetic Surgery",
  },
  {
    id: 4,
    topic: "Body Contouring",
  },
  {
    id: 5,
    topic: "Rhinoplasty",
  },
  {
    id: 6,
    topic: "Non-invasive aesthetic procedures & Energy devices",
  },
  {
    id: 7,
    topic: "Fat grafting and regenerative medicine",
  },
  {
    id: 8,
    topic: "Transgender health",
  },
  {
    id: 9,
    topic: "Breast aesthetic reconstruction",
  },
  {
    id: 10,
    topic: "Practice management and patient safety",
  },
];

function CreateTopics(topics: {
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
}) {
  return (
    <div>
      <div className="border-2 border-slate-50 py-8 rounded-lg h-40">
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
