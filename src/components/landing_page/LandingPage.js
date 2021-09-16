import React from "react";
import Student from "../../images/student.jpg";
import SuperMarket from "../../images/superMarket.png";
import African from "../../images/African-entrepreneur.png";
import Tailor from "../../images/tailor.png";

const LandingPage = () => {
    return (
        <div className="mt-3 ml-auto mr-auto w-40/50">
            <div className="flex  flex-col  md:flex-row">
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
        </div>
    );
};

export default LandingPage;
