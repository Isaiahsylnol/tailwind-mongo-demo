import React from "react";

function FlightSearchBar(props) {
  return (
    <div>
      <form class="m-4 flex gap-12">
        <input
          class="  p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="Origin"
        /><input
        class="  p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        placeholder="Destination"
      />
        <button class="px-8 rounded-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
          Search
        </button>
      </form>
    </div>
  );
}

export default FlightSearchBar;
