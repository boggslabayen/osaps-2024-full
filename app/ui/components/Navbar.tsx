"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Logopng from "../images/logo_header.png";

import { Navbar, Collapse, Typography, Button, IconButton } from "../mtwexport";
import { link } from "fs";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll py-4">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-8 py-6 lg:px-8 lg:py-4 bg-blue-jay">
        <div className="flex items-center justify-between mx-2 md:mx-8">
          {/* <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer font-medium border-double border-2 px-4 py-2"
          >
            OSAPS 2024
          </Typography> */}
          <Link href="/">
            <Image
              src={Logopng}
              width={180}
              height={60}
              className=""
              alt="logo OSAPS 2024"
            />
          </Link>

          <div className="flex hidden md:block">
            <Link
              href="/speakers"
              className="px-4 text-light-blue-100 hover:text-amber-900 text-md">
              Program / Speakers
            </Link>
            {/* <Link
              href="/abstract"
              className="px-4 text-light-blue-100 hover:text-amber-900 text-md">
              Abstract
            </Link> */}
            <Link
              href="/explore"
              className="px-4 text-light-blue-100 hover:text-amber-900 text-md">
              Explore
            </Link>
            <Link
              href="/sponsors"
              className="px-4 text-light-blue-100 hover:text-amber-900 text-md">
              Sponsors
            </Link>
            {/* <Link
              href="/about"
              className="px-4 text-light-blue-100 hover:text-amber-900 text-md">
              About
            </Link> */}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <Link href="/register">
                <Button
                  variant="filled"
                  size="md"
                  className="hidden lg:inline-block rounded-full bg-amber-500 text-gray-800 font-bold">
                  Register
                </Button>
              </Link>
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}>
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="text-center">
            <Link
              href="/speakers"
              className="px-4 py-4 text-light-blue-100 hover:text-amber-900 text-md block">
              Speakers
            </Link>
            <Link
              href="/abstract"
              className="px-4 py-4 text-light-blue-100 hover:text-amber-900 text-md block">
              Abstract
            </Link>
            <Link
              href="/speakers"
              className="px-4 py-4 text-light-blue-100 hover:text-amber-900 text-md block">
              Speakers
            </Link>
            <Link
              href="/abstract"
              className="px-4 py-4 text-light-blue-100 hover:text-amber-900 text-md block">
              Abstract
            </Link>
          </div>

          <div className="flex items-center gap-x-1 justify-center py-4">
            <Button
              variant="filled"
              size="lg"
              className="rounded-full bg-amber-500 text-gray-800">
              <span>Register Now</span>
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
