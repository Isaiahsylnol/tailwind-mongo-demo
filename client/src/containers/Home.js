import React, { useEffect } from "react";
import Header from "../components/Header";

function Home(props) {

  useEffect(() => {
    console.log( props.flights.data)
 });

  if(!props.flights.data){
    return <div>could'nt load data</div>
  }
  return (
    <div className="pt-6 space-y-4">
      <Header />
      <h3>Home</h3>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <div className="text-gray-500">
          <ul>
            <li>{props.flights.data[0].name}</li>
        </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
