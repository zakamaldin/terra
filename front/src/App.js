import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css';
import './App.css';
import BaseRouter from './routes'
import CustomLayout from './containers/Layout'

class App extends Component{
    render() {
        return (
            <div>
              <Router>
                <CustomLayout {...this.props}>
                  <BaseRouter/>
                </CustomLayout>
              </Router>
            </div>
        );
    }
}

export default App;
