import { createSlice } from "@reduxjs/toolkit";

// Function to check if a token exists in cookies
const isTokenPresentInCookies = () => {
  const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('token='));
  return !!token;
};

// Function to load user data from local storage
const loadUserFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('user');
    if (serializedState === null) {
      return { user: null }; // Default state if no user is found
    }
    return { user: JSON.parse(serializedState) };
  } catch (error) {
    console.error("Error loading user from local storage:", error);
    return { user: null }; // Default state on error
  }
};

// Set the initial state
const initialState = loadUserFromLocalStorage();

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState, // Fix the property name
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem('user', JSON.stringify(state.user)); // Persist user in local storage
    },
    logout: (state) => {
      state.user = null; // Reset the user state
      localStorage.removeItem('user'); // Remove user from local storage
    },
  },
});

// Export actions and reducer
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
