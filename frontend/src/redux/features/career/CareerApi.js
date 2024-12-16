// redux/features/career/CareerApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const careerApi = createApi({
  reducerPath: 'careerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }), // Ensure the API URL is correct
  tagTypes: ['Jobs', 'Applications'], // Tag to handle job and application data
  endpoints: (builder) => ({
    // Fetch jobs with optional search and category filters
    fetchJobs: builder.query({
      query: ({ search = '', category = '' } = {}) => {
        const queryParams = new URLSearchParams();

        if (search) queryParams.append('search', search);
        if (category) queryParams.append('category', category);

        return `/career?${queryParams.toString()}`; // Return the full URL with query parameters
      },
      providesTags: ['Jobs'],
    }),

    // Fetch job applications
    getJobApplications: builder.query({
      query: () => '/career/applications',  // Ensure this is the correct endpoint for your job applications
      providesTags: ['Applications'],
    }),


    fetchJobs: builder.query({
      query: ({ search = '', category = '' } = {}) => {
         const queryParams = new URLSearchParams();
   
         if (search) {
            console.log('Search query being sent:', search); // Add this
            queryParams.append('search', search);
         }
         if (category) queryParams.append('category', category);
   
         return `/career?${queryParams.toString()}`;
      },
      providesTags: ['Jobs'],
   }),
   

    // Post a new job
    postJob: builder.mutation({
      query: (newJob) => ({
        url: '/career/career-add',
        method: 'POST',
        body: newJob,
      }),
      invalidatesTags: ['Jobs'],
    }),

    // Update an existing job
    updateJob: builder.mutation({
      query: ({ id, ...updatedJob }) => ({
        url: `/career/${id}`,
        method: 'PUT',
        body: updatedJob,
      }),
      invalidatesTags: ['Jobs'],
    }),

    // Delete a job
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/career/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Jobs'],
    }),

    // Apply for a job (new mutation)
    applyJob: builder.mutation({
      query: (applicationData) => ({
        url: '/submit', // Using the correct route defined in your backend
        method: 'POST',
        body: applicationData, // Sending the application data (name, email, phone, resume, message)
      }),
    }),

    // Delete a job application
    deleteApplication: builder.mutation({
      query: (applicationId) => ({
          url: `/career/applications/${applicationId}`,
          method: 'DELETE',
      }),
      invalidatesTags: ['Applications'],
  }),

    
  }),
});

export const { 
  useFetchJobsQuery, 
  usePostJobMutation, 
  useUpdateJobMutation, 
  useDeleteJobMutation, 
  useApplyJobMutation,
  useGetJobApplicationsQuery, // Export the hook for fetching job applications
  useDeleteApplicationMutation, // Export the hook for deleting applications
} = careerApi;
