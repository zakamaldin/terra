import React from 'react';
import Event from './containers/Event'
import ProtectedRoute from './components/ProtectedRoute'


const BaseRouter = () => (

    <div>
        <ProtectedRoute exact path="/" component={Event}/>
    </div>

);

export default BaseRouter
