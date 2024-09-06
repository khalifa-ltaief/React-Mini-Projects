import "./ForgetPassword.css";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
function ForgetPassword() {
  return (<>
    <div className="container-password">
      <form action="">
        <h1>Reset Password</h1>
        <div className="input-box">
          <label>
            Type your email so we can send you a password reset link{" "}
          </label>
          <input type="email" placeholder="Email to reset password" required />
        </div>
        <div className="submit">
          <button type="submit">Send Link</button>
        </div>
      </form>
     
    </div>
     <div className="return-element">
        <Link to="/login" element={<LoginForm/>} className="return">Return To Login Page</Link>
     </div></>
  );
}
export default ForgetPassword;
