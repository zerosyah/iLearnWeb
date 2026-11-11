import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/themeSlice";
import markReducer from "./marks/markSlice";
import studentReducer from "./student/studentSlice"

const rootReducer = combineReducers({ 
    user: userReducer,
    theme: themeReducer,
    mark: markReducer,
    student: studentReducer
  });
  
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export const persistor = persistStore(store);
  export type RootState = ReturnType<typeof store.getState>;
  