import React from "react";
import Student from "../../images/student.jpg";
import SuperMarket from "../../images/superMarket.png";
import African from "../../images/African-entrepreneur.png";
import Tailor from "../../images/tailor.png";
import Dollar from "../../images/dollar.svg";
import Coin from "../../images/coins.png";
import People from "../../images/people.png";
import Dot from "../../images/dot.svg";
import Arrow from "../../images/arrows.svg";
import Comma from "../../images/comma.svg";

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
            <div className="mt-12 ">
                <div className="ml-auto mr-auto w-40/50">
                    <h3 className="text-gray-400 text-center font-bold">
                        What we offer
                    </h3>
                    <h1 className="text-center sm:w-80 sm:text-2xl md:text-4xl font-bold md:w-5/6 ml-auto mr-auto text-blue-700">
                        The major challenge in the African market for small and
                        medium business owners is access to funds.
                    </h1>
                    <h4 className=" w-3/4 text-xl ml-auto mr-auto text-center text-gray-400 font-normal mt-1">
                        There are millions of people in Africa who are
                        constantly looking for better ways to invest their
                        money.
                    </h4>
                    <div className=" flex text w-1/2 ml-auto mr-auto mt-10 mb-10">
                        <button className=" button border-gradient-purple sm:ml-0  w-34 md:h-7 px-7 md:ml-52 text-blue-700 ">
                            Merchant
                        </button>
                        <button className="button border-gradient-purple sm:ml-0  w-34 md:h-7 px-7 md:ml-6 text-blue-700 ">
                            Investor
                        </button>
                    </div>
                </div>
                <div className="hero relative w-full ">
                    <div className="ml-auto mr-auto w-40/50">
                        <h1 className="text-right text-green-300 text-2xl mt-3">
                            Merchants
                        </h1>
                        <div className="flex justify-between flex-wrap-reverse  md:flex-nowrap mt-5">
                            <div className="flex">
                                <div className="">
                                    <div className="bg-blue-900 rounded-xl p-8  mb-6 ">
                                        <div className=" w-18 h-18 md:w-44  md:h-36">
                                            <img src={Dot} alt="dots" />
                                            <h1 className=" font-bold text-gray-200 sm:w-28 md:text-base  md:w-52 text-left ">
                                                Get funding without hassle,
                                                tedious or protocol
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="bg-blue-900 rounded-xl p-8  mb-6 ">
                                        <div className=" w-18 h-18 md:w-44  md:h-36">
                                            <img src={Dot} alt="dots" />
                                            <h1 className=" font-bold text-gray-200 sm:w-28 md:text-base  md:w-52   text-left ">
                                                Interactive and easy to use
                                                interface
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-900 mt-32  rounded-xl mb-9 ml-3 p-8   ">
                                    <div className=" w-18 h-18 md:w-44  md:h-36">
                                        <img src={Dot} alt="dots" />
                                        <h1 className=" font-bold text-gray-200 sm:w-28 md:text-base  md:w-52 text-left ">
                                            Customer support to ensure your
                                            questions are answered
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-32 w-4/5">
                                <h1 className="font-bold  text-gray-200 text-2xl text-right mr-0 md:text-7xl">
                                    We understand your challenges with funds
                                </h1>
                                <h3 className="font-normal text-base md:text-3xl text-gray-200 text-right ">
                                    Merchant X has an SMB friendly ecosystem
                                    positioned to give you access to the right
                                    people for your business success.
                                </h3>
                                <div className="flex  justify-end mt-14 sm:hidden ">
                                    <h4 className="text-base text-gray-200  font-bold">
                                        swipe
                                    </h4>
                                    <img
                                        src={Arrow}
                                        alt="arrow"
                                        className="ml-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* section 4 */}
            <div className="flex relative mt-11  ml-auto mr-auto w-1/2 justify-items-center align-middle">
                <img
                    src={Comma}
                    alt="comma"
                    className="absolute top-0 -left-16"
                />
                <div>
                    <h1 className="mt-3 text-5xl ml-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-300">
                        By connecting investors to SMBs we give life to business
                        ideas, empowering businesses with funds to thrive.{" "}
                    </h1>
                    <span className=" mt-9 "></span>
                </div>
            </div>
            {/* section 5 */}
            <div className="absolute w-40/50 mt-36 ml-auto mr-auto">
                <div className=" w-3/4  bg-blue-500 rounded-xl p-8 ml-auto mr-auto justify-center  ">
                    <div className="text-center">
                        <h1 className=" font-semibold text-gray-300 mt-2 md:text-6xl">
                            Get in Touch
                        </h1>
                        <h2 className=" text-sm text-gray-200 mb-10 md:text-base">
                            Subscribe to know when we launch
                        </h2>
                    </div>
                    <div className=" w-3/4 ml-auto mr-auto">
                        {" "}
                        <input
                            className="border-2 border-gray-300  bg-blue-500 h-10 p-2 px-3 w-3/5 rounded-lg text-sm focus:outline-none md:px-11"
                            type="search"
                            name="search"
                            placeholder="enter your email"
                        />
                        <button className="bg-green-400 p-2 ml-3 m-2 px-8 text-gray-200 rounded-md md:m-2  ">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
