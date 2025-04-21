"use client";
import { base_url } from "@/API";
import { apiCall } from "@/utils/apiCall";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
export default function Home() {
  const signedIn = useSelector((state)=>state.change.signedIn)
  apiCall('','GET', base_url, '')
  const org_id = localStorage.getItem("org_id")
  org_id?redirect('/home'):redirect("/signin");
}