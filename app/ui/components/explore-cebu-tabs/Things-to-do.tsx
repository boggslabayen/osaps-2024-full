import Shangbeach from "@/app/ui/images/shang_beach.png";
import Image from "next/image";
import BeachBliss from "@/app/ui/images/Things-to-do/beach-bliss.png";
import WaterSport from "@/app/ui/images/Things-to-do/water-sport.png";
import IslandHop from "@/app/ui/images/Things-to-do/IslandHop.png";
import Lechon from "@/app/ui/images/Things-to-do/Lechon.png";
import Cathedral from "@/app/ui/images/Things-to-do/Cathedral.png";
import Golf from "@/app/ui/images/Things-to-do/Golf.png";
import Marine from "@/app/ui/images/Things-to-do/Marine.png";
import Spa from "@/app/ui/images/Things-to-do/Spa.png";
import Shopping from "@/app/ui/images/Things-to-do/Guitar.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

export default function ThingstoDo() {
  const toDo = [
    {
      id: 1,
      image: BeachBliss,
      alt: "Beach Bliss",
      title: "Beach Bliss",
      description:
        "Mactan is famous for its beautiful beaches. Spend your days sunbathing, swimming, snorkeling, or simply relaxing by the crystal-clear waters.",
    },
    {
      id: 2,
      image: WaterSport,
      alt: "Water Sports",
      title: "Water Sports",
      description:
        "Try your hand at various water sports like scuba diving, jet-skiing, parasailing, and windsurfing to make the most of the island's aquatic wonders.",
    },
    {
      id: 3,
      image: IslandHop,
      alt: "Island Hopping",
      title: "Island Hopping",
      description:
        "Explore nearby islands and enjoy their unique charms, including Gilutongan, Nalusuan, and Caohagan, often visited on island-hopping tours.",
    },
    {
      id: 4,
      image: Lechon,
      alt: "Local Cuisines",
      title: "Local Cuisines",
      description:
        "Savor delicious Cebuano cuisine, particularly the famous lechon (roast pig), and experience local flavors at various restaurants and markets.",
    },
    {
      id: 5,
      image: Cathedral,
      alt: "Cultural and Historical Sites",
      title: "Cultural and Historical Sites",
      description:
        "Discover the region's rich history by visiting landmarks like the Magellan Shrine and Fort San Pedro, which offer insights into the island's colonial past.",
    },
    {
      id: 6,
      image: Golf,
      alt: "Golf",
      title: "Golf",
      description:
        "Golf enthusiasts can tee off at one of the island's world-class golf courses, such as the Mactan Island Golf Club.",
    },
    {
      id: 7,
      image: Marine,
      alt: "Marine Sanctuaries",
      title: "Marine Sanctuaries",
      description:
        "Explore marine sanctuaries like the Nalusuan Island Marine Sanctuary, ideal for snorkeling and observing marine life.",
    },
    {
      id: 8,
      image: Spa,
      alt: "Spa and Wellness",
      title: "Spa and Wellness",
      description:
        "Pamper yourself at one of the island's luxury spas, offering massages, wellness treatments, and relaxation.",
    },
    {
      id: 9,
      image: Shopping,
      alt: "Shopping",
      title: "Shopping",
      description:
        "Shop for souvenirs, handcrafted items, and local products in Mactan's markets and shops, including the renowned Mactan Shrine.",
    },
  ];

  function createCard(toDo: {
    id:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined;
    image: string | StaticImport;
    alt: string;
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
    description:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | PromiseLikeOfReactNode
      | null
      | undefined;
  }) {
    return (
      <div className="my-8 ">
        <div className="max-w-max border-2 rounded-md shadow-sm w-5/6 md:h-full ">
          <p className="hidden">{toDo.id}</p>
          <Image
            src={toDo.image}
            alt={toDo.alt}
            width={455}
            height={115}
            className="pb-4"
          />
          <div className="px-4 pb-4">
            <p className="text-md font-bold">{toDo.title}</p>
            <p className="max-w-md">{toDo.description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className=" mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0">
        <div>
          <h3 className="text-4xl font-bold text-blue-jay mb-8">
            Things to Do
          </h3>
          <p className="text-xl font-light leading-loose text-gray-800">
            Mactan, Cebu, offers a diverse range of activities, making it a
            fantastic destination for all types of travelers, from beach lovers
            to history enthusiasts.
          </p>
        </div>
        <div className="grid justify-around  mx-auto max-w-fit lg:max-w-screen-xl">
          <div className="md:grid grid-cols-2 gap-4">
            {toDo.map(createCard)}
          </div>
        </div>
      </div>
    </>
  );
}
