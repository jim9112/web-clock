import Image from 'next/image';
import { useRef, useState } from 'react';
import arrowIcon from '../public/assets/desktop/icon-arrow-up.svg';

interface ICompProps {
  toggleDisplay: () => void;
}

const MoreButton = ({ toggleDisplay }: ICompProps) => {
  let buttonImage = useRef<any>(null);
  const [openMore, setOpenMore] = useState(false);

  const handleClick = () => {
    toggleDisplay();
    buttonImage.current.classList.toggle('rotate-180');
    openMore ? setOpenMore(false) : setOpenMore(true);
  };

  return (
    <button
      className='relative w-28 p-1 grid grid-flow-col items-center bg-white rounded-full cursor-pointer'
      type='button'
      onClick={handleClick}
    >
      {!openMore ? (
        <span className='font-bold text-xs text-gray-500 tracking-widest'>
          MORE
        </span>
      ) : (
        <span className='font-bold text-xs text-gray-500 tracking-widest'>
          LESS
        </span>
      )}
      <div
        ref={buttonImage}
        className='relative grid w-max justify-self-end transform rotate-180 transition'
      >
        <Image
          className=''
          objectFit='contain'
          src={arrowIcon}
          alt='arrow icon'
        />
      </div>
    </button>
  );
};

export default MoreButton;
