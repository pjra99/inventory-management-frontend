"use client";
import { useEffect } from "react";
import { apiCall } from "@/utils/apiCall";
export default function Home() {
  useEffect(() => {
    try {
      apiCall("", "get", "http://127.0.0.1:5000/users", {});
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div className="bg-secondary h-screen p-2 md:flex justify-between text-secondary">
      <div className="left-section"></div>
      <div className="right-section md:w-[75%] h-[100%] bg-primary p-10">
        <div className="flex justify-between ">
          <div className="text-3xl w-[40%] font-bold pl-1 ">
            Hi, have a look at your store’s insight
          </div>
          <div className="md:mt-10">Filter</div>
          <div className="md:mt-10">Custom Date Filter</div>
        </div>
        <div className="flex justify-between bg-white md:mt-10 md:p-6 ">
          <div className="">
            <p className="text-2xl font-bold text-2xl">This month Sales</p>
            <p className="text-green-600 mt-4 text-xl font-light">
              205400.98 Rs
            </p>
            {/* value to be fetched from Api/db */}
            <p className="mt-2">10.16% more than last month</p>
          </div>
          <div>Sales Chart</div>
          <div>
            <p className="text-xl">Average sale value</p>
            <p>205400.98 Rs</p> {/* value to be fetched from Api/db */}
            <p className="text-xl mt-4">Average profit per item</p>
            <p>205400.98 Rs</p> {/* value to be fetched from Api/db */}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="bg-white w-[49%] p-4">Profit Report with Chart</div>
          <div className="flex flex-col w-[49%] ml-[2%]">
            <div className="bg-white p-4">
              <p className="text-xl">Products list which require restock</p>
              <p>205400.98 Rs</p> {/* value to be fetched from Api/db */}
              <p className="text-xl mt-4">Recent Order</p>
              <p>205400.98 Rs</p> {/* value to be fetched from Api/db */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
