import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./features/blogs/blogsApi"; // Blog API slice
import { careerApi } from "./features/career/CareerApi"; // Career API slice
import { authApi } from "./features/auth/authApi"; // Auth API slice
import authReducer from "./features/auth/authSlice"; // Auth reducer for handling authentication state
import { enquiryApi } from "./features/enquiry/EnquiryApi";

export const store = configureStore({
  reducer: {
    // Adding the API reducers to the store for blog, career, and authentication features
    [careerApi.reducerPath]: careerApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer, 
    [enquiryApi.reducerPath]: enquiryApi.reducer,

    // Auth reducer for managing authentication state like user login, token, etc.
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Concatenating API middleware to default middleware
    getDefaultMiddleware().concat(
      blogApi.middleware, // Middleware for blogApi
      authApi.middleware,  // Middleware for authApi
      careerApi.middleware, // Middleware for careerApi
      enquiryApi.middleware
    ),
});
