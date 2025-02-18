"use client";
import { useEffect, useRef } from "react";
import { apiCall } from "@/utils/apiCall";
import Chart from "chart.js/auto";
import Navigation from "@/components/Navigation";

export default function Home() {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    if (chartRef2.current) {
      new Chart(chartRef2.current, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Profit Report with Chart",
              data: [3000, 4500, 3200, 6000, 5000, 7000],
              borderWidth: 1,
              fill: false,
              borderColor: "rgb(255, 99, 132)",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    try {
      apiCall("", "get", "http://127.0.0.1:5000/users", {});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="bg-secondary p-2 md:flex justify-between text-secondary">
      <div className="left-section">
        <Navigation />
      </div>
      <div className="right-section md:w-[75%] h-[100%] bg-primary p-10">
        <div className="flex justify-between">
          <div className="text-3xl w-[40%] font-bold pl-1">
            Hi, have a look at your store’s insight
          </div>
          <div className="md:mt-10">Filter</div>
          <div className="md:mt-10">Custom Date Filter</div>
        </div>
        <div className="flex flex-wrap justify-between bg-white md:mt-10 md:p-6">
          <div>
            <p className="text-2xl font-bold">This month Sales</p>
            <p className="text-green-600 mt-4 text-xl font-light">
              205400.98 Rs
            </p>
            <p className="mt-2">10.16% more than last month</p>
          </div>
          <div className="md:w-1/3">
            <canvas ref={chartRef}></canvas>
          </div>
          <div>
            <p className="text-xl">Average sale value</p>
            <p>205400.98 Rs</p>
            <p className="text-xl mt-4">Average profit per item</p>
            <p>205400.98 Rs</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="bg-white w-[49%] p-4">
            <div className="h-[95%]">
              <canvas ref={chartRef2}></canvas>
            </div>
          </div>
          <div className="flex flex-col w-[49%] ml-[2%]">
            <div className="bg-white p-4">
              <p className="text-xl">Products list which require restock</p>
              <ul>
                <li>Biscuits</li>
                <li>Namkeens</li>
                <li>Milk Packets</li>
              </ul>
              <p className="text-xl mt-4">Recent Orders</p>
              <ul>
                <li>Milk 20 lots</li>
                <li>Eggs 23 lots</li>
                <li>Agarbatti 50 lots</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
