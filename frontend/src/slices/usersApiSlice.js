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
    SearchPlayer: builder.mutation({
      query: (basketball_player) => ({
        url: `${USERS_URL}/searchplayer`,
        method: "POST", // Changed method to POST
        body: basketball_player, // Sending player information in the body
      }),
    }),
    PlayerStats: builder.mutation({
      query: (playerData) => ({
        url: `${USERS_URL}/playerstats`,
        method: "POST", // Changed method to POST
        body: playerData, // Sending player information in the body
      }),
    }),
    playerSeasonAvg: builder.mutation({
      query: (playerAvgData) => ({
        url: `${USERS_URL}/playerseasonavg`,
        method: "POST", // Changed method to POST
        body: playerAvgData, // Sending player information in the body
      }),
    }),
    allTeams: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/teams`,
        method: "POST",
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
  useSearchPlayerMutation,
  usePlayerStatsMutation,
  usePlayerSeasonAvgMutation,
  useAllTeamsMutation,
} = usersApiSlice;
