import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-100% relative px-7 py-5 bg-[#f1f1f1]">
      <p className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-center text-black">CompanyEvents</p>
      <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 gap-10">
        {/* Search Input */}
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[415px] relative gap-[22px] px-2.5 py-[7px] rounded-[7px] bg-[#cdcdcd] border border-black">
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <path
              d="M21.75 21.1895L16.086 15.5255C17.4471 13.8915 18.1259 11.7956 17.981 9.67393C17.8362 7.55223 16.879 5.56804 15.3085 4.13414C13.7379 2.70023 11.6751 1.927 9.54899 1.97531C7.42291 2.02362 5.39729 2.88975 3.89353 4.3935C2.38977 5.89726 1.52365 7.92288 1.47534 10.049C1.42703 12.1751 2.20026 14.2379 3.63416 15.8084C5.06807 17.3789 7.05225 18.3362 9.17395 18.481C11.2957 18.6258 13.3915 17.9471 15.0255 16.586L20.6895 22.25L21.75 21.1895ZM3.00003 10.25C3.00003 8.91498 3.39591 7.60993 4.13761 6.4999C4.87931 5.38987 5.93351 4.5247 7.16691 4.01381C8.40031 3.50292 9.75751 3.36925 11.0669 3.6297C12.3763 3.89015 13.579 4.53302 14.523 5.47703C15.467 6.42103 16.1099 7.62377 16.3703 8.93314C16.6308 10.2425 16.4971 11.5997 15.9862 12.8331C15.4753 14.0665 14.6102 15.1207 13.5001 15.8624C12.3901 16.6041 11.085 17 9.75003 17C7.96042 16.998 6.24469 16.2862 4.97925 15.0208C3.71381 13.7553 3.00201 12.0396 3.00003 10.25Z"
              fill="black"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-xl text-center text-black">Search event</p>
        </div>
        {/* End of Search Input */}
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[457px] relative gap-5">
          <Link to="/" className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Home</Link>
          <Link to="/events" className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Events</Link>
          <Link to="/about" className="flex-grow-0 flex-shrink-0 text-base text-center text-black">About</Link>
          <Link to="/contact" className="flex-grow-0 flex-shrink-0 text-base text-center text-black">Contact US</Link>
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-5 py-2.5 rounded-xl bg-[#cdcdcd]">
            <Link to="/signin" className="flex-grow-0 flex-shrink-0 text-base text-center text-black">
              Signin
            </Link>
          </div>
        </div>
        {/* Sign In Button */}
        
        {/* End of Sign In Button */}
      </div>
    </div>
  );
};

export default Navbar;
