import React from "react";
import Hero from "./Hero";
import Student from "../../images/student.jpg";
import SuperMarket from "../../images/superMarket.png";
import African from "../../images/African-entrepreneur.png";
import Tailor from "../../images/tailor.png";
import Dollar from "../../images/dollar.svg";
import Coin from "../../images/coins.png";
import People from "../../images/people.png";

const LandingPage = () => {
    return (
        <div className="">
            <div className="flex  flex-col  md:flex-row mt-3 ml-auto mr-auto w-40/50">
                <div className="mt-10  ">
                    <h4 className="text-gray-400  ">A market place for SMBs</h4>
                    <h1 className=" w-80 text-4xl md:w-01 md:text-6xl font-bold mb-3 text-blue-700">
                        Get quick access to loans from investors
                    </h1>
                    <h3 className=" w-80 mb-9 md:w-02 text-base font-medium text-gray-400">
                        We have carefully crafted a loan ecosystem that allows
                        SMBs grow their business and investor’s ROI
                    </h3>
                    <button className="text-white h-12 w-44 bg-green-300 text-sm font-bold py-2 px-4 mb-3 rounded border-transparent ">
                        Create a free account
                    </button>
                </div>
                <div className="flex">
                    <img
                        src={African}
                        alt="African"
                        className=" w-24 h-36 sm:mt-6 md:w-40 md:h-56 ml-2 md:mt-20"
                    />
                    <div className="ml-2">
                        <img
                            src={SuperMarket}
                            alt="SuperMarket"
                            className=" w-28  h-24  md:w-40 md:h-40"
                        />
                        <img
                            src={Student}
                            alt="Student"
                            className=" w-28  h-24  md:w-40  md:h-56   "
                        />
                    </div>
                    <img
                        src={Tailor}
                        alt="Tailor"
                        className=" w-24 h-36 sm:mt-6 md:w-40 md:h-56 ml-2 md:mt-20"
                    />
                </div>
            </div>
            {/* section2 */}
            <div className="mt-3 ml-auto mr-auto w-40/50">
                <h3 className="text-gray-400 text-center font-bold">
                    What we do
                </h3>
                <h1 className="text-center  sm:w-80 text-2xl font-bold  ml-auto mr-auto text-blue-700 mb-9 md:text-4xl md:w-5/6">
                    We help scale small/medium sized businesses with access to
                    loans from investors
                </h1>
                <div className="flex  flex-wrap mt-10 items-center md:flex   w-5/6 ml-auto mr-auto  md:m-auto md:flex-nowrap">
                    <div className="bg-gray-100 w-96 h-56 mr-9 rounded-xl p-8 block mb-6 md:w-1/4 md:p-8  ">
                        <img src={Dollar} alt="section1" />
                        <h1 className=" text-sm text-gray-700 font-semibold md:text-base">
                            Access to funds
                        </h1>
                        <p className="text-sm text-gray-500 font-normal ">
                            Experience the opportunity to access business
                            expansion funds and educational tools to guarantee
                            success.
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-xl w-96 h-56 mr-9 p-8 block mb-6 md:w-1/4 md:p-8  ">
                        <img src={Coin} alt="section1" />
                        <h1 className=" text-sm text-gray-700 font-semibold md:text-base">
                            Investment opportunity
                        </h1>
                        <p className="text-sm text-gray-500 font-normal ">
                            Make your money serve a greater purpose while also
                            earning returns on your investment.
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-xl mr-9 w-96 h-56 p-8 block mb-6 md:w-1/4 md:p-8  ">
                        <img src={People} alt="section1" />
                        <h1 className=" text-sm text-gray-700 font-semibold md:text-base">
                            Marketplace for SMBS
                        </h1>
                        <p className="text-sm text-gray-500 font-normal ">
                            Marketplace for SMBs and investors. Providing the
                            required funds for expansion.
                        </p>
                    </div>
                </div>
            </div>
            {/* section 3 */}
            <div className="mt-12 ml-auto mr-auto w-40/50">
                <h3 className="text-gray-400 text-center font-bold">
                    What we offer
                </h3>
                <h1 className="text-center sm:w-80 sm:text-2xl md:text-4xl font-bold md:w-5/6 ml-auto mr-auto text-blue-700">
                    The major challenge in the African market for small and
                    medium business owners is access to funds.
                </h1>
                <h4 className=" w-3/4 text-xl ml-auto mr-auto text-center text-gray-400 font-normal mt-1">
                    There are millions of people in Africa who are constantly
                    looking for better ways to invest their money.
                </h4>
                <div className=" flex text w-1/2 ml-auto mr-auto mt-10 mb-10">
                    <button className=" button border-gradient-purple sm:ml-0 sm:w-14 sm:h-5 w-34 h-7 px-7 md:ml-60 text-blue-700 ">
                        Merchant
                    </button>
                    <button className="w-20  -m-3 py-4 px-7 sm:w-14 sm:h-5 mw-34 h-7   text-blue-700">
                        Investor
                    </button>
                </div>
                <div className="relative w-full">
                    <div className=" ">
                        <h1>mean</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
