import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="bg-[url('./assets/bg-home2.jpg')] md:bg-[url('./assets/bg-home.jpg')] bg-center bg-no-repeat bg-cover text-white sm:bg-cover sm:bg-center md:bg-cover md:bg-center lg:bg-cover lg:bg-center"
    >
      {/* Header Component */}
      <Header />

      <div
        className="mx-auto max-w-screen-xl px-4 py-32 grid grid-cols-1 lg:grid-cols-2 lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-[40rem] text-center">
          <h1
            className="text-white text-2xl font-extrabold sm:text-5xl"
          >
            All the
            <span className="text-[#65D36E]"> Best Songs </span>
            <span className="sm:block"> in One Place </span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="block rounded border border-[#65D36E] bg-[#65D36E] sm:px-12 px-10 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto hover:shadow-2xl hover:shadow-[#65D36E]"
              onClick={() => navigate("/userDashboard")}
            >
              Get Started
            </button>

            <button
              className="block rounded border border-[#65D36E] sm:px-12 px-8 py-3 text-sm font-medium text-white hover:bg-[#65D36E] focus:outline-none focus:ring active:bg-[#65D36E] sm:w-auto hover:shadow-2xl hover:shadow-[#65D36E]"
            >
              Create Playlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;