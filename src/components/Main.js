"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Main(){
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);
    
        useEffect(() => {
          // Function to initialize a chart
          const initializeChart = (chartRef, chartInstance, config) => {
            if (chartRef.current) {
              // Destroy the existing chart instance if it exists
              if (chartInstance.current) {
                chartInstance.current.destroy();
              }
              chartInstance.current = new Chart(chartRef.current, config);
            }
          };
      
          // Line chart for the first canvas
          initializeChart(chartRef, chartInstance1, {
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
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
      
          // Line chart for the second canvas
          initializeChart(chartRef2, chartInstance2, {
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
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
      
          // Cleanup function to destroy charts when component unmounts
          return () => {
            if (chartInstance1.current) {
              chartInstance1.current.destroy();
              chartInstance1.current = null;
            }
            if (chartInstance2.current) {
              chartInstance2.current.destroy();
              chartInstance2.current = null;
            }
          };
        }, []);
    return   <div className="right-section md:w-[75%] h-[100%] bg-primary p-10">
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
            <div className="">
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
}