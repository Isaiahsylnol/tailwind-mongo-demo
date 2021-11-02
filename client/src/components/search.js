import React from "react";

function Search(props) {
  return (
    <div>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  w-full md:w-1/2 px-3 mb-6 md:mb-0" type="text" placeholder="Search" />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <h2>Test</h2>
    </div>
  );
}

export default Search;
