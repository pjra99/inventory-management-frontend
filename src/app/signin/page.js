"use client";
import BlackButton from "@/components/buttons/BlackButton";
import GoogleButton from "@/components/buttons/LoginWithGoogle";
import InputField from "@/components/inputs/Input";
import Margin from "@/components/Margin";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { apiCall } from "@/utils/apiCall";
// import { } from "@/utils/Authentication";
import { useDispatch } from "react-redux";
import {setOrgId, setSignedInTrue} from "@/features/general/states"
import {base_url} from "@/API"
import { ToastContainer, toast } from 'react-toastify';


export default function SignUp() {
  const dispatch = useDispatch()
  const [userCredentials, setUserCredentials] = useState({
    "email":"",
    "password":""
  })
  useEffect(()=>{
    toast(
      <span>
        If you want a demo of this app,{' '}
        <a
          href="https://github.com/pjra99/inventory-management-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-500 hover:text-blue-700"
        >
          click here
        </a>{' '}
        and go in the 'readme.md' to check the demo credentials.
      </span>
    );
    
  })
  const route = useRouter();
  return (
<div className="bg-secondary min-h-screen w-screen flex items-center px-4">
<div className="bg-primary w-full max-w-2xl p-10 ml-0 sm:ml-10 rounded-lg shadow-md">
<header className="flex justify-center text-4xl my-20 italic text-primaryText">
          Sign In
        </header>
        <section className="form flex flex-col mt-10 mb-10 items-center w-full">
        <ToastContainer />
          <div className="w-1/2"><GoogleButton  width="100%" onClick={()=>{
            toast("OOPS, this feature is not functional yet!")
          }}/></div>
        </section>
        <div className="flex justify-center mt-10">
          <Margin width="50%" text="or" />
        </div>
        <section className="form flex-col mt-10 mb-10 ml-[25%] items-center w-1/2">
          <div>
            <InputField
              placeholder="Email"
              onChange={(e) => {
                setUserCredentials(prevState=>({
                  ...prevState,
                  "email":e.target.value
                }))
              }}
              className="w-[100%] text-primaryText"
              value={userCredentials["email"]}
            />
          </div>
          <div className="mt-7">
            <InputField
              placeholder="Password"
              onChange={(e) => {
                setUserCredentials(prevState=>({
                  ...prevState,
                  "password":e.target.value
                }))
              }}
              className="w-[100%] text-primaryText"
              value={userCredentials["password"]}
            />
          </div>
          <div className="text-center text-primaryText mt-2 italic">
            Not registered yet?{" "}
            <Link href="/signup" className="text-link">
              Sign Up!
            </Link>
          </div>
          <div className="w-full mt-10">
            <BlackButton
              onClick={async () => {
                let response = await apiCall("", "GET", `${base_url}/users/${userCredentials.email}/${userCredentials.password}`)
                 if(response && response.authenticated){ 
                  dispatch(setOrgId(response.org_id))
                  dispatch(setSignedInTrue())
                  route.push("/home")
                }
                else{
                  alert("Invalid Credentials")
                }
              }}
              name="Sign In"
              className="w-full"
            />
          </div>
        </section>
        {/* <BlackButton route="/signin" text="Sign In" /> */}
      </div>
    </div>
  );
}
