import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContentItem } from '../../types'

interface ContentState {
  items: ContentItem[]
  isLoading: boolean
  error: string | null
  currentDraft: Partial<ContentItem> | null
}

const initialState: ContentState = {
  items: [],
  isLoading: false,
  error: null,
  currentDraft: null,
}

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<ContentItem[]>) => {
      state.items = action.payload
    },
    addContent: (state, action: PayloadAction<ContentItem>) => {
      state.items.push(action.payload)
    },
    updateContent: (state, action: PayloadAction<ContentItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)
      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    deleteContent: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    setCurrentDraft: (state, action: PayloadAction<Partial<ContentItem> | null>) => {
      state.currentDraft = action.payload
    },
    updateCurrentDraft: (state, action: PayloadAction<Partial<ContentItem>>) => {
      state.currentDraft = { ...state.currentDraft, ...action.payload }
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
  setContent,
  addContent,
  updateContent,
  deleteContent,
  setCurrentDraft,
  updateCurrentDraft,
  setLoading,
  setError,
} = contentSlice.actions
