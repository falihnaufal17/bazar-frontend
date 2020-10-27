import React, { lazy } from 'react'
import routes from '../routes'
import { Route, Switch } from 'react-router-dom'
import ItemRoute from './ItemRoute';
const Navbar = lazy(()=>import('../components/Navbar'));

const Container = p => {
    return(
        <div id="app">
            <Switch>
                {
                    routes.map((item, key)=>{
                        let Page = item.component;

                        return(
                            <Route
                                key={key}
                                exact
                                path={item.path}
                                render={p => {
                                    return (
                                        <>
                                            <Navbar {...p}/>
                                            <ItemRoute component={<Page {...p} />} />
                                        </>
                                    )
                                }}
                            />
                        )
                    })
                }
            </Switch>
        </div>
    )
}

export default Container;