import React from "react";
import { BarLoader } from "react-spinner-animated";
import "react-spinner-animated/dist/index.css";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <BarLoader
        text={"Loading..."}
        bgColor={"wheat"}
        center={false}
        width={"150px"}
        height={"150px"}
      />
    </div>
  );
};
