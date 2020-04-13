import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from '../../node_modules/react-router-dom'

// layout import
import SinglePageLayout from '../layouts/singlepagelayout';




//container import
import HomeContainer from "../components/home/home-container";
import PackageDetailContainer from '../components/packages/package-detail-container';
import PackageListContainer from '../components/packages/package-list-container';
import AboutContainer from '../components/about/about-container';




const Root = (props) => (

        <BrowserRouter basename={process.env.PUBLIC_URL}>
            {/*<BrowserRouter basename='/'>*/}
            <div>
                {/*<Pnk_Error_Ctrl/>*/}
                <Switch>

                    <Route exact path="/" render={(props) => (<SinglePageLayout children={HomeContainer} {...props} />)}/>
                    <Route exact path="/home" render={(props) => (<SinglePageLayout children={HomeContainer} {...props} />)}/>
                    <Route exact path="/about" render={(props) => (<SinglePageLayout children={AboutContainer} {...props} />)}/>
                    <Route exact path="/packages/context=:id" render={(props) => (<SinglePageLayout children={PackageDetailContainer} {...props} />)}/>
                    <Route exact path="/packages/type=:id" render={(props) => (<SinglePageLayout children={PackageListContainer} {...props} />)}/>
                    

                </Switch>
            </div>
        </BrowserRouter>

)
Root.propTypes = {
    store: PropTypes.object.isRequired,
}
export default Root