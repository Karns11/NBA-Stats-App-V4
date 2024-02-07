// import { apiSlice } from "./apiSlice";
// const USERS_URL = "/api/users";

// export const userApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/auth`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     logout: builder.mutation({
//       query: () => ({
//         url: `${USERS_URL}/logout`,
//         method: "POST",
//       }),
//     }),
//     register: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}`,
//         method: "POST",
//         body: data,
//       }),
//     }),
//     updateUser: builder.mutation({
//       query: (data) => ({
//         url: `${USERS_URL}/profile`,
//         method: "PUT",
//         body: data,
//       }),
//     }),
//   }),
// });

// export const {
//   useLoginMutation,
//   useLogoutMutation,
//   useRegisterMutation,
//   useUpdateUserMutation,
// } = userApiSlice;

import { apiSlice } from "./apiSlice";

const BASE_URL = "";
const USERS_URL = "/api/users";

//mutation means it is NOT going to make a get request
//this is for the server stuff
export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: `${USERS_URL}/profile`,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useAddWorkoutMutation,
  useGetWorkoutsQuery,
  useDeleteWorkoutMutation,
  useGetExercisesQuery,
  useGetWorkoutByIdQuery,
  useAddExerciseMutation,
  useDeleteExerciseMutation,
  useGetUserProfileQuery,
  useGetUsersQuery,
  useAddFriendMutation,
  useGetFriendByIdQuery,
  useDeleteFriendMutation,
  useAddToNewsletterMutation,
  useGetApiKeyQuery,
  useUpdateUserMutation,
} = usersApiSlice;
