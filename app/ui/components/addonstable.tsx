import { Card, Typography } from "../mtwexport";

const TABLE_HEAD = [
  "Add-ons",
  "Early-Bird Rate",
  "Standard Rate",
  "On-site Rate",
];

const TABLE_ROWS = [
  {
    type: "Additional Companion / Guest (Foreign)",
    ebrate: "Php 7,150",
    srate: "Php 7,150",
    osrate: "Php 7,150",
  },
  {
    type: "2024 OSAPS Gala Night",
    ebrate: "USD $50 / Php 2,750",
    srate: "USD $50 / Php 2,750",
    osrate: "USD $50 / Php 2,750",
  },
];

export function AddonsTable() {
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
