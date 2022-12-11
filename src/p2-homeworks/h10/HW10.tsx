import React, {useEffect} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
//import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {DispatchType, StateType} from "./bll/store";

function HW10() {
    // useSelector, useDispatch
    const useAppSelector: TypedUseSelectorHook<StateType> = useSelector
    const {isLoading} = useAppSelector(state => state.loading)
    //hooks
    const useAppDispatch = ()=> useDispatch<DispatchType>()
    const dispatch = useAppDispatch()
    //
    const setLoading = () => {
         dispatch(loadingAC(true))
        // setTimeout
        setTimeout(()=>{
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
