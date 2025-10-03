import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SocialAccount } from '../../types'

interface SocialAccountsState {
  accounts: SocialAccount[]
  isLoading: boolean
  error: string | null
}

const initialState: SocialAccountsState = {
  accounts: [],
  isLoading: false,
  error: null,
}

export const socialAccountsSlice = createSlice({
  name: 'socialAccounts',
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<SocialAccount[]>) => {
      state.accounts = action.payload
    },
    addAccount: (state, action: PayloadAction<SocialAccount>) => {
      state.accounts.push(action.payload)
    },
    updateAccount: (state, action: PayloadAction<SocialAccount>) => {
      const index = state.accounts.findIndex(account => account.id === action.payload.id)
      if (index !== -1) {
        state.accounts[index] = action.payload
      }
    },
    removeAccount: (state, action: PayloadAction<string>) => {
      state.accounts = state.accounts.filter(account => account.id !== action.payload)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const {
  setAccounts,
  addAccount,
  updateAccount,
  removeAccount,
  setLoading,
  setError,
} = socialAccountsSlice.actions
