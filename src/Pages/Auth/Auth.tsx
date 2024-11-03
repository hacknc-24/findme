import "./style.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { },
  } = useForm();
  const onSubmit = async (data: object) => {
    try {
      console.log(data);
      Swal.fire("Good job!", "You are being logged in!", "success").then(() => {
        navigate("/home");
      });
    } catch (error) {
      Swal.fire("Oops...", "Invalid credentials", "error");
    }
  };

  return (
    <>
      <div className="container">
        <div className="loginHalf">
          <div className="login">
            <div className="loginForm">
              <p>Start your journey!</p>
              <h3>Sign up to FindMe!</h3>
              <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  placeholder="What is your username?"
                  {...register("username")}
                  className="authInput"
                />
                <input
                  type="text"
                  placeholder="Input your password!  "
                  className="authInput"
                  {...register("password", { required: true })}
                />
                <button type="submit">Sign up</button>
              </form>
            </div>
          </div>
        </div>
        <div className="imageHalf">
          <img src="src\images\pexels-geladelrosario-4341879.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default Auth;
