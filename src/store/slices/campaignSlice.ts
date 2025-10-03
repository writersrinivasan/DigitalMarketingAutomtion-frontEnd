import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Campaign } from '../../types'

interface CampaignState {
  campaigns: Campaign[]
  activeCampaign: Campaign | null
  isLoading: boolean
  error: string | null
}

const initialState: CampaignState = {
  campaigns: [],
  activeCampaign: null,
  isLoading: false,
  error: null,
}

export const campaignSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    setCampaigns: (state, action: PayloadAction<Campaign[]>) => {
      state.campaigns = action.payload
    },
    addCampaign: (state, action: PayloadAction<Campaign>) => {
      state.campaigns.push(action.payload)
    },
    updateCampaign: (state, action: PayloadAction<Campaign>) => {
      const index = state.campaigns.findIndex(campaign => campaign.id === action.payload.id)
      if (index !== -1) {
        state.campaigns[index] = action.payload
      }
    },
    deleteCampaign: (state, action: PayloadAction<string>) => {
      state.campaigns = state.campaigns.filter(campaign => campaign.id !== action.payload)
    },
    setActiveCampaign: (state, action: PayloadAction<Campaign | null>) => {
      state.activeCampaign = action.payload
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
  setCampaigns,
  addCampaign,
  updateCampaign,
  deleteCampaign,
  setActiveCampaign,
  setLoading,
  setError,
} = campaignSlice.actions
