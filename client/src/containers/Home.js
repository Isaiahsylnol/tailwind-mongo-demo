import React, { useEffect } from "react";
import Header from "../components/Header";
import FlightSearchBar from '../components/FlightSearchBar'
function Home(props) {
 
  useEffect(() => {
    console.log( props.flights.data)
 });

 // Do somthing if data not present
  if(!props.flights.data){
    return <div>could'nt load data</div>
  }
  
  return (
    <div className="pt-6 space-y-4">
      <Header />
      <FlightSearchBar/>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-black">Current Flights</div>
          <div className="text-gray-500">
          <ul>
            { props.flights.data.map((flight) =>(<li key={ flight.model }>{flight.name}</li>))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home;
