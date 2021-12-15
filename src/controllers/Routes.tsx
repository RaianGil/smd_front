import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '../store';

import DTBot from '../views/DT/Bot'
import DTConfig from '../views/DT/Config'
import MainView from '../views/MainView'
import STBot from '../views/ST/Bot'
import STConfig from '../views/ST/Config'

const Routes = () =>(
    <div className="">
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <Switch>
                    <Route path="/DT/Config" component={DTConfig} />
                    <Route path="/DT/Bot" component={DTBot} />
                    <Route path="/ST/Config" component={STConfig} />
                    <Route path="/ST/Bot" component={STBot} />
                    <Route path="/" component={MainView} />
                </Switch>
            </PersistGate>
        </BrowserRouter>
    </div>
)

export default Routes