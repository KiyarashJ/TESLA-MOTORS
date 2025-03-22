import React from 'react';
import {Routes} from "./Routes"
import {useRoutes} from "react-router-dom";
export default function RouterController() {

    const routes = useRoutes(Routes)

    return (
        <>
            {routes}
        </>
    );
}
/*in this Component we have rendered the Routes thaT we have written in {{Routes.js}}*/
