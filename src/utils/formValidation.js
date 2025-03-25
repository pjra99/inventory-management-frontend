import { apiCall } from "./apiCall";

export const validate =async ( formFields, validated) => {
  if (validated) {
    if (!formFields.org_name.trim() || !formFields.org_type.trim()) {
      alert("Please fill in all fields");
      return false;
    }
  } else {
    console.log(formFields)
    if (
      !formFields.name.trim() ||
      !formFields.email.trim() ||
      !formFields.password.trim() ||
      !formFields.confirm_password.trim()
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

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formFields.email)) {
      alert("Please enter a valid email");
      return false;
    }
   
    if (formFields.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return false;
    }

    if (formFields.confirm_password !== formFields.password) {
      alert("Password doesn't match");
      return false;
    }
    try {
      console.log(formFields.email)
      const response = await apiCall("", "GET", `http://127.0.0.1:5000/users/${formFields.email}`);
      console.log(response)
      if (response?.emailRegistered) {
        alert("Email already registered");  
        return false;
      }
    } catch (error) {
      console.error("API call failed:", error);
      alert("Error checking email registration");
      return false;
    }
  }
  return true;
};
