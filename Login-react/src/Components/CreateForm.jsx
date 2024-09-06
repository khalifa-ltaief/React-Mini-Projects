import { useState } from "react";
import { Link } from "react-router-dom";
import './CreateForm.css'
const CreateForm = () => {
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorMessage, seterrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      seterrorMessage("Passwords do not match");
    } else {
      seterrorMessage("");

      console.log("Form submitted");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="input-box">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Last Name" required />
        </div>
        <div className="input-box">
          <input type="email" placeholder="E-mail" required />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p className="error-title">{errorMessage}</p>}
        <div className='submit'>
        <button type='submit'>Create Account</button>

        </div>
        <div className='login'>
            <p>You have an account? <Link to="/login">Login From Here</Link></p>
        </div>
      </form>
    </div>
  );
};
export default CreateForm;
