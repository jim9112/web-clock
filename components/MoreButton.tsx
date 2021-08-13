import Image from 'next/image';
import arrowIcon from '../public/assets/desktop/icon-arrow-up.svg' 

const MoreButton = () => {
return (
    <button className="relative flex w-28 h-9 bg-white rounded-full" type="button">
        more
        <div>
        <Image className='transform rotate-180' objectFit="contain" layout="fill" src={arrowIcon} alt="arrow icon" />
        </div>
        </button>
)
}

export default MoreButton