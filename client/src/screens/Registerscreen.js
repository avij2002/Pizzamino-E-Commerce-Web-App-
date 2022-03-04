import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import { registerUserReducer } from "../redusers/userReducer";
import Loading from "../components/Loading";
import Success from "../components/Success";
import Error from "../components/Error";
function Registerscreen() {
  const [name, setname] = useState("");
  const [nameError, setnameError] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const registerstate = useSelector((state) => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  const dispatch = useDispatch();
  function register() {
    if (password !== cpassword) {
      alert("Password is Not Matching");
    } else {
      const user = {
        name,
        email,
        password,
      };
      dispatch(registerUser(user));
    }
  }

  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
            
          {loading && (<Loading/>)}
          {success && (<Success success="User Register Successfully" />)}
          {error && (<Error error="Email Already Registered" />)}

          <h2 style={{ fontSize: "35px" }} className="text-center">
            Register
          </h2>

          <div>
            <form>
              <input
                required
                type="text"
                placeholder="name"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />
              <input
                type="password"
                placeholder="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required
                
              />
              <input
                type="password"
                placeholder="confirm password"
                className="form-control"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
                required
              />
              <button
                style={{ marginRight: "600px" }}
                className="btn mt-3 mb-3"
                onClick={register}
              >
                Register
              </button>
              <br></br>
              <a href="/login" className="mt-3">
                Click Here to Login
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
