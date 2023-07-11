
import { combineReducers } from 'redux';
import storage from "redux-persist/lib/storage";
import createFilter from "redux-persist-transform-filter";
import { persistReducer, persistStore } from "redux-persist";

// import all reducers here
import userReducer from './userReducer';


const saveUserOnlyFilter = createFilter("user", ["user"]);

const persistConfig = {
    key: "user",
    storage,
    whitelist: ["user"],
    transforms: [saveUserOnlyFilter],
};

// combine reducers
const rootReducer = combineReducers({
    // if we had other reducers, they would go here
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);



// make the combined reducers available for import
export default persistedReducer;
