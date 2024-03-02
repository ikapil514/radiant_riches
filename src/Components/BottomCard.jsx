import React from "react";
import { Button } from "@mui/material";

function BottomCard() {
  return (
    <div className="three-card text-gray-500">
      <div className="imageDiv"></div>
      <div className="flex w-full">
        <h2 className="bg-blue-300 p-1 text-blue-600 rounded-md text-sm">
          20%
        </h2>
        <h2 className="bg-blue-300 p-1 text-blue-600 rounded-md text-sm ml-2">
          Limited Time
        </h2>
      </div>
      <h2 className="font-medium">Webbuilder 1</h2>
      <p>Computer Modern classic with wix support</p>
      <div className="flex w-full text-center">
        <h2 className="font-medium">$39.96</h2>
        <h2 className="text-sm m-1">$49.96</h2>
        <h2 className="text-red-500">{"(20% Off)"}</h2>
      </div>
      <Button variant="contained" fullWidth>
        View Deal
      </Button>
    </div>
  );
}

export default BottomCard;
