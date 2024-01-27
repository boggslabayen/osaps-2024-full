import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  return (
    <>
      <div className="bg-ivory">
        <div className="max-w-screen mx-auto lg:max-w-screen-xl text-center py-24">
          <h3 className="font-bold text-3xl text-blue-jay">
            For Inquiries, you may reach us at:{" "}
          </h3>
          {/* <FontAwesomeIcon icon={faEnvelope} className="px-4" /> */}
          <p className="text-xl py-4">osaps2024@gmail.com</p>

          {/* <FontAwesomeIcon icon={faPhone} /> */}
          <p className="text-xl py-4">+632-84561238</p>
        </div>
      </div>
    </>
  );
}
