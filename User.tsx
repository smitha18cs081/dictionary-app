import React from 'react'
import  "./pages/User.css";
import { useTransition } from 'react';
import { useState,useEffect } from 'react';
type useState = any;
type useEffect=any;

interface IPerson {
    firstName: string;
    lastName?: string;
 }
 var persons:{ [id: string] : IPerson; } = {};
persons["p101"] = { firstName: "lakshmi", lastName: "k" };
persons["p102"] = { firstName: "preeti" };
console.log(persons);

const User = () => {
  return (
    <div>
      <p>Hello Everyone, this is the User Page. Here User can search the individual words.</p>  
      <input type="text" value="Enter a keyword"/>
      <button type="button">Search</button>
      <input type="text" value="User has Successfully submitted the word"/>
      <input type="number"/>
      console.log("The words are invalid");
       
    </div>
  )
}

export default User
