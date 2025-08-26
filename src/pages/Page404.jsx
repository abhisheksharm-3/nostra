import { Link } from "react-router-dom";
import { Navbar } from "../components";

const Page404 = () => {
  return (
    <div>
      <div className="w-screen h-screen">
        <Navbar />
        <div className="h-screen bg-[url(./assets/404.jpg)] pl-12 bg-center bg-cover  bg-no-repeat flex flex-col items-center justify-center">
          <h1 className="font-serif text-orange-400 font-bold tracking-[0.04em] uppercase leading-[60px] text-[40px] sm:leading-[77px] sm:text-[60px] 2xl:text-[90px] 2xl:leading-[117px]">404</h1>
          <p className="font-serif text-[#6b6565] font-bold tracking-[0.04em] uppercase leading-[30px] text-[19px] sm:text-[21px] 2xl:text-[37px] 2xl:leading-[67px]">OOPS! No Tasty Cuisine Found Here!</p>
          <Link to="/">
            <button
              type="button"
              className="bg-[#F5EFDB] text-[#090909] font-serif font-bold tracking-[0.04em] leading-[28px] py-2 px-6 rounded-[1px] border-none cursor-pointer outline-none mt-8 ease-in duration-200 hover:bg-orange-400 mb-16 lg:mb-0"
            >
              Go Back to Delicious Food
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
