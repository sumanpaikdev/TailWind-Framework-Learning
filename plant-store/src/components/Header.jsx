import React from "react";

function Header({ bag }) {
  return (
    <div className="w-full h-[720px] relative bg-gradient-to-tr from-green-700 to-gray-900 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1648873195151-1f1088628f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"
        alt="backgroundImage"
        className="w-full h-full absolute object-cover mix-blend-overlay"
      />
      <div className="flex justify-between items-center py-9 sm:px-28 px-8">
        <div>
          <h1 className="text-gray-200 text-2xl font-philo uppercase">fleur</h1>
        </div>
          <div className="text-gray-200 flex h-9 items-center">
            <a href="http://google.com">
              <img
                src={bag}
                alt="shop"
                className="invert w-9 opacity-75 cursor-pointer hover:scale-110 duration-200"
              />
            </a>
          </div>
      </div>
      {/* <div className="text-gray-200 py-9 sm:px-28 px-8 pt-32 flex flex-col sm:justify-start justify-center">
        <h1 className="font-philo uppercase sm:w-96 sm:text-7xl text-4xl w-80 sm:text-left text-center">
          Plant Collection
        </h1>
        <p
          className="white w-80 tex-md text-gray-300 py-8"
        >
          Choose your special plant of delicate freshness to complement your
          interior.
        </p>
        <div className="flex flex-col sm:flex-row">
          <button className="bg-green-600 px-7 py-3 w-32 sm:mr-8 mb-4 text-xs font-semibold rounded backdrop-blur hover:bg-green-700 ">
            BUY NOW
          </button>
          <button className="px-6 py-3 w-32 text-xs font-semibold rounded border-2 border-gray-200">
            LEARN MORE
          </button>
        </div>
      </div> */}
    </div>
  );
}
export default Header;
