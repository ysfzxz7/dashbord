import { Cog6ToothIcon, BellIcon } from '@heroicons/react/16/solid';
import { IoIosSearch, IoIosNotifications } from 'react-icons/io';
import { PiGearFill } from 'react-icons/pi';

const Links = () => {
  return (
    <div className="px-6 py-4 border-b-[1px] border-gray-300">
      {/* search bar */}
      <div className="flex justify-between">
        {/* search input */}
        <div className="w-[40%] relative">
          <input
            placeholder="Search"
            className="w-full relative rounded-3xl px-8 py-1 text-sm border-[1px] border-gray-300 focus:outline-none focus:border-gray-400"
          />
          <IoIosSearch className="absolute top-[50%] left-2 translate-y-[-50%] text-gray-400" />
        </div>
        {/* icon box */}
        <div className="flex items-center gap-4">
          {/* notifications icon */}
          <div className="relative">
            <IoIosNotifications className="w-5 h-5 cursor-pointer text-gray-400 hover:text-gray-600 transition-all ease-in-out" />
            <span className="absolute rounded w-2 h-2 bg-red-500 top-1 right-0 border" />
          </div>
          {/* settings icon */}
          <PiGearFill className="w-5 h-5 cursor-pointer text-gray-400 hover:text-gray-600 transition-all ease-in-out" />
          {/* profile picture */}
          <img
            src="https://www.lovepanky.com/wp-content/uploads/2020/04/how-to-be-mean-1.jpg"
            className="w-6 h-6 rounded-[50%] cursor-pointer border-[1px] hover:border-gray-400 transition-all ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Links;
