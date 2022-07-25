import './App.css';
import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './templates/Header'
import Login from "./templates/Login";
import Register from "./templates/Register";
import Main from "./templates/Main";
import Page from './templates/Page';
import NotFound from './templates/NotFound';
// 부트스트랩
import Container from 'react-bootstrap/Container';

function App() {
  // const [loggedin, setLoggedIn] = React.useState(false);
  // const userLoggedIn=()=>{
  //   setLoggedIn(true);
  // }

  return (
    <div className="App">
      <Header />

      <Container className='mt-3'>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Main} exact />
          <Route path="/page/:pageId" component={Page} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
