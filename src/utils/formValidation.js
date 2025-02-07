import { ZCOOL_KuaiLe } from "next/font/google";

export const validate = (formFields, validated, registeredUsers) => {
  if (validated) {
    if (formFields.orgName.length === 0 || formFields.orgType.length === 0) {
      alert("Please fill in all fields");
      return false;
    }
  } else {
    if (
      formFields.name.length === 0 ||
      formFields.email.length === 0 ||
      formFields.password.length === 0 ||
      formFields.confirmPassword.length === 0
    ) {
      alert("Please fill in all fields");
      return false;
    }
    if (formFields.name.length < 3) {
      alert("Name must be at least 3 characters long");
      return false;
    }
    if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(formFields.name)) {
      alert("Please enter a valid name");
      return false;
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formFields.email)
    ) {
      alert("Please enter a valid email");
      return false;
    }
    if (formFields.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return false;
    }
    if (formFields.confirmPassword !== formFields.password) {
      alert("Password doesn't match");
      return false;
    }
  }
  const registeredUsers_ = registeredUsers.users;
  console.log("Agya yaha tlk" + registeredUsers_);
  for (let i = 0; i < registeredUsers_.length; i++) {
    console.log("1" + registeredUsers_[i]["email"]);
    if (registeredUsers_[i]["email"] == formFields.email) {
      alert("User already Exist");
      return false;
    }
  }
  console.log(registeredUsers_);
  return true;
};
