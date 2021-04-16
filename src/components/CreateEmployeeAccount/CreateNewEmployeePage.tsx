import React from 'react'
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import {CreateNewEmployeeForm} from "./CreateNewEmployeeForm";
import {DeleteEditEmployee} from "./EditDelete/DeleteEditEmployee";
import {AccountNavbar} from "./AccountNavbar/AccountNavbar";

export const CreateNewEmployeePage = () => {
    const {url} = useRouteMatch()
    return <div>
        <div>
            <AccountNavbar/>
        </div>
        <div>
            <Switch>
                <Redirect exact from={url} to={`${url}/signup`}/>
                <Route path={`${url}/signup`} render={() =><CreateNewEmployeeForm/>}/>
                <Route path={`${url}/edit_delete`} render={() =><DeleteEditEmployee/>}/>
            </Switch>
        </div>
    </div>
}