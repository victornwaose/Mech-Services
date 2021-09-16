import React, { useState } from "react";
import Logo from "../../images/logo.png";
import Mobile from "../../images/mobile-btn.png";

const Header = () => {
    const [active, setActive] = useState(false);

    const MobileViewBtn = () => {
        setActive(!active);
    };
    return (
        <div className="bg-white">
            <header className="mt-3 ml-auto mr-auto w-11/12 flex justify-between cursor-pointer">
                <img src={Logo} alt="logo" className="h-6 w-44 mt-3" />
                <img
                    src={Mobile}
                    alt="Mobile"
                    className="h-5 w-4 mt-3 md:hidden"
                    onClick={() => MobileViewBtn()}
                />
                <nav
                    className={` ${
                        !active && "hidden"
                    } absolute top-12 left-36 align-middle  h-full w-full z-20 md:static md:w-auto  md:flex  md:top-full  md:justify-between`}
                >
                    <ul className="flex mt-3 flex-col md:justify-between md:flex-row">
                        <li className="mr-2 text-blue-700 text-base text font-normal">
                            Raise funding
                        </li>
                        <li className=" mr-2 text-blue-700 text-base text font-normal">
                            Browse <span className="text-green-300">SMBs</span>
                        </li>
                        <li className="mr-8 text-blue-700 text-base text font-normal">
                            FAQs
                        </li>
                    </ul>
                    <div className="flex flex-col  md:justify-between md:flex-row">
                        <button className="text-blue-700 h-12 w-44 bg-white  text-base font-bold py-2 px-4  mb-3 rounded border border-green-300 mr-3 border-transparent">
                            Login
                        </button>
                        <button className="text-white h-12 w-44 bg-green-300 text-sm font-bold py-2 px-4 rounded border-transparent">
                            Create a free account
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
