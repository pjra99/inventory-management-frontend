import BlackButton from "@/components/buttons/BlackButton";
import GoogleButton from "@/components/buttons/LoginWithGoogle";
import InputField from "@/components/inputs/Input";
import Margin from "@/components/Margin";

export default function SignUp() {
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
            <InputField placeholder="Email" />
          </div>
          <div className="mt-7">
            <InputField placeholder="Password" />
          </div>
          <div className="text-center mt-2">Not registered yet? Sign Up!</div>
          <div className="w-full mt-10">
            <BlackButton route="/signin" text="Sign In" />
          </div>
        </section>
        {/* <BlackButton route="/signin" text="Sign In" /> */}
      </div>
    </div>
  );
}
