import Link from "next/link";
import { useTheme } from "next-themes";
import React, {useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdDarkMode , MdLightMode } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

export const useLoaded = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
};

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const [focus, setFocus] = useState(0);
  const { theme, setTheme } = useTheme();
  const loaded = useLoaded();

  return (
    <div className="bg-opacity-5 backdrop-blur-md drop-shadow-md z-50 flex flex-row fixed bg-orange-400 dark:bg-gray-800 dark:bg-opacity-5 dark:backdrop-blur-md dark:drop-shadow-md  w-[100vw] items-center justify-center text-gray-800 dark:text-white">
      <div className="flex items-center justify-between w-[100%] md:w-[48em] px-4 md:px-2 py-2">
        <div className="flex items-center ">
          <p
            className="font-sans text-xl font-bold mr-2 text-gray-800 dark:text-white"
            onClick={() => {
              setFocus(0);
              setMenu(false);
            }}
          >
            <Link href="/">CineScape</Link>
          </p>
          <ul className="md:flex hidden">
            <li
              className={
                focus === 1
                  ? "hover:underline mx-3 border-sky-300  border-[3px]  bg-sky-50 dark:bg-[#2C7A7B] px-2 py-1"
                  : "hover:underline px-2 py-1 mx-3 border-[3px] border-none dark:border-gray-800"
              }
              onClick={() => setFocus(1)}
            >
              <Link href="/works">Events</Link>
            </li>
            <li
              className={
                focus === 2
                  ? "hover:underline mx-3 border-sky-300  border-[3px]  bg-sky-50 dark:bg-[#2C7A7B] px-2 py-1"
                  : "hover:underline px-2 py-1 mx-3  border-[3px] border-none dark:border-gray-800"
              }
              onClick={() => setFocus(2)}
            >
              <Link href="/posts">Archive</Link>
            </li>
            <li
              className={
                focus === 3
                  ? "hover:underline mx-3 border-sky-300  border-[3px]  bg-sky-50 dark:bg-[#2C7A7B] px-2 py-1"
                  : "hover:underline px-2 py-1 mx-3 border-[3px] border-none dark:border-gray-800"
              }
              onClick={() => setFocus(3)}
            >
              <a
                href="https://github.com/SudhansuuRanjan/my-portfolio"
                target="blank"
                className="flex items-center"
              >
                <AiFillGithub className="mr-1" />
                Source
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              if (theme === "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
            className="text-white dark:text-gray-800 bg-violet-700 hover:bg-violet-800 focus:ring-[2.5px] focus:outline-none focus:ring-violet-300 dark:focus:ring-orange-50 font-medium rounded-lg text-lg p-2.5 text-center inline-flex items-center mr-2 dark:bg-orange-200 dark:hover:bg-orange-300 dark:focus:bg-orange-200"
          >
            { loaded && (theme === 'light' ? <MdDarkMode /> :<MdLightMode/>)}
            <span className="sr-only">Icon description</span>
          </button>

          <button
            type="button"
            onClick={() => {
              if (menu == false) {
                setMenu(true);
              } else {
                setMenu(false);
              }
            }}
            className="animate-pulse md:hidden text-gray-900 bg-orange-50 hover:bg-sky-50 border border-gray-200 focus:ring-[2.5px] focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-lg px-2.5 py-2.5 text-center items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2"
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </div>
      {menu && (
        <div className="md:hidden fixed mt-[16rem] right-0 bg-white rounded-md w-[12rem] py-2 mr-5 shadow-md text-gray-800 dark:text-white dark:bg-gray-700 border-gray-200 dark:border-gray-500 border">
          <ul>
            <li>
              <Link href="/">
                <button
                  onClick={() => {
                    setMenu(false);
                    setFocus(0);
                  }}
                  className="hover:underline hover:border-sky-300 dark:hover:border-sky-300  border-4 border-white dark:border-gray-700 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-sky-50 dark:hover:bg-gray-600 text-left"
                >
                  About
                </button>
              </Link>
            </li>
            <li>
              <Link href="/works">
                <button
                  onClick={() => {
                    setMenu(false);
                    setFocus(1);
                  }}
                  className="hover:underline hover:border-sky-300 dark:hover:border-sky-300  border-4 border-white dark:border-gray-700 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-sky-50 dark:hover:bg-gray-600 text-left"
                >
                  Works
                </button>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <button
                  onClick={() => {
                    setMenu(false);
                    setFocus(2);
                  }}
                  className="hover:underline hover:border-sky-300 dark:hover:border-sky-300  border-4 border-white dark:border-gray-700 py-1.5 w-[100%] pl-4 cursor-pointer hover:bg-sky-50 dark:hover:bg-gray-600 text-left"
                >
                  Posts
                </button>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/SudhansuuRanjan/my-portfolio"
                target="blank"
              >
                <button
                  onClick={() => {
                    setMenu(false);
                    setFocus(3);
                  }}
                  className="hover:underline hover:border-sky-300  border-4 dark:border-gray-700 border-white py-1.5 dark:hover:border-sky-300 w-[100%] pl-4 cursor-pointer hover:bg-sky-50 text-left flex items-center dark:hover:bg-gray-600"
                >
                  <AiFillGithub className="mr-1" />
                  Source
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;