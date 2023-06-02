import newsSlice from "./feature/news/newsSlice";
import singlePostSlice from "./feature/news/singlePostSlice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sourceSlice from "./feature/news/sourceSlice";

const rootReducer = combineReducers({
  news: newsSlice,
  singlePost: singlePostSlice,
  source: sourceSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["singlePost"],
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
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
