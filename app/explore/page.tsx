"use client";

import * as React from "react";
import StickyNavbar from "../ui/components/Navbar";
import BannerWithImage from "../ui/components/banner-with-image";
import Picture from "./exploreImage.png";
import Whereto from "../ui/components/explore-cebu-tabs/Where-to-stay";
import Gettingto from "../ui/components/explore-cebu-tabs/Getting-to-cebu";
import ThingstoDo from "../ui/components/explore-cebu-tabs/Things-to-do";
import FoodtoEat from "../ui/components/explore-cebu-tabs/FoodtoEat";
import { useState } from "react";

import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@/app/ui/mtwexport";
import Footer from "../ui/components/Footer";

function page() {
  const [activeTab, setActiveTab] = useState("Getting to Cebu");

  const data = [
    {
      label: "Getting to Cebu",
      value: "getting to cebu",
    },
    {
      label: "Where to Stay",
      value: "where to stay",
    },
    {
      label: "Things to do",
      value: "Things to do",
    },
    {
      label: "Must-try-Eats",
      value: "Must-try-Eats",
    },
  ];

  return (
    <>
      <StickyNavbar />
      <BannerWithImage
        header="Unwind and Explore Mactans Treasures Beyond OSAPS 2024!"
        subheader="Mactan, Cebu is a captivating island paradise nestled in the Philippines, renowned for its pristine beaches, crystal-clear waters, and vibrant marine life. This tropical haven offers an array of water sports, historic sites like the Magellan Shrine, and the striking Mactan-Cebu International Airport. It's a destination where natural beauty and rich culture converge, providing travelers with an unforgettable experience in the heart of the Visayas region."
        src={Picture.src}
        imageAlt="Cebu Picture"
      />

      <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0">
        <Tabs value={data[0].value}>
          <TabsHeader
            className="rounded-full bg-transparent p-0"
            indicatorProps={{
              className: "bg-blue-jay shadow-none rounded-full",
            }}>
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-gray-50" : ""}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel key={data[0].value} value={data[0].value}>
              <Gettingto />
            </TabPanel>

            <TabPanel key={data[1].value} value={data[1].value}>
              <Whereto />
            </TabPanel>

            <TabPanel key={data[2].value} value={data[2].value}>
              <ThingstoDo />
            </TabPanel>

            <TabPanel key={data[3].value} value={data[3].value}>
              <FoodtoEat />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>

      <Footer />
    </>
  );
}

export default page;
