import StickyNavbar from "@/app/ui/components/Navbar";
import Footer from "@/app/ui/components/Footer";
import ContactForm from "@/app/ui/components/contact-form/ContactForm";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

export default function page() {
  const entitlements = [
    {
      id: 1,
      disc: "Table space or booth inside Main Convention Hall on the first day of the conference (July 4, 2024)",
    },
    {
      id: 2,
      disc: "One booth space allocation along the hallway leading to Main Convention Hall for the duration of the succeeding 2 days of the conference (July 5 to 6, 2024)",
    },
    {
      id: 3,
      disc: "Use of assigned Conference Room as Hospitality Suite for 2 days (July 5 and 6, 2024) for better interaction with the conference participants",
    },
    {
      id: 4,
      disc: "Inclusion of one speaker (foreign or local) in the roster of invited faculty with an opportunity to give a lecture for the purpose of endorsing a product during lunch break on the first day (July 4, 2024) of the conference",
    },
    {
      id: 5,
      disc: "Note: The sponsoring company should cover all travel-related expenses of their invited speaker. A maximum of 30 minutes shall be allocated for the lecture and product presentation.",
    },
    {
      id: 6,
      disc: "Free admission for four conference participants (local or foreign) in all scientific sessions, social programs and banquet meals for the duration of the 3-day conference",
    },
    {
      id: 7,
      disc: "Free admission for four (4) conference participants to the Gala Dinner",
    },
    {
      id: 8,
      disc: "Live acknowledgment as Platinum Sponsor during morning and afternoon coffee breaks and lunch break for the duration of the 3-day conference",
    },
    {
      id: 9,
      disc: "Prominent positioning of the sponsor’s company logo in all event collaterals (website, social media, print invitations and posters, participants’ IDs, souvenir packet, souvenir program, photo walls located in different areas of the convention)",
    },
  ];

  function createList(entitlements: {
    disc:
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
    return <li className="pb-8">{entitlements.disc}</li>;
  }

  return (
    <>
      <StickyNavbar />
      <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0 ">
        <div className="border-2 rounded-lg p-8 border-slate-400">
          <div className="flex items-center py-16 border-b-2 border-gray-900 mb-10">
            <div className="w-1/2  border-r-2 border-gray-900 mr-8 text-center">
              <h3 className="text-2xl font-bold">Gold</h3>
              <p>$ 8,000</p>
            </div>

            <div className="w-3/4">
              <p className="leading-loose">
                Elevate Your Brand with Gold Sponsorship: Gain valuable booth
                spaces, feature a speaker for product endorsement, enjoy
                complimentary admissions, live acknowledgment, and logo
                prominence in event materials.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-jay">
              Sponsorship Entitlements
            </h3>
            <ul className="py-8 list-disc px-8">
              {entitlements.map(createList)}
            </ul>
          </div>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </>
  );
}
