import { Link } from "react-router-dom";
import './home.css';

function Home() {
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

        <div style={{ float: "right", marginTop: "20px" }}>
          <Link to="/login">
            <button className="b" style={{ borderColor: "#FF6500", borderRadius: '5px', height: "50px", width: "130px", marginRight: '20px', backgroundColor: "#FF6500",color:"white" }}><h3>SIGN IN</h3></button>
          </Link>
          <Link to="/signup">
            <button className="c" style={{ borderColor: "#FF6500", borderRadius: '5px', height: "50px", width: "120px", marginRight: '20px', backgroundColor: "#FF6500",color:"white" }}> <h3>SIGN UP</h3></button>
          </Link>
        </div>

      </div>

      <div style={{ backgroundColor: "#C40C0C", height: "70px" }}>
        <br></br>
      {/* <Link to="/"><span style={{color:"white",marginLeft:"30px",fontSize:"20px"}}>Home</span></Link> */}
      <Link to="/photo"><span style={{color:"white",marginLeft:"30px",fontSize:"20px"}}>Photo Gallery</span></Link>
      </div> 
      <br></br>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginLeft: '55px' }}>
          <img src="./kanipakam.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>&emsp;Kanipakam</span>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <img src="./Srikalahasthi.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>&emsp;Srikalahasthi</span>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <img src="./Srisailam.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>&emsp;Srisailam</span>
        </div>
        
        <div style={{ marginLeft: '20px' }}>
          <img src="./Mahanadi.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>&emsp; Mahanadi</span>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <img src="./Kasapuram.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>&emsp; Kasapuram</span>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <img src="./Vijajayawada.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>&emsp; Vijayawada</span>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <img src="./DwaralkaTirumala.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>Dwaraka Tirumala</span>
        </div>
       
        <div style={{ marginLeft: '20px' }}>
          <img src="./Anavaram.eb338f61.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>&emsp; Annavaram</span>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <img src="./Simhachalam.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>&emsp;Simhachalam</span>
        </div>
        
        <div style={{ marginLeft: '20px' }}><br></br>
        <img src="./SriKanakaMahalakshmi.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}>&emsp; Sri Kanaka<br></br>&emsp;Mahalakshmi</span>
        </div>

        <div style={{ marginLeft: '20px' }}>
          <img src="./Penugachiprolu.jpg" height="120px" width="120px" alt=" "></img><br></br>
          <span style={{ textAlign: 'center' }}> Penuganchiprolu</span>
        </div>
      </div>
      <hr style={{width:"1550px"}}></hr>
      <br></br>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src="./sd-banner.jpg" height="500px" width="1500px" alt=" "></img>
    </div>
  );
}

export default Home;
