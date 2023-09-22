import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"
import appSlice from "./Slices/appSlice";
import authSlice from "./Slices/authSlice";
import userSlice from "./Slices/userSlice";
//slices

const rootPersistConfig ={
    key:'root',
    storage,
    keyPrefix:'redux-',
}

const rootReducers = combineReducers({
    app: appSlice,
    auth:authSlice,
    user:userSlice,
});


export {rootPersistConfig,rootReducers}