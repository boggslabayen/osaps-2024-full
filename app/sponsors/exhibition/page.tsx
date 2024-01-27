import StickyNavbar from "@/app/ui/components/Navbar";
import Footer from "@/app/ui/components/Footer";
import ContactForm from "@/app/ui/components/contact-form/ContactForm";

export default function page() {
  const entitlements = [
    {
      id: 1,
      disc: "One booth space allocation along the hallway leading to Main Convention Hall for the duration of the 3-day conference (July 4 to 6, 2024)",
    },
    {
      id: 2,
      disc: "Note: Choice of booth space will be on a “first come, first served basis”. ",
    },
    {
      id: 3,
      disc: "Inclusion of company logo on the Convention photo walls located in different areas of the convention venue",
    },
    {
      id: 4,
      disc: "Free admission for one (1) conference participants to the Gala Dinner",
    },
  ];

  function createList(entitlements) {
    return <li className="pb-8">{entitlements.disc}</li>;
  }

  return (
    <>
      <StickyNavbar />
      <div className="mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0 ">
        <div className="border-2 rounded-lg p-8 border-slate-400">
          <div className="flex items-center py-16 border-b-2 border-gray-900 mb-10">
            <div className="w-1/2  border-r-2 border-gray-900 mr-8 text-center">
              <h3 className="text-2xl font-bold">Exhibition</h3>
              <p>$ 2,000</p>
            </div>

            <div className="w-3/4">
              <p className="leading-loose">
                Increase your brand's visibility with the Exhibitor Package:
                Secure prime booth space, showcase your logo on photo walls, and
                enjoy Gala Dinner access.
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
