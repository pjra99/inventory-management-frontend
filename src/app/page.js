"use client";
import { redirect } from "next/navigation";

export default function Home() {
  const org_id = localStorage.getItem("org_id")
  org_id?redirect('/home'):redirect("/signin");
}