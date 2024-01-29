'use client'
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaHeart, FaUser } from "react-icons/fa6";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import SearchBox from "./SearchBox";
import { useState } from "react";

const Navbar = () => {
    const [openSearch, setOpenSearch] = useState(false);

    return (
        <div className="flex items-center justify-between max-w-screen-2xl px-5 md:px-10 py-7 shadow-sm relative">
            <div className="flex items-center gap-10">
                <Link href='/' className="uppercase text-blue-500 text-3xl font-medium">Morent</Link>
                <div className="hidden md:inline-block">
                    <SearchBox />
                   
                </div>
            </div>
            <div className="flex items-center justify-center gap-5">
                <button className="text-[#596780] p-3 hover:bg-[rgba(195,_212,_233,_0.40)] transition-[background] rounded-full border border-[rgba(195,_212,_233,_0.40)] text-xl hidden md:inline-block"><FaHeart /></button>
                <button className="text-[#596780] p-3 hover:bg-[rgba(195,_212,_233,_0.40)] transition-[background] rounded-full border border-[rgba(195,_212,_233,_0.40)] text-xl hidden md:inline-block"><IoNotifications /></button>
                <button className="text-[#596780] p-3 hover:bg-[rgba(195,_212,_233,_0.40)] transition-[background] rounded-full border border-[rgba(195,_212,_233,_0.40)] text-xl hidden md:inline-block"><IoSettingsSharp /></button>
                <button onClick={() => setOpenSearch(!openSearch)} className="text-[#596780] p-3 hover:bg-[rgba(195,_212,_233,_0.40)] transition-[background] rounded-full border border-[rgba(195,_212,_233,_0.40)] text-xl inline-block md:hidden"><FiSearch /></button>
                <button className="text-[#596780] p-3 hover:bg-[rgba(195,_212,_233,_0.40)] transition-[background] rounded-full border border-[rgba(195,_212,_233,_0.40)] text-xl"><FaUser /></button>
            </div>
            <div className={`absolute left-0 right-0 ${openSearch ? 'top-full visible opacity-100' : 'top-10 invisible opacity-0'} transition delay-300 bg-white border-b py-5 border-b-[rgba(195,_212,_233,_0.40)] px-5 md:hidden`}>
                <SearchBox />
            </div>
        </div>
    );
};

export default Navbar;