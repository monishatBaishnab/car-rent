import { FiSearch } from "react-icons/fi";
import { IoOptions } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className="flex items-center border border-[rgba(195,_212,_233,_0.40)] rounded-full px-4 py-2 text-[#596780] ">
            <FiSearch className="text-xl cursor-pointer" />
            <input type="text" className="outline-none w-full md:w-auto focus:outline-none px-2" placeholder="Search Somthing Hare" />
            <IoOptions className="text-xl cursor-pointer" />
        </div>
    );
};

export default SearchBox;