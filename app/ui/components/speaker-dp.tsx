import { Avatar, Typography } from '../mtwexport'
import * as React from 'react'

interface SpeakerDPProps {
    speakerName: string;
    role: string;
  }

  const SpeakerDp: React.FC<SpeakerDPProps> = (props) => {
    return (
       
        <div className="w-fit">

        
        <div className='flex justify-center'>
        <Avatar 
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        withBorder={true}
        className="p-1"
        size='xl'
        />
        </div>
        
      
        

        <div className='pt-2 text-center'>
          <Typography variant="h6"> {props.speakerName} </Typography>
          <Typography variant="small" color="gray" className="font-normal">
          {props.role}
          </Typography>
        </div>

        </div>

    )
  };


  export default SpeakerDp;
