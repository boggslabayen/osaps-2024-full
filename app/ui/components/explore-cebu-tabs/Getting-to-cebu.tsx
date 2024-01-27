import Image from "next/image";
import Howto from "@/app/ui/images/howtoget.png";

export default function Gettingto() {
  return (
    <>
      <div className="md:flex mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0">
        <div className="md:flex justify-between items-center">
          <Image
            src={Howto.src}
            width={466}
            height={600}
            className="order-2 md:order-1"
            alt="Cebu aerial shot"
          />
          <div className="md:w-1/2 order-1">
            <h3 className="text-4xl text-blue-jay font-bold pb-8">
              Getting to Cebu
            </h3>

            <p className="text-lg leading-loose text-gray-800 pb-8">
              Getting to Mactan, Cebu, is relatively straightforward, and for
              many travelers, it typically involves international flights.
              Mactan-Cebu International Airport, one of the Philippines' busiest
              airports, connects the island to various international
              destinations. Most international visitors will arrive in Cebu via
              connecting flights from major hubs such as Manila, Singapore, Hong
              Kong, or Incheon.
            </p>
            <p className="text-lg font-light leading-loose text-gray-800">
              Regarding travel documentation, most travelers to the Philippines,
              including Mactan, Cebu, are required to have a valid passport for
              entry. The specific visa requirements can vary depending on your
              nationality and the purpose and duration of your visit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
