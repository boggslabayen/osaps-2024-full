import Shangbeach from "@/app/ui/images/shang_beach.png";
import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

import Lechon from "@/app/ui/images/toEat/lechon.png";
import Danggit from "@/app/ui/images/toEat/danggit.png";
import Sutukil from "@/app/ui/images/toEat/Sutukil.png";
import Chorizo from "@/app/ui/images/toEat/Chorizo.png";
import Lapu from "@/app/ui/images/toEat/Lapu-Lapu.png";
import Balut from "@/app/ui/images/toEat/Balut.png";
import Halo from "@/app/ui/images/toEat/Halo-Halo.png";
import Fresh from "@/app/ui/images/toEat/Fruits.png";
import Pastries from "@/app/ui/images/toEat/DriedMangoes.png";
import Puso from "@/app/ui/images/toEat/Puso.png";

export default function ThingstoEat() {
  const toEat = [
    {
      id: 1,
      image: Lechon,
      alt: "Lechon",
      title: "Lechon",
      description:
        " Cebu is renowned for its crispy, flavorful roasted pig known as lechon. It's a must-try local delicacy, and several places specialize in serving this delicious dish.",
    },
    {
      id: 2,
      image: Danggit,
      alt: "Danggit",
      title: "Danggit",
      description:
        "These dried and salted fish are a popular breakfast item, often enjoyed with garlic rice and eggs.",
    },
    {
      id: 3,
      image: Sutukil,
      alt: "Sutukil",
      title: "Sutukil",
      description:
        "A local dining experience where you can choose your seafood from a market, have it cooked in different ways and enjoy a variety of flavors in one meal.",
    },
    {
      id: 4,
      image: Chorizo,
      alt: "Chorizo de Cebu",
      title: "Chorizo de Cebu",
      description:
        "These sausages are sweet, spicy, and savory, and they make for a tasty snack or a great addition to your meal.",
    },
    {
      id: 5,
      image: Puso,
      alt: "Puso",
      title: "Puso",
      description:
        "Known as 'hanging rice,' it's a serving of rice wrapped in a woven coconut leaf pouch. It's a traditional way to enjoy rice and is often served with grilled dishes.",
    },
    {
      id: 6,
      image: Lapu,
      alt: "Lapu-Lapu",
      title: "Lapu-Lapu",
      description:
        "Named after the local hero Lapu-Lapu, this dish features grouper or other white fish, typically cooked in a savory sauce with vegetables.",
    },
    {
      id: 7,
      image: Balut,
      alt: "Balut",
      title: "Balut",
      description:
        "For the adventurous eater, try this Filipino street food – a fertilized duck embryo, often enjoyed with a dash of salt and vinegar.",
    },
    {
      id: 8,
      image: Halo,
      alt: "Halo-Halo",
      title: "Halo-Halo",
      description:
        "A colorful and delightful Filipino dessert that combines crushed ice with a mix of sweet ingredients like fruit, jellies, beans, and leche flan, topped with ice cream.",
    },
    {
      id: 9,
      image: Fresh,
      alt: "Fresh Fruit",
      title: "Fresh Fruit",
      description:
        "Cebu is famous for its sweet mangoes, and you can also enjoy other tropical fruits like pomelo and pineapple.",
    },
    {
      id: 10,
      image: Pastries,
      alt: "Cebuano Pastries",
      title: "Cebuano Pastries",
      description:
        "Don't miss trying some local pastries like otap (sweet puff pastry), rosquillos (ring-shaped cookies), and masareal (a sweet treat made from ground peanuts).",
    },
  ];

  function createCard(toEat: {
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
          <p className="hidden">{toEat.id}</p>
          <Image
            src={toEat.image}
            alt={toEat.alt}
            width={455}
            height={115}
            className="pb-4"
          />
          <div className="px-4 pb-4">
            <p className="text-md font-bold">{toEat.title}</p>
            <p className="max-w-md">{toEat.description}</p>
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
            Things to Eat
          </h3>
          <p className="text-xl font-light leading-loose text-gray-800">
            Mactan, Cebu, offers a diverse range of activities, making it a
            fantastic destination for all types of travelers, from beach lovers
            to history enthusiasts.
          </p>
        </div>
        <div className="grid justify-around  mx-auto max-w-fit lg:max-w-screen-xl">
          <div className="md:grid grid-cols-2 gap-4">
            {toEat.map(createCard)}
          </div>
        </div>
      </div>
    </>
  );
}
