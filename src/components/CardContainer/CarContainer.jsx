import Link from "next/link";
import { IoHeartSharp } from "react-icons/io5";
import Image from "next/image";

const CarContainer = ({cars}) => {
    return (
        <div className="container">
            <div className="flex items-center justify-between mb-10">
                <h4 className="text-[#90A3BF]">Recomendation Car</h4>
                <Link className="text-blue-500" href={'/'}>View All</Link>
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    cars?.map(car =>
                        <div key={car?._id} className="p-5 bg-white mb-20">
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-medium">{car?.make} {car?.model}</h4>
                                <IoHeartSharp className="text-2xl text-red-500" />
                            </div>
                            <div className="w-full h-full overflow-hidden">
                                <Image src={car?.image} width='100' height='100' className="w-full h-full object-contain" alt="Car One" />
                            </div>
                            <div className="flex items-center justify-between">
                                <h4 className="text-2xl font-medium">${car?.dailyPrice} <span className="text-slate-500 text-base">/ Day</span></h4>
                                <button className="px-4 py-2 rounded-md bg-blue-500 text-white">Rent Now</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default CarContainer;