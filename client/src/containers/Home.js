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
    <div className="">
      <Header />
      <div className="container flex justify-center ">
 
      <FlightSearchBar 
        placeholder="Origin"
        suggestions={[
          "Toronto, Ontario, Canada",
          "Sapporo, Japan",
          "New Orleans, Louisiana",
          "New Plymouth, New Zealand",
          "London City Airport",
          "East London, South Africa",
          "Bimini, Bahamas",
          "Cape Town, South Africa"
        ]}
      />
      <FlightSearchBar
        placeholder="Destination"
        suggestions={[
          "Toronto, Ontario, Canada",
          "Sapporo, Japan",
          "New Orleans, Louisiana",
          "New Plymouth, New Zealand",
          "London City Airport",
          "East London, South Africa",
          "Bimini, Bahamas",
          "Cape Town, South Africa"
        ]}
      />
      </div>
      <div className="container p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
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
