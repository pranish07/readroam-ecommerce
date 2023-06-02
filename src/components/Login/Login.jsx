import React from "react";

export const Login = () => {
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

      // console.log(encodedToken);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <p> Login </p>
      email: <input type="text" /> <br />
      password: <input type="text" /> <br />
      <button onClick={getData}>Submit</button>
    </div>
  );
};
