import Image from 'next/image';
import arrowIcon from '../public/assets/desktop/icon-arrow-up.svg' 

const MoreButton = () => {
return (
    <button className="relative w-28 p-1 grid grid-flow-col items-center bg-white rounded-full" type="button">
        more

    <div className="relative grid w-max justify-self-end">
        <Image className='transform rotate-180 ' objectFit="contain" src={arrowIcon} alt="arrow icon" />
    </div>
  
        </button>
)
}

export default MoreButton