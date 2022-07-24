import './App.css';
import Header from './templates/Header'
import Login from "./templates/Login";
import Main from "./templates/Main";
import React, {useState} from 'react'
import SubMain from './templates/SubMain';
// 부트스트랩
import Button from 'react-bootstrap/Button';

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
      <Button 
        onClick={userLoggedIn}
        as="a" 
        variant="dark"
      >
        로그인
      </Button>

      {/* react-router */}
      {loggedin && <Main />}
      {loggedin && <SubMain />}

    </div>
  );
}

export default App;
