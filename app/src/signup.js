import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import { Link } from "react-router-dom";

function Signup() {
  const history = useNavigate(); // Initialize useHistory hook
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState(""); // State for success/error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      setMessage("Signed up successfully!"); // Set success message
      console.log(response.data); // Assuming server returns a response
      // Redirect to the login page
      history("/login");
    } catch (error) {
      setMessage("Error signing up. Please try again."); // Set error message
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: "#FF8A08", height: "120px" }}>
        <br></br>
        <div style={{ float: "left" }}>
          &emsp;&emsp;<img src="./temples.jpeg" height="85px" width="90px" alt=" " style={{ borderRadius: '10px' }} />
        </div>
        <div style={{ float: "left",marginTop: "15px",marginLeft:"10px",fontSize:"40px",color:"#6C0345" }}>
           <span>Dharmo Rakshati Rakshitah</span>
        </div>
      </div>
    <div style={{ backgroundColor: "#C40C0C", height: "70px" }}>
    <br></br>
      {/* <Link to="/"><span style={{color:"white",marginLeft:"30px",fontSize:"20px"}}>Home</span></Link> */}
      <Link to="/photo"><span style={{color:"white",marginLeft:"30px",fontSize:"20px"}}>Photo Gallery</span></Link>
    </div>
    
    <div style={{float:"left",height:"640px",width:"1700px"}}>
    <div style={{float:"left",width:"700px",height:"640px"}}>
    <h2 style={{marginTop:"50px",marginLeft:"70px",color: "red"}}>Sign Up</h2>
    <h2 style={{marginLeft:"70px"}}>Create an account</h2><br></br>
    <div style={{marginLeft:"70px",display: 'flex', alignItems: 'center'}}>
        <form onSubmit={handleSubmit}>
          <label>
            <b style={{marginRight:"90px"}}>Username:</b>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={{ height:"40px",width: "300px" }}
            />
          </label>
          <br />
          <br />
          <label>
            <b style={{marginRight:"125px"}}>Email:</b>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ height:"40px",width: "300px" }}
            />
          </label>
          <br />
          <br />
          <label>
            <b style={{marginRight:"95px"}}>Password:</b>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ height:"40px",width: "300px" }}
            />
          </label>
          <br />
          <br />
          <label>
            <b style={{marginRight:"30px"}}>Confirm Password:</b>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ height:"40px",width: "300px" }}
            />
          </label>
          <br />
          <button style={{borderRadius:"10px",backgroundColor:"#DD5746",borderColor:"white",height:"50px",width:"150px",marginTop:"40px",color:"white"}} type="submit"><b><h3>Sign Up</h3></b></button>
        </form>
        {/* Display message based on success/error */}
        {message && (
          <div className={message.includes("successfully") ? "success" : "error"}>
            {message}
          </div>
        )}
      </div>
      </div>
      <div style={{float:"right",height:"300px"}}>
        <img style={{width:"850px",height:"540px",marginTop:"50px",marginRight:"100px"}} src="login-slider.png"></img>
      </div>
    </div>
    </div>
  );
}

export default Signup;
