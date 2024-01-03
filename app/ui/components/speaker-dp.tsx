import { Avatar, Typography } from '../mtwexport'
import * as React from 'react'

interface SpeakerDPProps {
    speakerName: string;
    role: string;
  }

  const SpeakerDp: React.FC<SpeakerDPProps> = (props) => {
    return (
       
        <div className="px-4 py-4">

        
        <div className='flex justify-center'>
        <Avatar 
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        withBorder={true}
        className="p-1"
        size='xl'
        color='white'
        />
        </div>
        
      
        

        <div className='pt-2 text-center'>
          <h4 className='font-bold'> {props.speakerName} </h4>
          <h4> 
          {props.role}
          </h4>
        </div>

        </div>

    )
  };


  export default SpeakerDp;
