"use client";
import React, { useEffect, useState } from "react";

const Supplies = () => {
  const [data, setData] = useState<Array<string>>([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/supplier/dashboard/12", {
      method: "GET",
    }).then((result) => {
      console.log(`This is the return value from the database`, result);
    });
  }, []);
  return <div>Supplies</div>;
};

export default Supplies;
