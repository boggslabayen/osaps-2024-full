"use client";

import * as React from "react";
import StickyNavbar from "../ui/components/Navbar";
import BannerNoImage from "../ui/components/banner-no-image";
import SponsorCard from "../ui/components/sponsors-components/Sponsor-Cards";
import Link from "next/link";
import Image from "next/image";
import Icon001 from "../ui/images/icon/001.png";
import Icon002 from "../ui/images/icon/002.png";
import Icon003 from "../ui/images/icon/003.png";
import Icon004 from "../ui/images/icon/004.png";
import Unilab from "../ui/images/Sponsors/Unilab.png";
import ContactForm from "../ui/components/contact-form/ContactForm";
import Footer from "../ui/components/Footer";

export default function page() {
  return (
    <>
      <StickyNavbar />
      <BannerNoImage
        header="Sponsorship / Exhibition"
        subheader="Pharmaceutical companies, corporations and other service firms are invited to promote their brand by obtaining a specially designed Platinum, Gold and Silver Partnership Package. PAPRAS will collaborate with corporate sponsors to customize distinctive sponsorship opportunities that are aimed to optimize each sponsor's specific marketing, sales and branding objectives."
        buttonTitle="Contact Us"
      />
      <SponsorCard />

      <div className="bg-coral-blue py-8 my-16">
        <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0 ">
          <div className="">
            <h3 className="text-2xl md:text-4xl font-bold text-blue-jay text-center">
              Why sponsor or exhibit at OSAPS 2024?
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

              <p className="text-center pt-4 font-bold">
                Get unmatched exposure on our exhibition floor
              </p>

              <p className="text-center w-96">
                OSAPS 2024 anticipates over 400 attendees, with a majority
                comprising influential decision-makers who play a vital role in
                recommending aesthetic products.
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

              <p className="text-center pt-4 font-bold">
                Make long-term contracts
              </p>

              <p className="text-center w-96">
                Forge connections and collaborations with key industry
                stakeholders, which can lead to business growth and development.
              </p>
            </div>

            <div className="  py-4  flex flex-col items-center md:col-span-2">
              <Image
                src={Icon003.src}
                width={80}
                height={80}
                className=""
                alt="icon for sparkle"
              />

              <p className="text-center pt-4 font-bold">
                Establish Brand Leadership in Aesthetics Industry
              </p>

              <p className="text-center md:w-1/2">
                Enhance your brand's reputation and position it as a leader in
                the field of aesthetic products and services, solidifying trust
                and credibility among potential customers and partners.
              </p>
            </div>
          </div>

          {/* <div className="flex justify-center">
            <Link href="/register">
              <Button
                variant="filled"
                size="md"
                className="lg:inline-block rounded-full bg-amber-500 text-gray-800 font-bold mb-3">
                Register
              </Button>
            </Link>
          </div> */}
        </div>
      </div>

      <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0">
        <h3 className="text-2xl md:text-4xl font-bold text-blue-jay text-center">
          Our Sponsors
        </h3>

        <div className="flex justify-center">
          <Image src={Unilab.src} width={245} height={138} alt="Unilab Logo" />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}
