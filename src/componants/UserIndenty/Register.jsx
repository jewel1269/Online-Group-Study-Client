import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!isLengthValid) {
      setErrorMessage("Password must have at least 6 characters.");
      return;
    }

    if (!hasUpperCase) {
      setErrorMessage("Password must have at least one uppercase letter.");
      return;
    }
    if (!hasLowerCase) {
      setErrorMessage("Password must have at least one lowercase letter.");
      return;
    }
    

    const user = { name, email, photoURL, password };
    console.log(user);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Registered");
        form.reset()
      
      })
      .then((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
        "url(https://img.freepik.com/premium-vector/white-gray-wave-abstract-background-soft-design-graphic-work_41084-469.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715212800&semt=ais)",
      }}
    >
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now </h1>
            <p className="py-6">
              Discover the future of sustainable tourism management. Join us to
              explore innovative strategies for <br />
              community engagement and environmental stewardship. Register now
              for impactful insights."
            </p>
          </div>
          <div className="card shrink-0 w-full  max-w-sm shadow-2xl ">
            <h1 className="text-center text-2xl mt-5 font-semibold">
              Register
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="name"
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURl</span>
                </label>
                <input
                  id="photoURL"
                  type="text"
                  placeholder="PhotoURL"
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Submit</button>
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <p className="text-xs text-center  sm:px-6  dark:text-gray-600">
                Do you have an account?
                <NavLink to={"/login"}>
                  {" "}
                  <strong className="underline">Login</strong>
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
