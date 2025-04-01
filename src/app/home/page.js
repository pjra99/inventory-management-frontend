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
import withBackButton from "@/components/CatalogueWithBackButton";

export default function Home() {
    const CatalogueWithBackButton = withBackButton(CatalogueComponent, "Sell");
    const [selectedComponent, setSelectedComponent] = useState("Main");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Sell":
        return <SellComponent setCurrentComponent ={setSelectedComponent} />;
      case "Reporting":
        return <ReportingComponent setCurrentComponent ={setSelectedComponent} />;
      case "Catalogue":
        return <CatalogueComponent setCurrentComponent ={setSelectedComponent} />;
      case "Inventory":
        return <InventoryComponent setCurrentComponent ={setSelectedComponent} />;
      case "Customers":
        return <CustomersComponent setCurrentComponent ={setSelectedComponent} />;
      case "Setup":
        return <SetupComponent setCurrentComponent ={setSelectedComponent} />;
      case "CatalogueWithBackButton":
        return <CatalogueWithBackButton CatalogueComponent={CatalogueComponent} setCurrentComponent={setSelectedComponent} />;
      default:
        return <Main />;
    }
  };
  return (
    <div className="bg-secondary p-2 md:flex justify-between text-secondary h-[100%]">
      <div className="left-section">
        <Navigation setCurrentComponent ={setSelectedComponent} />
      </div>
      
     {renderComponent()}
    </div>
  );
}
