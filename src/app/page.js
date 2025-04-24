"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { base_url } from "@/API";
import { apiCall } from "@/utils/apiCall";

export default function Home() {
  const signedIn = useSelector((state) => state.change.signedIn);
  const org_id = useSelector((state) => state.change.org_id);
  const router = useRouter();

  useEffect(() => {
    apiCall('', 'GET', base_url, '');
    if (org_id) {
      router.push("/home");
    } else {
      router.push("/signin");
    }
  }, [org_id]);

  return <h1>Loading!!!</h1>; // You can also return a loader if you want
}
