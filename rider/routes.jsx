import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './components/App'
import BusinessAdminView from './components/BusinessAdminView/BusinessAdminView/BusinessAdminView'


var Routes = <Route path="/rider" component={App}>
                <IndexRoute component={BusinessAdminView} />
                {/* <Route path="select-shop" component={SelectShopView} /> */}
             </Route>

module.exports = Routes;
