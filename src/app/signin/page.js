"use client";
import BlackButton from "@/components/buttons/BlackButton";
import GoogleButton from "@/components/buttons/LoginWithGoogle";
import InputField from "@/components/inputs/Input";
import Margin from "@/components/Margin";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiCall } from "@/utils/apiCall";
import { Authentication } from "@/utils/Authentication";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const route = useRouter();

  useEffect(() => {
    apiCall("", "GET", "http://127.0.0.1:5000/users", setRegisteredUsers);
  }, []);
  return (
    <div className="bg-secondary h-screen w-screen flex sm:justify-start  justify-center items-center">
      <div className="bg-primary sm:h-[calc(100%-30px)] h-[calc(100%-10px)] sm:w-[50%] w-[90%] sm:ml-[20px]">
        <header className="flex justify-center text-4xl my-20 italic color-primaryText">
          Sign In
        </header>
        <section className="flex justify-center">
          <GoogleButton route="/signin" width="50%" />
        </section>
        <div className="flex justify-center mt-10">
          <Margin width="50%" text="or" />
        </div>
        <section className="form flex-col mt-10 mb-10 ml-[25%] items-center w-1/2">
          <div>
            <InputField
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div className="mt-7">
            <InputField
              placeholder="Password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              value={pass}
            />
          </div>
          <div className="text-center mt-2 italic">
            Not registered yet?{" "}
            <Link href="/signup" className="text-link">
              Sign Up!
            </Link>
          </div>
          <div className="w-full mt-10">
            <BlackButton
              onClick={() => {
                Authentication(email, pass, registeredUsers)
                  ? route.push("/home")
                  : null;
              }}
              name="Sign In"
            />
          </div>
        </section>
        {/* <BlackButton route="/signin" text="Sign In" /> */}
      </div>
    </div>
  );
}
