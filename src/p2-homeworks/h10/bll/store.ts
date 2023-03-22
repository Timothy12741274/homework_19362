import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

 const rootReducer = combineReducers({
     loading: loadingReducer,
     theme: themeReducer
 })

 const store = createStore(rootReducer)

 export default store

export type StateType = ReturnType<typeof rootReducer>
export type StoreType = typeof store
export type DispatchType = StoreType['dispatch']


 // @ts-ignore
 window.store = store // for dev
