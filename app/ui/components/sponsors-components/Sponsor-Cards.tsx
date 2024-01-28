import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";
import { UrlObject } from "url";

export default function SponsorCard() {
  const sponsorType = [
    {
      id: 1,
      title: "Platinum",
      amount: "$ 11,000",
      desc: "Elevate your visibility at OSAPS 2024 with our exclusive Platinum Partner package for lasting recognition and strong connections.",
      link: "/sponsors/platinum",
    },
    {
      id: 2,
      title: "Gold Package",
      amount: "$8,000",
      desc: "Becoming a Gold Partner provides your organization with exceptional visibility and exposure leading up to and during the event.",
      link: "/sponsors/gold",
    },
    {
      id: 3,
      title: "Silver",
      amount: "$5,000",
      desc: "Embrace enhanced visibility and a more prominent presence at OSAPS 2024 through our Silver Partnership opportunity.",
      link: "/sponsors/silver",
    },
    {
      id: 4,
      title: "Exhibition Package",
      amount: "$2,000",
      desc: "Elevate your brand and capture the attention of event attendees with enhanced visibility as an exhibitor at OSAPS 2024.",
      link: "/sponsors/exhibition",
    },
  ];

  function CreateCard(sponsorType: {
    title:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined;
    amount:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined;
    desc:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined;
    link: string | UrlObject;
  }) {
    return (
      <div className="border-2 rounded-md border-solid px-10 py-12 mb-4 md:mb-0">
        <h3 className="text-2xl font-black text-blue-jay text-center pb-2">
          {sponsorType.title}
        </h3>
        <p className="text-center text-gray-500 font-bold pb-4">
          {sponsorType.amount}
        </p>
        <p className="w-fit text-center text-lg leading leading-relaxed pb-12">
          {sponsorType.desc}
        </p>
        <Link href={sponsorType.link}>
          <p className="text-kg font-bold text-blue-jay text-center hover:text-gray-400">
            More Info
          </p>
        </Link>
      </div>
    );
  }

  return (
    <div className="md:max-w-screen-xl mx-auto  mt-8">
      <h3 className="text-3xl text-blue-jay font-bold pb-8 mx-8 md:mx-0">
        Sponsorship / Exhibition Opportunities
      </h3>
      <div className="md:grid grid-cols-2 gap-8 mx-8 md:mx-0">
        {sponsorType.map(CreateCard)}
      </div>
    </div>
  );
}
