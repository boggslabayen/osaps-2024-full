import Image from "next/image";
import PaprasLogo from "../images/papras_logo.png";

export default function Footer() {
  return (
    <>
      <div className="bg-blue-jay items-center">
        <div className="md:flex items-center px-8 py-4">
          <Image src={PaprasLogo} width={75} height={75} alt="Papras Logo" />
          <div className="">
            <p className="text-regular text-gray-50">
              This website is operated by:
            </p>
            <p className="text-gray-50 font-bold">
              Philippine Association of Plastic Reconstructive and Aesthetic
              Surgeons
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
