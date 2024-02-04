import data from "../../data.json";
import { RiSaveFill } from "react-icons/ri";
import { FaAngleDoubleUp } from "react-icons/fa";

const todoData = data.filter(item => item.tag == "Todo")
const inProgressData = data.filter(item => item.tag == "progress")
const doneData = data.filter(item => item.tag == "done")
const Links = ()=>
{
    return (
        <div className=" main flex px-2  border  bg-gray-200 py-3 h-auto c" >


            {/**these are to do data */}
            <div className="">
                <h2 className="text-orange-600 bg-yellow-300 rounded-full w-fit px-2 cursor-pointer">To do</h2>

                    {todoData.map((item, index)=>(
                       <div className="hover:border-gray-500 cursor-pointer border border-gray-300 my-2 rounded-2xl px-3 py-2 bg-white relative">
                        <p className="  text-sm indent-6 py-3">{item.comment}</p>
                        <div className="flex items-center">
                        <RiSaveFill className="text-blue-900 text-2xl" />
                        <FaAngleDoubleUp  className="text-red-600 text-2xl mx-3"/>
                        <h2 className="bg-gray-200 rounded-full h-6 w-6 flex justify-center items-center  ">{item.likes}</h2>
                        <div className="absolute right-2 flex items-center">
                        <h2 className="text-gray-400">{item.month}</h2>
                        <img className="h-7 w-7 rounded-full ml-2" src={item.img}/>
                        </div>
                        </div>
                       </div> 

                    ))}
            </div>
            

            {/**these are the din progress data */}
            <div className="">
                <h2 className="text-orange-600 bg-yellow-300 rounded-full w-fit px-2 cursor-pointer">in progress</h2>

                    {inProgressData.map((item, index)=>(
                       <div className="hover:border-gray-500 cursor-pointer border border-gray-300 my-2 rounded-2xl px-3 py-2 mx-2 bg-white relative">
                        <p className="text-sm indent-6 py-3">{item.comment}</p>
                        <div className="flex items-center">
                        <RiSaveFill className="text-blue-900 text-2xl" />
                        <FaAngleDoubleUp  className="text-red-600 text-2xl mx-3"/>
                        <h2 className="bg-gray-200 rounded-full h-6 w-6 flex justify-center items-center  ">{item.likes}</h2>
                        <div className="absolute right-2 flex items-center">
                        <h2 className="">{item.month}</h2>
                        <img className="h-7 w-7 rounded-full ml-2" src={item.img}/>
                        </div>
                        </div>
                       </div> 

                    ))}
            </div>

            {/**these are the done data */}
            <div className="">
                <h2 className="text-orange-600 bg-yellow-300 rounded-full w-fit px-2 cursor-pointer">done</h2>

                    {doneData.map((item, index)=>(
                       <div className="hover:border-gray-500 cursor-pointer border border-gray-300 my-2 rounded-2xl px-3 py-2 bg-white relative">
                        <p className="text-sm indent-6 py-3">{item.comment}</p>
                        <div className="flex items-center">
                        <RiSaveFill className="text-blue-900 text-2xl" />
                        <FaAngleDoubleUp  className="text-red-600 text-2xl mx-3"/>
                        <h2 className="bg-gray-200 rounded-full h-6 w-6 flex justify-center items-center  ">{item.likes}</h2>
                        <div className="absolute right-2 flex items-center">
                        <h2 className="">{item.month}</h2>
                        <img className="h-7 w-7 rounded-full ml-2" src={item.img}/>
                        </div>
                        </div>
                       </div> 

                    ))}
            </div>


          
        </div>
    )
}
export default Links;