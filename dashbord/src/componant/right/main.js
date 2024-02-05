import data from '../../data.json';
import { RiSaveFill } from 'react-icons/ri';
import { FaAngleDoubleUp } from 'react-icons/fa';

const todoData = data.filter((item) => item.tag === 'Todo');
const inProgressData = data.filter((item) => item.tag === 'progress');
const doneData = data.filter((item) => item.tag === 'done');
const Links = () => {
  return (
    <div className="main flex px-2 py-3 border bg-[#f1f1f1] h-auto">
      {/**these are to do data */}
      <div className="mx-3">
        <h2 className="text-gray-800 text-sm font-extrabold bg-[#E3E3E3] rounded-full w-fit my-4 px-3 py-1 cursor-pointer">
          To do
        </h2>

        {todoData.map((item, index) => (
          <div className="border hover:border-gray-500 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out cursor-pointer border-gray-300 my-4 rounded-2xl px-4 py-3 bg-white relative">
            <p className="text-[13px] font-semibold indent-6 py-4">
              {item.comment}
            </p>
            <div className="flex items-center mt-2">
              <RiSaveFill className="text-blue-600 text-xl" />
              <FaAngleDoubleUp className="text-red-500 text-xl mx-3" />
              <h2 className="text-xs font-bold bg-gray-200 border-solid border-[1px] border-gray-300 rounded-full h-6 w-6 flex justify-center items-center">
                {item.likes}
              </h2>
              <div className="absolute right-2 flex items-center">
                <h2 className="text-gray-400">{item.month}</h2>
                <img
                  alt=""
                  className="h-7 w-7 rounded-full ml-2"
                  src={item.img}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/**these are the din progress data */}
      <div className="mx-3">
        <h2 className="text-gray-800 text-sm font-extrabold bg-[#E3E3E3] rounded-full w-fit my-4 px-3 py-1 cursor-pointer">
          In progress
        </h2>

        {inProgressData.map((item, index) => (
          <div className="border hover:border-gray-500 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out cursor-pointer border-gray-300 my-4 rounded-2xl px-4 py-3 bg-white relative">
            <p className="text-[13px] font-semibold indent-6 py-3">
              {item.comment}
            </p>
            <div className="flex items-center mt-2">
              <RiSaveFill className="text-blue-600 text-xl" />
              <FaAngleDoubleUp className="text-red-500 text-xl mx-3" />
              <h2 className="text-xs font-bold bg-gray-200 border-solid border-[1px] border-gray-300 rounded-full h-6 w-6 flex justify-center items-center">
                {item.likes}
              </h2>
              <div className="absolute right-2 flex items-center">
                <h2 className="">{item.month}</h2>
                <img
                  alt=""
                  className="h-7 w-7 rounded-full ml-2"
                  src={item.img}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/**these are the done data */}
      <div className="mx-3">
        <h2 className="text-gray-800 text-sm font-extrabold bg-[#E3E3E3] rounded-full w-fit my-4 px-3 py-1 cursor-pointer">
          Done
        </h2>

        {doneData.map((item, index) => (
          <div className="border hover:border-gray-500 hover:shadow-md hover:shadow-slate-400 transition-all ease-in-out cursor-pointer border-gray-300 my-4 rounded-2xl px-4 py-3 bg-white relative">
            <p className="text-[13px] font-semibold indent-6 py-3">
              {item.comment}
            </p>
            <div className="flex items-center mt-2">
              <RiSaveFill className="text-blue-600 text-xl" />
              <FaAngleDoubleUp className="text-red-500 text-xl mx-3" />
              <h2 className="text-xs font-bold bg-gray-200 border-solid border-[1px] border-gray-300 rounded-full h-6 w-6 flex justify-center items-center">
                {item.likes}
              </h2>
              <div className="absolute right-2 flex items-center">
                <h2 className="">{item.month}</h2>
                <img
                  alt=""
                  className="h-7 w-7 rounded-full ml-2"
                  src={item.img}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Links;
