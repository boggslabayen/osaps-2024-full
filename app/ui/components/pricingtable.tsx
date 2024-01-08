import { Card, Typography } from "../mtwexport";
 
const TABLE_HEAD = ["","Early-Bird Rate", "Standard Rate", "On-site Rate" ];
 
const TABLE_ROWS = [
  {
    type: "",
    ebrate: "June 1, 2024",
    srate: "June 2- July 3, 2024",
    osrate: "July 4-6, 2024"
  },
  {
    type: "International Plastic Surgeons",
    ebrate: "USD $500",
    srate: "USD $650",
    osrate: "USD $750"
  },
  {
    type: "International Plastic Surgery Trainees",
    ebrate: "USD $400",
    srate: "USD $500",
    osrate: "USD $600"
  },
  {
    type: "Medical Students",
    ebrate: "USD $200",
    srate: "USD $200",
    osrate: "USD $200"
  },
  {
    type: "Allied Professionals (Nursing,PT/OT,SP)",
    ebrate: "USD $200",
    srate: "USD $250",
    osrate: "USD $300"
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
                className="border-b border-blue-gray-100 bg-blue-jay p-4"
              >
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
                    className="font-normal"
                  >
                    {type}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    {ebrate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
                    {srate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal text-center"
                  >
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