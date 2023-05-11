import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  useEffect(() => {}, []);

  let nav = useNavigate();

  let [user, setuser] = useState("");
  let [email, setemail] = useState("");
  let [pass, setpass] = useState("");
  let [cpass, setcpass] = useState("");
  let fdata = [];
  let set = {
    user: user,
    email: email,
    pass: pass,
    cpass: cpass,
  };
  let data = () => {
    fdata.push(set);
    JSON.parse(localStorage.getItem("data"));
    let data1 = localStorage.setItem("data", JSON.stringify(fdata));
    nav("/home")
  };
  return (
    <div>
      <div className="box1">
        <h1>signup</h1>

        <form onSubmit={() => data()}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setpass(e.target.value)}
            required
          />
          <button >login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
