import React, { useState, useEffect, useTransition } from "react";
import DisplyData from "./DisplyData";

const DateInput = () => {
  const [departure, setDeprature] = useState("");
  const [arrival, setArrival] = useState("");
  const [seats, setSeats] = useState(0);
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState([]);
  const [reloadTrigger, setReloadTrigger] = useState(false);
  const [totalFlights, setTotalFlights] = useState([]);

  // Load all the data from json
  useEffect(() => {
    fetch("/data.json")
      .then((data) => data.json())
      .then((data) => {
        setTotalFlights(data.flightOffer);
        setFlights(data.flightOffer);
        setReloadTrigger(false);
      });
  }, [reloadTrigger]);

  // submit input button functionality
  const submitData = () => {
    // filter flights by deprature and arraival input
    const filterItems = totalFlights.filter(
      (f) =>
        (f?.itineraries[0]?.segments[0]?.departure.iataCode ==
          departure.toUpperCase() &&
          f?.itineraries[0]?.segments[0]?.arrival.iataCode ==
            arrival.toUpperCase()) ||
        (f?.itineraries[0]?.segments[1]?.departure.iataCode ==
          departure.toUpperCase() &&
          f?.itineraries[0]?.segments[1]?.arrival.iataCode ==
            arrival.toUpperCase())
    );

    // filter available flight with seats and time
    const filteredItems2 = filterItems.filter((item) => {
      const hasAvailableSeats =
        parseInt(item.seat[0][0]) + parseInt(item.seat[0][1]) > seats;

      const departureTime1 = new Date(
        item.itineraries[0].segments[0].departure.at
      );
      const arrivalTime1 = new Date(item.itineraries[0].segments[0].arrival.at);
      const inputTime = new Date(date);

      return (
        hasAvailableSeats &&
        (inputTime < departureTime1 || inputTime > arrivalTime1)
      );
    });

    setFlights(filteredItems2);
  };

  return (
    <>
      <div className="max-w-7xl w-full mx-auto px-4 flex gap-5 items-center justify-between mt-10">
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium  bg-white text-black"
          >
            Departure
          </label>

          <input
            type="text"
            id="deprature"
            onChange={(e) => setDeprature(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
            placeholder="departure"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium  bg-white text-black"
          >
            Arrival
          </label>
          <input
            type="text"
            id="arrival"
            onChange={(e) => setArrival(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
            placeholder="Arrival"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium  bg-white text-black"
          >
            Seats
          </label>
          <input
            type="number"
            id="seats"
            onChange={(e) => setSeats(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
            placeholder="number of seats"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium  bg-white text-black"
          >
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5"
            required
          />
        </div>

        <button
          onClick={submitData}
          className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Search
        </button>
        <button
          onClick={() => setReloadTrigger(true)}
          className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Reset
        </button>
      </div>
      <hr className="my-1 border-t border-gray-300 max-w-7xl mx-auto px-4" />
      <DisplyData flights={flights}></DisplyData>
    </>
  );
};

export default DateInput;
