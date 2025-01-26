"use client";
import { useRouter } from "next/navigation";

export default function BlackButton(props) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(props.route)}
      className={`bg-transparent border-[1px] text-primaryText px-4 py-2 rounded flex justify-center w-[${props.width}]`}
    >
      <img src="googleicon.svg" className="h-5 w-5 mr-3" />{" "}
      <div>Login with Google</div>
    </button>
  );
}
