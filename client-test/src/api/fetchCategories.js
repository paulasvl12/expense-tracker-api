// api.js
import React, { useState } from "react";



async function fetchCategories(token) {

    try {
      const response = await fetch("http://localhost:8080/api/categories", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
      });
  
      if (response.status === 200) {
        let data = await response.json();
        return data;
      } else {
        // Handle other status codes or errors here
        return null; // You can choose to return an empty array or handle the error differently.
      }
    } catch (err) {
      console.error(err);
      return null; // Handle the error and return null or handle it differently.
    }
  }
  
  export { fetchCategories};
  