import './App.css';
import Header from './templates/Header'
import Login from "./templates/Login";
import Main from "./templates/Main";
import React, {useState} from 'react'
import SubMain from './templates/SubMain';

function App() {
  const [loggedin, setLoggedIn] = React.useState(false);
  const [flag, setFlag] = React.useState("main");

  const userLoggedIn=()=>{
    setLoggedIn(true);
  }

  return (
    <div className="App">

      <Header />

      {!loggedin && <Login />}
      <button onClick={userLoggedIn}>로그인</button>

      {/* react-router */}
      {loggedin && <Main />}
      {loggedin && <SubMain />}

    </div>
  );
}

export default App;
