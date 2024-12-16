import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const enquiryApi = createApi({
  reducerPath: 'enquiryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }), // Update the base URL if necessary
  tagTypes: ['Enquiries'], // Tag to manage enquiry data
  endpoints: (builder) => ({
    // Fetch all enquiries
    fetchEnquiries: builder.query({
      query: () => '/enquiries', // Endpoint to fetch all enquiries
      providesTags: ['Enquiries'],
    }),

    // Fetch a single enquiry by ID
    getEnquiry: builder.query({
      query: (id) => `/enquiries/${id}`, // Endpoint to fetch a single enquiry by ID
      providesTags: (result, error, id) => [{ type: 'Enquiries', id }],
    }),

    // Post a new enquiry
    postEnquiry: builder.mutation({
      query: (newEnquiry) => ({
        url: '/enquiry',
        method: 'POST',
        body: newEnquiry, // Sending the enquiry data (name, email, message)
      }),
      invalidatesTags: ['Enquiries'], // Invalidate the list to update the cache
    }),

    // Delete an enquiry by ID
    deleteEnquiry: builder.mutation({
      query: (id) => ({
        url: `/enquiries/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Enquiries'], // Invalidate the list to update the cache
    }),
  }),
});

export const {
  useFetchEnquiriesQuery, // Hook to fetch all enquiries
  useGetEnquiryQuery, // Hook to fetch a single enquiry by ID
  usePostEnquiryMutation, // Hook to post a new enquiry
  useDeleteEnquiryMutation, // Hook to delete an enquiry by ID
} = enquiryApi;
