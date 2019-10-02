import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import Easy from './components/Easy';
import Medium from './components/Medium';
import Hard from './components/Hard';

export default (
    <Provider store={store}>
    <Switch>

        <Route path="/Easy" component={Easy}/>
        <Route path="/Medium" component={Medium}/>
        <Route path="/Hard" component={Hard}/>

    </Switch>
    </Provider>
)