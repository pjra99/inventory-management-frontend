"use client";
import BlackButton from "@/components/buttons/BlackButton";
import GoogleButton from "@/components/buttons/LoginWithGoogle";
import InputField from "@/components/inputs/Input";
import Margin from "@/components/Margin";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DropdownButton from "@/components/inputs/DropDownButton";
import RadioButtons from "@/components/inputs/RadioButtons";
import { validate } from "@/utils/formValidation";
import { apiCall } from "@/utils/apiCall";
export default function SignUp() {
  const [validated, setValidated] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    orgName: "",
    orgType: "",
    role: "",
  });

  const route = useRouter();
  useEffect(() => {
    apiCall("", "GET", "http://127.0.0.1:5000/users", setRegisteredUsers);
  }, []);

  return (
    <div className="bg-secondary h-screen w-screen flex sm:justify-start  justify-center items-center">
      <div className="bg-primary sm:h-[calc(100%-30px)] h-[calc(100%-10px)] sm:w-[50%] w-[90%] sm:ml-[20px]">
        <div className="flex justify-between my-20 mx-[20%]">
          {" "}
          <header className="flex justify-center text-4xl  italic color-primaryText">
            Sign Up
          </header>
          <p className="mt-3 mx-5">or</p>
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
                    orgName: e.target.value,
                  }))
                }
                value={formFields.orgName}
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
              />
            )}
          </div>
          <div className="mt-7">
            {validated ? (
              <DropdownButton
                placeholder="Business type"
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    orgType: e.target.value,
                  }))
                }
                options={["Retail", "Service", "Manufacturing"]} // Example array of options
                value={formFields.orgType}
              />
            ) : (
              <InputField
                placeholder="Email"
                onChange={(e) =>
                  setFormFields((prevFields) => ({
                    ...prevFields,
                    email: e.target.value,
                  }))
                }
                value={formFields.email}
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
                value={formFields.role}
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
                value={formFields.password}
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
                    confirmPassword: e.target.value,
                  }))
                }
                value={formFields.confirmPassword}
              />
            )}
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
                  if (
                    validate(formFields, validated, registeredUsers) == true &&
                    apiCall(
                      formFields,
                      "post",
                      "http://127.0.0.1:5000/users",
                      setRegisteredUsers
                    )
                  ) {
                    alert("Success!");
                    route.push("/home");
                  } else alert("Error registering User");
                }}
                text="Sign Up!"
              />
            ) : (
              <BlackButton
                onClick={() => {
                  validate(formFields, validated, registeredUsers)
                    ? setValidated(true)
                    : null;
                }}
                // onClick={() => {
                //   //for testing
                //   setValidated(true);
                // }}
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
