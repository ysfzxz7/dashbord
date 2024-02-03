import { FaSkull } from 'react-icons/fa';
import { IoSave } from 'react-icons/io5';
import { LuWaves } from 'react-icons/lu';
import { ImStatsDots } from 'react-icons/im';
import { IoExtensionPuzzle } from 'react-icons/io5';
import { FaCalendarWeek } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

const Aside = () => {
  return (
    <div className="flex-row h-screen w-[250px] p-3 bg-gray-900">
      {/* profile icon and username */}
      <div className="flex h-fit">
        {/* profile icon */}
        <div className="">
          <FaSkull className="h-10 w-10 text-fuchsia-500" />
        </div>
        {/* username and job */}
        <div className="ml-3 self-center">
          <h1 className="text-sm text-white font-bold">Rosahan</h1>
          <h4 className="text-xs text-gray-400 mt-1">Product Managment</h4>
        </div>
      </div>
      {/* links */}
      <div className="mt-20">
        {/* top links */}
        <ul>
          <li className="flex align-center py-1 px-3 rounded-3xl opacity-70 hover:opacity-100 transition-all hover:bg-gray-800">
            <IoSave className="text-fuchsia-500 w-6 h-6" />
            <a href=" " className="text-white text-sm ml-4 font-semibold">
              Backlog
            </a>
          </li>
          <li className="flex align-center py-1 px-3 mt-3 rounded-3xl opacity-70 hover:opacity-100 transition-all hover:bg-gray-800">
            <LuWaves className="text-fuchsia-500 w-6 h-6" />
            <a href=" " className="text-white text-sm ml-4 font-semibold">
              Active sprints
            </a>
          </li>
          <li className="flex align-center py-1 px-3 mt-3 rounded-3xl opacity-70 hover:opacity-100 transition-all hover:bg-gray-800">
            <ImStatsDots className="text-fuchsia-500 w-6 h-6" />
            <a href=" " className="text-white text-sm ml-4 font-semibold">
              Reports
            </a>
          </li>
        </ul>
        {/* horizotal line */}
        <hr className="w-[80%] my-10 mx-auto bold-hr border-gray-600"></hr>
        {/* bottom links */}
        <ul>
          <li className="flex align-center py-1 px-3 rounded-3xl opacity-70 hover:opacity-100 transition-all hover:bg-gray-800">
            <IoExtensionPuzzle className="text-fuchsia-500 w-6 h-6" />
            <a href=" " className="text-white text-sm ml-4 font-semibold">
              Componants
            </a>
          </li>
          <li className="flex align-center py-1 px-3 mt-3 rounded-3xl opacity-70 hover:opacity-100 transition-all hover:bg-gray-800">
            <FaCalendarWeek className="text-fuchsia-500 w-6 h-6" />
            <a href=" " className="text-white text-sm ml-4 font-semibold">
              Releases
            </a>
          </li>
          <li className="flex align-center py-1 px-3 mt-3 rounded-3xl opacity-70 hover:opacity-100 transition-all hover:bg-gray-800">
            <MdDashboard className="text-fuchsia-500 w-6 h-6" />
            <a href=" " className="text-white text-sm ml-4 font-semibold">
              Project pages
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Aside;
