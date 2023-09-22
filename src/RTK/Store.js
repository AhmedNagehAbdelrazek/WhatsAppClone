import { configureStore } from "@reduxjs/toolkit";
import {useDispatch as useAppDispatch , useSelector as useAppSelector} from "react-redux"
import {persistReducer} from "redux-persist"
import persistStore from "redux-persist/es/persistStore";
import { rootPersistConfig, rootReducers } from "./RootReducer";

const Store = configureStore({
    reducer:persistReducer(rootPersistConfig,rootReducers),
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
        immutableCheck:false,
    }),
});

const persistor = persistStore(Store);

const {dispatch} = Store;
const {getState} = Store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch()

export {Store,persistor,dispatch,useSelector,useDispatch,getState};