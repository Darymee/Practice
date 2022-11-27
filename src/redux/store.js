import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

import { ignoreActions, persistedReducer } from './persistConfig';

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: ignoreActions,
    }),
});

const persistor = persistStore(store);

export { persistor, store };
