"use client";
import BlackButton from "@/components/buttons/BlackButton";
import GoogleButton from "@/components/buttons/LoginWithGoogle";
import InputField from "@/components/inputs/Input";
import Margin from "@/components/Margin";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setCustomerId, setOrgId, setSignedInTrue} from "@/features/general/states"
import { redirect, useRouter } from "next/navigation";
import DropdownButton from "@/components/inputs/DropDownButton";
import RadioButtons from "@/components/inputs/RadioButtons";
import { validate } from "@/utils/formValidation";
import { apiCall } from "@/utils/apiCall";
import { X } from "lucide-react";
import {base_url} from "@/API"
export default function SignUp() {
  const [validated, setValidated] = useState(false);
  // console.log(base_url)
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    org_name: "",
    org_type: "",
    org_address:"",
    role: "",
    org_id:""
  });

  const route = useRouter();
  const dispatch = useDispatch();
  const  updateSetValidated = async() =>{
    await validate( formFields, validated)? setValidated(true)
    : null;
  }
  const handleSignUp= async()=> {
    
    if (validate(formFields, validated) ) {
      try{
        const { name, email, org_name } = formData;
        const org_payload = { name, email, org_name };
      let {insertedId} = await apiCall(org_payload, "GET", `${base_url}/organisation`)
      setFormFields(prevFields=>({...prevFields, org_id: insertedId}))
      let response= await apiCall(
        formFields,
        "post",
        `${base_url}/users`,
        ''
      )
      if(Object.keys(response).includes('_id')){
        dispatch(setOrgId(insertedId))
        dispatch(setSignedInTrue())
        alert("Success!")
        redirect("/home")
      }
      else{
        alert("Id not present in response!")
      }
    }
      catch(e){
        alert("Error registering user!")
        console.log(e)
      }
    }
  }
  return (
    <div className="bg-secondary h-screen w-screen flex sm:justify-start  justify-center items-center">
      <div className="bg-primary sm:h-[calc(100%-30px)] h-[calc(100%-10px)] sm:w-[50%] w-[90%] sm:ml-[20px]">
        <div className="flex justify-between my-20 mx-[20%]">
          {" "}
          <header className="flex justify-center text-4xl  italic text-secondary">
            Sign Up
          </header>
          <p className="mt-3 mx-5 text-secondary">or</p>
          <section className="">
            <GoogleButton route="/signin" width="100%" />
          </section>
        </div>
        <section className="form flex-col mt-10 mb-10 ml-[25%] items-center w-1/2">
          <div>
            {validated ? (
              <InputField
                placeholder="Business/Company Name"
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    org_name: e.target.value,
                  }))
                }
                value={formFields.org_name}
                 className="text-primaryText"
                 type="text"
              />
            ) : (
              <InputField
                placeholder="Full name"
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    name: e.target.value,
                  }))
                }
                value={formFields.name}
                className="text-primaryText"
                type="text"
              />
            )}
          </div>
          <div className="mt-7">
            {validated ? (
              <>
              <DropdownButton
                placeholder="Business type"
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    org_type: e.target.value,
                  }))
                }
                className="text-secondary"
                options={["Retail", "Service", "Manufacturing"]} // Example array of options
                value={formFields.org_type}
                type="text"
              />
              <InputField placeholder="Orgnaisation address" className="ml-5 text-primaryText" onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    org_address: e.target.value,
                  }))
                 }
                 value ={formFields.org_address}
                 type="text"
                 />
           </>
            ) : (
              <InputField
                placeholder="Email"
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    email: e.target.value,
                  }))
                  
                }
                 className="text-primaryText"
                value={formFields.email}
                type="text"
              />
            )}
          </div>
          <div className="mt-7">
            {validated ? (
              <RadioButtons
                name="Role"
                values={["Staff", "Manager", "Owner"]}
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    role: e.target.value,
                  }))
                }
                // className="text-secondary"
                value={formFields.role}
                // type="text"
              />
            ) : (
              <InputField
                placeholder="Password"
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    password: e.target.value,
                  }))
                }
                 className="text-primaryText"
                value={formFields.password}
                type="text"
              />
            )}
          </div>
          <div className="mt-7">
            {validated ? null : (
              <InputField
                placeholder="Confirm Password"
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    confirm_password: e.target.value,
                  }))
                }
                 className="text-primaryText"
                value={formFields.confirm_password}
                type="text"
              />
            )}
          </div>
          <div className="text-center mt-2 italic text-secondary">
            Already registered?{" "}
            <Link href="/signin" className="text-link">
              Sign In
            </Link>
          </div>
          {validated? <BlackButton className="mt-5" name="back" onClick={()=>setValidated(false)}/>:null}
          <div className="w-full mt-10">
            
            {validated ? (
              <BlackButton
                onClick={async() =>{handleSignUp()}}
                name="Sign Up!"
              />
            ) : (
              <BlackButton
              type="button"
                onClick={
                  updateSetValidated
              }
                
                name="Next"
              />
            )}
          </div>

        </section>
        {/* <BlackButton route="/signin" text="Sign In" /> */}
      </div>
    </div>
  );
}
