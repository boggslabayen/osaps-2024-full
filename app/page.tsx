"use client";

import Image from "next/image";
import * as React from "react";
import StickyNavbar from "./ui/components/Navbar";
import Welcomemessage from "./ui/components/Welcomemessage";
import DocFlor from "./ui/images/Doc_Flor.png";
import DocGene from "./ui/images/Doc_Gene.png";
import DocBen from "./ui/images/Doc_Ben.png";
import Hero from "./ui/images/Banner.png";
import EventLogo from "./ui/images/Logo_theme.png";
import { Button } from "./ui/mtwexport";
import Link from "next/link";
import PaprasLogo from "./ui/images/papras_logo.png";
import osapsLogo from "./ui/images/osaps_logo.png";
import Jetski from "./ui/images/jetski.png";
import Icon001 from "./ui/images/icon/001.png";
import Icon002 from "./ui/images/icon/002.png";
import Icon003 from "./ui/images/icon/003.png";
import Icon004 from "./ui/images/icon/004.png";
import Head from "next/head";
import Footer from "./ui/components/Footer";

export default function Home() {
  return (
    <main className="">
      <StickyNavbar />

      <div className="sm:bg-center sm:bg-no-repeat sm:bg-[url('./ui/images/Banner.png')] sm:bg-cover ">
        <div className="h-max px-16 py-16 md:py-14">
          <div className="flex flex-col md:flex mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0 items-start">
            <Image
              src={EventLogo}
              width={0}
              bg-cover
              height={0}
              className="
             "
              alt="logo"
            />

            <div className="text-center py-10">
              <h3 className="text-xl font-bold text-blue-jay">
                July 4-6, 2024
              </h3>
              <h3 className="text-xl font-bold text-blue-jay pb-8">
                Shangri-La Mactan Hotel, Cebu Philippines
              </h3>
              <Link href="/register">
                <Button
                  variant="filled"
                  size="lg"
                  className="lg:inline-block rounded-full bg-amber-500 text-gray-800 font-bold mb-3">
                  Register
                </Button>
              </Link>

              <p>Early bird rate ends on 06/01/2024 </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-ivory py-4">
        <div className="md:flex mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0 justify-between">
          <h3 className="text-3xl md:text-4xl leading-tight font-bold text-blue-jay mb-8 md:w-3/5 md:mr-8">
            Be part of an exciting global exchange of knowledge and expertise
            showcasing Asian beauty in the world of aesthetic plastic surgery
          </h3>

          <div className="md:w-2/5">
            <div className="pb-4">
              <div className="flex items-center pb-4">
                <div className="pr-4">
                  <Image
                    src={osapsLogo.src}
                    width={100}
                    height={100}
                    className=""
                    alt="Osaps Logo"
                  />
                </div>

                <div className="flex flex-col">
                  <p>18th International Congress</p>
                  <h3 className="text-2xl font-bold w-full">
                    Oriental Society of Aesthetic Plastic Surgeons
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center pb-4">
                <div className="pr-4">
                  <Image
                    src={PaprasLogo.src}
                    width={160}
                    height={160}
                    className=""
                    alt="Papras Logo"
                  />
                </div>

                <div className="flex flex-col">
                  <p>11th National Meeting</p>
                  <h3 className="text-2xl font-bold w-full">
                    Philippine Association of Plastic Reconstructive and
                    Aesthetic Surgeons
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Welcomemessage
          message="We will be gathering once again for the 18th Congress of the Oriental Society of Aesthetic Plastic Surgery. 
        I am pleased and proud to announce that the Congress will be hosted by my Society, the Philippine Association of Plastic Reconstructive & Aesthetic Surgeons on July 4-6, 2024 in Cebu, Philippines.  The host prepared a well rounded Program to highlight Asian Aesthetics. 
        Come one and all to share our knowledge talents and experiences in Aesthetic Surgery as it pertains to the concept of Asian beauty. "
          src={DocFlor.src}
          alt="Doc Flor Image"
          doc="Dr. Florencio Q. Lucero M.D."
          role="Secretary-General"
          society="Oriental Society of Aesthetic Plastic Surgery (OSAPS)"
        />

        <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 py-4  ">
          <div className="lg:flex items-center mx-2">
            <Image
              src={DocGene.src}
              width={200}
              height={200}
              className="w-1/3 lg:order-last"
              alt="Doc Gene Image"
            />

            <div className="lg:w-2/3 pr-6">
              <p className="text-gray-800 my-4 font-normal text-lg leading-10">
                We are glad to announce and host our upcoming Congress in{" "}
                <span className="font-bold">
                  2024: the 18th International Congress of the Oriental Society
                  of Aesthetic Plastic Surgery (OSAPS) and the 11th National
                  Meeting of the Philippine Association of Plastic
                  Reconstructive and Aesthetic Surgeons, Inc. (PAPRAS).
                </span>{" "}
                This event will be attended by distinguished Plastic Surgeons
                from Asia and all over the world. This prestigious Congress will
                provide a platform for renowned experts to share their
                knowledge, exchange innovative ideas, and discuss the latest
                advancements in Aesthetic Plastic Surgery. With a diverse range
                of topics and interactive sessions, this Congress aims to foster
                collaboration and elevate the standards of aesthetic plastic
                surgery globally. This event is set to take place from July 4 to
                6, 2024,at the luxurious Shangri-La Mactan in Cebu, Philippines.
                The theme of thiscongress is{" "}
                <span className="font-bold">
                  'Harmony in Diversity: Oriental Beauty as a Global Standard in
                  Aesthetic Plastic Surgery'
                </span>{" "}
                As the world becomes more interconnected, the beauty standards
                of different cultures converge and create a global tapestry of
                aesthetics. The congress aims to explore the diverse aspects of
                Oriental beauty and how they influence and enrich the field of
                aesthetic plastic surgery worldwide. Our distinguished panel of
                experts, renowned for their pioneering work in aesthetic
                surgery, will share their insights, expertise, and innovative
                techniques during the meeting.
              </p>

              <h3 className="text-xl font-bold text-blue-jay">
                {" "}
                Dr. Gene Gerald SJ Tiongco, MD{" "}
              </h3>
              <p className="text-gray-600 font-normal text-lg">President</p>
              <p className="text-gray-600 font-normal text-lg">
                Philippine Association of Plastic Reconstructive and Aesthetic
                Surgeons (PAPRAS)
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 py-4  ">
          <div className="lg:flex items-center mx-2">
            <Image
              src={DocBen.src}
              width={200}
              height={200}
              className="w-1/3 lg:order-last"
              alt="Doc Gene Image"
            />

            <div className="lg:w-2/3 pr-6">
              <p className="text-gray-800 my-4 font-normal text-lg leading-10">
                With immense joy and great honor, I am thrilled to announce and
                extend my invitation to all of you to join us in experiencing
                the unparalleled hospitality of my country as we commemorate the
                36 years of Osaps' existence. Get ready for an exhilarating
                event hosted in Mactan, the alternate capital of the Queen
                Province of the Visayas, known as Cebu! This vibrant city has
                been chosen as the venue for an extraordinary gathering focusing
                on Advance Learning and Cutting-edge Topics, where the Asian
                member nations will converge in 2024. I take immeasurable pride
                and pleasure in championing the Phil Assoc of Plastic and
                Reconstructive Surgeons. Together with other Member Societies,
                we will pave the way, showcasing the pinnacle of Asian Artistry
                in the field of Aesthetics. As your concurrent President and
                home grown Practitioner of the Philippines, i invite each and
                every one of you to join us and share your experiences,
                fostering a sense of belonging and leadership that defines our
                community. Get ready to be a part of something truly
                extraordinary
              </p>

              <h3 className="text-xl font-bold text-blue-jay">
                {" "}
                Dr. Benjamin Herbosa, MD, FPAPRAS, FPCS{" "}
              </h3>
              <p className="text-gray-600 font-normal text-lg">President</p>
              <p className="text-gray-600 font-normal text-lg">
                Oriental Society of Aesthetic Plastic Surgery (OSAPS)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg md:py-8">
        <div className="flex mx-auto max-w-fit lg:max-w-screen-xl my-12 py-4 justify-between items-center">
          <div className="flex flex-col md:w-6/12 md:mr-8 mx-2 md:mx-0">
            <div>
              <h3 className="text-ivory font-bold text-2xl md:text-4xl md:pb-4">
                EMBARK ON A RICH LEARNING EXPERIENCE
              </h3>

              <p className="text-ivory leading-loose my-8 text-lg">
                Immerse yourself in an enriching learning experience at OSAPS
                2024 Cebu, hosted at the stunning Shangri-La Mactan Hotel. This
                prestigious event offers attendees an upscale and comfortable
                educational setting where knowledge and quality converge, making
                OSAPS 2024 an unforgettable journey into the world of aesthetic
                surgery.
              </p>
            </div>

            <div>
              <Link href="/register">
                <Button
                  variant="filled"
                  size="md"
                  className="lg:inline-block rounded-full bg-amber-500 text-gray-800 font-bold mb-3">
                  Register
                </Button>
              </Link>
            </div>
          </div>

          <div className="w-2/5 hidden md:block">
            <Image
              src={Jetski.src}
              width={450}
              height={534}
              alt="Jetski couple"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0">
        <div className="">
          <h3 className="text-2xl md:text-4xl font-bold text-blue-jay text-center">
            Why you should attend OSAPS 2024: Harmony in Diversity?
          </h3>
        </div>

        <div className="md:grid grid-cols-2 md:my-10 justify-between gap-8">
          <div className="  py-4  flex flex-col items-center mx-8">
            <Image
              src={Icon002.src}
              width={80}
              height={80}
              className=""
              alt="icon for forms"
            />

            <p className="text-center pt-4">
              <span className="font-bold">Gain a global perspective</span> on
              the evolving landscape of aesthetic plastic surgery
            </p>
          </div>

          <div className="   py-4 flex flex-col items-center mx-8">
            <Image
              src={Icon001.src}
              width={80}
              height={80}
              className=""
              alt="icon for bulb"
            />

            <p className="text-center pt-4">
              <span className="font-bold">Learn and network</span> with
              globally-renowned leaders in the field of aesthetic surgery
            </p>
          </div>

          <div className="  py-4  flex flex-col items-center mx-8">
            <Image
              src={Icon003.src}
              width={80}
              height={80}
              className=""
              alt="icon for sparkle"
            />

            <p className="text-center pt-4">
              <span className="font-bold">Uncover cutting-edge knowledge</span>{" "}
              and emerging trends to keep you at the forefront of the
              ever-evolving field of aesthetic surgery.
            </p>
          </div>

          <div className="   py-4 flex flex-col items-center mx-8">
            <Image
              src={Icon004.src}
              width={80}
              height={80}
              className=""
              alt="icon for fellows"
            />

            <p className="text-center pt-4">
              <span className="font-bold">
                Connect with fellow plastic surgeons
              </span>{" "}
              who share your goals and aspirations in the field of aesthetic
              surgery.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/register">
            <Button
              variant="filled"
              size="md"
              className="lg:inline-block rounded-full bg-amber-500 text-gray-800 font-bold mb-3">
              Register
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
