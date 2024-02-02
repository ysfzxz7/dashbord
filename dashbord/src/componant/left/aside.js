import { ChartPieIcon, BeakerIcon } from "@heroicons/react/16/solid";



const Aside = ()=>
    { 
    return (
        <div className="flex border h-full px-10 items-center ">
               <div className="mx-5 " >
               <ChartPieIcon className="h-14 w-14 text-black" />

               </div>
               <div>
                <h1 className="text-sm text-slate-900">
                    Rosahan
                </h1>
                <h4 className="text-xs text-gray-400">
                    Product Managment
                </h4>
                </div>
            </div>
    )
    }
export default Aside;