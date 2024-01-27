import Shangbeach from "@/app/ui/images/shang_beach.png";
import Image from "next/image";

import { Card, Typography } from "@/app/ui/mtwexport";

const TABLE_HEAD = ["Room Type", "Website Rate", "OSAPS Discount"];

const TABLE_ROWS = [
  {
    Room: "Deluxe",
    webRate: "₱21358.50 / Night",
    discount: "₱16,000.00 / Night",
  },
  {
    Room: "Seaview Deluxe Rooms",
    webRate: "₱23,830.00 / Night",
    discount: "₱18,000.00 / Night",
  },
  {
    Room: "Premiere Family",
    webRate: "₱27,250.50 / Night",
    discount: " ₱22,500.00 / Night",
  },
  {
    Room: "Ocean Club",
    webRate: "₱27,987.00 / Night",
    discount: "₱22,500.00 / Night",
  },
];

export default function Whereto() {
  return (
    <>
      <div className=" mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0">
        <div>
          <h3 className="text-4xl font-bold text-blue-jay mb-8">
            Where to Stay
          </h3>
          <p className="text-xl font-light leading-loose text-gray-800">
            In Mactan, Cebu, your lodging options cater to all preferences and
            budgets. For the utmost in relaxation and convenience, consider the
            world-class resorts, such as the preferred Shangri-La Mactan,
            offering stunning ocean views, private beaches, and top-notch
            amenities.
          </p>
        </div>

        <div className="md:flex mx-auto max-w-fit lg:max-w-screen-xl my-12 px-4 md:px-0">
          <div className="md:flex justify-between items-center">
            <Image
              src={Shangbeach.src}
              width={466}
              height={600}
              className="order-2 md:order-1"
              alt="Cebu aerial shot"
            />
            <div className="md:w-1/2 order-1">
              <h3 className="text-4xl text-blue-jay font-bold pb-8">
                Make a reservation now!
              </h3>

              <p className="text-xl leading-loose text-gray-800 pb-8">
                We are pleased to announce that we have exclusive special hotel
                rates for all delegates who wish to stay at Shangri-La Mactan
                Hotel
              </p>

              <Card className="h-full w-5/4 overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70 text-center">
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TABLE_ROWS.map(({ Room, webRate, discount }, index) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={Room}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-center">
                              {Room}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-thin text-center">
                              {webRate}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold text-center">
                              {discount}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
