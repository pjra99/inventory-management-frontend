export const apiCall = async (data, method, url, Modifier) => {
  try {
    const response = await fetch(url, {
      method: method.toUpperCase(),
      headers: {
        "Content-Type": "application/json",
      },
      body: method.toUpperCase() == "POST" ? JSON.stringify(data) : null,
    });

    const data_ = await response.json();
    Modifier?Modifier(data_):"";
    // console.log(data_);
    return data_;
  } catch (error) {
    // console.error("Error:", error);
    return {"Error:": error.message};
  }
};
