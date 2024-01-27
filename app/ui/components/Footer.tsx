import Image from "next/image";
import LogoHeader from "../images/logo_header.png";
import LogoTheme from "../images/Footerlogo_hid.png";

export default function Footer() {
  return (
    <>
      <div className="bg-blue-jay justify-center">
        <div className="md:flex justify-items-center px-8 py-4 justify-between">
          <Image
            src={LogoHeader}
            width={200}
            height={55}
            alt="OSAPS Logo"
            className="order-1 pb-8"
          />

          <Image
            src={LogoTheme}
            width={200}
            height={55}
            alt="OSAPS Logo"
            className="md:order-3 hidden md:block"
          />

          <div className="text-center text-gray-50 md:order-2">
            <p>This Website is operated by</p>
            <p>
              Philippine Association of Plastic Reconstructive and Aesthetic
              Surgeons (PAPRAS)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
