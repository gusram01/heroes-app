import React from 'react';
import {History} from 'history';
import { RouteComponentProps } from "react-router-dom";

interface ChildComponentProps extends RouteComponentProps<any> {
  /* Parent component's props*/
  history: History;
}

export default function LoginScreen ({history}: ChildComponentProps){
  const handleLogin=()=>{
    history.replace('/');
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>
      <button
      className="btn btn-primary"
      onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
