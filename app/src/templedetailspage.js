import React from "react";
import { useLocation } from "react-router-dom";
import TempleDisplay from "./TempleDisplay";


const TempleDetailsPage = () => {
  // Get the templeDetails from the location state
  const { state: { templeDetails } } = useLocation();

  return (
    <div>
        <TempleDisplay templeDetails={templeDetails} />
    </div>
  );
};

export default TempleDetailsPage;