import React from "react";

export const Landing = () => {
  const getData = async () => {
    try {
      const creds = {
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };

      const data = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });
      const { encodedToken } = await data.json();
      localStorage.setItem("encodedToken", encodedToken);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1 onClick={getData}>Hello Everyone </h1>
    </div>
  );
};
