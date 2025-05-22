import AuthContext from "./AuthContext";
import React from "react";



export default function MyComponent(){
  const authContext = React.useContext(AuthContext);
  return(
    <>
    <h1>안녕하세요{authContext.username}</h1>
    </>
  );
}