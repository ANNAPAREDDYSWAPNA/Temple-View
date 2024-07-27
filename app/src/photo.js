// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Photo(){

    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem("isLoggedIn");
        // Redirect to login if user is not logged in
        if (!isLoggedIn) {
          navigate("/");
        }
     },[navigate]);
  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("isLoggedIn");
    // Display a message in the console
    console.log("Session cleared");
    navigate("/");
};

    return(
        <div style={{ backgroundColor: "white" }}>
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
            {/* <br></br>
                <Link to="/"><span style={{color:"white",marginLeft:"30px",fontSize:"20px"}}>Home</span></Link> */}
            </div>
            <div>
                <h1 style={{textAlign:"center"}}>Photo Gallery</h1>
                <img style={{marginLeft:"70px"}} src="pic1.jpg" alt="" height="240px" width="350px"></img>
                <img style={{marginLeft:"50px"}} src="pic2.jpg" alt="" height="240px" width="350px"></img>
                <img style={{marginLeft:"50px"}} src="pic3.jpg" alt="" height="240px" width="350px"></img>
                <img style={{marginLeft:"50px"}} src="pic4.jpg" alt="" height="240px" width="350px"></img>
                <br></br>
                <br></br>
                <img style={{marginLeft:"70px"}} src="pic5.jpg" alt="" height="240px" width="350px"></img>
                <img style={{marginLeft:"50px"}} src="pic6.jpg" alt="" height="240px" width="350px"></img>
                <img style={{marginLeft:"50px"}} src="pic7.jpg" alt="" height="240px" width="350px"></img>
                <img style={{marginLeft:"50px"}} src="pic8.jpg" alt="" height="240px" width="350px"></img>
            </div>
        </div>
    )
}

export default Photo;