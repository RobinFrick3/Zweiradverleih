import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material"

export default function Shop({loggedInUser, wheel}:any) {
  
    const abmelden = () => {
        localStorage.removeItem("loggedInUser");
    }

  return (
      <>
        <Button onClick={abmelden}>Abmelden</Button>
      </>
    );
}