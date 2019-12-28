import React from 'react';
import { Route } from 'react-router-dom';
import Event from './containers/Event'
// import EventList from './containers/EventList'
// import Login from './containers/Login'


const BaseRouter = () => (

    <div>
        <Route exact path="/" component={Event}/>
        {/*<Route exact path="/event_list/" component={EventList}/>*/}
        {/*<Route exact path="/login/" component={Login}/>*/}
    </div>

);

export default BaseRouter
