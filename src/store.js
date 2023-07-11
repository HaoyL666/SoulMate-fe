import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import persistedReducer from './reducers/index';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true,
})

export const persistor = persistStore(store);

