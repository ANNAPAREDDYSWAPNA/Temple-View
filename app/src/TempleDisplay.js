import React from "react";
import { Link } from "react-router-dom";
import './TempleDisplay.css';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const TempleDisplay = ({ templeDetails }) => {
  
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    // Redirect to login if user is not logged in
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);
  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("isLoggedIn");
    // Display a message in the console
    console.log("Session cleared");
    navigate("/");
  };

  return (
    <div>
      <div style={{ position: "absolute", top: 0, right: 0 }}>
        <button onClick={handleLogout} style={{
                borderRadius: "10px",
                backgroundColor: "#DD5746",
                borderColor: "#FF6500",
                height: "50px",
                width: "150px",
                marginTop: "40px",
                marginRight:"20px",
                color: "white",
                fontSize:"20px",
              }}>Logout</button>
      </div>
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
      <h2 style={{ color: '#A91D3A', textShadow: "2px 5px 4px rgba(0, 0, 0, 0.5)", fontSize: "50px", marginLeft: "20px" }}>Temple Details</h2>
      {templeDetails && templeDetails.length > 0 ? (
        <ul>
          {templeDetails.map((temple, index) => (
            <li key={index}>
              <div style={{ display: "flex" ,height:"20px"}}>
              <h2 className="zoom-on-hover" style={{ color: "#7469B6", marginRight:"20px" }}>{temple.name}</h2>
              </div>
              <div style={{ display: "flex" }}>
              <h2 className="zoom-on-hover" style={{ color: "#7ABA78" }}><p>Location: {temple.location}</p></h2>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ flex: 1, marginRight: "20px" }} className="zoom-on-hover"> {/* Adjust width and add margin */}
                  {temple.image && (
                    <img src={require(`../../backend/uploads/${temple.image}`)} alt={temple.name} style={{ height:"250px",width:"400px" }} />
                  )}
                </div>
                <div style={{ flex: 3, textAlign: "justify", marginRight:"5px",marginLeft:"40px" }}> {/* Adjust width */}
                  <div style={{ display: "flex" }}><h2 className="zoom-on-hover" style={{ color: "#006769", display: "flex"  }}>Description: </h2></div>
                  <h2 style={{ color: "#FF0080" }} className="zoom-on-hover">{temple.description}</h2>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No temple details available.</p>
      )}
    </div>
  );
};

export default TempleDisplay;



