import React from "react";
import { Switch, Route } from 'react-router-dom';
import { routerList } from './config';

const RouteComponent = route => <Route key={route.path} exact={route.exact || false} path={route.path} component={route.component} />

const renderRouteComponent = routes => routes.map(route => {
    return route.children ? route.children.map(route => RouteComponent(route)) : RouteComponent(route)
})

const Main = () => {
    return (
        <main>
            <Switch>
                {renderRouteComponent(routerList)}
            </Switch>
        </main>
    )
};

export default Main;

