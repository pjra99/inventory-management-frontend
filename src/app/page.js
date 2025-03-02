"use client";
import { useEffect, useRef, useState } from "react";
import { apiCall } from "@/utils/apiCall";
import Chart from "chart.js/auto";
import Navigation from "@/components/Navigation";
import Main from "@/components/Main"
import CatalogueComponent from "@/components/CatalogueComponent";
import CustomersComponent from "@/components/CustomersComponent";
import InventoryComponent from "@/components/InventoryComponent";
import SellComponent from "@/components/SellComponent";
import SetupComponent from "@/components/SetupComponent";
import ReportingComponent from "@/components/ReportingComponent";
export default function Home() {
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const [selectedComponent, setSelectedComponent] = useState('Main')
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
  const renderComponent = () => {
    switch (selectedComponent) {
      case "Sell":
        return <SellComponent />;
      case "Reporting":
        return <ReportingComponent />;
      case "Catalogue":
        return <CatalogueComponent />;
      case "Inventory":
        return <InventoryComponent />;
      case "Customers":
        return <CustomersComponent />;
      case "Setup":
        return <SetupComponent />;
      default:
        return <Main />;
    }
  };
  return (
    <div className="bg-secondary p-2 md:flex justify-between text-secondary h-[100%]">
      <div className="left-section">
        <Navigation modifier ={setSelectedComponent} />
      </div>
      
     {renderComponent()}
    </div>
  );
}
