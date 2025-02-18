import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingCart,
  BarChart2,
  Users,
  Package,
  Settings,
  BookOpen,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home },
    { name: "Sell", icon: ShoppingCart },
    { name: "Reporting", icon: BarChart2 },
    { name: "Catalogue", icon: BookOpen },
    { name: "Inventory", icon: Package },
    { name: "Customers", icon: Users },
    { name: "Setup", icon: Settings },
  ];

  return (
    <div className="relative">
      {/* Menu Icon for mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation Menu */}
      <ul
        className={`
        ${isOpen ? "block" : "hidden"} 
        md:block 
        absolute 
        md:relative 
        top-full 
        left-0 
        bg-secondary 
        md:bg-transparent 
        w-48 
        md:w-auto 
        mt-2 
        md:mt-0 
        rounded-md 
        md:rounded-none 
        shadow-md 
        md:shadow-none
        z-50
      `}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className="text-white hover:bg-white/10 px-4 py-2 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Icon size={20} className="text-white opacity-75" />
                <span>{item.name}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
