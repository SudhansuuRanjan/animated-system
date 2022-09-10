import Link from "next/link";
import Meta from "../components/Meta";

export default function Custom404() {
  return (
    <>
    <Meta title={"Sudhanshu Ranjan | 404"} description={"There is nothing there."}/>
      <div className="w-[100%] md:w-[34em] m-[auto]">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 dark:text-white">
          <div className="max-w-md mt-[5rem] pb-10">
            <div className="text-5xl font-dark font-bold">404</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn&apos;t find this page.{" "}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <Link href="/">
              <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white dark:text-gray-800 transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue dark:focus:shadow-outline-pink bg-blue-600 active:bg-blue-600 hover:bg-blue-700 dark:hover:bg-pink-400 darkactive:bg-pink-600  dark:bg-pink-500">
                Back to Homepage
              </button>
            </Link>
          </div>
          <div className="max-w-lg"></div>
        </div>
      </div>
    </>
  );
}