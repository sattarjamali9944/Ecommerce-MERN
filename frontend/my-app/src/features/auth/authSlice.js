import { createSlice } from '@reduxjs/toolkit';

// Function to safely parse JSON
const safeParseJSON = (item) => {
  try {
    return JSON.parse(item);
  } catch (e) {
    console.error('Error parsing JSON:', e);
    return null;
  }
};

// Initial state
const initialState = {
  user: safeParseJSON(sessionStorage.getItem('userData')) || null,
  baseUrl: 'http://localhost:8080/',
  currencySign:'$',
};

// Create slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      sessionStorage.setItem('userData', JSON.stringify(action.payload));
      console.log(JSON.stringify(state.user));
    },
    register(state, action){
      state.user = action.payload;
      sessionStorage.setItem('userData', JSON.stringify(action.payload));
      console.log('User registered:', JSON.stringify(state.user));
    },
    setBaseUrl(state, action) {
      state.baseUrl = action.payload;
    },
    currencySign(state, action) {
      state.currencySign = action.payload;
    },
    logout(state) {
      
      state.user = null;
      sessionStorage.removeItem('userData');
    },
  },
});

// Export actions and reducer
export const { login, logout,setBaseUrl,currencySign, register } = authSlice.actions;
export default authSlice.reducer;
