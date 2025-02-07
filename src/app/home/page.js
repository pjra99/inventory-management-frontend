"use client";
import { useEffect } from "react";
import { apiCall } from "@/utils/apiCall";
export default function Home() {
  useEffect(() => {
    apiCall("", "get", "http://127.0.0.1:5000/users", {});
  }, []);
  return <div>Home Page, inventory management</div>;
}
