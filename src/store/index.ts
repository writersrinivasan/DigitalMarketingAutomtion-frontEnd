import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { contentSlice } from './slices/contentSlice'
import { campaignSlice } from './slices/campaignSlice'
import { socialAccountsSlice } from './slices/socialAccountsSlice'
import { analyticsSlice } from './slices/analyticsSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    content: contentSlice.reducer,
    campaigns: campaignSlice.reducer,
    socialAccounts: socialAccountsSlice.reducer,
    analytics: analyticsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
