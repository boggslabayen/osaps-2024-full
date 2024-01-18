import { Card, Typography } from "../mtwexport";

const TABLE_HEAD = ["", "Early-Bird Rate", "Standard Rate", "On-site Rate"];

const TABLE_ROWS = [
  {
    type: "",
    ebrate: "until June 1, 2024",
    srate: "from June 2- July 3, 2024",
    osrate: "from July 4-6, 2024",
  },
  {
    type: "International Plastic Surgeons",
    ebrate: "Php 27,500",
    srate: "Php 35,750",
    osrate: "Php 41,250",
  },
  {
    type: "International Plastic Surgery Trainees",
    ebrate: "Php 22,000",
    srate: "Php 27,500",
    osrate: "Php 33,000",
  },
  {
    type: "Medical Students",
    ebrate: "Php 11,000",
    srate: "Php 11,000",
    osrate: "Php 11,000",
  },
  {
    type: "Allied Professionals (Nursing,PT/OT,SP)",
    ebrate: "Php 11,000",
    srate: "Php 13,750",
    osrate: "Php 16,500",
  },
];

export function DefaultTable() {
  return (
    <Card className="h-full lg:max-w-screen-xl overflow-scroll ml-6">
      <table className="w-full min-w-max table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-jay p-4">
                <h3 className="font-bold text-center text-white">{head}</h3>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ type, ebrate, srate, osrate }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={type}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal">
                    {type}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center">
                    {ebrate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center">
                    {srate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center">
                    {osrate}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
