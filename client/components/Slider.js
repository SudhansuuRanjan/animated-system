import React, { useState } from "react";
import {
    AiOutlineHeart,
    AiFillHeart,
    AiOutlineEye,
    AiOutlineComment,
    AiOutlineLeft,
    AiOutlineRight,
} from "react-icons/ai";

const Slider = () => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="carousel flex flex-col md:flex-row lg:flex-row  py-[3rem] items-center w-[100%] m-auto">
            <div className="lg:w-[15rem]  md:w-[15rem] w-0"></div>

            <div className="after:bg-cover flex justify-center md:justify-end lg:justify-end overflow-hidden items-center m-auto">
                <img
                    src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/pexels-photo-2294353-1.jpeg"
                    alt="blog-image"
                    className="sm:h-[20rem]  md:h-[30rem] lg:h-[30rem]  rounded-3xl md:w-[100%] lg:w-[100%] w-[90%] "
                />
            </div>

            <div className="lg:absolute md:absolute sm:relative">
                <div className="md:w-[25rem] lg:w-[30rem] w-[100%]  bg-gray-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 m-auto mt-[-4rem] md:mt-0 lg:mt-0 ">
                    <div className="p-5">
                        <span className="bg-green-200 text-green-800 px-2 rounded-full py-1 text-sm hover:bg-green-800 hover:text-white hover:font-md cursor-pointer m-1">
                            Sci-Fi
                        </span>
                        <span className="bg-green-200 text-green-800 px-2 rounded-full py-1 text-sm hover:bg-green-800 hover:text-white hover:font-md cursor-pointer m-1">
                            Sci-Fi
                        </span>
                    </div>

                    <h2 className="text-xl font-bold px-5 py-1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit!
                    </h2>

                    <div className="p-5 flex items-center ">
                        <img
                            src="https://ncmaz.chisnghiax.com/wp-content/uploads/2021/09/7yvzyzeitc8-1-e1633222576890.jpg"
                            alt="profile-img"
                            className="h-11 w-11 rounded-full"
                        />
                        <div className="ml-3">
                            <p className="font-bold text-base">Lila</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400  ">
                                Sep 18, 2022
                            </p>
                        </div>
                    </div>

                    <div className="p-5 flex">
                        <button className="bg-gray-800 px-3 py-1 rounded-full flex items-center mr-2 text-green-500">
                            {<AiOutlineEye />}
                            <p className="ml-2 text-sm">{23}</p>
                        </button>

                        <button className="bg-gray-800 px-3 py-1 rounded-full flex items-center mr-2 text-pink-600">
                            <AiFillHeart />
                            <p className="ml-2 text-sm">{7}</p>
                        </button>

                        <button className="bg-gray-800 px-3 py-1 rounded-full flex items-center mr-2 text-blue-500">
                            <AiOutlineComment />
                            <p className="ml-2 text-sm">{2}</p>
                        </button>
                    </div>
                </div>

                <div className="p-5">
                    <button className="border-[1px] hover:border-slate-400 border-gray-600 rounded-full p-4 text-xl mr-2">
                        <AiOutlineLeft />
                    </button>
                    <button className="border-[1px] hover:border-slate-400 border-gray-600 rounded-full p-4 text-xl mr-2">
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
