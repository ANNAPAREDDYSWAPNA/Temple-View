// import React, { useEffect, useState } from "react";
// import { Country, State, City } from "country-state-city";
// import { useNavigate } from "react-router-dom";
// import TempleDisplay from "./TempleDisplay";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Search = () => {
//   const [countryData, setCountryData] = useState([]);
//   const [stateData, setStateData] = useState([]);
//   const [cityData, setCityData] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [templeDetails, setTempleDetails] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const countries = Country.getAllCountries();
//     setCountryData(countries);
//     setSelectedCountry(countries[0]?.isoCode);
//   }, []);

//   useEffect(() => {
//     if (selectedCountry) {
//       const states = State.getStatesOfCountry(selectedCountry);
//       setStateData(states);
//       setSelectedState(states[0]?.isoCode);
//     }
//   }, [selectedCountry]);

//   useEffect(() => {
//     if (selectedCountry && selectedState) {
//       const cities = City.getCitiesOfState(selectedCountry, selectedState);
//       setCityData(cities);
//       setSelectedCity(cities[0]?.id);
//     }
//   }, [selectedCountry, selectedState]);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     try {
//       const response = await axios.post("http://localhost:5000/verify", {
//         country: selectedCountry,
//         state: selectedState,
//         city: selectedCity
//       });
      
//       if (response.data.success) {
//         setTempleDetails(response.data.templeDetails); // Set temple details in state
//         // No need to navigate here, TempleDisplay will be rendered in the same route
//         navigate("/templedetailspage", { state: { templeDetails: response.data.templeDetails } });
        
//       } else {
//         throw new Error("Failed to fetch temple details");
//       }
//     } catch (error) {
//       console.error("Error fetching temple details:", error);
//       // Handle error: display error message to the user
//       // You can set an error message state and display it in the UI
//     }
//   };
  
  

//   return (
//     <section>
//       <div style={{ backgroundColor: "#FF8A08", height: "120px" }}>
//         <br />
//         <div style={{ float: "left" }}>
//           &emsp;&emsp;
//           <img
//             src="./temples.jpeg"
//             height="85px"
//             width="90px"
//             alt=" "
//             style={{ borderRadius: "10px" }}
//           />
//         </div>
//         <div style={{ float: "left",marginTop: "15px",marginLeft:"10px",fontSize:"40px",color:"#6C0345" }}>
//            <span>Dharmo Rakshati Rakshitah</span>
//         </div>
//       </div>
//       <div style={{ backgroundColor: "#C40C0C", height: "70px" }}>
//       <br></br>
//       {/* <Link to="/"><span style={{color:"white",marginLeft:"30px",fontSize:"20px"}}>Home</span></Link> */}
//       <Link to="/photo"><span style={{color:"white",marginLeft:"30px",fontSize:"20px"}}>Photo Gallery</span></Link>
//       </div>

//       <div style={{ float: "left", height: "640px", width: "1700px" }}>
//         <div style={{ float: "left", width: "700px", height: "640px" }}>
//           <div style={{ marginTop: "80px", marginLeft: "50px" }}>
//             <h2>Search Temples</h2>
//             <br></br>
//             <div>
//               <b>
//                 <label style={{ marginRight: "30px" }} htmlFor="country">
//                   <span style={{fontSize:"25px"}}>Country:</span>
//                 </label>
//               </b>
//               <select style={{height:"30px",width:"400px"}}
//                 id="country"
//                 value={selectedCountry}
//                 onChange={(e) => setSelectedCountry(e.target.value)}
//               >
//                 {countryData.map((country) => (
//                   <option key={country.isoCode} value={country.isoCode}>
//                     {country.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <br />
//             <div>
//               <b>
//                 <label style={{ marginRight: "65px" }} htmlFor="state">
//                 <span style={{fontSize:"25px"}}>State:</span>
//                 </label>
//               </b>
//               <select style={{height:"30px",width:"400px"}}
//                 id="state"
//                 value={selectedState}
//                 onChange={(e) => setSelectedState(e.target.value)}
//               >
//                 {stateData.map((state) => (
//                   <option key={state.isoCode} value={state.isoCode}>
//                     {state.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <br />
//             <div>
//               <b>
//                 <label style={{ marginRight: "80px" }} htmlFor="city">
//                 <span style={{fontSize:"25px"}}>City:</span>
//                 </label>
//               </b>
//               <select style={{height:"30px",width:"400px"}}
//                 id="city"
//                 value={selectedCity}
//                 onChange={(e) => setSelectedCity(e.target.value)}
//               >
//                 {cityData.map((city) => (
//                   <option key={city.id} value={city.id}>
//                     {city.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               style={{
//                 borderRadius: "10px",
//                 backgroundColor: "#DD5746",
//                 borderColor: "white",
//                 height: "50px",
//                 width: "150px",
//                 marginTop: "40px",
//                 color: "white",
//               }}
//               onClick={handleSubmit}
//             >
//               <b>
//                 <h3>Submit</h3>
//               </b>
//             </button>
//           </div>
//         </div>

//         <div style={{ float: "right", height: "640px" }}>
//           <img
//             alt=""
//             style={{
//               width: "850px",
//               marginTop: "50px",
//               height: "540px",
//               marginRight: "100px",
//             }}
//             src="login-slider.png"
//           ></img>
//         </div>
        
//       </div>
//     </section>
//   );
// };

// export default Search;



import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Search = () => {
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [templeDetails, setTempleDetails] = useState([]);
  const [error, setError] = useState(null); // State to manage error message
  const navigate = useNavigate();

  useEffect(() => {
    const countries = Country.getAllCountries();
    setCountryData(countries);
    setSelectedCountry(countries[0]?.isoCode);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      const states = State.getStatesOfCountry(selectedCountry);
      setStateData(states);
      setSelectedState(states[0]?.isoCode);
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      const cities = City.getCitiesOfState(selectedCountry, selectedState);
      setCityData(cities);
      setSelectedCity(cities[0]?.id);
    }
  }, [selectedCountry, selectedState]);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    // Redirect to login if user is not logged in
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/verify", {
        country: selectedCountry,
        state: selectedState,
        city: selectedCity
      });
      
      if (response.data.success) {
        setTempleDetails(response.data.templeDetails);
        navigate("/templedetailspage", { state: { templeDetails: response.data.templeDetails } });
      } else {
        // If temple details are not found, set error message
        setError("Temple details not found");
      }
    } catch (error) {
      console.error("Error fetching temple details:", error);
      setError("Temple details not found!Please try again");
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("isLoggedIn");
    navigate("/");
    console.log("Session cleared");
  };

  return (
    <section>
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
        <br />
        <div style={{ float: "left" }}>
          &emsp;&emsp;
          <img
            src="./temples.jpeg"
            height="85px"
            width="90px"
            alt=" "
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div style={{ float: "left", marginTop: "15px", marginLeft: "10px", fontSize: "40px", color: "#6C0345" }}>
          <span>Dharmo Rakshati Rakshitah</span>
        </div>
      </div>
      <div style={{ backgroundColor: "#C40C0C", height: "70px" }}>
        <br></br>
        <Link to="/photo"><span style={{ color: "white", marginLeft: "30px", fontSize: "20px" }}>Photo Gallery</span></Link>
      </div>

      <div style={{ float: "left", height: "640px", width: "1700px" }}>
        <div style={{ float: "left", width: "700px", height: "640px" }}>
          <div style={{ marginTop: "80px", marginLeft: "50px" }}>
            <h2>Search Temples</h2>
            <br></br>
            <div>
              <b>
                <label style={{ marginRight: "30px" }} htmlFor="country">
                  <span style={{ fontSize: "25px" }}>Country:</span>
                </label>
              </b>
              <select style={{ height: "30px", width: "400px" }}
                id="country"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                {countryData.map((country) => (
                  <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div>
              <b>
                <label style={{ marginRight: "65px" }} htmlFor="state">
                  <span style={{ fontSize: "25px" }}>State:</span>
                </label>
              </b>
              <select style={{ height: "30px", width: "400px" }}
                id="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {stateData.map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div>
              <b>
                <label style={{ marginRight: "80px" }} htmlFor="city">
                  <span style={{ fontSize: "25px" }}>City:</span>
                </label>
              </b>
              <select style={{ height: "30px", width: "400px" }}
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {cityData.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              style={{
                borderRadius: "10px",
                backgroundColor: "#DD5746",
                borderColor: "white",
                height: "50px",
                width: "150px",
                marginTop: "40px",
                color: "white",
              }}
              onClick={handleSubmit}
            >
              <b>
                <h3>Submit</h3>
              </b>
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
          </div>
        </div>

        <div style={{ float: "right", height: "640px" }}>
          <img
            alt=""
            style={{
              width: "850px",
              marginTop: "50px",
              height: "540px",
              marginRight: "100px",
            }}
            src="login-slider.png"
          ></img>
        </div>
       
      </div>
    </section>
  );
};

export default Search;
