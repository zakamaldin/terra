import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import BaseRouter from './routes'
import CustomLayout from './containers/Layout'
import Login from "./containers/Login";

class App extends Component{
    render() {
        return (
            <div>
              <Router>
                  <Switch>
                    <Route exact path="/login/" component={Login}/>
                    <CustomLayout {...this.props}>
                      <BaseRouter/>
                    </CustomLayout>
                  </Switch>
              </Router>
            </div>
        );
    }
}

export default App;
