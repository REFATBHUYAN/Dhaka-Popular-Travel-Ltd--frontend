import React, { useState } from "react";

const DisplyData = ({ flights }) => {
  const selectedFlight = (item) => {
    alert(`Flight Selected Successfully`);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flow-root mt-5">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-slate-200">
                <thead>
                  <tr>
                    <th className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600 sm:pl-3">
                      Flight
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600">
                      aircraft
                    </th>

                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600">
                      class
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600">
                      Fare
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600">
                      Route
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600">
                      departure
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600">
                      arrival
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600">
                      duration
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600">
                      price
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-slate-600">
                      action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {flights &&
                    flights?.map((item, index) => (
                      <tr
                        key={item?.id}
                        className={index % 2 === 0 ? undefined : "bg-slate-50"}
                      >
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-400 sm:pl-3">
                          {
                            <span>
                              {item?.itineraries[0]?.segments[0]?.carrierCode}{" "}
                              {item?.itineraries[0]?.segments[0]?.aircraft}{" "}
                              <br />{" "}
                              {item?.itineraries[0]?.segments[1]?.carrierCode}{" "}
                              {item?.itineraries[0]?.segments[1]?.aircraft}
                            </span>
                          }
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm font-medium text-slate-400">
                          {
                            <span>
                              {item?.itineraries[0]?.segments[0]?.flightNumber}{" "}
                              <br />{" "}
                              {item?.itineraries[0]?.segments[1]?.flightNumber}{" "}
                            </span>
                          }
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm font-medium text-slate-400">
                          {
                            <span>
                              {item?.class[0][0]} <br /> {item?.class[0][1]}{" "}
                            </span>
                          }
                        </td>

                        <td className=" px-3 py-2 text-sm text-slate-400">
                          {
                            <span>
                              {item?.fareBasis[0][0]} <br />
                              {""}
                              {item?.fareBasis[0][1]}{" "}
                            </span>
                          }
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                          {
                            <span>
                              {
                                item?.itineraries[0]?.segments[0]?.departure
                                  .iataCode
                              }
                              {" - "}
                              {
                                item?.itineraries[0]?.segments[0]?.arrival
                                  .iataCode
                              }
                              <br />{" "}
                              {
                                item?.itineraries[0]?.segments[1]?.departure
                                  .iataCode
                              }
                              {" - "}
                              {
                                item?.itineraries[0]?.segments[1]?.arrival
                                  .iataCode
                              }
                            </span>
                          }
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                          {
                            <span>
                              {item?.itineraries[0]?.segments[0]?.departure.at}
                              <br />{" "}
                              {item?.itineraries[0]?.segments[1]?.departure.at}
                            </span>
                          }
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                          {
                            <span>
                              {item?.itineraries[0]?.segments[0]?.arrival.at}
                              <br />{" "}
                              {item?.itineraries[0]?.segments[1]?.arrival.at}
                            </span>
                          }
                        </td>

                        <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                          {item?.itineraries[0]?.duration}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                          {item?.price}
                        </td>
                        <td className="whitespace-nowrap px-3 py-2 text-sm text-slate-400">
                          <button
                            onClick={() => selectedFlight(item)}
                            className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                          >
                            Select
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {flights?.length === 0 && (
                <div className="font-light text-slate-400 text-sm italic text-center w-full mx-auto">
                  <div className="px-3 py-4 border-t border-slate-200">
                    No flight found for this input requirements!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplyData;
