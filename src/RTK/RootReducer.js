import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"
import appSlice from "./Slices/appSlice";
//slices

const rootPersistConfig ={
    key:'root',
    storage,
    keyPrefix:'redux-',
}

const rootReducers = combineReducers({
    app: appSlice,
});


export {rootPersistConfig,rootReducers}