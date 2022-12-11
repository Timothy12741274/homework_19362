import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

 const reducers = combineReducers({
     loading: loadingReducer,

 })

 const store = createStore(reducers)

 export default store

// export type AppStoreType = ReturnType<typeof reducers>
export type StateType = ReturnType<typeof reducers>
export type StoreType = typeof store
export type DispatchType = StoreType['dispatch']


 // @ts-ignore
 window.store = store // for dev
