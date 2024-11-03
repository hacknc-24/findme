import "./style.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const {
    register,

    handleSubmit,
    formState: {},
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
      <div className="authContainer">
        <div className="logo">
          <img src="assets/Find_Me_png.png" alt="logo" className="logoImage" />
        </div>
        <div className="InputContainer">
          <form className="authForm" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="What is your username?"
              {...register("username")}
              className="authInput"
              style={{ marginBottom: "10px" }}
            />
            <input
              type="text"
              placeholder="Input your password!  "
              className="authInput"
              {...register("password", { required: true })}
             
            />
            <button type="submit" className="submit" style={{marginTop:"10px"}}>
              Log in
            </button>
          </form>
        </div>
        <button type="submit" className="submitButton">
          Create new account
        </button>
      </div>
    </>
  );
};

export default Auth;
