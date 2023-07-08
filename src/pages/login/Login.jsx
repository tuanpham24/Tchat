import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginWithGoogle } from "../../services/auth";
import "./style.scss";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleToggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleLogin = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <div id="login" className="container flex-container">
        <div className="login__container bg--white shadow--medium">
          <h1 className="text--center">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-controll">
              <input
                className="input-primary border--bottom"
                placeholder="Email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text--error" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-controll">
              <input
                className="input-primary border--bottom"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="text--error" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <div className="flex-container show-pwd">
              <input type="checkbox" onChange={handleToggleShowPassword}/>
              <label>Show password</label>
            </div>
            <button className="btn--primary btn--fullwidth" type="submit">
              Login
            </button>
            <p className="form-controll text--center">
              <a className="link--primary" href="">
                Forgot password?
              </a>
            </p>
            <p className="form-controll text--center">
              Don't have a account?{" "}
              <a className="link--primary" href="">
                Signup
              </a>
            </p>
          </form>

          <div className="login--another">
            <div className="or flex-container">
              <span className="rectangle--primary"></span>
              <span>or</span>
              <span className="rectangle--primary"></span>
            </div>
            <div>
              <button className="btn--white btn--fullwidth flex-container">
                <img
                  src="https://cdn-icons-png.flaticon.com/256/124/124010.png"
                  width={20}
                  alt=""
                />
                <span>Login with Facebook</span>
              </button>
              <button 
                className="btn--white btn--fullwidth flex-container"
                onClick={loginWithGoogle}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/012/871/371/original/google-search-icon-google-product-illustration-free-png.png"
                  width={20}
                  alt=""
                />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
