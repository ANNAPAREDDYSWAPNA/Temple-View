import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useHistory from react-router-dom
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const history = useNavigate(); // Get history object

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
      const response = await axios.post("http://localhost:5000/login", {
        formData: {
          username: formData.username,
          password: formData.password,
        },
      });

      if (response.data === "succ") {
        console.log("Login successful");
        // Set isLoggedIn to true in session storage
        sessionStorage.setItem("isLoggedIn", true);
        // Display a message in the console
        console.log("Session created");
        // Redirect to search page upon successful login
        history("/search");
      } else if (response.data === "inv") {
        console.log("Invalid credentials");
      } else if (response.data === "not") {
        console.log("User not found");
      } else {
        console.error("Internal server error");
      }
    } catch (error) {
      console.error("Error:", error);
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
    <h2 style={{marginTop:"50px",marginLeft:"70px",color: "red"}}>Sign In</h2>
    <h2 style={{marginLeft:"70px"}}>Login to your account</h2><br></br>
    <div style={{marginLeft:"70px",display: 'flex', alignItems: 'center'}}>
          <br></br>
          <form onSubmit={handleSubmit}>
            <label>
              <b style={{marginRight:"30px"}}>Username:</b>
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
              <b style={{marginRight:"35px"}}>Password:</b>
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
            <b><button style={{borderRadius:"10px",backgroundColor:"#DD5746",borderColor:"white",height:"50px",width:"150px",color:"white"}} type="submit"><h3>Login</h3></button></b>
          </form>
    </div>
  </div>
  <div style={{float:"right",height:"640px"}}>
    <img alt="" style={{width:"850px",marginTop:"50px",height:"540px",marginRight:"100px"}} src="login-slider.png"></img>
  </div>
  </div>
  </div>
  );
}

export default Login;
