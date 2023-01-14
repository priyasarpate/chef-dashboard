import React from "react";
import { GiChickenOven } from "react-icons/gi";
import { FaFish, FaLeaf } from "react-icons/fa";
import meat from "./assets/meat.jpg";
import fish from "./assets/fish.jpg";
import veg from "./assets/veg.jpg";
import chef_vector from "./assets/chef-vector.jpg";

function Cards() {
  return (
    <div class="flex gap-5">
      <div class="relative mt-10">
        <img src={meat} alt="" class="absolute top-0 left-12" />
        <div class="bg-white w-48 pt-3 pb-0 rounded-lg shadow-md mt-10 hover:shadow-2xl">
          <p class="text-center font-semibold mt-10">Noodle chicken soup</p>
          <p class="text-xs text-center">
            <button class="bg-tag1 m-2 p-1 bg-opacity-10 text-tag1">
              intermediate
            </button>
          </p>
          <div class="flex justify-center gap-5 mt-2">
            <p class="font-semibold p-2 border-sec-heading border-r">25</p>
            <p class="font-semibold p-2 border-sec-heading border-r">95</p>
            <p class="font-semibold p-2">
              <GiChickenOven />
            </p>
          </div>
          <div class=" flex justify-center gap-3">
            <small class="mr-3 text-sec-heading">min</small>
            <small class="mr-3 text-sec-heading">kcal</small>
            <small class="mr-3 text-sec-heading">meat</small>
          </div>
          <p class="flex justify-center gap-5 m-6">⭐⭐⭐⭐</p>
          <p class="text-center text-black flex justify-center  border-sec-heading border-t rounded-b-md hover:bg-card-btn hover:text-white pb-2 pt-2 hover:border-none">
            Start cooking
          </p>
        </div>
      </div>

      <div class="relative mt-10">
        <img src={fish} alt="" class="absolute top-0 left-12" />
        <div class="bg-white w-48 pt-3 pb-0 rounded-lg shadow-md mt-10 hover:shadow-2xl">
          <p class="text-center font-semibold mt-10">Salad with row tuna</p>
          <p class="text-xs text-center">
            <button class="bg-tag2 m-2 p-1 bg-opacity-10 text-tag2">
              Advanced
            </button>
          </p>
          <div class="flex justify-center gap-5 mt-2">
            <p class="font-semibold p-2 border-sec-heading border-r">25</p>
            <p class="font-semibold p-2 border-sec-heading border-r">95</p>
            <p class="font-semibold p-2">
              <FaFish />
            </p>
          </div>
          <div class=" flex justify-center gap-3">
            <small class="mr-3 text-sec-heading">min</small>
            <small class="mr-3 text-sec-heading">kcal</small>
            <small class="mr-3 text-sec-heading">fish</small>
          </div>
          <p class="flex justify-center gap-5 m-6">⭐⭐⭐⭐⭐</p>
          <p class="text-center text-black flex justify-center  border-sec-heading border-t rounded-b-md hover:bg-card-btn hover:text-white pb-2 pt-2 hover:border-none">
            Start cooking
          </p>
        </div>
      </div>

      <div class="relative mt-10">
        <img src={veg} alt="" class="absolute top-0 left-12" />
        <div class="bg-white w-48 pt-3 pb-0 rounded-lg shadow-md mt-10 hover:shadow-2xl">
          <p class="text-center font-semibold mt-10">Pasta with Spinach</p>
          <p class="text-xs text-center">
            <button class="bg-tag3 m-2 p-1 bg-opacity-10 text-tag3">
              Beginners
            </button>
          </p>
          <div class="flex justify-center gap-5 mt-2">
            <p class="font-semibold p-2 border-sec-heading border-r">25</p>
            <p class="font-semibold p-2 border-sec-heading border-r">95</p>
            <p class="font-semibold p-2">
              <FaLeaf />
            </p>
          </div>
          <div class=" flex justify-center gap-3">
            <small class="mr-3 text-sec-heading">min</small>
            <small class="mr-3 text-sec-heading">kcal</small>
            <small class="mr-3 text-sec-heading">veg</small>
          </div>
          <p class="flex justify-center gap-5 m-6">⭐⭐⭐</p>
          <p class="text-center text-black flex justify-center  border-sec-heading border-t rounded-b-md hover:bg-card-btn hover:text-white pb-2 pt-2 hover:border-none">
            Start cooking
          </p>
        </div>
      </div>

      <div class="relative mt-10 h-56">
        {/* <img src={chef_vector} alt="" class="absolute top-0 left-12" /> */}
        <div class="bg-tag3 w-48 p-3 rounded-lg shadow-md mt-10 hover:shadow-2xl">
          <button class="bg-black m-2 rounded-lg p-0.5 text-white">
            <small>PRO</small>
          </button>
          <p class="text-start mt-5 text-xl font-Rampart text-white">
            Mentorship program
          </p>
          <p class="text-white mt-14">
            A member will track your progress and give you tips for faster
            culinary growth
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
