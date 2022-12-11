import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import {Junior} from "./pages/juniors/Junior";
import PreJunior from "./pages/PreJunior";
import {JuniorPlus} from "./pages/juniors/JuniorPlus";
import Error404 from "../h5-rrd-v6/pages/Error404";
//import { Switch } from 'react-router-dom';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/juniorplus'
    // add paths
}

function ROutes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIORPLUS} element={<JuniorPlus/>}/>
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default ROutes
