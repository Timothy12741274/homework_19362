
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from './store';


export const useAppDispatch = () => useDispatch<DispatchType>();
export const useAppSelector: TypedUseSelectorHook<StateType> = useSelector;