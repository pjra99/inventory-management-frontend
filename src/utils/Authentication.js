export const Authentication = (email, pass, registeredUsers) => {
  const registeredUsers_ = registeredUsers.users;
  console.log(registeredUsers_);
  if (pass == "") {
    alert("Please enter your password");
    return false;
  }
  if (email == "") {
    alert("Please enter you email");
    return false;
  }

  for (let i = 0; i < registeredUsers_.length; i++) {
    console.log(email);
    console.log(pass);
    if (
      registeredUsers_[i]["email"] == email &&
      registeredUsers_[i]["password"] == pass
    ) {
      return true;
    } else if (
      registeredUsers_[i]["email"] == email &&
      registeredUsers_[i]["password"] !== pass
    ) {
      alert("Wrong Password!");
      return false;
    }
  }
  alert("User does not exist");
  return false;
};
