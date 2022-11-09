import duck from '../public/duck.jpeg';
import { PropagateLoader } from 'react-spinners';
import Image from 'next/Image';

export const Loading = () => {
    return (
        <div className='bg-[#091B18] h-screen flex flex-col items-center justify-center'>
      <div className='flex items-center space-x-2 mb-10'>
        <Image src={duck} alt="duck logo"
        className='h-20 w-20 rounded-full' />
        <h1 className='text-lg text-white font-bold'>Loading the Lucky Duck Draw</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
    )
}