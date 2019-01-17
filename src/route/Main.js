import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { routerList } from './config';
const RouteComponent = route => <Route key={route.path} exact={route.exact || false} path={route.path} component={route.component} />
const renderRouteComponent = routes => routes.map(route => {
    return route.children ? route.children.map(route => RouteComponent(route)) : RouteComponent(route)
})

const Main = () => {
    return (
            <Switch>
                {renderRouteComponent(routerList)}
                <Redirect from='/' to='/home' />
            </Switch>
    )
};

export default Main;

