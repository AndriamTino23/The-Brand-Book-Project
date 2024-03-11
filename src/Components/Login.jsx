import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

export function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  /**RECUPERATION DES DONNEES ENTREES */
  const [data, setData] = useState("");
  function onSubmit(data) {
    console.log(data);
    setData(JSON.stringify(data));
  }

  const [mode, setMode] = useState("container");
  const toggleMode = () => {
    setMode(mode === "container" ? "container1" : "container");
  };

  return (
    <>
      <section className="main">
        {mode === "container" ? (
          /***************CONNEXION***************/
          <div className="container">
            <form
              action="https://httpbin.org/post"
              className="form"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
            >
              <h1>Login to Account</h1>
              <p>Please enter your email and password to continue</p>
              <label htmlFor="email-log">Email address: </label>
              <input
                {...register("mail", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/,
                  maxLength: 30,
                })}
                className="input"
                type="email"
                name="mail"
                id="email-log"
                placeholder="esteban_schiller@gmail.com"
              />
              {errors.mail && errors.mail.type === "required" && (
                <p style={{ color: "red" }}>Email is required</p>
              )}
              <div className="pfp">
                <label htmlFor="pwd1">Password:</label>
                <label htmlFor="pwd1">
                  <a className="forget" href="#">
                    Forget Password?
                  </a>
                </label>
              </div>
              <input
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, //l'user doit saisir un mdp qui contient au moin 1 lettre Maj ou Min et au moi 1 chiffre...au moin 8 caracteres
                })}
                className="input"
                type="password"
                name="password"
                id="pwd1"
                placeholder="••••••"
              />
              {errors.password && errors.password.type === "required" && (
                <p style={{ color: "red" }}>Password is required</p>
              )}

              <input
                type="checkbox"
                name="remember_password"
                value="off"
                id="mycheckbox1"
                className="styled-checkbox"
              />
              <label htmlFor="mycheckbox1" className="checkbox-label">
                Remember Password
              </label>
              <button className="signin" type="submit">
                Sign In
              </button>
              <div className="signing-link">
                <p>
                  Don t have an account?{" "}
                  <a href="#" onClick={toggleMode}>
                    {" "}
                    {mode === "container" ? "Create Account" : "container"}
                  </a>
                </p>
              </div>
            </form>
          </div>
        ) : (
          /*******************INSCRIPTION******************/
          <div className="container1">
            <form onSubmit={handleSubmit(onSubmit)} action="" className="form">
              <h1>Create an Account</h1>
              <p>Create a account to continue</p>
              <label htmlFor="email">Email address: </label>
              <input
                {...register("mail", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/,
                  maxLength: 30,
                })}
                className="input"
                type="email"
                name="mail"
                id="email-sign"
                placeholder="esteban_schiller@gmail.com"
              />
              {errors.mail && errors.mail.type === "required" && (
                <p style={{ color: "red" }}>Email is required</p>
              )}
              <label htmlFor="username">Username: </label>
              <input
                className="input"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
              <div className="pfp">
                <label htmlFor="pwd">Password:</label>
                <label htmlFor="passwd">
                  <a className="forget" href="#">
                    Forget Password?
                  </a>
                </label>
              </div>
              <input
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, //l'user doit saisir un mdp qui contient au moin 1 lettre Maj ou Min et au moi 1 chiffre...au moin 8 caracteres
                })}
                className="input"
                type="password"
                name="password"
                id="pwd2"
                placeholder="••••••"
              />
              {errors.password && errors.password.type === "required" && (
                <p style={{ color: "red" }}>Password is required</p>
              )}
              <input
                type="checkbox"
                name="checkbox"
                id="mycheckbox2"
                className="styled-checkbox"
              />
              <label htmlFor="mycheckbox2" className="checkbox-label">
                I accept terms and conditions
              </label>
              <button className="signup" type="submit">
                <a href="">Sign Up</a>
              </button>
              <div className="signup-link">
                <p>
                  Already have an account?{" "}
                  <a href="#" onClick={toggleMode}>
                    {" "}
                    {mode === "container" ? "Create Account" : "login"}
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </section>
    </>
  );
}
