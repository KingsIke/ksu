// import React from 'react'
import React from "react";
import { Link } from "react-router-dom";
// import Shoes from '../../../../images/fashionAccessory.png'

// import { AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  return (
    <div className="border-solid border-2 border-orange-400 mt-1 bg-black">


      <div class="flex items-center justify-center h-screen">
        <div class=" p-6 border border-black">

        <div class="container mx-auto p-4">
        <div class="grid grid-cols-2 gap-4">
            <div class="bg-blue-500 text-white p-4 w-96  h-32">
              <Link to="/health_Sciences">
              College of Health Sciences
              </Link>
              </div>
            <div class="bg-green-500 text-white p-4 w-96 h-32 ">Admission List</div>
            <div class="bg-red-500 text-white p-4 w-96 h-32">Student E-Results</div>
            <div class="bg-yellow-500 text-white p-4 w-96 h-32 ">PAAU Portal</div>
        </div>
    </div>
 
        </div>

      </div>
    </div>
  );
};

export default Home;
