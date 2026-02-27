"use client";
import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

function SetID() {
  useEffect(() => {
    let userId = localStorage.getItem("aora_id");

    if (!userId) localStorage.setItem("aora_id", uuid());
  }, []);

  return null;
}

export default SetID;
