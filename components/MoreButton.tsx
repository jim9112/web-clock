import Image from 'next/image';
import arrowIcon from '../public/assets/desktop/icon-arrow-up.svg' 

const MoreButton = () => {
return (
    <button className="relative w-28 grid grid-flow-col items-center bg-white rounded-full" type="button">
        more
        <div>
        <Image className='transform rotate-180 ' src={arrowIcon} alt="arrow icon" />
        </div>
        </button>
)
}

export default MoreButton