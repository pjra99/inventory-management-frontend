export const apiCall = async (data, method, url, Modifier) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: method.toUpperCase() == "POST" ? JSON.stringify(data) : null,
    });

    const data_ = await response.json();
    Modifier(data_);
    console.log(data_);
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
