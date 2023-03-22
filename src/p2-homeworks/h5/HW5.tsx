import React from 'react'
import Header from './Header'
import ROutes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}


            <Header/>

            <ROutes/>

        </div>
    )
}

export default HW5
