import React, {ChangeEvent} from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../h10/bll/hooks";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {

    const theme = useAppSelector(state => state.theme.theme); // useSelector
    const dispatch = useAppDispatch()

    // useDispatch, onChangeCallback

    const cgeThemeHnd = (e: ChangeEvent<HTMLSelectElement>) => {
        const theme = e.currentTarget.value
        dispatch(changeThemeC(theme))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={themes} onChange={cgeThemeHnd}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
