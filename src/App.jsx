import React from "react";
import { ImSpoonKnife } from "react-icons/im";
import { GiCook } from "react-icons/gi";
import { FaCookie } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { AiFillDribbbleCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { FaDiscourse } from "react-icons/fa";
import Logo from "./assets/chef-logo.jpg";
import Profile from "./assets/profile-photo.jpg";
import Cards from "./Cards";

function App() {
  return (
    <div className="bg-container fixed inset-10 rounded-3xl grid md:grid-cols-12 gap-5 p-2 m-1 flex flex-no-wrap overflow-x-scroll scrolling-touch items-start">
      <aside class="bg-white md:col-span-2 md:pt-0 p-2 m-2 rounded-xl">
        <h1 class="flex justify-center m-8 font-medium">
          F<FaCookie class="mt-1" />
          OD
          <FaCookie class="mt-1" />
        </h1>
        <div class="flex justify-center ">
          <img src={Profile} alt="" class="rounded-full w-16" />
        </div>
        <h1 class="text-center font-Rampart">Cristin Watson</h1>
        <p class="text-sec-heading text-sm text-center">Chef de Partie</p>
        <div class="flex flex-col justify-center text-center gap-3 mt-20">
          <div class="flex ml-4 text-sec-heading hover:text-black gap-2">
            <BsFillBookFill class="mt-2 hover:text-nav-btn" />
            Recipes
          </div>
          <div class="flex ml-4 text-sec-heading hover:text-black gap-2">
            <MdFavorite class="mt-2 hover:text-nav-btn" />
            Favorites
          </div>
          <div class="flex ml-4 text-sec-heading hover:text-black gap-2">
            <FaDiscourse class="mt-2 hover:text-nav-btn" />
            Courses
          </div>
          <div class="flex  ml-4 text-sec-heading hover:text-black gap-2">
            <AiFillDribbbleCircle class="mt-2 hover:text-nav-btn" />
            community
          </div>
        </div>
        <div class="mt-20">
          <small class="text-sec-heading text-center">Create a team and take a part in TV show</small>
        </div>
      </aside>
      <main class="bg-container md:col-span-10 p-4 m-2">
        <div class="flex justify-between">
          <div class="order-first flex">
            <BiSearch class="mt-4 font-bold" />
            <input
              class="border-sec-heading border-b bg-transparent w-250 pr-20 focus:outline-none"
              placeholder="Enter your search request.."
            />
          </div>
          <div class="flex order-last gap-4">
            <ImSpoonKnife class="mt-4" />
            <button class="bg-nav-btn pr-4 pl-4 pb-2 pt-2 rounded-md text-white hover:shadow-lg">
              Go to Preminum
            </button>
          </div>
        </div>

        <div class="flex gap-5">
          <img src={Logo} alt="" class="w-13" />
          <div class="flex justify-between mt-10">
            <div class="order-first">
              <p class="text-4xl font-Rampart">Only the best recipes !</p>
              <p class="text-sec-heading">Today's the new recipe for you</p>
            </div>
            {/* <div class="flex order-last gap-4">
              <p>136</p>
              <p>304</p>
            </div> */}
          </div>
        </div>
        <Cards />
      </main>
    </div>
  );
}

export default App;
