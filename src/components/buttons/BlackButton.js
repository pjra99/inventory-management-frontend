"use client";
import { useRouter } from "next/navigation";

export default function BlackButton(props) {
  const router = useRouter();
  return (
    <button
      onClick={props.onClick}
      className="bg-secondary text-white px-4 py-2 rounded w-full h-full"
    >
      {props.text}
    </button>
  );
}
