import React, { useEffect } from "react";
import Header from "../components/Header";

function Home(props) {

  return (
    <div class="pt-6 space-y-4">
      <h2>Home</h2>
      <Header />
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <div className="text-gray-500">
          <ul>
        </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
