import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { logoutAction } from './account'
import session from '@/services/session'
import { fetcher } from '@/lib/fetcher'

const initialState = { count: 0 }
export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', async (_, thunkAPI) => {
  const { dispatch } = thunkAPI
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const response = await fetcher('get_wishlist', { token: session.get('token') })
  if (response?.response?.status == 401 || response?.response?.status == 403) {
    dispatch(logoutAction())
    // navigate("/login");
  }
  return response.data
})
export const wishlistReducer = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    wishlistResetAction: (state) => {
      state.count = 0
      state.wishlist_smoothie = []
      state.wishlist_smoothie_box = []
      state.wishlist_ingredient = []
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchWishlist.fulfilled, (state, { payload }) => {
      // Add user to the state array
      let tempCount = state.count
      tempCount =
        payload?.wishlist_smoothie.length +
        payload?.wishlist_smoothie_box.length +
        payload?.wishlist_ingredient.length
      state.count = tempCount
      state.wishlist_smoothie = payload.wishlist_smoothie
      state.wishlist_smoothie_box = payload.wishlist_smoothie_box
      state.wishlist_ingredient = payload.wishlist_ingredient
    })
  },
})

// Action creators are generated for each case reducer function
export const { wishlistResetAction } = wishlistReducer.actions

export default wishlistReducer.reducer
