import { Button } from "@material-tailwind/react";
import * as React from "react";

interface BannerNoImageProps {
  header: string;
  subheader: string;
  buttonTitle: string;
}

const BannerNoImage: React.FC<BannerNoImageProps> = (props) => {
  return (
    <div className="bg-ivory py-20 flex justify-center">
      <div className=" max-w-screen mx-8 lg:max-w-screen-xl">
        <h1 className="text-blue-jay font-extrabold text-4xl">
          {props.header}
        </h1>
        <p className="text-gray-800 my-8 text-xl leading-10 font-normal">
          {props.subheader}
        </p>
        {/* <Button variant='filled' className='bg-amber-500 rounded-full text-blue-jay ' size='lg' ripple={true}>{props.buttonTitle}</Button> */}
      </div>
    </div>
  );
};

export default BannerNoImage;
