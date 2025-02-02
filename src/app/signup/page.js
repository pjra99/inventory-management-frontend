"use client";
import BlackButton from "@/components/buttons/BlackButton";
import GoogleButton from "@/components/buttons/LoginWithGoogle";
import InputField from "@/components/inputs/Input";
import Margin from "@/components/Margin";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [validated, setValidated] = useState(false);
  const route = useRouter();
  useEffect(() => {
    console.log(validated);
  }, [validated]);
  return (
    <div className="bg-secondary h-screen w-screen flex sm:justify-start  justify-center items-center">
      <div className="bg-primary sm:h-[calc(100%-30px)] h-[calc(100%-10px)] sm:w-[50%] w-[90%] sm:ml-[20px]">
        <div className="flex justify-between my-20 mx-[20%]">
          {" "}
          <header className="flex justify-center text-4xl  italic color-primaryText">
            Sign Up
          </header>
          <p className="mt-3">or</p>
          <section className="">
            <GoogleButton route="/signin" width="100%" />
          </section>
        </div>
        <section className="form flex-col mt-10 mb-10 ml-[25%] items-center w-1/2">
          <div>
            <InputField placeholder="Full name" />
          </div>
          <div className="mt-7">
            <InputField placeholder="Email" />
          </div>
          <div className="mt-7">
            <InputField placeholder="Password" />
          </div>
          <div className="mt-7">
            <InputField placeholder="Confirm Password" />
          </div>
          <div className="text-center mt-2 italic">
            Already registered?{" "}
            <Link href="/signin" className="text-link">
              Sign In
            </Link>
          </div>
          <div className="w-full mt-10">
            {validated ? (
              <BlackButton
                onClick={() => {
                  route.push("/");
                }}
                text="Sign Up!"
              />
            ) : (
              <BlackButton
                onClick={() => {
                  setValidated(true);
                }}
                text="Next"
              />
            )}
          </div>
        </section>
        {/* <BlackButton route="/signin" text="Sign In" /> */}
      </div>
    </div>
  );
}
