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
    // const chartRef = useRef(null);
    // const chartRef2 = useRef(null);
    // const chartInstance1 = useRef(null);
    // const chartInstance2 = useRef(null);
    const [selectedComponent, setSelectedComponent] = useState("Main");
  
//     useEffect(() => {
//       // Function to initialize a chart
//       const initializeChart = (chartRef, chartInstance, config) => {
//         if (chartRef.current) {
//           // Destroy the existing chart instance if it exists
//           if (chartInstance.current) {
//             chartInstance.current.destroy();
//           }
//           chartInstance.current = new Chart(chartRef.current, config);
//         }
//       };
  
//       // Line chart for the first canvas
//       initializeChart(chartRef, chartInstance1, {
//         type: "line",
//         data: {
//           labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//           datasets: [
//             {
//               label: "# of Votes",
//               data: [12, 19, 3, 5, 2, 3],
//               borderWidth: 1,
//               fill: false,
//               borderColor: "rgb(75, 192, 192)",
//               tension: 0.1,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });
  
//       // Line chart for the second canvas
//       initializeChart(chartRef2, chartInstance2, {
//         type: "line",
//         data: {
//           labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//           datasets: [
//             {
//               label: "Profit Report with Chart",
//               data: [3000, 4500, 3200, 6000, 5000, 7000],
//               borderWidth: 1,
//               fill: false,
//               borderColor: "rgb(255, 99, 132)",
//               tension: 0.1,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });
  
//       // Cleanup function to destroy charts when component unmounts
//       return () => {
//         if (chartInstance1.current) {
//           chartInstance1.current.destroy();
//           chartInstance1.current = null;
//         }
//         if (chartInstance2.current) {
//           chartInstance2.current.destroy();
//           chartInstance2.current = null;
//         }
//       };
//     }, []);

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
