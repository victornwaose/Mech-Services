import React from "react";
import Logo from "../../images/logo.png";

const Footer = () => {
    return (
        <div className="bg-blue-900 pt-52  pb-9">
            <div className="w-40/50 ml-auto mr-auto  flex justify-between flex-col md:flex-row mt-16">
                {" "}
                <div>
                    <img src={Logo} alt="logo" className="cursor-pointer" />
                </div>
                <div className=" ">
                    <ul className="flex flex-col">
                        <li className="text-2xl text-blue-700 mb-6 cursor-pointer">
                            Company
                        </li>
                        <li className="text-base text-gray-200 cursor-pointer">
                            Investment{" "}
                        </li>
                        <li className="text-base text-gray-200 cursor-pointer">
                            Mechrant
                        </li>
                        <li className="text-base text-gray-200 cursor-pointer">
                            About MerchantX
                        </li>
                        <li className="text-base text-gray-200 cursor-pointer">
                            FAOs
                        </li>
                    </ul>
                </div>
                <div className="">
                    <ul className="">
                        <li className="text-2xl text-blue-700 mb-6 cursor-pointer">
                            Legal
                        </li>
                        <li className="text-base text-gray-200 cursor-pointer">
                            Terms{" "}
                        </li>
                        <li className="text-base text-gray-200 cursor-pointer">
                            Policy
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
