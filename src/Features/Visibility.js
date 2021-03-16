import { createSlice } from '@reduxjs/toolkit';

export const Visibility = createSlice({
  name: 'Visibility',
  initialState: {
    profile: false,
    chats: false,
    likes: false,
    swipe: true
  },
  reducer: (state, action) => {
    switch(action.type){
      case "PROFILE_TAB":
        state.profile = action.payload;
        break;
      case "CHATS_TAB":
        state.chats = action.payload;
        break;
      case "LIKES_TABS":
        state.likes = action.payload;
        break;
      case "SWIPE_TAB":
        state.swipe = action.payload;
        break;
      default:
        break;
    } 
  }
});

export const { toogle, focusIndex, open, close} = Visibility.actions;
export const selectControllerSettings = state => state.visibility.ControllerSettings;
export const selectNavIndexId = state => state.visibility.NavIndexId;
export const selectFocused = state => state.visibility.focused;
export const selectNewControllerSettingsMenu = state => state.visibility.NewControllerSettingsMenu;

export default Visibility.reducer;
