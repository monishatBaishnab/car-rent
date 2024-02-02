import { FaAngleDown } from "react-icons/fa6";
import { RiArrowUpDownFill } from "react-icons/ri";

const Pikup = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-7 container">
            <div className="md:col-span-3 bg-white py-5 px-10 rounded-md">
                <h4 className="text-2xl font-medium mb-3">Pik-Up</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="md:border-r">
                        <h6 className="font-medium text-[#1A202C]">Location</h6>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <span className="text-sm text-[#90A3BF]">Select Your</span>
                            <FaAngleDown className="text-[#1A202C] text-sm" />
                        </div>
                    </div>
                    <div className="md:border-r">
                        <h6 className="font-medium text-[#1A202C]">Location</h6>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <span className="text-sm text-[#90A3BF]">Select Your</span>
                            <FaAngleDown className="text-[#1A202C] text-sm" />
                        </div>
                    </div>
                    <div>
                        <h6 className="font-medium text-[#1A202C]">Location</h6>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <span className="text-sm text-[#90A3BF]">Select Your</span>
                            <FaAngleDown className="text-[#1A202C] text-sm" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="p-4 bg-blue-500 rounded-md text-white text-xl">
                    <RiArrowUpDownFill />
                </div>
            </div>
            <div className="md:col-span-3 bg-white py-5 px-10 rounded-md">
                <h4 className="text-2xl font-medium mb-3">Drop-Off</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div className="md:border-r">
                        <h6 className="font-medium text-[#1A202C]">Location</h6>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <span className="text-sm text-[#90A3BF]">Select Your</span>
                            <FaAngleDown className="text-[#1A202C] text-sm" />
                        </div>
                    </div>
                    <div className="md:border-r">
                        <h6 className="font-medium text-[#1A202C]">Location</h6>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <span className="text-sm text-[#90A3BF]">Select Your</span>
                            <FaAngleDown className="text-[#1A202C] text-sm" />
                        </div>
                    </div>
                    <div>
                        <h6 className="font-medium text-[#1A202C]">Location</h6>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <span className="text-sm text-[#90A3BF]">Select Your</span>
                            <FaAngleDown className="text-[#1A202C] text-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pikup;