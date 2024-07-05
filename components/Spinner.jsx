"use client";
import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
// Spinner
const override = {
  display: "block",
  margin: "100px auto",
};
const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
export default Spinner;
